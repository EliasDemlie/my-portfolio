// Single source of truth for all portfolio content (mirrors public/Elias_Demlie_CV.pdf).

export const profile = {
    name: 'Elias Demlie',
    shortName: 'Elias D.',
    title: 'Full Stack Software Developer',
    location: 'Addis Ababa, Ethiopia',
    email: 'elias.dm257@gmail.com',
    phone: '+251 920 526 295',
    phoneHref: 'tel:+251920526295',
    cvUrl: '/Elias_Demlie_CV.pdf',
    photo: '/images/Elias demlie.png',
    about:
        'Full Stack Developer with 2+ years of experience building and deploying web and mobile applications with TypeScript, React, Node.js, NestJS, PostgreSQL, and Flutter. Skilled in REST APIs, database design, and third-party integrations, with proven experience delivering clean, secure code in remote teams.',
    roles: ['Full Stack Software Developer', 'NestJS & Node.js Backend', 'React.js Dashboards', 'Flutter Mobile Apps'],
    languages: ['Amharic (Native)', 'English (Fluent)'],
};

// GitLab is shown first.
export const socials = [
    { id: 'gitlab', label: 'GitLab', href: 'https://gitlab.com/elias.dm257' },
    { id: 'github', label: 'GitHub', href: 'https://github.com/eliasdemlie' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/eliasdemlie' },
];

export const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '4', label: 'Major Projects' },
];

export const experiences = [
    {
        period: 'MAR 2026 – Present',
        role: 'Full Stack Developer',
        company: 'Vintage Technology',
        points: [
            'Developed delivery, ride-hailing, and job portal applications across backend, web, and mobile.',
            'Built REST APIs using NestJS with PostgreSQL and MongoDB.',
            'Developed React.js admin dashboards and Flutter mobile applications.',
            'Integrated payment, mapping, and SMS services.',
            'Wrote tests with Jest and documented APIs with Swagger.',
        ],
        tags: ['NestJS', 'PostgreSQL', 'MongoDB', 'React.js', 'Flutter', 'Jest', 'Swagger'],
    },
    {
        period: 'AUG 2025 – MAR 2026',
        role: 'Full Stack Software Developer',
        company: 'E-Tech Share Company',
        points: [
            'Developed and maintained features for healthcare management systems.',
            'Built web interfaces, backend APIs, and business logic.',
            'Designed and maintained database functionality for application features.',
            'Integrated the system with laboratory machines for handling test results.',
        ],
        tags: ['Healthcare', 'Web', 'APIs', 'Lab Integration'],
    },
    {
        period: 'OCT 2024 – JUL 2025',
        role: 'Backend Developer',
        company: 'Efuyegella Technology · Remote',
        points: [
            'Developed RESTful APIs and backend services using NestJS, Node.js, and PostgreSQL.',
            'Designed database schemas and implemented backend business logic.',
            'Integrated third-party APIs and services.',
            'Wrote unit tests and fixed backend issues.',
        ],
        tags: ['NestJS', 'Node.js', 'PostgreSQL'],
    },
];

export const education = {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Bahir Dar University',
    period: 'OCT 2022 – JUN 2025',
    cgpa: '3.78',
};

// `icon` keys are resolved to react-icons in app/components/icons.js
export const skillGroups = [
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Dart', icon: 'dart' },
            { name: 'Java', icon: 'java' },
            { name: 'Python', icon: 'python' },
            { name: 'C++', icon: 'cplusplus' },
            { name: 'PHP', icon: 'php' },
        ],
    },
    {
        title: 'Frontend & Mobile',
        skills: [
            { name: 'React.js', icon: 'react' },
            { name: 'Angular', icon: 'angular' },
            { name: 'Flutter (Android & iOS)', icon: 'flutter' },
        ],
    },
    {
        title: 'Backend & Databases',
        skills: [
            { name: 'Node.js', icon: 'node' },
            { name: 'NestJS', icon: 'nest' },
            { name: 'Express.js', icon: 'express' },
            { name: 'Spring Boot', icon: 'spring' },
            { name: 'PostgreSQL', icon: 'postgres' },
            { name: 'MongoDB', icon: 'mongo' },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'GitLab', icon: 'gitlab' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Swagger', icon: 'swagger' },
            { name: 'Jest', icon: 'jest' },
        ],
    },
];

export const softSkills = [
    'Problem-Solving',
    'Independent & Accountable',
    'Communication & Teamwork',
    'Adaptable & Fast Learner',
];

export const services = [
    {
        icon: 'server',
        title: 'Back-End Development',
        description:
            'RESTful APIs and backend services with NestJS, Node.js, Express.js, and Spring Boot, backed by PostgreSQL and MongoDB, tested with Jest and documented with Swagger.',
    },
    {
        icon: 'layout',
        title: 'Front-End Development',
        description: 'Web interfaces and admin dashboards built with React.js and Angular using JavaScript and TypeScript.',
    },
    {
        icon: 'mobile',
        title: 'Mobile Development',
        description: 'Cross-platform Flutter mobile applications for Android and iOS.',
    },
    {
        icon: 'plug',
        title: 'Third-Party Integrations',
        description:
            'Integrating payment, mapping, and SMS services, external APIs, and laboratory machines into web and mobile applications.',
    },
];

// TODO: add screenshots (imgUrl, e.g. '/images/delivery.png') and live/demo links (liveUrl) for each project.
// Cards without imgUrl show an illustrated placeholder; cards without liveUrl hide the link button.
export const projects = [
    {
        title: 'Delivery Platform',
        description:
            'A delivery platform with a customer app and a driver app built in Flutter, a React.js admin dashboard, and a NestJS backend with PostgreSQL, including payment, maps, and SMS integration.',
        tags: ['Flutter', 'React.js', 'NestJS', 'PostgreSQL', 'Payments', 'Maps', 'SMS'],
        icon: 'truck',
        imgUrl: '',
        liveUrl: '',
    },
    {
        title: 'Ride-Hailing Platform',
        description:
            'A ride-hailing platform with separate customer and driver Flutter apps, a React.js admin dashboard, and NestJS REST APIs, including maps and payment integration.',
        tags: ['Flutter', 'React.js', 'NestJS', 'Maps', 'Payments'],
        icon: 'car',
        imgUrl: '',
        liveUrl: '',
    },
    {
        title: 'Job Portal App',
        description: 'A full-stack job listing and application platform.',
        tags: ['Full Stack'], // TODO: add tech stack
        icon: 'briefcase',
        imgUrl: '',
        liveUrl: '',
    },
    {
        title: 'Healthcare Management System',
        description: 'A full-stack healthcare management system integrated with laboratory machines for handling test results.',
        tags: ['Full Stack', 'Lab Integration'], // TODO: add tech stack
        icon: 'health',
        imgUrl: '',
        liveUrl: '',
    },
];

export const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];
