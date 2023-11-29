import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

type Props = {}

const SocialIcons = (props: Props) => {
    return (
        <div className='hidden md:flex gap-3 transition flex-1'>
            <a href='#' className='rounded-md  flex justify-center items-center p-1.5 group border border-x-slate-400 transition hover:border-[#4267B2]'>
                <Facebook size={24} strokeWidth={0} className='fill-slate-400 group-hover:animate-bounce group-hover:fill-[#4267B2]' />
            </a>
            <a href='#' className='rounded-md  flex justify-center items-center p-1.5 group border border-x-slate-400 transition hover:border-[#1DA1F2]'>
                <Twitter size={24} strokeWidth={0} className='fill-slate-400 group-hover:animate-bounce group-hover:fill-[#1DA1F2]' />
            </a>
            <a href='#' className='rounded-md   flex justify-center items-center p-1.5 group border border-x-slate-400 transition hover:border-[#0A66C2]'>
                <Linkedin size={24} strokeWidth={0} className='fill-slate-400 group-hover:animate-bounce group-hover:fill-[#0A66C2]' />
            </a>

            {/* <a href='#'
              className='rounded-full bg-black flex flex-shrink-0 justify-center items-center p-1 w-8 h-8 relative'>
              <Image src="/images/x-logo.avif" alt='x-logo' fill className='rounded-full p-1' />
          </a> */}
        </div>
    )
}

export default SocialIcons