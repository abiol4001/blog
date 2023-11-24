import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {}

const AuthLinks = (props: Props) => {
    const status = "unauthenticated"
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
                    <Button className=''>Logout</Button>
                </div>
            }
        </div>
    )
}

export default AuthLinks