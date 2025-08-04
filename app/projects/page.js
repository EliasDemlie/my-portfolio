import ProjectCard from './ProjectCard';

const Project = () => {
  const projects = [
 {
  id: 1,
  title: 'AI-Powered E-Commerce Platform',
  description: 'An intelligent full-stack e-commerce solution that leverages AI to deliver personalized shopping experiences, smart product recommendations, integrated AI chatbots for customer support, and a seamless checkout process. Built with React, Node.js, Express, and MongoDB for speed, scalability, and efficiency.',
   framework:"",
   imgUrl: '/images/e-commerce.avif'
},


    { id: 2, title: 'RealTime Chat app', 
description: "A responsive and feature-rich real-time chat application designed for instant communication between users. It supports private messaging, real-time typing indicators, and video calls using WebSocket technology for low-latency performance. Built with React.js, Node.js, and Tailwind CSS for a modern, responsive, and visually appealing user interface.",
     framework:"",
       imgUrl: '/images/chat-app-screen-shot.png'
       },
        {
           id: 3, title: 'weather APP', 
      description: "This Weather App is a user-friendly web application built using JavaScript, HTML, CSS, and a REST API that allows users to search and view real-time weather data for various cities worldwide. The app displays the temperature and humidity for the current day and the next three days.",
      framework:"",
       imgUrl: '/images/weatherAPP.png' },
    
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
                imgUrl={project.imgUrl}  
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Project;
