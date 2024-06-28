import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Development Consultantacy",
        company_name: "Sekiz Information Technologies",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "2023 - Present",
        points: [
            "Developing and maintaining test cases using Java Selenium and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Sr SDET",
        company_name: "Gojek",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "2020 - 2023",
        points: [
            "Developing and maintaining test cases using Appium and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "SDET",
        company_name: "TestVagrant technologies",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "2017 - 2020",
        points: [
            "Developing and maintaining test cases using Selenium Java and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality test products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "ThoughtWorks Technologies",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "2013 - 2017",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/soumyaghosh13',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/soumya-ghosh13/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Comment Box Expres',
        description: 'Developed a web application to post comment anonymously.',
        link: 'https://github.com/soumyaghosh13/Comment_Box_Express',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Book Catalog',
        description: 'Created a book catalog for maintain a library.',
        link: 'https://github.com/soumyaghosh13/bookCatalog',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Unix tools',
        description: 'Designed and built all unix tools in java as fun project.',
        link: 'https://github.com/soumyaghosh13/unix-tools',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Solve any math expression',
        description: 'Built a complete calculator for any math expression.',
        link: 'https://github.com/soumyaghosh13/expression-evaluator',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Cucumber Selenium Basics',
        description: 'Developed a basic web automation framework with cucumber and selenium.',
        link: 'https://github.com/soumyaghosh13/cucumberSeleniumBasics',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Portfolio Website',
        description: 'Create a portfolio website that looks like a game using react and threejs.',
        link: 'https://github.com/soumyaghosh13/portfolioWebsite',
    }
];