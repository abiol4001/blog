import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    post: {
        title: string
        createdAt: string
        img: string
        desc: string
        cat: string
    }
}

const Post = ({ post }: Props) => {
    return (
        <div className='flex flex-col lg:flex-row items-center gap-x-[50px] gap-y-5 lg:mt-12 w-full lg:pr-14'>
            <div className='relative lg:flex-1 h-[200px] lg:h-[350px] w-full'>
                <Image
                    src={post.img || "/images/food.jpg"} alt=''
                    className='object-cover'
                    fill
                    loading='lazy'
                />
            </div>
            <div className='flex-1 flex flex-col gap-y-4'>
                <p className='space-x-4'>
                    <span className='text-muted-foreground text-sm'>{post.createdAt}</span>
                    <span className='text-red-500 font-medium'>{post.cat}</span>
                </p>
                <h1 className='text-xl font-semibold'>{post.title}</h1>
                <p className='text-sm md:text-base font-light'>{post.desc}</p>
                <Link href={""} className='w-fit border-b-[1.5px] border-b-black dark:border-b-white'>Read more</Link>
            </div>
        </div>
    )
}

export default Post