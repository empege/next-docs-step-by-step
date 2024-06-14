import Image from 'next/image'
import { Metadata } from 'next'

function Page() {
  return (
    <div className='wrapper flex'>
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
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}

export default Page
