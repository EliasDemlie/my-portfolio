// Service.js
import ServiceCard from './ServiceCard';

const services = [
    {
        number: '01',
        title: 'Front-End Development',
        description: 'Get started with modern front end development using MERN stack and Next.js'
    },
    {
        number: '02',
        title: 'Back-End Development',
        description: 'Build robust and scalable back end systems with Node.js, Express, and MongoDB'
    },
    {
        number: '03',
        title: 'Full-Stack Development',
        description: 'Master full stack development and create dynamic web applications from front-end to back-end.'
    }
];

const Service = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:px-4  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"> {/* Grid layout with appropriate gap */}
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        number={service.number}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Service;
