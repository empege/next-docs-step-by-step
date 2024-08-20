"use client"
import { useEffect, useState } from "react"

const LayoutBtn = () => {
  const [isGrid, setIsGrid] = useState(false)
  useEffect(() => {
    Array.from(document.querySelectorAll<HTMLElement>(".post-article")).forEach(
      (current) => {
        current.style.width = `${isGrid ? "30%" : "100%"}`
      }
    )
  }, [isGrid])
  return (
    <button
      onClick={() => setIsGrid(!isGrid)}
      className='absolute top-0 right-0 button active hover:scale-110'
    >
      {!isGrid ? "Show as grid" : "Show as thumbnail"}
    </button>
  )
}

export default LayoutBtn
