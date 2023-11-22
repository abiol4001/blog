import { cn } from '@/lib/utils'
import { Facebook, X } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import React from 'react'

type Props = {}

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] })

const Navbar = (props: Props) => {
    return (
        <div className='flex items-center justify-between w-full px-4 md:px-10 lg:px-20 h-[100px] bg-slate-300'>
            <div className='flex gap-1'>
                <a href='#' className='h-6 w-6 rounded-full bg-blue-700 flex justify-center items-center p-1'><Facebook size={18} strokeWidth={0} className='fill-white text-white' /></a>
                <a href='#' className='h-6 w-6 rounded-full bg-blue-500 flex justify-center items-center p-1'><X size={18} className='fill-white text-white' /></a>
            </div>
            <div>
                <p className={cn('text-3xl', montserrat.className)}>My Blog</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar