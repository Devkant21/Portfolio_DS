import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'



const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-center justify-center items-center py-2 shadow-xl bg-slate-700 text-white'>
        <div className='logo mx-5'>
            <Link href={'/'}><a>
                <Image width={40} height={40} src="/dev.jpeg" alt="" />
                </a>
            </Link>
            
        </div>
            <div className='nav'>
                <ul className='flex items-center space-x-4 font-bold md:text-md'> 
                    <Link href={'Portfolio'}><a><li>Portfolio</li></a></Link>
                    <Link href='https://dev21.hashnode.dev/'><a><li>Blog</li></a></Link>
                </ul>
            </div>
            <div className='AiFillGithub absolute right-20 top-4 mx-5 cursor-pointer'>
                <Link href="https://github.com/Devkant21/">
                <AiFillGithub className='text-3xl' 
                />
                </Link>
            </div>
            <div className='AiFillYoutube absolute right-10 top-4 mx-5 cursor-pointer'>
                <Link href="https://www.youtube.com/channel/UCVSo6oM9UEwmbh8BH8Fx3bQ">
                <AiFillYoutube className='text-3xl' 
                />
                </Link>
            </div>
            <div className='AiFillTwitterCircle absolute right-0 top-4 mx-5 cursor-pointer'>
                <Link href="https://twitter.com/devkant21/">
                <AiFillTwitterCircle className='text-3xl' 
                />
                </Link>
            </div>
        </div>
  )
}

export default Navbar;
