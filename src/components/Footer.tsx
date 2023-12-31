import { Facebook, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcons from './SocialIcons'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pt-10 border-t border-t-zinc-100'>
      <div className='px-4 md:px-10 lg:px-20 flex flex-col md:flex-row'>
      <div className='flex-1 flex flex-col space-y-3'>
        <div className='relative flex gap-2 items-center'>
          <Image src="/images/food.jpg" alt="" width={40} height={40} className='object-cover rounded-full'
          style={{width: "40px", height: "40px"}} />
          <p className='font-bold text-lg'>Penster</p>
        </div>
        <p className='text-muted-foreground text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur adipisci cumque quibusdam, sit odio cum doloremque, sequi quos voluptatem eligendi facere inventore porro distinctio praesentium officiis itaque ducimus doloribus eaque. Est quasi praesentium impedit quaerat.</p>
        <SocialIcons />
      </div>
      <div className='flex-1'>
        
      </div>
      </div>
      <p className='w-full text-muted-foreground text-sm text-center border-t mt-3 p-2'>©2023 All rights reserved.</p>
    </div>
  )
}

export default Footer