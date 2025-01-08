// components/ProjectCard.js
import Image from 'next/image';

const ProjectCard = ({ imgUrl, title, description, framework }) => {
    return (
        <div className="bg-gray-800 overflow-hidden shadow-md rounded-lg my-6">
            <div className="relative w-full h-48"> {/* Enforce fixed height */}
                <Image
                    src={imgUrl}
                    alt={title}
                    layout="fill"  
                    objectFit="cover"  
                    className="rounded-t-lg"  
                />
            </div>
            <div className="px-4 py-6 sm:p-6">
                <h1 className="text-xl py-4 leading-3 font-bold text-cyan-400 tracking-widest">{title}</h1>
                <p className="mt-2  text-sm tracking-wider text-justify text-gray-200 ">{description}</p>
                <h1 className="text-xl leading-3 font-bold text-cyan-400">{framework}</h1>
            </div>
        </div>
    );
};

export default ProjectCard;
