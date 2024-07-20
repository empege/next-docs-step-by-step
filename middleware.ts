import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// Ovo su oni zakucali jezik, a treba da dodje lepo iz headera zar ne?
// let headers = { 'accept-language': 'en-US,en;q=0.5' }
// let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'nl-NL', 'nl']
// let defaultLocale = 'en-US'

// const matchedLocale = match(languages, locales, defaultLocale) // -> 'en-US'
// console.log(matchedLocale, languages,)

function getLocale(request: NextRequest) {
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('Middleware starts', request.nextUrl.pathname.startsWith('/middleware-page'))

  const { pathname } = request.nextUrl
  console.log('pathname: ', pathname)
  const pathnameHasLocale = locales.some(
    (locale) => {
      console.log('locale: ', locale, pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
      return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    }
  )
  console.log(pathnameHasLocale)

  if (pathnameHasLocale) return

  getLocale(request)

  if (request.nextUrl.pathname.startsWith('/middleware-page')) {
    console.log('Middleware Page')
    // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
    // Getting cookies from the request using the `RequestCookies` API
    let cookie = request.cookies.get('nextjs')
    console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
    const allCookies = request.cookies.getAll()
    console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]

    request.cookies.has('nextjs') // => true
    request.cookies.delete('nextjs')
    request.cookies.has('nextjs') // => false


    // Clone the request headers and set a new header `x-hello-from-middleware1`
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-hello-from-middleware1', 'hello1')

    // Setting cookies on the response using the `ResponseCookies` API
    // Ovo ne radi iz nekog razloga - NECE DA VIDI I NAPRAVI OVAJ HEADER? da li zato sto je u request?
    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    })
    // Set a new response header `x-hello-from-middleware2`
    response.headers.set('x-hello-from-middleware2', 'hello2')
    response.cookies.set('vercel', 'fast')
    response.cookies.set({
      name: 'vercel',
      value: 'fast',
      path: '/',
    })
    cookie = response.cookies.get('vercel')
    console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
    // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

    return response
  }

  return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: '/about/:path*',
  matcher: ['/about/:path*', '/middleware-page', '/matched-redirect'],
  // Middleware se pokrece samo kad dodjes na neku od ovih stranica. Posto middleware-page ima u sebi svoj response, onda ostaje tu. Ostali nemaju/ne postoje, i onda ide u defaultnu response na / ili ti root stranicu ili ti home page (koji nije zapravo /home)
  // redirect se ovde desava pre render procesa (u middleware ili u next.config.js), a u komponentama kad koristis tokom? Moze i u klijent komponentama da se koristi, ali ne u eventListenerima
}