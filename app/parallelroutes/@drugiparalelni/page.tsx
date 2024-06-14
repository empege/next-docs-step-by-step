import React from 'react'

const DrugiParalelni = () => {
  return (
    <div className='wrapper'>
      <h1>Drugi Paralelni</h1>
      <p>
        Pa tako na primer mozes da prikazes jednu stranicu ako je korisnik
        ulogovan
      </p>
      <p>A drugu ako nije :)</p>
      <p>
        Good to know: The children prop is an implicit slot that does not need
        to be mapped to a folder. This means app/page.js is equivalent to
        app/@children/page.js.
      </p>
    </div>
  )
}

export default DrugiParalelni
