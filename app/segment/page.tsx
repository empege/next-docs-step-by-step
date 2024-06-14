import Link from 'next/link'
import LoadingSkeleton from '../ui/LoadingSkeleton'
import UIOnly from './uionly-notpublic'

const Page = () => {
  return (
    <div className='wrapper'>
      <h1>SEGMENT STRANICA</h1>
      <div>
        <p>Svaki PAGE je SEGMENT u urlu. Svi segmenti zajedno su PATH</p>
        <p>PAGE je uvek LEAF route subtreeja</p>
        <p>
          <Link className='button' href='#scrolltome' scroll={false}>
            {/* Ako stavis scroll={false} nece ni da ide na anchor, koja glupost, onda je to generalno, ne samo za back i forth kao sto su pricali */}
            {/* <Link className='active' href='/segment#scrolltome' scroll={false}> */}
            Scroll to bottom
          </Link>
        </p>
        <h1>Ostalo da vidim:</h1>
        <p>
          TEMPLATE.TSX - proveri kako to on rerenderuje sve i sav state na
          promenu u navigaciji, a obican layout bez template ne?
        </p>
        <p>
          DEFAULT.TSX - kako ovo uopste funkcionise, ne razumem iz docsa?{' '}
          <Link
            className='active'
            href='https://nextjs.org/docs/app/building-your-application/routing/parallel-routes'
          >
            https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
          </Link>
        </p>
        <p>
          PARALLEL ROUTES - Sa ovime ces praviti ono ako je logged in jedno
          prikazujes, ako nije drugo. Ali provericu jos kako radi tad, jer nisam
          jos skapirao do kraja.
        </p>
        <p>
          INTERCEPTING ROUTES - Ovo citaj kad budes pravio modale ili lightbox
          za galeriju ili sidebar!!!:
          <Link
            className='active'
            href='https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes'
          >
            https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
          </Link>
        </p>
        <UIOnly {...{prop1: 'prop 1', prop2: 'prop 2'}}/>
        <p
          className='flex justify-center items-center'
          style={{ height: '1000px' }}
        >
          Spacer
        </p>
        <p id='scrolltome'>I am on the bottom 👋</p>
      </div>
    </div>
  )
}

export default Page

// Svaki PAGE je SEGMENT u urlu. Svi segmenti zajedno su PATH
// PAGE je uvek LEAF route subtreeja
