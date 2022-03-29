import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-center justify-center items-center py-2 shadow-xl'>
        <div className='logo mx-5'>
            <Link href={'/'}><a>
                <Image width={40} height={40} src="/codedamn_logo.png" alt="" />
                </a>
            </Link>
            
        </div>
            <div className='nav'>
                <ul className='flex items-center space-x-4 font-bold md:text-md'> 
                    <Link href='https://codedamn.com/playgrounds'><a><li>Portfolio</li></a></Link>
                    <Link href={'Blog'}><a><li>Blog</li></a></Link>
                </ul>
            </div>
            <div className='AiFillGithub absolute right-0 top-4 mx-5 cursor-pointer'>
                <Link href="https://github.com/Devkant21/">
                <AiFillGithub className='text-3xl' 
                />
                </Link>
            </div>
        </div>
  )
}

export default Navbar;
