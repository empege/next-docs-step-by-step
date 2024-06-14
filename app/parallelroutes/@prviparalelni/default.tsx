import React from 'react'

const Default = () => {
  return (
    <div className='wrapper'>
      <h1>Default</h1>
      <p>
        Ako nema istu putanju kao @drugiparalelni (u ovom slucaju nema /modal)
        onda ce ici na default, ono sto je i inace njegov page.tsx. U suprotnom
        ce greska slomiti sajt!
      </p>
    </div>
  )
}

export default Default
