import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic' // defaults to force-static
export const revalidate = 60

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  console.log('get request api direktno :D')
  console.log(searchParams)

  // moze i ovako, ali Request tip mora biti NextRequest
  const searchParams2 = request.nextUrl.searchParams
  const query = searchParams2.get('query')
  console.log('query: ', query)
  // query is "hello" for /api/search?query=hello

  cookies().set({
    name: 'imence',
    value: 'Ivan',
    httpOnly: true,
    path: '/',
  })

  const cookieStore = cookies()
  const imence = cookieStore.get('imence')
  // ili ovako
  // const imence = request.cookies.get('imence')
  console.log('imence: ', imence)

  const headersList = headers()
  const referer = headersList.get('referer')
  console.log('referer: ', referer)
  // ali ovaj referer mi je prazan, ne znam sta mu dodje to, kako se postavlja / gleda ko je referisao xD

  console.log('params: ', params)

  return Response.json(
    {
      data: 'ovako bude samo json, sto je isto kul',
      searchParams: searchParams.get('query'),
      id,
    },
    {
      status: 200,
      headers: { referer },
    }
  )

  redirect('https://nextjs.org/') // ovo je dovoljno za redirekt
}
