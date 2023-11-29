import { cn } from '@/lib/utils'
import { Montserrat } from 'next/font/google'
import React from 'react'
import Link from 'next/link'
import AuthLinks from './AuthLinks'
import { ThemeToggle } from './ThemeToggle'
import MobileSidebar from './MobileSidebar'
import SocialIcons from './SocialIcons'

type Props = {}

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] })

const Navbar = (props: Props) => {
    return (
        <div className='flex items-center justify-between w-full px-4 md:px-10 lg:px-20 h-[100px] border-b border-b-zinc-100'>
            <SocialIcons />
            <div className='flex-1 text-left md:text-center'>
                <Link href="/" className={cn('text-2xl md:text-3xl lg:text-4xl', montserrat.className)}>Penster</Link>
            </div>
            <div className='flex justify-end font-semibold items-center gap-5 w-full flex-1'>
                <ThemeToggle />
                <div className='hidden lg:flex items-center gap-2.5 '>
                    <Link href="/">Homepage</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <AuthLinks />
                </div>
                <MobileSidebar />
            </div>
        </div>
    )
}

export default Navbar