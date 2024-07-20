import Image from "next/image"
import { Metadata } from "next"
import Sounds from "./ui/Sounds"

function Page() {
  return (
    <div className='wrapper flex'>
      {/* Iako je ovaj Sounds samo ovde, kad se narpavi listener na window obj iako menjas stranice, ono ostaje da radi jer nema prave promene stranice */}
      <Sounds />
      {/* <Image
        src='/eye.gif'
        fill
        alt='eye'
        className='fixed inset-0 z-0 opacity-30'
      /> */}
      <h1 className='mb-8 z-10'>Hello, Let's learn Next! :D</h1>
      <Image
        src='/p1.gif'
        width='540'
        height='960'
        alt='p1'
        priority
        className='rounded-3xl left-16 relative'
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  )
}

export default Page
