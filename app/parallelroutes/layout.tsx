import Link from 'next/link'
import React from 'react'

const Layout = ({ children, prviparalelni, drugiparalelni }) => {
  return (
    <div>
      <div className='flex'>
        {prviparalelni}
        {drugiparalelni}
      </div>
      <div className='wrapper'>
        <Link className='active' href='/parallelroutes/modal'>
          Otvori Paralelni Modal
        </Link>
      </div>
    </div>
  )
  // Ovde moze da bude fazon: return isLoggedIn ? dashboard : login
}

export default Layout
