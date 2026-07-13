import React from 'react'
import RatingCard from './RatingCard'
import { review } from '@/lib/data'




export default async function Rating() {

 const ratings = await review()
    return (
        <div className='container mx-auto my-10'>
            <div className='text-center'>
                <h1 className='text-5xl'>Reviews</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5'>
                {ratings.map((rating, ind) => <RatingCard key={ind} rating={rating}></RatingCard>)}
            </div>
        </div>
    )
}
