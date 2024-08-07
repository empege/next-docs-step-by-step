"use client"
import { useFormStatus } from "react-dom"

const Button = ({ children, callback }) => {
  const { data } = useFormStatus()
  console.log("data: ", data)
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        console.log("data: ", data)
        callback()
      }}
      className='button active'
    >
      {children}
    </button>
  )
}

export default Button
