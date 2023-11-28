import React from 'react'
import Post from './Post'
import Pagination from './Pagination'

type Props = {
  page: number
  category: string
}

type PostType = {
  _id: string
  createdAt: string
  img: string
  desc: string
  catSlug: string
  slug: string
  title: string
}

const getPosts = async (page: number, category: string) => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/posts?page=${page}&category=${category}`, {
    cache: "no-cache"
  })

  if (!response.ok) {
    throw new Error("Unable to get posts");
  }

  return response.json()
}

const CardList = async ({ page, category = "" }: Props) => {
  const { posts, count } = await getPosts(page, category)

  const POST_PER_PAGE = 2
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className='w-full lg:w-[75%] flex-shrink-0'>
      <h1 className='text-lg md:text-xl font-bold'>Recent Posts</h1>
      <div className='space-y-20 lg:space-y-10 w-full'>
        {posts?.map((post: PostType) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList