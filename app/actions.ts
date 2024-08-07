'use server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export const addCookie = async (formData: FormData) => {
  // Dodaj cookie code
  console.log('Add a cookie', formData.get('cookieName'))
  const cookieName = formData.get('cookieName') as string
  const cookieValue = formData.get('cookieValue') as string
  cookies().set(cookieName, cookieValue)

  // Zasto se ovde update odmah i bez revalidate patha, a ovde dole nece da skloni iz ui cak iako ga realno izbrise
}
export const deleteCookie = async (cookie: any) => {
  // Delete cookie code
  cookies().delete(cookie)

  revalidatePath('/form')
}