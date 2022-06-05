import React from 'react';
import { useState } from 'react'
import { Switch } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Login() {
    const [enabled, setEnabled] = useState(false)
    return (
      <>
        
        <div className="h-full flex pb-15">
          <div className="flex  flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto max-w-sm lg:w-61 mt-18 ml-20 ">
              <div className='flex'>
                <h2 className="mt-6 text-2xl font-bold text-gray-700 font-sans">Sign In</h2>
                </div>
                <div className='flex'>
                 <p className="mt-2 text-gray-600">
                  
                   <a href="#" className="font-medium text-gray-500 hover:text-gray-600 ">
                     Enter your email and password to sign 
                   </a>
                   <br></br>
                   <a href="#" className="font-medium text-gray-500 hover:text-gray-600 text-left">
                     in
                   </a>
                 </p>
                </div>
              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-4">
                    <div>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="abc@gmail.com"
                          required
                          className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          placeholder="Your Password"
                          required
                          className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="flex items-center justify-between">
                      <div className="flex items-center"> 
                       <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={classNames(
                              enabled ? 'bg-purple-600' : 'bg-gray-200',
                              'relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-2'
                          )}
                       >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              enabled ? 'translate-x-5' : 'translate-x-0',
                              'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                         />
                       </Switch>
                      </div>
                    </div>
  
                    <div className='class="sm:col-span-2 sm:flex sm:justify-end"'>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-3 border border-transparent rounded-md shadow-md  font-2xl font-bold text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  
                  <div className="text-sm mt-10">
                    <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300 mr-1">Don't have an account?</span>
                        <a href="#" className="font-medium text-purple-600 hover:text-purple-700">
                          Sign up
                        </a>
                  </div>
                </div>
                
              </div>
              
            </div>
            
          </div>
          <div className="hidden lg:block w-0  flex-1  ml-20">
           <div className="relative overflow-hidden h-full shadow-2xl rounded-2xl py-10 px-6 bg-purple-600  xl:p-12 m-3">
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden  absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={500}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col mt-80">
                <h3 className="text-2xl mt-30 font-bold text-white font-sans">
                  "Attention is the new currency"
                </h3>
                <p className="text-md mt-30 font-medium text-white font-sans">
                  The more effortless the writting looks,the effort the 
                  <br></br>
                  writer actually put into the process
                </p>
                </div>
              </div>
            </div>
        </div>
        
      </>
    )
  }
  