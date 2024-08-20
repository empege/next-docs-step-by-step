"use client"

import { useRouter } from "next/navigation"

const Error = () => {
  const router = useRouter()
  const reloadPage = (e: any) => {
    console.log("RELOAD PAGE")
    e.preventDefault()
    router.push("/")
  }
  return (
    <div className='wrapper'>
      <h1>
        Failed to add post! Don't ya cheat ma friend, input those inputs
        properly!
      </h1>
      <h2>I suck so much that I can't refresh this page, so</h2>
      <button onClick={reloadPage} className='button active'>
        Go Home
      </button>
    </div>
  )
}

export default Error
