import pokedex from './assets/images/pokedex.png'
import leafNow from './assets/images/leafNow.png'
import quoticly from './assets/images/quoticly.png'
import netlive from './assets/images/netlive.png'
import virtual from './assets/images/virtual.png'
import weather from './assets/images/weather.png'

const logotext = "AMAN";
const meta = {
    title: "Aman Yadav",
    description: "I’m Aman Yadav, a Software Engineer with expertise in full-stack development, currently working in Bangalore.",
};

const introdata = {
    title: "I’m Aman Yadav",
    animated: {
        first: "Passionate Software Developer",
        second: "I build scalable and responsive web applications",
        third: "Design Thinking Innovator",
    },
    description: "Experienced Software Engineer with expertise in Java and JavaScript. Specializes in project development using React, Redux, Node.js, MongoDB, PostgreSQL, MSSQL, Bootstrap, andMaterial UI. Aims to innovate and contribute to impactful projects.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Experienced Software Engineer with expertise in Java and JavaScript. Specializes in project development using React, Redux, Node.js, MongoDB, PostgreSQL, MSSQL, Bootstrap, andMaterial UI. Aims to innovate and contribute to impactful projects.",
};
const worktimeline = [{
        jobtitle: "Software Developer",
        where: "SLK Software Services Pvt. Ltd.",
        date: "Sept 2023 - Present",
    },
    {
        jobtitle: "Software Developer Intern",
        where: "Growth Guide",
        date: "May 2023 - July 2023",
    },
    {
        jobtitle: "Full Stack Web Developer Intern",
        where: "Compsoft Technologies",
        date: "May 2022 - July 2022",
    },
];

const skills = [{
        name: "React.js",
        value: 85,
    },
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "HTML/CSS",
        value: 80,
    },
    {
        name: "Node.js",
        value: 70,
    },
    {
        name: "MongoDB",
        value: 65,
    },
    {
        name: "MySQL",
        value: 65,
    },
    {
        name: "Express.js",
        value: 75,
    },
];

const services = [
    {
        title: "Software Engineer",
        description: "Experienced software engineer with expertise in Java and JavaScript. Specializes in project development using React, Redux, Node.js, MongoDB, PostgreSQL. Bootstrap and Material UI are also used to enhance visual projects.",
    },
    {
        title: "Freelancer",
        description: "Provided freelance services from May 2024 - Present. Roles included full-stack developer with a focus on MERN stack technologies.",
    },
    {
        title: "React Development",
        description: "React based software services for clients and users.",
    },
];


const dataportfolio = [{
        img: pokedex,
        description: "Explore the Pokemon universe with ease.",
        link: "https://pokedex-aman.vercel.app/",
    },
    {
        img: netlive,
        description: "Your favorite shows, your way.",
        link: "https://netlive-aman.netlify.app/",
    },
    {
        img: leafNow,
        description: "Planting trees, one click at a time. Seed Donation website with additional feature of charity donation.",
        link: "https://leaf-now.netlify.app/",
    },
    {
        img: virtual,
        description: "Dive into a world of e-books, manga, and comics.",
        link: "https://virtualvolumes.vercel.app/",
    },
    {
        img: quoticly,
        description: "Get inspired with trending quotes.",
        link: "https://quoticly.vercel.app/",
    },
    {
        img: weather,
        description: "Simple, accurate weather updates.",
        link: "https://weather-app-amany.netlify.app/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "amxn.yadav@gmail.com",
    YOUR_FONE: "+91 8707841420",
    description: "Experienced Software Engineer with expertise in Java and JavaScript. Specializes in project development using React, Redux, Node.js, MongoDB, PostgreSQL, MSSQL, Bootstrap, andMaterial UI. Aims to innovate and contribute to impactful projects.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Aman-Yadav-1/",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/aman-yadav-ay/",
    twitter: "https://x.com/amanyadav_ay69/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
