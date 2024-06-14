import React from 'react'

const PrviParalelni = () => {
  return (
    <div className='wrapper'>
      <h1>Prvi Paralelni</h1>
      <p>Bukvalno mogu da renderujem 10 pageova pomocu parallel route</p>
      <p>@prviparalelni pa u njemu page.tsx</p>
      <p>
        folder name se ne cita, vec samo page, i to sve moze da se pozove u
        layoutu, cak i dinamicki
      </p>
      <p>&nbsp;</p>
      <p>
        Default - Ako nema istu putanju kao @drugiparalelni (u ovom slucaju nema
        /modal) onda ce ici na default, ono sto je i inace njegov page.tsx. U
        suprotnom ce greska slomiti sajt!
      </p>
    </div>
  )
}

export default PrviParalelni
