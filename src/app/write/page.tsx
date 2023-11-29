"use client"
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { ExternalLink, Image, PlusCircle, Video } from 'lucide-react'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.bubble.css';

type Props = {}

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})
const WritePage = (props: Props) => {
    
    
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('')
    const [media, setMedia] = useState('')
    const [image, setImage] = useState<File | null>(null)
    
    const router = useRouter()
    const { status } = useSession()
    
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    

    // console.log("Status" + status)

    if (status === "unauthenticated") {
        return router.push("/")
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }
    return (
        <div className='min-h-[calc(100vh-100px)] px-4 md:px-10 lg:px-20 relative'>
            <input
                type="text"
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
                className='outline-none border-none text-3xl md:text-[64px] bg-transparent p-10 w-full placeholder:text-[#b3b3b1]' />
            <div>
                <div className='flex flex-wrap justify-between items-center'>
                    <Popover>
                        <PopoverTrigger>
                            <Button size="icon">
                                <PlusCircle />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='flex gap-1 w-fit' side='right'>
                            <Button size="icon">
                                <ExternalLink />
                            </Button>
                            <Button size="icon">
                                <input type="file" name="file" id="image" className='hidden' onChange={(e) => {
                                    if (e.target.files) {
                                    setImage(e.target.files[0]);
                                    }
                                }} />
                                <label htmlFor="image">
                                    <Image />
                                </label>
                            </Button>
                            <Button size="icon">
                                <Video />
                            </Button>
                        </PopoverContent>
                    </Popover>

                    <Select onValueChange={() => { }}>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="travel">Travel</SelectItem>
                                <SelectItem value="styles">Styles</SelectItem>
                                <SelectItem value="fashion">Fashion</SelectItem>
                                <SelectItem value="food">Food</SelectItem>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="culture">Culture</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <ReactQuill
                    // formats={formats}
                    modules={modules}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder='Tell your story...'
                    style={{ backgroundColor: "", fontSize: "24px !important", minHeight: "200px", marginTop: "30px", }}
                />
                {/* </ReactQuill> */}

                <Button className='absolute top-[30px] right-0 bg-green-500'>Publish</Button>
            </div>
        </div>
    )
}

export default WritePage