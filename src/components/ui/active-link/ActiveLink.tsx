import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


interface props {
  href: string
  label: string
}
const ActiveLink = ({ href, label }: props) => {
  const usePathName = usePathname()

  return (
    <Link
      className={ `m-2 p-2 rounded-md transition-all hover:bg-hover ${ (usePathName === href ) && 'bg-hovernav'}`}
      href={href} >
      {label}  
      

    </Link>
  )
}

export default ActiveLink
