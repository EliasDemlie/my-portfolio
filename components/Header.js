"use client"
import { useState } from 'react';
import Link from 'next/link'

export function Header() {
    const [isClick, setisClick] = useState(false);

  const toggleNavBar = ()=> {
    setisClick(!isClick);
  };
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className='flex-shrink-0'>
              <Link href="/" className="text-xl font-bold text-white">
                Elias
              </Link>
            </div>
          </div>
          <div className=" hidden md:block">
            <div className='ml-4 flex items-center space-x-4'>
              <Link href="#about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                About
              </Link>
              <Link href="#about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Projects
              </Link>
              <Link href="#about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Contact
              </Link>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button
            className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' 
            onClick={toggleNavBar}
            >
             {isClick ? (
              <svg 
               className=' h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'               viewBox='0 0 24 24'
               stroke = "currentColor"
               >
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"                />
               </svg>
             ) :
                (<svg
                  className=' h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill="none"
                  viewBox='0 0 24 24'
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>)}   
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

