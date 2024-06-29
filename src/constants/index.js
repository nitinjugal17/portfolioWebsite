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
        title: "Web Development Services",
        company_name: "Sekiz Information Technologies",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "10 years",
        points: [
            "Needs Assessment and Strategy: We begin by thoroughly assessing clients' requirements and business objectives. Then craft tailored strategies for website design, functionality, and user experience to meet those specific needs.",
            "Advanced Technologies and Practices: Utilizing the latest technologies and best practices in web development, we build robust, scalable, and secure websites. This ensures that the websites are not only functional but also future-proof.",
            "Seamless Integration: We ensure that websites integrate smoothly with various platforms and tools, such as content management systems (CMS), e-commerce solutions, and customer relationship management (CRM) software. This integration enhances overall website functionality and user experience.",
            "Ongoing Support and Optimization: Beyond initial development, we provide continuous support and optimization services. We analyze website performance, implement necessary improvements, and ensure the site remains efficient and effective in meeting business goals.",
        ],
    },
    {
        title: "Testing and Automation Services",
        company_name: "Sekiz Information Technologies",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "10 years",
        points: [
            "Evaluation and Strategy Design: We assess the client's current testing processes and identify areas for improvement. They then design and implement customized automation strategies tailored to the client's specific goals.",
            "Advanced Tools and Frameworks: Utilizing cutting-edge tools and frameworks, we create automated test scripts. This ensures comprehensive test coverage, repeatability, and accuracy, reducing the likelihood of human error in testing.",
            "Integration with CI/CD Pipelines: We integrate automated testing into the development pipeline, enabling continuous integration and delivery (CI/CD). This allows for faster, more reliable software releases, enhancing overall development efficiency.",
            "Training and Support: Beyond implementation, we provide training and ongoing support to the client's team. This ensures the team can effectively maintain, update, and expand the automated testing suite, fostering long-term success and self-sufficiency in test automation practices.",
        ],
    },
    {
        title: "Hardware Consultancy Services",
        company_name: "Sekiz Information Technologies",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "5 years",
        points: [
            "Needs Assessment and Requirements Gathering: We begin by assessing the client’s needs and gathering detailed requirements. We evaluate the current hardware infrastructure, identify gaps, and recommend appropriate hardware solutions to meet the client’s operational goals.",
            "Customized Hardware Solutions: We design and propose tailored hardware solutions that align with the client's specific needs. This includes selecting the right components, such as servers, storage devices, networking equipment, and peripherals, to optimize performance and efficiency.",
            "Implementation and Integration: Once the hardware solutions are selected, we oversee the implementation and integration process. We ensure that the new hardware works seamlessly with existing systems, minimizing downtime and disruption to the business.",
            "Ongoing Support and Maintenance: We provide ongoing support and maintenance services to ensure the longevity and optimal performance of the hardware infrastructure. They offer troubleshooting, upgrades, and regular maintenance to prevent issues and keep the systems running smoothly.",
        ],
    },
    {
        title: "Security Consultancy Services",
        company_name: "Sekiz Information Technologiess",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "5 years",
        points: [
            "Risk Assessment and Analysis: We conduct thorough risk assessments to identify vulnerabilities within a client's IT infrastructure. We analyze potential threats and the impact of various security breaches, providing a comprehensive understanding of the organization's security posture.",
            "Customized Security Strategies: Based on the risk assessment, we develop tailored security strategies and policies. These strategies encompass a range of security measures, including network security, data protection, access control, and incident response plans, ensuring robust protection against cyber threats.",
            "Implementation of Security Solutions: We oversee the implementation of security measures, including deploying firewalls, intrusion detection systems, encryption protocols, and other security technologies. We ensure these solutions are integrated effectively within the existing IT environment.",
            "Training and Ongoing Support: We provide training to employees on best practices for maintaining security and recognizing potential threats. Additionally, we offer ongoing support and monitoring services to continuously assess and improve the security infrastructure, ensuring long-term protection and compliance with industry standards.",
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
        description: 'Developed a web application to post comment or discuss anonymously.',
        link: 'https://github.com/soumyaghosh13/Comment_Box_Express',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Book Catalog',
        description: 'Created a book catalog for maintain a library or just use as inventory management',
        link: 'https://github.com/soumyaghosh13/bookCatalog',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Unix tools',
        description: 'Designed and built all unix tools like head tails in java as fun project.',
        link: 'https://github.com/soumyaghosh13/unix-tools',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Solve any math expression',
        description: 'Built a complete calculator for any complex math expression step by step.',
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
        description: 'Create a fun portfolio website that looks like a game using react and threejs.',
        link: 'https://github.com/soumyaghosh13/portfolioWebsite',
    }
];