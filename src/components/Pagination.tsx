"use client"
import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight, } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {
    page: number
    hasNext: boolean
    hasPrev: boolean
}

const Pagination = ({page, hasNext, hasPrev}: Props) => {

    const router = useRouter()

    return (
        <div className='my-14 flex justify-between lg:pr-14'>
            <Button 
            className='disabled:bg-slate-500 disabled:cursor-not-allowed'
            disabled={!hasPrev}
            onClick={()=> router.push(`?page=${page - 1}`)}
            >
                <ArrowLeft className='mr-2' />
                Previous page
                </Button>
            <Button 
            className='disabled:bg-slate-500 disabled:cursor-not-allowed'
            disabled={!hasNext}
            onClick={()=> router.push(`?page=${page + 1}`)}
            >
                Next page 
                <ArrowRight className='ml-2' />
                </Button>
        </div>
    )
}

export default Pagination