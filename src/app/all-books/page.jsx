'use client'
import BookCard from '@/components/BookCard';
import { getBooks } from '@/lib/data'
import React, { useEffect, useState } from 'react'

export default function AllBooks() {
  const [books, setBooks] = useState([])
  // const books = await getBooks()
  const [name, setName] = useState('')
  // console.log(books);
  const [category, setCategory] = useState('')

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks()
      setBooks(data)
    }
    fetchBooks()
  }, [])

  const search = (e) => {
    setName(e.target.value)

  }
  const filterBooks = books.filter(book => {
    const matchName = book.title.toLowerCase().includes(name.toLowerCase())
    const matchCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true
    return matchCategory && matchName
  }
  )

  const handleCategory = (c) => {
    setCategory(c)
    document.getElementById('my-drawer-1').checked = false;
  }

  return (
    <div className=' mt-30 '>
      <div className="drawer ">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content ">
          {/* Page content here */}
          <label htmlFor="my-drawer-1" className="btn drawer-button bg-[#16130d]">Filter by Category</label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu min-h-fit mt-[20%] w-80  text-white bg-[#1C1B1F] rounded-2xl">
            {/* Sidebar content here */}
            <li className='border border-[#353232] mt-2 rounded-xl hover:bg-[#1C1C1C] ' onClick={() => handleCategory('')}><a>All</a></li>
            <li className='border border-[#353232] mt-2 rounded-xl hover:bg-[#1C1C1C] ' onClick={() => handleCategory('story')}><a>Story</a></li>
            <li className='border border-[#353232] mt-2 rounded-xl hover:bg-[#1C1C1C] ' onClick={() => handleCategory('tech')}><a>Tech</a></li>
            <li className='border border-[#353232] mt-2 rounded-xl hover:bg-[#1C1C1C] ' onClick={() => handleCategory('science')}><a>Science</a></li>
          </ul>
        </div>
      </div>



      <div className='text-center'>
        <h1 className='text-6xl'>All Books</h1>
        <p className='max-w-[800px] mx-auto my-3'>"Every book you read is a life you didn't have to live to learn from. Open one, and you open a door to a thousand worlds, a thousand minds, a thousand versions of who you could become."</p>
        <div className="join">
          <div>
            <label className="input validator join-item bg-[#1C1B1F]">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  {/* <rect width="20" height="16" x="2" y="4" rx="2"></rect> */}
                  {/* <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> */}
                </g>
              </svg>
              <input type="text" onChange={search} placeholder="Search by title" required />
            </label>
            {/* <div className="validator-hint hidden">Enter valid email address</div> */}
          </div>
          {/* <button className="btn button btn-neutral join-item">Search</button> */}
        </div>
      </div>


      {/* booke */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5 z-50'>
        {
          filterBooks.map(book => <BookCard book={book} key={book.id}></BookCard>)
        }
      </div>


    </div>
  )
}
