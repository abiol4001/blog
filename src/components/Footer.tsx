import { Facebook, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pb-3 pt-10 border border-t-zinc-100'>
      <div className='px-4 md:px-10 lg:px-20 flex flex-col md:flex-row'>

      
      <div className='flex-1 flex flex-col space-y-3'>
        <div className='relative flex gap-2 items-center'>
          <Image src="/images/food.jpg" alt="" width={40} height={40} className='object-cover rounded-full'
          style={{width: "40px", height: "40px"}} />
          <p className='font-bold text-lg'>myBlog</p>
        </div>
        <p className='text-muted-foreground text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur adipisci cumque quibusdam, sit odio cum doloremque, sequi quos voluptatem eligendi facere inventore porro distinctio praesentium officiis itaque ducimus doloribus eaque. Est quasi praesentium impedit quaerat.</p>
        <div className='flex gap-2 w-full'>
          <a href='#' 
              className='rounded-full bg-blue-700 flex justify-center flex-shrink-0 items-center p-1 w-8 h-8'>
            <Facebook size={18} strokeWidth={0} className='fill-white text-white' />
          </a>
          <a href='#' 
          className='rounded-full bg-black flex flex-shrink-0 justify-center items-center w-8 h-8 p-0.5 relative'>
            <Image src="/images/x-logo.avif" alt='x-logo' fill className='rounded-full p-1' />
          </a>

        </div>
      </div>
      <div className='flex-1'>
        
      </div>
      </div>
    </div>
  )
}

export default Footer