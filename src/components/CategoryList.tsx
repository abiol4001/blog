import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Categories = {
  title: string
  _id: string
  link: string
  img: string
}

type Props = {

}

const getCategories = async () => {
  const response = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache"
  })

  if(!response.ok) {
    throw new Error("Unable to get categories");
    
  }

  return response.json()
}

const CategoryList = async (props: Props) => {

  const data = await getCategories()

  // console.log(data)
  // const categories = [
  //   {
  //     title: "fashion",
  //     color: "bg-blue-900/30 dark:bg-blue-300",
  //     link: "fashion",
  //     img: "/images/fashion.jpg"
  //   },
  //   {
  //     title: "travel",
  //     color: "bg-emerald-600/20 dark:bg-emerald-600/40",
  //     link: "travel",
  //     img: "/images/travel.jpg"
  //   },
  //   {
  //     title: "styles",
  //     color: "bg-purple-600/20 dark:bg-purple-600/40",
  //     link: "styles",
  //     img: "/images/style.jpg"
  //   },
  //   {
  //     title: "culture",
  //     color: "bg-pink-800/20 dark:bg-pink-800/40",
  //     link: "culture",
  //     img: "/images/world.jpg"
  //   },
  //   {
  //     title: "food",
  //     color: "bg-orange-600/20 dark:bg-orange-600/70",
  //     link: "food",
  //     img: "/images/food.jpg"
  //   },
  //   {
  //     title: "technology",
  //     color: "bg-gray-800/20 dark:bg-gray-800",
  //     link: "technology",
  //     img: "/images/tech.jpg"
  //   },
  // ]

  return (
    <div className='px-4 md:px-10 lg:px-20 mt-10'>
      <h1 className='text-lg md:text-xl font-bold'>Popular Categories</h1>
      <div className='flex flex-wrap items-center justify-between my-[50px] gap-y-4'>
        {data?.map((item: Categories) => (
          <Link 
          key={item.title} 
          href={`/blog${item.link}`} 
          className={cn("rounded-sm relative h-[70px] w-[48%] sm:w-[28%] md:w-[30%] lg:w-[15%] px-2 flex items-center gap-2 justify-center", item.title)}>
            <Image src={item.img} alt='category-image' width={32} height={32} style={{ width: '32px', height: '32px' }} className='rounded-full' />
            <p className='text-sm capitalize '>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList