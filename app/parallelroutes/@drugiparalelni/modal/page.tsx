import Link from 'next/link'
import React from 'react'

const Modal = () => {
  return (
    <div className='absolute bg-black/[.7] text-white p-10 rounded-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] flex items-center justify-center flex-col'>
      <h1 className='text-8xl'>Modal</h1>
      <Link className='active' href='/parallelroutes'>
        Vrati se na roditelja
      </Link>
    </div>
  )
}

export default Modal
