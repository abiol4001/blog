import React from 'react'
import { Button } from './ui/button'

type Props = {}

const AuthLinks = (props: Props) => {
    const status = "unauthenticated"
  return (
      <div className=''>
          {status === "unauthenticated" ? <Button>Login</Button> : <Button>Logout</Button>}
      </div>
  )
}

export default AuthLinks