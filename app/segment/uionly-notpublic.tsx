// import { headers } from 'next/headers';
'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Random = (props: any) => {
  // Ovo sve ako hoces da nadjes isto ali server komponenta, bez use client, ali meni nesto ovaj url nije radio
  // const headersList = headers()
  // const host = headersList.get('host')
  // const url = headersList.get('next-url')
  // console.log(props, host, url)
  const segment = usePathname()
  const [domain, setDomain] = useState(null)
  console.log(domain)

  useEffect(() => {
    setDomain(window.location.href)
  }, [])
  

  return (
    <>
      <p>UI Samo - ali ne možeš da ideš na route: http://localhost:3000/segment/uionly-notpublic iako postoji u folder strukturi. Ovo je ustvari i super, ti mozes u samoj komponenti da drzis sav ui, a mozes i van gde su sve globalne koje se koriste u vise njih... to je tako i napravljeno da bude xD</p>
      <Link
        className='active'
        href={`http://${domain}/uionly-notpublic`}
      >
        {`http://${domain}/uionly-notpublic`}
      </Link>
    </>
  )
}

export default Random