import { getBooks, getFeatures } from '@/lib/data';
import React from 'react'
import BookCard from './BookCard';

export default async function FeaturedBooks() {
      const books = await getBooks()



  return (
    <div className='my-10 container mx-auto'>
        <div>
            <h1 className='text-center text-6xl'>Our Featured Books</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5'>
            {
                books.slice(0,4).map(book=> <BookCard book={book} key={book.id}></BookCard>)
            }
        </div>
    </div>
  )
}
