'use client'

import { useEffect } from "react"
import clickSound from '../../public/click.mp3'
import keyboardSound from '../../public/keyboard.wav'

const ClientHelpers = () => {

  useEffect(() => {
    const click = new Audio(clickSound)
    const keyboard = new Audio(keyboardSound)
    click.volume = 0.5

    const mouseClick = () => {
      click.currentTime = 0
      click.play()
    }

    const keyboardTap = () => {
      keyboard.currentTime = 0
      keyboard.play()
    }

    window.addEventListener('click', mouseClick)
    window.addEventListener('keydown', keyboardTap)
  }, [])
  return (
    <div>
      {/* <audio controls>
        <source src={clickSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  )
}

export default ClientHelpers