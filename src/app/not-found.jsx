import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
 <div className='fixed inset-0 z-[9999] bg-[#0f0d0b] flex flex-col items-center px-8 justify-center'>
  <h1 className='text-6xl my-6 '>Opppsss............</h1>
   <p className='text-4xl'>This page is not found</p>
  <Link href='/'> <button className='btn mt-4 button'>Home</button></Link>
 </div>
  )
}
