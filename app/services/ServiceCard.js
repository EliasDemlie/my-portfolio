// components/ServiceCard.js
import Link from 'next/link';

const ServiceCard = ({ number, title, description }) => {
    return (
        <div className="  hover:text-cyan-400 bg-gray-800 rounded-sm p-6 shadow-lg border-b-2 border-cyan-400">
            <h1 className="text-4xl font-mono text-white sm:text-5xl md:text-6xl p-6 py-6 flex justify-between items-center ">
                <div>{number}</div>
                <Link href="/projects" className="  flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor"
                        className="w-14 h-16 p-2 rounded-full  hover:text-cyan-400" // 
                        viewBox="0 0 24 24"
                        transform="rotate(45)" 
                    >
                        <path d="M12 2l10 10-1.41 1.41L13 5.83V20h-2V5.83L3.41 13.41 2 12z" />
                    </svg>
                </Link>
            </h1>
            <div className="text-4xl tracking-wide font-bold text-white sm:text-5xl md:text-6xl hover:text-cyan-400 ">
                {title}
                <p className="mt-3 max-w-md mx-auto tracking-widest text-gray-400 sm:text-lg md:mt-5 md:text-lg md:max-w-3xl">
                    {description}
                </p>
            </div>
           
        </div>
    );
};

export default ServiceCard;
