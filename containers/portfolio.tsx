"use client"

import PortfolioCard from "@/components/portfolioCard";

const projects = [
    {
        id: 1,
        title: "Travlog",
        description: "A modern and responsive travel website UI designed for showcasing destinations and travel services with visually appealing layouts and user-friendly design, built using Tailwind CSS.",
        image: "/travlog-desktop.png",
        demoLink: "https://demo-ecommerce.com",
        codeLink: "https://github.com/bagheri-dev/travlog",
        techStack: ["Tailwind CSS"],
    },
    {
        id: 2,
        title: "shopet",
        description: "A beautifully designed pet shop website built with React using a fully component-based architecture. The project showcases a stunning UI tailored to enhance user engagement and highlight my front-end design skills.",
        image: "/shopet.png",
        demoLink: "https://myportfolio.com",
        codeLink: "https://github.com/bagheri-dev/shopet",
        techStack: ["React.js", "Tailwind CSS"],
    },
    {
        id: 3,
        title: "Nexcent",
        description: "This project is a modern UI built using React and Tailwind CSS. The goal of this project is to provide an engaging and seamless user experience with clean and optimized code. It includes reusable components, modular design, and customization options for fast and easy web application development.",
        image: "/nexcent-desktop.png",
        demoLink: "https://myportfolio.com",
        codeLink: "https://github.com/bagheri-dev/Nexcent",
        techStack: ["Tailwind CSS" , "React.js" , "vite"],
    },
    {
        id: 4,
        title: "Nexcent",
        description: "This is a simple UI project built to learn and practice Flexbox. The project focuses on creating responsive layouts using Flexbox, making it easier to understand and apply the core concepts of Flexbox in real-world web development scenarios.",
        image: "/flex-learning-desktop.png",
        demoLink: "https://myportfolio.com",
        codeLink: "https://github.com/bagheri-dev/Project-flex-learning",
        techStack: ["flex box" , "javascript"],
    },
];

const Portfolio = () => {
    return (
        <section className="my-20 px-6 lg:px-16">
            <h2 className="text-center text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                My Portfolio
            </h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
                A showcase of my journey as a front-end developer. Each project reflects my commitment to innovation, creativity, and technical excellence.
            </p>

            <div className="grid grid-cols-3 gap-10">
                {projects.map((project) => (
                    <PortfolioCard key={project.id} id={project.id} title={project.title}  description={project.description}  image={project.image}  codeLink={project.codeLink}  demoLink={project.demoLink} techStack={project.techStack} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
