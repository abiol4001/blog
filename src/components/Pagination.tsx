import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight, ArrowRightFromLine, ArrowRightIcon, ArrowRightToLine } from 'lucide-react'

type Props = {}

const Pagination = (props: Props) => {
    return (
        <div className='my-14 flex justify-between'>
            <Button><ArrowLeft className='mr-2' />Previous page</Button>
            <Button>Next page <ArrowRight className='ml-2' /></Button>
        </div>
    )
}

export default Pagination