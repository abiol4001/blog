import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Comments = (props: Props) => {

    const status = "authenticated"
  return (
    <div>
        <h1 className='font-bold text-xl lg:text-2xl'>Comments</h1>
        {status === "authenticated" ? (
            <div className='flex flex-col gap-y-5 mt-5'>
                <textarea 
                className='p-4 bg-zinc-200 rounded-sm lg:w-[90%] outline-none' 
                cols={10} 
                rows={5} 
                placeholder='Write a comment...'
                />
                <Button className='w-fit'>Send</Button>
            </div>
        ) : (
            <div>
                <Link href="/login">Login to write a comment</Link>
            </div>
        )}
        <div className='flex flex-col gap-8 my-10'>
              {[...Array(8)].map((_, index) => (
                  <div key={index} className='space-y-2'>
                      <div className='flex items-center gap-x-3'>
                          <div className='relative h-[50px] w-[50px] flex-shrink-0'>
                              <Image src={"/images/fashion.jpg"} alt='' fill className='object-cover rounded-full' />
                          </div>
                          <div className='flex flex-col text-muted-foreground'>
                              <span className='text-sm md:text-base font-medium'>John Doe</span>
                              <span className='text-xs md:text-sm'>11/11/2011</span>
                          </div>
                      </div>
                      <p className='text-sm md:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quia vel inventore eveniet consequatur ducimus id. Consequatur fugit doloribus recusandae.</p>
                  </div>
              ))}
        </div>
    </div>
  )
}

export default Comments