'use client'
// Iako je klijent, on se ipak prerenderuje (pogledaj Network tab i videces sve u html-u vec unapred prerenderovano)

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Button = ({ href, children, className, target = '' }) => {
  const pathname = usePathname()
  // console.log(href, pathname)
  return (
    <Link
      className={`hover:active py-1 px-2 ${className} ${
        pathname === href ? 'active' : ''
      }`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  )
}

export default Button
