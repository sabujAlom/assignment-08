import React from 'react'
import Marquee from 'react-fast-marquee'


export default function News() {
    const marqueeItems = [
        {
            id: 1,
            type: "new_arrival",
            text: "The Silent Forest"
        }

    ]

  
    return (
        <Marquee className='flex gap-4 p-4  mt-22 mx-auto' style={{backgroundColor: '#0F0E11' , borderTop: '1px solid rgba(184,142,72,0.2)', borderBottom: '1px solid rgba(184,142,72,0.2)'}}>
            <span className='mx-9' style={{color: '#9CA3AF'}}> New arraival :{marqueeItems.map(news => <span className='text-xl font-bold' key={news.id}>{news.text} </span>)} </span> ||
            <span className='mx-9' style={{color: '#9CA3AF'}}> Special discount on <span className='text-xl font-bold'>Membership</span> </span>
        </Marquee>
    )
}
