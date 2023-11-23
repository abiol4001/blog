import React from 'react'
import Post from './Post'
import Pagination from './Pagination'

type Props = {}

const CardList = (props: Props) => {
  return (
    <div className='lg:w-[75%] flex-shrink-0'>
          <h1 className='text-lg md:text-xl font-bold'>Recent Posts</h1>
          <div>
              {[...Array(3)].map((_, index) => (
                <Post key={index} />
              ))}
          </div>
          <Pagination />
    </div>
  )
}

export default CardList