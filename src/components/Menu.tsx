import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PostsProps = {
    _id: string
    slug: string
    img: string
    title: string
    createdAt: string
    catSlug: string
    user: {
        name: string
    }
}

const getPosts = async () => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/popular`, {
        cache: "no-cache"
    })

    if (!response.ok) {
        throw new Error("Unable to get post");
    }

    return response.json()
}

const Menu = async () => {

    const {posts} = await getPosts()

    return (
        <div className='lg:w-[25%] flex-shrink-0'>
            <h2 className='text-base text-muted-foreground'>{"What's hot"}</h2>
            <h1 className='text-lg lg:text-xl font-bold'>Most Popular</h1>
                {/* What is hot */}
            <div className='mb-14 mt-5 space-y-8'>
                {posts?.splice(0,4).map((post: PostsProps) => (
                        <Link key={post._id} href={`posts/${post.slug}`} className='flex items-center gap-4 w-full'>
                            <div className='relative aspect-square w-[23%] flex-shrink-0'>
                                <Image src={post.img || "/images/world.jpg"} alt='' fill className='object-cover rounded-full border-[3px] border-gray-300' />
                            </div>
                            <div className='flex flex-col gap-y-1 w-[80%]'>
                            <span className={cn('text-xs px-3 py-1 rounded-2xl capitalize w-fit ', post.catSlug)}>{ post?.catSlug}</span>
                                <p className='text-sm md:text-base font-bold'>
                                {post?.title}
                                </p>
                                <div className='text-xs text-muted-foreground'>
                                <span>{post?.user?.name.charAt(0) + post?.user?.name.split(" ")[1].charAt(0)}</span>
                                <span> - {post?.createdAt?.substring(0,10)}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>


            {/* Editor's Pick */}
            <h2 className='text-base text-muted-foreground'>{"Chosen by the writer"}</h2>
            <h1 className='text-lg lg:text-xl font-bold'>{"Writer's Pick"}</h1>
            <div className='mb-10 mt-5 space-y-8'>
                {[...Array(3)].map((_, index) => (
                    <Link key={index} href={""} className='flex items-center gap-4 w-full'>
                        <div className='relative aspect-square w-[23%] flex-shrink-0'>
                            <Image src="/images/world.jpg" alt='' fill className='object-cover rounded-full border-[3px] border-gray-300' />
                        </div>
                        <div className='flex flex-col gap-y-1 w-[80%]'>
                            <span className='text-xs px-2 py-1 rounded-2xl bg-orange-400 w-fit text-white'>Travel</span>
                            <p className='text-sm md:text-base'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, sunt.
                            </p>
                            <div className='text-xs text-muted-foreground'>
                                <span>Josh Doe</span>
                                <span> - 10/10/2010</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Menu