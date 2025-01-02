"use client";
import { motion } from "framer-motion";

const skillsData = [
    {
        title: "Next.js",
        items: [
            "App router",
            "Component hierarchy and file conventions",
            "Rendering strategies (SSR, ISR, CSR, SSG)",
            "Caching, Performance, and Optimization",
            "API routes, server actions and mutation",
            "Server components and Suspense",
        ],
    },
    {
        title: "React & Libraries",
        items: [
            "JSX and functional components",
            "Components architecture",
            "Atomic design pattern",
            "Lifecycle and reconciles",
            "React design patterns",
            "Hooks pattern",
            "State management by context, reducer and redux, zustand",
            "Redux toolkit",
            "React router",
            "React hook form and zod resolver",
            "Tanstack react query",
            "React component libraries like Material UI and Headless UI",
            "JSS, styled-components, CSS modules",
            "React vite",
        ],
    },
    {
        title: "TypeScript & JavaScript",
        items: [
            "Classes, interfaces, generics, inheritance and polymorphism",
            "Functional programming paradigm",
            "Strongly typed programming",
            "DOM and DOM manipulation",
            "Async functions within promises and callbacks",
            "Vite JS SPA",
            "Client side rendering",
            "Exception handling",
            "Axios and fetching APIs",
            "Events, forms and dates",
        ],
    },
    {
        title: "Network",
        items: [
            "Authorizations strategies like JWT and cookies",
            "REST API & Json",
            "Axios and fetch APIs",
        ],
    },
    {
        title: "HTML & CSS",
        items: [
            "HTML5 and CSS3",
            "Tailwind",
            "RWD (Responsive Web Design)",
            "Media Queries",
            "Flex and grid systems",
            "Animations",
            "Semantic tags",
        ],
    },
    {
        title: "Tools",
        items: [
            "Node.js",
            "Node packages managers",
            "Git, Gitflow",
            "Figma",
            "Trello",
        ],
    },
];

const SkilTabs = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
        hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" },
    };

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        whileHover="hover"
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-primary-color dark:text-white">
                            {skill.title}
                        </h3>
                        <ul className="space-y-2">
                            {skill.items.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-gray-700 dark:text-gray-300 text-sm"
                                >
                                    • {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkilTabs;