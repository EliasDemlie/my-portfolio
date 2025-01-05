"use client"
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isClick, setisClick] = useState(false);

  const toggleNavBar = () => {
    setisClick(!isClick);
  };
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className='flex-shrink-0'>
              <Link href="/" className="text-xl font-bold text-white">
                Elias
              </Link>
            </div>
          </div>
          {/* desktop */}
          <div className=" hidden md:block">
            <div className='ml-4 flex items-center space-x-4'>
              <Link href="#about" className="text-white hover:bg-white hover:text-black rounded-lg p-5">
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
          {/* mobile devce */}
          <div className='md:hidden flex items-center'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-blue-800 md:text-white
             focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={toggleNavBar}
            >
              {isClick ? (
                <svg
                  className=' h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
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
      {/* Mobile Navigation Links */}
      {isClick && (
        <div className="md:hidden fixed right-0 top-0 w-1/2 h-full bg-gray-900 flex flex-col items-start space-y-4 py-8 px-6">
          {/* Adjust mb-6 for spacing */}
          <button className=' text-blue-500
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white fixed right-6'
            onClick={toggleNavBar}>
            <svg
              className=' h-6 w-6'
              xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
              stroke="currentColor"
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="#about" className="text-white hover:text-blue-500 rounded-lg p-2" onClick={toggleNavBar}>
            About
          </Link>
          <Link href="#projects" className="text-white hover:bg-white hover:text-black rounded-lg p-2" onClick={toggleNavBar}>
            Projects
          </Link>
          <Link href="#contact" className="text-white hover:bg-white hover:text-black rounded-lg p-2" onClick={toggleNavBar}>
            Contact
          </Link>
        </div>
      )}


    </header>
  )
}

