import Image from 'next/image';
import React from 'react';
import ExperienceCard from './ExperienceCard';

export  default function Hero() {
  return (
    <div className="min-h-screen overflow-y-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16  text-white">
      
      <div className="  pt-10 mt-14 flex flex-col-reverse lg:flex-row items-center lg:items-start">
        {/* intro */}
        <div className="mt-6 lg:mt-0 lg:w-1/2 lg:pr-8">
          <p className="mt-2 sm:mt-4 tracking-widest font-bold text-center sm:text-left">
            full stack developer
          </p>
          <h1 className="mt-2 text-5xl leading-tight font-extrabold tracking-wider text-white text-center sm:text-left">
            Hello, I am <br /><span className="text-cyan-400">Elias Demlie</span>
          </h1>
          <p className="mt-2 text-sm tracking-wider text-justify text-gray-300">
            I thrive on building seamless digital experiences and dynamic web applications, with expertise in various programming languages and modern development tools.
          </p>
        </div>


        {/* Image Section */}
        <div className=" pt-3 flex-shrink-0 lg:w-1/2 flex justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden">
            <Image
              src="/images/Elias demlie.png"
              alt="Elias's pic"
              width={300}
              height={300}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-4 mb-6 px-2 lg:flex lg:items-center lg:space-x-10">
        {/* Download Button */}
        <a
          href="/Elias_demlie_cv.pdf"
          download
          className="mb-4 lg:mb-0 inline-block px-14 py-2 text-cyan-400 border border-cyan-400 rounded-full text-base 
            font-medium transition duration-300 hover:bg-cyan-400 hover:text-gray-800  focus:bg-cyan-400 focus:text-gray-800  tracking-widest"
        >
          Download CV
        </a>

        {/* Social Media Icons */}
        <div className="flex   justify-center space-x-14 ">
          
           {/* github */}
          <a
            href="https://github.com/eliasdemlie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 border border-cyan-400 rounded-full hover:text-black focus:bg-cyan-400 hover:bg-cyan-400 transition duration-10 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.18c-3.34.72-4.04-1.61-4.04-1.61-.54-1.39-1.32-1.76-1.32-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.06 1.82 2.79 1.3 3.47.99.11-.77.42-1.3.77-1.6-2.66-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.41 1.23-3.26-.12-.3-.53-1.51.12-3.14 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.63.24 2.84.12 3.14.76.85 1.23 1.94 1.23 3.26 0 4.63-2.82 5.66-5.5 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {/* linkedIn */}
          <a
            href="https://linkedin.com/in/eliasdemlie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 border border-cyan-400 rounded-full hover:text-black focus:bg-cyan-400 hover:bg-cyan-400 transition duration-10 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 rounded-full"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V165.41h92.88zm-46.44-317a53.91 53.91 0 1 1 53.91-53.91 53.9 53.9 0 0 1-53.91 53.9zm384.32 317h-92.68V302.4c0-34.7-12.47-58.35-43.52-58.35-23.74 0-37.88 16-44.1 31.42-2.27 5.54-2.84 13.26-2.84 21v151.5h-92.68s1.25-246.06 0-271.59h92.68v38.47c12.33-19 34.4-46.07 83.58-46.07 61 0 106.72 39.76 106.72 125.17z" />
            </svg>
          </a>
          {/* twitter */}
          <a
            href="https://twitter.com/elias_dm13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 border border-cyan-400 rounded-full hover:text-black focus:bg-cyan-400 hover:bg-cyan-400 transition duration-10 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.89-2.36 8.49 8.49 0 01-2.72 1.04 4.25 4.25 0 00-7.23 3.87A12.07 12.07 0 013 5.25a4.25 4.25 0 001.32 5.67 4.18 4.18 0 01-1.92-.53v.05a4.26 4.26 0 003.41 4.17 4.18 4.18 0 01-1.92.07 4.26 4.26 0 003.98 2.96 8.53 8.53 0 01-5.3 1.83c-.34 0-.67-.02-1-.06a12.06 12.06 0 006.52 1.91c7.84 0 12.13-6.5 12.13-12.14v-.55A8.69 8.69 0 0024 4.56a8.46 8.46 0 01-2.54.7z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-10 lg:mt-16 text-center lg:text-left">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


          < ExperienceCard
          number={"2+ years"} description={'Experience'}
          />
          < ExperienceCard
            number={"3"} description={'Projects Completed'}
          />
          {/* <p className="mt-2 text-gray-600">I have successfully completed 5 projects, applying my skills to solve real-world challenges.</p> */}
          < ExperienceCard
            number={"6"} description={'Technologies Mastered'}
          />
            {/* <p className="mt-2 text-gray-600">I have honed my expertise in 6 key technologies, including React, Node.js, and more.</p> */}
        </div>
      </div>


    </div>
  );
}
