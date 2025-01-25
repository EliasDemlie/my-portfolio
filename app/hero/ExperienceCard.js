import React from "react";

const ExperienceCard = ({ number, description }) => {
    return (
        <div className="p-6 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="tracking-widest font-bold">
                <span className="font-extrabold text-4xl">{number} </span>
                {description}
            </h3>
        </div>
    );
};

export default ExperienceCard;
