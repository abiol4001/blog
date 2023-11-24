import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

type Props = {}

const BlogPage = (props: Props) => {
    return (
        <div className='px-4 md:px-10 lg:px-20 pt-10'>
            <h1 className='text-4xl font-bold text-center p-2 bg-fuchsia-200'>Style Page</h1>
            <div className='flex flex-col lg:flex-row w-full '>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage