import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div>
          <section className="text-white bg-slate-700 body-font h-full">
            <div className="container px-5 py-24 mx-auto h-full">
              <div className="flex flex-wrap w-full mb-20 h-full">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0 h-full">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Portfolio</h1>
                  <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <Image width={100} height={100} className="h-100 rounded w-full object-cover object-center mb-6" src="/js.png" alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Docker-Next Boilerplate</h3>
                    <h2 className="text-lg text-gray-200 font-medium title-font mb-4">Next, Docker</h2>
                    <Link href="https://github.com/Devkant21/Docker-Next"><a>Github</a></Link>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-500 p-6 rounded-lg">
                    <Image width={100} height={100} className="h-100 rounded w-full object-cover object-center mb-6" src="/js.png" alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Next.js Boilerplate website</h3>
                    <h2 className="text-lg text-gray-200 font-medium title-font mb-4">Next.js, TailwindCSS</h2>
                    <Link href="https://github.com/Devkant21/NextJs-Boilerplate-Website"><a>Github</a></Link>
                    
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <Image width={100} height={100} className="h-100 rounded w-full object-cover object-center mb-6" src="/genesis.png" alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Genesis</h3>
                    <h2 className="text-lg text-gray-200 font-medium title-font mb-4">Next.js, TailwindCSS</h2>
                    <Link href="https://github.com/Devkant21/genesis"><a>Github</a></Link>
                    
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <Image width={100} height={100} className="h-100 rounded w-full object-cover object-center mb-6" src="/Compendium.png" alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Compendium</h3>
                    <h2 className="text-lg text-gray-200 font-medium title-font mb-4">Next.js, TailwindCSS</h2>
                    <Link href="https://github.com/Devkant21/compendium"><a>Github</a></Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Portfolio