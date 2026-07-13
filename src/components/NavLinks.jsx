'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

export default function NavLinks({href, children}) {
    const path = usePathname()
    const isActive = href === path
  return (
   <Link href={href} className={`${isActive? 'active' : ''} btn rounded-2xl button`}>{children}</Link>
  )
}
