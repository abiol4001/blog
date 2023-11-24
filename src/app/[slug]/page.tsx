
import Comments from '@/components/Comments'
import Menu from '@/components/Menu'
import Image from 'next/image'
import React from 'react'

type Props = {}

const SinglePostPage = (props: Props) => {
    return (
        <div className='px-4 md:px-10 lg:px-20 pt-10 space-y-14'>
            <div className='flex flex-col-reverse lg:flex-row items-center gap-x-[50px] gap-y-8'>
                <div className='lg:flex-1 space-y-8'>
                    <h1 className='text-3xl md:text-5xl lg:text-[64px] font-medium'>Lorem ipsum dolor sit amet consectur adipisicing elit?</h1>
                    <div className='flex items-center gap-x-3'>
                        <div className='relative h-[50px] w-[50px] flex-shrink-0'>
                            <Image src={"/images/fashion.jpg"} alt='' fill className='object-cover rounded-full' />
                        </div>
                        <div className='flex flex-col  text-muted-foreground'>
                            <span className='text-base md:text-lg font-medium'>John Doe</span>
                            <span className='text-sm md:text-base'>11/11/2011</span>
                        </div>
                    </div>
                </div>
                <div className='relative lg:flex-1 h-[350px] w-full'>
                    <Image src={"/images/food.jpg"} alt='' fill className='object-cover' />
                </div>
            </div>
            <div className='flex gap-10 flex-col lg:flex-row w-full'>
                <div className='space-y-10'>
                    <div className='space-y-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in porro dolor aliquid eius, molestiae labore ipsa voluptate ullam dignissimos exercitationem sed libero ut molestias impedit perferendis totam commodi! Sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in porro dolor aliquid eius, molestiae labore ipsa voluptate ullam dignissimos exercitationem sed libero ut molestias impedit perferendis totam commodi! Sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in porro dolor aliquid eius, molestiae labore ipsa voluptate ullam dignissimos exercitationem sed libero ut molestias impedit perferendis totam commodi! Sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in porro dolor aliquid eius, molestiae labore ipsa voluptate ullam dignissimos exercitationem sed libero ut molestias impedit perferendis totam commodi! Sint?</p>
                    </div>
                    <Comments />
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePostPage