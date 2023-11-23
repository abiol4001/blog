import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Post = (props: Props) => {
  return (
      <div className='flex flex-col lg:flex-row items-center gap-[50px] lg:mt-12'>
          <div className='relative flex-1 h-[350px]'>
              <Image src="/fashion.jpg" alt='' fill className='object-cover' />
          </div>
          <div className='flex-1 flex flex-col gap-y-4'>
            <p className='space-x-4'>
                <span className='text-muted-foreground text-sm'>11/11/2011</span>
                <span className='text-red-500 font-medium'>CULTURE</span>
            </p>
              <h1 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur
              </h1>
              <p className='text-sm md:text-base font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, possimus fugit ad quia pariatur cum. Suscipit reprehenderit deserunt aut eos dolor dolorum ut, odio nulla expedita esse?</p>
              <Link href={""} className='w-fit border-b-[1.5px] border-b-black dark:border-b-white'>Read more</Link>
          </div>
      </div>
  )
}

export default Post