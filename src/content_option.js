import Logo from "../../react-portfolio/src/assets/images/0ZERXZ.png"
import Logo2 from "./assets/images/2148397845.jpg"
const logotext = "GUILHERME R.";
const meta = {
    title: "0ZERXZ",
    description: "I’m Guilherme R. Cybersecurity Student _ Full stack devloper, currently working in Brazil.",
};

const introdata = {
    title: "I’m Guilherme R.",
    animated: {
        first: "I Love Code,",
        second: "Create,",
        third: "Explore.",
    },
    description: "I strive to help others see the world as a better place.",
    your_img_url: Logo,
};

const dataabout = {
    title: "About My Self",
    aboutme: "Ever since I was a child, I've been fascinated by how things work. I believe curiosity is one of the most essential qualities for human evolution. I found my place in the field of technology, where I am always seeking to deepen my knowledge in various subjects and form new connections.",
};
const worktimeline = [{
        jobtitle: "Ethical Offensive Security",
        where: "Freelancer",
        date: "2025 - Present",
    },
    {
        jobtitle: "Operations Coordinator",
        where: "Bacio di Latte",
        date: "2023 - 2024",
    },
    {
        jobtitle: "Brazilian Army",
        where: "Support Technician & Security",
        date: "2021 - 2022",
    },
    {
        jobtitle: "Graphic Designer",
        where: "Freelancer",
        date: "2019 - Present",
    },
];

const skills = [{
        name: "JavaScript",
        value: 58,
    },
    {
        name: "HTML",
        value: 71,
    },
    {
        name: "CSS",
        value: 70,
    },
    {
        name: "React",
        value: 40,
    },
    {
        name: "Python",
        value: 30,
    },
];

const dataportfolio = [{
        img: Logo2,
        description: "My Behance.",
        link: "https://www.behance.net/Guilherme-S-R",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Plans.",
        link: "#",
    },
];
const contactConfig = {
    YOUR_EMAIL: "guilhermeverfocused@gmail.com",
    YOUR_FONE: "+55 (61) 99810-8308",
    description: "With over six years of experience as a graphic designer, I have decided to transition into the field of cybersecurity. While my passion for design remains, I am now seeking new horizons and opportunities for my career. I still keep up with the latest design trends whenever possible, as I never want to forget my creative roots.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_sh7dzcs",
    YOUR_TEMPLATE_ID: "template_ogl0msi",
    YOUR_USER_ID: "d2mKOHRSQ9Ham6qYu",
};

const socialprofils = {
    github: "https://github.com/Guilherme-S-R",
    behance: "https://www.behance.net/Guilherme-S-R",
    linkedin: "https://www.linkedin.com/in/guilherme-s-ramos/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};