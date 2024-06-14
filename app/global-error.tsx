'use client'

import React from 'react'

const GlobalError = () => {
  return (
    <html>
      <body>GlobalError</body>
    </html>
  )
}

export default GlobalError

// Ovaj error je za rootLayout u slucaju da se desi greska.
// Inace error.tsx se ne pojavljuje na gresku u layoutu, samo u pageu.
// Da bi error radio na layoutu, mora da se stavi u parent od tog layouta, a kako nista nije parent rootLayouta onda imamo ovaj global-error.tsx specific fajl.
// Mora da ima html i body jer ako dodje do greske u rootLayout onda znaci da nema nikakav html i body jos koji tu vec postoji.
