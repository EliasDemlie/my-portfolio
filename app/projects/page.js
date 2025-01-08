// pages/Project.js
import ProjectCard from './ProjectCard';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'e-commerce website',
      description: 'This e-commerce project is a full-stack web application designed to deliver a smooth and efficient online shopping experience. Built using React, Node.js, Express, and MongoDB.',
      imgUrl: '/images/e-commerce.avif'
    },
    { id: 2, title: 'weather APP', 
      description: "This Weather App is a user-friendly web application built using JavaScript, HTML, CSS, and a REST API that allows users to search and view real-time weather data for various cities worldwide. The app displays the temperature and humidity for the current day and the next three days.",
      framework:"",
       imgUrl: '/images/weatherAPP.png' }
    
  ];

  return (
      <div className=" mt-12 max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            My Recent Work
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                framework={project.framework}
                imgUrl={project.imgUrl}  // Pass the imgUrl prop
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Project;
