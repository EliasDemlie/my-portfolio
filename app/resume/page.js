import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiPython } from 'react-icons/si';

export default function Home() {

    const skills = [
        { id: 1, icon: <SiTailwindcss className="text-6xl" />, name: 'Tailwind CSS' },
        { id: 2, icon: <FaReact className="text-6xl" />, name: 'React' },
        { id: 3, icon: <FaNodeJs className="text-6xl" />, name: 'Node.js' },
        { id: 4, icon: <SiExpress className="text-6xl" />, name: 'Express' },
        { id: 5, icon: <SiNextdotjs className="text-6xl" />, name: 'Next.js' },
        { id: 6, icon: <SiMongodb className="text-6xl" />, name: 'MongoDB' },
        { id: 7, icon: <SiPython className="text-6xl" />, name: 'Python' },
        { id: 8, icon: <FaGit className="text-6xl" />, name: 'Git' },
    ];

    return (
        <div className="p-8 md:p-16 max-w-4xl mx-auto">
           
            {/* About Me Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">About Me</h2>
                <p className="py-4 text-justify  text-gray-300 tracking-widest">
                    I am Elias Demlie, a motivated Junior Software Developer with a strong foundation in designing and building dynamic, 
                    scalable web applications. I have hands-on experience focusing on leveraging modern technologies to solve real-world problems.
                     I am committed to advancing my skills and contributing to impactful projects.
                </p>
               
                <div className="m-4 tracking-widest text-white space-x-4 space-y-4">
                    <p className="mx-4 ">
                        <span className="font-medium mx-6" >Name:</span>
                        <span className="font-bold mx-6">Elias Demlie</span>
                    </p>
                    <p className="mx-4 flex ">
                        <span className="font-medium mx-6 ">Email:</span>
                        <span className="font-bold mx-6">elias.dm257@gmail.com</span>
                    </p>
                    <p className="mx-4 flex ">
                        <span className="font-medium mx-6 ">Phone:</span>
                        <span className="font-bold mx-6">+251920526295</span>
                    </p>
                    <p className="mx-4 flex ">
                        <span className="font-medium mx-6 ">Nationality:</span>
                        <span className="font-bold mx-6">Ethiopia</span>
                    </p>
                    <p className="mx-4 flex ">
                        <span className="font-medium mx-6 ">Language:</span>
                        <span className="font-bold mx-6">Amharic, English</span>
                    </p>
                </div>


            </section>

            {/* Experience Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4 text-center">My Experiences</h2>
                <p className="py-4 text-justify  text-gray-300 tracking-widest">
                    I am currently gaining hands-on experience in software development by working with a diverse range of tools and technologies.
                    </p>
                <div className=" m-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-cyan-400">2024 July - 2024 October</h4>
                        <h3 className="text-xl font-semibold text-gray-300 mt-2">Full Stack Development Intern</h3>
                        <ul className="list-disc pl-6 mt-2 text-gray-400">
                            <li>Efuye Gela Technologies</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4 text-center">My Education</h2>
                <p className="py-6 text-justify  text-gray-300 tracking-widest">
                    I am currently pursuing a Bachelor's degree in Computer Science, where I have gained a solid understanding of software development,
                    algorithms, and data structures.
                    Throughout my studies, I have developed a passion for building scalable web applications and exploring innovative technologies.
                     </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-cyan-400">2022 - 2025</h4>
                        <h3 className="text-xl font-semibold text-gray-300 mt-2 pt-4">Bachelor's Degree in Computer Science (Ongoing)</h3>
                        <ul className="list-disc pl-6 mt-4 text-gray-400">
                            <li>Bahir Dar University</li>
                            </ul>
                    </div>
                    
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-cyan-400">2024</h4>
                        <h3 className="text-xl font-semibold text-gray-300 mt-2 pt-4">Data Science Fundamentals</h3>
                        <ul className="list-disc pl-6 mt-4 text-gray-400 ">
                            <li>Udacity</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-cyan-400">2024</h4>
                        <h3 className="text-xl font-semibold text-gray-300 mt-2 pt-4">Fundamentals of Android Development</h3>
                        <ul className="list-disc pl-6 mt-4 text-gray-400">
                            <li>Udacity</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-cyan-400">2024</h4>
                        <h3 className="text-xl font-semibold text-gray-300 mt-2 pt-4">Fundamentals of Android Development</h3>
                        <ul className="list-disc pl-6 mt-4 text-gray-400">
                            <li>Udacity</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-cyan-400">2019</h4>
                        <h3 className="text-xl font-semibold text-gray-300 mt-2 pt-4"> Python Data Structure And algorithms </h3>
                        <ul className="list-disc pl-6 mt-2 text-gray-400">
                            <li>Addis Coder</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h4 className="text-cyan-400">2018</h4>
                        <h3 className="text-xl font-semibold text-gray-300 mt-2 pt-4">Web Design and Fundamentals of MObile application</h3>
                        <ul className="list-disc pl-6 mt-4 text-gray-400">
                            <li>Addis Coder</li>
                        </ul>
                    </div>

                </div>
            </section>


            {/* Skills Section */}
            <section>
                <div className='p-6'>
                    <h2 className="text-2xl font-semibold text-white mb-4 text-center">My Skills</h2>
                    <p className="py-6 text-justify  text-gray-300 tracking-widest">
                            I have developed a strong foundation in both front-end and back-end technologies, enabling me to create dynamic and responsive web applications.
                        </p>
                    <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 text-gray-400 ">
                        {skills.map(skill => (
                            <li
                                key={skill.id}
                                className=" rounded-md flex justify-center items-center bg-gray-800 h-24 sm:h-32 md:h-40 lg:h-48 hover:text-gray-300"
                            >
                                {skill.icon}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

        </div>
    );
}
