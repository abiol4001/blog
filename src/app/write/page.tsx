"use client"
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { ExternalLink, Image, PlusCircle, Video } from 'lucide-react'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css';

type Props = {}

const WritePage = (props: Props) => {
    const [value, setValue] = useState('');
  return (
      <div className='min-h-[calc(100vh-100px)] px-4 md:px-10 lg:px-20 relative'>
          <input type="text" placeholder='Title' className='outline-none border-none text-3xl md:text-[64px] bg-transparent p-10 w-full placeholder:text-[#b3b3b1]' />
        <div>
              <Popover>
                  <PopoverTrigger>
                      <Button size="icon">
                          <PlusCircle />
                      </Button>
                  </PopoverTrigger>
                  <PopoverContent className='flex gap-1 w-fit' side='right'>
                      <Button size="icon">
                          <ExternalLink />
                      </Button>
                      <Button size="icon">
                          <Image />
                      </Button>
                      <Button size="icon">
                          <Video />
                      </Button>
                  </PopoverContent>
              </Popover>
              <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder='Tell your story...' />
              <Button className='absolute top-[30px] right-0 bg-green-500'>Publish</Button>
        </div>
    </div>
  )
}

export default WritePage