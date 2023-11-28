"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

type Props = {
    postSlug: string
}
type CommentType = {
    _id: string
    title: string
    createdAt: string
    img: string
    desc: string
    user: {
        image: string
        name: string
    }
}

const fetcher = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    if(!response.ok) {
        const error = new Error(data.message)
        throw error;
    }
    return data
}

const Comments = ({ postSlug }: Props) => {

    const {status} = useSession()
    const [desc, setDesc] = useState("")

    const { data, mutate, isLoading } = useSWR(`/api/comments?postSlug=${postSlug}`, fetcher)

    const handleSubmit = async () => {
        if(!desc) {
            return
        }
        const response = await fetch(`/api/comments`, {
            method: "POST",
            body: JSON.stringify({desc, postSlug})
        })
        mutate()
        setDesc("")
    }
  return (
    <div className='w-full flex-shrink-0'>
        <h1 className='font-bold text-xl lg:text-2xl'>Comments</h1>
        {status === "authenticated" ? (
            <div className='flex flex-col gap-y-5 mt-5 w-full'>
                <textarea 
                className='p-4 bg-zinc-200 rounded-sm w-full lg:w-[90%] outline-none text-black' 
                onChange={(e)=> setDesc(e.target.value)}
                cols={10} 
                rows={5} 
                placeholder='Write a comment...'
                />
                <Button onClick={handleSubmit} className='w-fit'>Send</Button>
            </div>
        ) : (
            <div>
                <Link href="/login">Login to write a comment</Link>
            </div>
        )}
        <div className='flex flex-col gap-8 my-10'>
              {data?.map((comment: CommentType) => (
                  <div key={comment?._id} className='space-y-2'>
                      <div className='flex items-center gap-x-3'>
                          <div className='relative h-[50px] w-[50px] flex-shrink-0'>
                              <Image src={comment?.user?.image || "/images/fashion.jpg"} alt='' fill className='object-cover rounded-full' />
                          </div>
                          <div className='flex flex-col text-muted-foreground'>
                              <span className='text-sm md:text-base font-medium'>{comment?.user?.name}</span>
                              <span className='text-xs md:text-sm'>{comment?.createdAt?.substring(0,10)}</span>
                          </div>
                      </div>
                      <p className='text-sm md:text-base'>{comment.desc}</p>
                  </div>
              ))}
        </div>
    </div>
  )
}

export default Comments