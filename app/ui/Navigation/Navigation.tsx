import Button from "../Button/Button"
import { FaArrowAltCircleRight } from "react-icons/fa"
import Logo from "../Logo/Logo"

const Navigation = () => {
  return (
    <div className='flex justify-center px-20 py-4 z-10 relative'>
      {/* <Logo /> */}
      <ul className='list-none flex flex-wrap'>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/'>
            🏘️ HOME 🏘️
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/segment'>
            <FaArrowAltCircleRight className='ml-1' />
            &nbsp;SEGMENT&nbsp;
            <FaArrowAltCircleRight className='ml-1' />
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/template'>
            📰 TEMPLATE 📰
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/unutrasnji'>
            🆒 (ROUTE GROUP) 🆒
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href={`/dynamic/${1}`}>
            🏃‍♀️ [DYNAMIC] 🏃‍♀️
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/error'>
            ❌ ERROR ❌
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button
            className='flex items-center'
            href='/parallelroutes'
            target='_blanc'
          >
            🏋️‍♀️ PARALLEL 🏋️‍♀️
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/form'>
            ℹ️ FORM ℹ️
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/middleware-page'>
            🖕 MIDDLEWARE 🖕
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/matched-redirect'>
            🔙 REDIRECT 🔙
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/misc'>
            🍚 MISC 🉐
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/catchall/asd/123'>
            [ ...CATCHALL ]
          </Button>
        </li>
        <li className='flex items-center mr-4 whitespace-nowrap'>
          <Button className='flex items-center' href='/database'>
            🛰️ DATABASE 🛰️
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
