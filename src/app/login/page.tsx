"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const LoginPage = (props: Props) => {
    const router = useRouter()
    const {data, status} = useSession()

    // console.log(data)
    // console.log("Status" + status)

    if(status === "loading") {
        return <p>Loading...</p>
    }

    if(status === "authenticated") {
        return router.push("/")
    }

  return (
    <div className='min-h-[calc(100vh-100px)] w-full relative flex justify-center items-center'>
        <Card className='w-[300px] p-4'>
            <CardHeader>
                  <CardTitle>Sign in</CardTitle>
                  <CardDescription>
                      to continue to myBlog
                  </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
                <Button onClick={() => signIn("google")}>Continue with Google</Button>
                <Button>Continue with Twitter</Button>
            </CardContent>
            <CardFooter className='space-x-2'>
                  <span className='text-muted-foreground text-sm'>No account?</span> <Link href="/register" className='text-sm font-semibold text-blue-700'>Sign up</Link>
            </CardFooter>
        </Card>
    </div>
  )
}

export default LoginPage