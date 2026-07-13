import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function FeatureCard({ feature }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card choose bg-base-100 max-w-96 min-h-[34vh] shadow-sm border mx-auto">
            <figure className="px-10 pt-10">
                <Image width={100}
                    height={100}
                    src={feature.icon}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{feature.title}</h2>
                <p>{feature.description}</p>

            </div>
        </motion.div>
    )
}
