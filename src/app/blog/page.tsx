import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    searchParams: {
        page: string
        category: string
    }
}

const BlogPage = ({searchParams}: Props) => {
    const page: number = parseInt(searchParams.page) || 1
    const category: string = searchParams.category

    return (
        <div className='px-4 md:px-10 lg:px-20 pt-10'>
            <h1 className={cn('text-4xl font-bold text-center p-2 bg-fuchsia-200 capitalize mb-8 lg:mb-14', category)}>{category} page</h1>
            <div className='flex flex-col lg:flex-row w-full '>
                <CardList page={page} category={category} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage