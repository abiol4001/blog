import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

type Props = {}

const Featured = (props: Props) => {
  return (
    <div className='px-4 md:px-10 lg:px-20 mt-10 w-full'>
      <h1 className='text-5xl md:text-6xl lg:text-[76px] leading-snug'>
        <b>Hey, Barry here!</b> Crafting Captivating Copy That Connects
      </h1>
      <div className='flex flex-col lg:flex-row items-center gap-x-[50px] gap-y-6 lg:mt-12 w-full'>
        <div className='relative lg:flex-1 h-[500px] w-full'>
          <Image src="/images/world.jpg" alt='Hero-image' fill  className='object-contain' />
        </div>
        <div className='flex-1 flex flex-col gap-y-5'>
          <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi.
          </h1>
          <p className='text-base md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, possimus fugit ad quia pariatur cum. Suscipit reprehenderit deserunt aut eos dolor dolorum ut, odio quasi veniam facere aspernatur, distinctio natus, obcaecati unde nulla expedita esse?</p>
          <Button className='w-fit'>Read more</Button>
        </div>
      </div>
    </div>
  )
}

export default Featured