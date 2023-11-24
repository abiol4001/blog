"use client"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

type Props = {}

const AuthLinks = (props: Props) => {
    const {status} = useSession()
    return (
        <div className=''>
            {status === "unauthenticated" ?
                <Link href="/login">
                    <Button>Login</Button>
                </Link> :
                <div className='flex flex-col lg:flex-row items-center gap-y-10 gap-x-2'>
                    <Link href="/write">
                        Write
                    </Link>
                    <Button onClick={()=> signOut()} className=''>Logout</Button>
                </div>
            }
        </div>
    )
}

export default AuthLinks