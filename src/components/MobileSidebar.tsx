"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import AuthLinks from './AuthLinks'

type Props = {
}

const MobileSidebar = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=> {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }

    return (
        <div className='lg:hidden'>
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" size="icon" >
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className='p-0 flex flex-col gap-10 justify-center items-center'>
                    <Link href="/">Homepage</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <AuthLinks />
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileSidebar