import Image from 'next/image'
import logo from '@/public/logo.png'

const Logo = () => {
  return <Image width='80' height='80' src={logo} alt='logo' />
}

export default Logo
