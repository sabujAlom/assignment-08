'use client'
import React from 'react'
import banner from '../../public/images/banner.jpg'
import Link from 'next/link'
// import { motion } from "motion/react"
import { motion } from "framer-motion"

export default function Banner() {
  return (
     <motion.div
     initial={{opacity:0, scale:0.5}}
     animate={{opacity:1, scale: 1}}
     transition={{duration:0.5}}
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${banner.src})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Your Next Read</h1>
            <p className="mb-5 text-md">
              Welcome to BookNest—your home for exploring stories, sharing knowledge, and borrowing books with ease.
            </p>
            <Link href='all-books'> <button className="btn button rounded-2xl">Browse Now</button></Link>
          </div>
        </div>
      </motion.div>
  )
}

// initial={{opacity:0, y:50}}
//      animate={{opacity:1, y: 0}}
//      transition={{duration:0.7, ease:'easeOut'}}