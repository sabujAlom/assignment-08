// 'use client'
import DetailsCom from '@/components/DetailsCom';
import { authClient } from '@/lib/auth-client';
// import { authClient } from '@/lib/auth-client';
import { getBooks } from '@/lib/data';
// import Image from 'next/image';
import React from 'react'

export default async function Details({params}) {
  // const {data: session} = authClient.useSession()
  // console.log(session);
  
  const book = await getBooks()
  const { id } = await params
  const detail = book.find(b => b.id == id)
  console.log(detail);


  return (
    <DetailsCom detail={detail}></DetailsCom>
    // <div className="hero bg-base-300 min-h-screen pt-30 px-10 lg:px-0">
    //   <div className="hero-content bg-base-100 flex-col lg:flex-row gap-10 container mx-auto border w-fit p-20 rounded-2xl ">
    //     <Image
    //       width={200}
    //       height={400}
    //       alt={detail.title}
    //       src={detail.image_url}
    //       className="max-w-sm rounded-lg shadow-2xl"
    //     />
    //     <div>
    //       <h1 className="text-5xl font-bold">{detail.title}</h1>
    //       <p className="py-2 text-xl">{detail.description}</p>
    //       <p className='text-xl'>Writter name : {detail.author}</p>
    //       <p> Category : {detail.category}</p>
    //       <p>Available Quantity : {detail.available_quantity}</p>
    //       <button className="btn bg-gray-500 my-3">Borrow this Book</button>
    //     </div>
    //   </div>
    // </div>
  )
}
