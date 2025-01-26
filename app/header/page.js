
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Header(){
    const [isClick, setisClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNavBar = () => {
        setisClick(!isClick);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header 
             className={`w-full shadow-sm z-50 pt-6 sticky top-0 transition-colors duration-200 
            ${isScrolled ? "backdrop-blur-md bg-customColor  bg-opacity-80" : "bg-transparent" }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 ">
                <div className="flex justify-between h-10">
                    <div className="flex items-center">
                        <div className='flex-shrink-0'>
                            <Link href="/" className="text-4xl text-white tracking-widest">
                                Elias D.
                            </Link>
                        </div>
                    </div>
                    {/* desktop */}
                    <div className=" hidden md:block py-2">
                        <div className='ml-4 flex items-center space-x-4'>
                            <Link href="/" className="text-xl text-white underline-offset-4 transition underline decoration-transparent focus:text-cyan-400 focus:decoration-white px-2"
>
                                home
                            </Link>
                            <Link href="/services" className="text-xl text-white underline-offset-4 transition underline decoration-transparent focus:text-cyan-400 focus:decoration-white px-2"
                            >   services
                            </Link>
                            <Link href="/projects" className="text-xl text-white underline-offset-4 transition underline decoration-transparent focus:text-cyan-400 focus:decoration-white px-2">
                                projects
                            </Link>
                            <Link href="/resume" className="text-xl text-white underline-offset-4 transition underline decoration-transparent focus:text-cyan-400 focus:decoration-white px-2">
                                resume
                            </Link>
                            <Link href="contact" className="text-xl  text-white underline-offset-4 transition underline decoration-transparent focus:text-cyan-400 focus:decoration-white px-2">
                                contact
                            </Link>
                        </div>
                    </div>
                    {/* mobile devce */}
                    <div className='md:hidden flex items-center'>
                        <button
                            className='inline-flex items-center justify-center p-2 rounded-md text-cyan-400'
                            onClick={toggleNavBar}
                        >
                            {isClick ? (
                                ""
                            ) :
                                (<svg
                                    className=' h-8 w-8'
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
                <div className="md:hidden fixed right-0 top-0 w-1/2 h-full bg-gray-900 flex flex-col items-center space-y-4 py-3 px-6">
                    {/* Adjust mb-6 for spacing */}
                    <button className=' text-cyan-400 focus:outline-none top-8 fixed right-6'
                        onClick={toggleNavBar}>
                        <svg
                            className=' h-8 w-8 items-center'
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

                    
                    <div className='h-full  p-12  '>
                        <Link href="/" className=" block py-2 tracking-widest font-bold mt-4 focus:text-cyan-400 text-white underline-offset-4 transition underline decoration-transparent focus:decoration-whit"
                            onClick={toggleNavBar}>
                            home
                        </Link>
                        <Link href="/services" className=" block py-2 tracking-widest font-bold focus:text-cyan-400 text-white underline-offset-4 transition underline decoration-transparent focus:decoration-whit"
                            onClick={toggleNavBar}>
                            services
                        </Link>
                        <Link href="/projects" className="block py-2 tracking-widest font-bold focus:text-cyan-400 text-white underline-offset-4 transition underline decoration-transparent focus:decoration-white"
                            onClick={toggleNavBar}>
                            projects
                        </Link>
                        <Link href="/resume" 
                            className=" block py-2 tracking-widest font-bold focus:text-cyan-400  text-white underline-offset-4 transition underline decoration-transparent focus:decoration-white"
                            onClick={toggleNavBar}>
                            resume
                        </Link>
                        <Link href="/contact" 
                            className=" block py-2 tracking-widest font-bold focus:text-cyan-400 text-white underline-offset-4 transition underline decoration-transparent focus:decoration-white"
                            onClick={toggleNavBar}>
                            contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

