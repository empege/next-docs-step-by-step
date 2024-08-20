'use server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { savePost, unsavePost } from '@/lib-tutorial-folder/posts'
import { redirect } from 'next/navigation'

function isInvalidText(text: any) {
  return !text || text.trim() === ''
}

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

export const addPost = async (formData: FormData) => {
  const post = {
    creator: formData.get('creatorName'),
    post_text: formData.get('postText'),
    image: formData.get('imageFile')
  }

  if (
    isInvalidText(post.creator) ||
    isInvalidText(post.post_text) ||
    !post.image ||
    !(post.image instanceof File) ||
    post.image.size === 0
  ) {
    console.log('wut')
    throw new Error('something not right with the form data')
    //import { useActionState } from 'react';
    // Ovo nisam probao ali mrzelo me sad
  }

  await savePost(post)
  // Ako stavis revalidatePath drugi param layout on revalidatuje svu decu pageve, ne samo current. A ako ne stavis, onda kao da si stavio samo 'page' i ondanosi se na current page, ne i na decu. Npr, ako hoces sve stranice koje postoje, mozes: revalidatePath('/', 'layout')
  revalidatePath('/database', 'layout')
  redirect('/database')
}


export const deletePost = async (postId: any) => {
  console.log('DATA: ', postId)

  await unsavePost(postId)
  revalidatePath('/database', 'layout')
  redirect('/database')
}