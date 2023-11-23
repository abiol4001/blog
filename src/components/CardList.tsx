import React from 'react'
import Post from './Post'

type Props = {}

const CardList = (props: Props) => {
  return (
    <div className='px-4 md:px-10 lg:px-20 w-[75%]'>
          <h1 className='text-lg md:text-xl font-bold'>Recent Posts</h1>
          <div>
              {[...Array(3)].map((_, index) => (
                <Post key={index} />
              ))}
          </div>
    </div>
  )
}

export default CardList