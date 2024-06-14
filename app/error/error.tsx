'use client' // Error components must be Client Components
import Link from 'next/link'

import React, { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Evo ga errooooooor: ', error)
  }, [error])
  return (
    <div className='wrapper'>
      <h1>Error stranica</h1>
      <p>Error strane/komponente moraju uvek biti Client komponente.</p>
      <Link className='button' href='/'>
        Vrati se nazad na HOME
      </Link>
      <p>
        A mozes i da probas da resetujes stranu (re-render), ali nece raditi
        dragi moj :D
      </p>
      <button className='button' onClick={() => reset()}>
        Reset?
      </button>
    </div>
  )
}

export default Error
