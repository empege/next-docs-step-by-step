'use client'

import { useEffect } from "react"
// import clickSound from '@/public/click.wav'

const ClientHelpers = () => {

  // const clickAudio = new Audio(clickSound)

  const clickingSound = () => {
    console.log('clicked!')
    // clickAudio.play()
  }

  useEffect(() => {
    window.addEventListener('click', clickingSound)
  }, [])
  return (
    <div>
    </div>
  )
}

export default ClientHelpers