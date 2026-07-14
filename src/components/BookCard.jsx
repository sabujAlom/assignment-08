'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
export default function BookCard({ book }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="book-card max-w-96 w-full border border-white/8 rounded-2xl overflow-hidden shadow-sm  mx-auto my-10 p-5"
            style={{ background: '#1C1B1F' }}>
            <figure className='relative w-[160] h-56 mx-auto rounded aspect-square'>
                <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    sizes="(max-width:768px)100vh, (max-width:1200px)"
                    className='object-cover book-image' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.description}</p>
    
                <div className="card-actions justify-end mt-4">
                    <Link href={`/details/${book.id}`}> <button className="button btn bg-gray-500">View Details</button></Link>
                </div>
            </div>
        </motion.div>
    )
}
