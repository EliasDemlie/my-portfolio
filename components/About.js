import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I'm Your Name
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly websites.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Your Name"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="mt-5 text-center">
            <p className="text-lg text-gray-500">
              With expertise in React, Node.js, and database technologies, I bring ideas to life through code.
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

