import Link from "next/link"

const Slug = () => {
  return (
    <div className='wrapper'>
      <h1>Catch all!</h1>
      <div>
        [...slug] hvata sve u tom routu/segmentu - dakle: stranica/catchall i
        stranica/catchall/123 i stranica/catchall/asd/123
        <br />
        <br />
        <Link className='active py-1 px-2' href='/catchall'>
          Probaj samo Catchall...
        </Link>
      </div>
    </div>
  )
}

export default Slug
