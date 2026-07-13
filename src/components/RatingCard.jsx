'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

import { IoIosStar } from 'react-icons/io'

export default function RatingCard({ rating }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            // transition={{ duration: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card rating-card max-w-96 mx-auto w-full bg-base-100 card-xl shadow-sm border p-10 space-y-3">
            <div>
                <h1 className='text-3xl min-h-[80px]'>{rating.book_title}</h1>
                <p>By <span className='font-bold'>{rating.author}</span></p>
            </div>
            <hr className='opacity-20' />
            <div className='space-y-4'>
                <p className='text-xl font-bold'>Rating : {rating.rating}/5</p>
                <p className='min-h-25'>{rating.review}</p>
            </div>
            <hr className='opacity-20' />
            <div className='flex gap-3 '>
                <Image src={rating.rater.avatar_url} width={50} height={50} alt='image' className='rounded-full' />
                <div>
                    <p className='text-xl'>{rating.rater.name}</p>
                    <p>{rating.rater.username}</p>
                </div>
            </div>
        </motion.div>
    )
}
