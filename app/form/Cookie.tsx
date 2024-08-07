"use client"

import { deleteCookie } from "../actions"

const Cookie = ({ cookie }) => {
  return (
    <article className='flex justify-between items-center p-2 bg-[#0369a1] m-4 rounded-md min-w-[300px]'>
      <div>
        <h3 className=''>
          Name: <span className='text-xl uppercase'>{cookie.name}</span>
        </h3>
        <h3 className=''>
          Value: <span className='text-xl uppercase'>{cookie.value}</span>
        </h3>
      </div>
      <button
        onClick={async () => {
          await deleteCookie(cookie)
        }}
        className="before:content-['-'] before:top-[-4px] before:relative w-[30px] h-[30px] leading-[30px] flex justify-center items-center px-2 py-2 rounded-full bg-white text-[30px] hover:text-[#0369a1] hover:scale-110 text-[#dc143c]"
      ></button>
    </article>
  )
}

export default Cookie
