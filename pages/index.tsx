import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link  from 'next/link'

const Home : NextPage = () => {
// const Home = () => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="programming blogs, frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
          <div>
            <section className= "bg-slate-500 body-font text-white">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                  <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-16 overflow-hidden"> 
                    {/* previously h-64 */}
                      {/* <Image width={100} height={100} alt="content" className="object-cover object-center  " src="/dev.jpeg" /> */}
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="rounded-full inline-flex items-center justify-center text-gray-400">
                          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg> */}

                        <Image width={100} height={100} alt="content" className="object-cover object-center" src="/dev.jpeg" />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                          <h2 className="font-medium title-font mt-4 text-neutral-400 text-lg">Devkant Swargiary</h2>
                          <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                          <p className="text-base">Web Developer and Open Source Enthusiast based in India</p>
                        </div>
                      </div>
                      <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">Dev is interested in Web Development. According to him, there should be no bar in learning things and prefers to learn things on the fly.  <br></br>
                        He writes blogs related to the issue he faces while coding.  <br></br>
                        When he isn&apos;t coding he listens to Bob Dylan and John Mayer.</p>
                        <a className="text-indigo-500 inline-flex items-center">Learn More
                          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className='text-xl flex justify-center'>
                      <p>Technology Stacks</p>
                        <section className="text-gray-600 body-font">
                          <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="ecommerce" width={100} height={100} className="object-cover object-center w-full h-full block" src="/js.png" />
                                </a>
                                {/* <div className="mt-1">
                                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                  
                                </div> */}
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="ecommerce" width={100} height={100} className="object-cover object-center w-full h-full block" src="/react.png" />
                                </a>
                                {/* <div className="mt-1">
                                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                  
                                </div> */}
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="ecommerce" width={100} height={100} className="object-cover object-center w-full h-full block" src="/nextjs.png" />
                                </a>
                                {/* <div className="mt-1">
                                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                  
                                </div> */}
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="ecommerce" width={100} height={100} className="object-cover object-center w-full h-full block" src="/fireb.png" />
                                </a>
                                {/* <div className="mt-1">
                                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                  
                                </div> */}
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="ecommerce" width={100} height={100} className="object-cover object-center w-full h-full block" src="/tailwind.jpg" />
                                </a>
                                {/* <div className="mt-1">
                                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                  
                                </div> */}
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="ecommerce" width={100} height={100} className="object-cover object-center w-full h-full block" src="/figma.png" />
                                </a>
                                {/* <div className="mt-1">
                                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                  
                                </div> */}
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="ecommerce" width={100} height={100} className="object-cover object-center w-full h-full block" src="/gitbook.png" />
                                </a>
                                {/* <div className="mt-1">
                                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                  
                                </div> */}
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="ecommerce" width={100} height={100} className="object-cover object-center w-full h-full block" src="/python.png" />
                                </a>
                                {/* <div className="mt-0">
                                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                  
                                </div> */}
                              </div>
                            </div>
                          </div>
                          </section>
                  </div>
                </section> 
          </div>
  
    </>
    
  )
}

export default Home
