import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className='lg:w-[25%] flex-shrink-0'>
            <h2 className='text-base text-muted-foreground'>{"What's hot"}</h2>
            <h1 className='text-lg lg:text-xl font-bold'>Most Popular</h1>
                {/* What is hot */}
            <div className='mb-14 mt-5 space-y-8'>
                    {[...Array(3)].map((_, index) => (
                        <Link key={index} href={""} className='flex items-center gap-4 w-full'>
                            <div className='relative aspect-square w-[23%] flex-shrink-0'>
                                <Image src="/world.jpg" alt='' fill className='object-cover rounded-full border-[3px] border-gray-300' />
                            </div>
                            <div className='flex flex-col gap-y-1 w-[80%]'>
                                <span className='text-xs px-2 py-1 rounded-2xl bg-orange-400 w-fit text-white'>Travel</span>
                                <p className='text-'>
                                    Lorem ipsum dolor sit amet elit. Deserunt, animi.
                                </p>
                                <div className='text-xs text-muted-foreground'>
                                    <span>John Doe</span>
                                    <span> - 10/03/2023</span>
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
                            <Image src="/world.jpg" alt='' fill className='object-cover rounded-full border-[3px] border-gray-300' />
                        </div>
                        <div className='flex flex-col gap-y-1 w-[80%]'>
                            <span className='text-xs px-2 py-1 rounded-2xl bg-orange-400 w-fit text-white'>Travel</span>
                            <p className='text-'>
                                Lorem ipsum dolor sit amet elit. Deserunt, animi.
                            </p>
                            <div className='text-xs text-muted-foreground'>
                                <span>John Doe</span>
                                <span> - 10/03/2023</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Menu