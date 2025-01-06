"use client";
import { motion } from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaTools,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript,} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillsData = [
    {
        title: "Next.js",
        icon: <SiNextdotjs className="w-6 h-6 text-blue-600" />,
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
        icon: <FaReact className="w-6 h-6 text-blue-500" />,
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
        icon: <SiTypescript className="w-6 h-6 text-blue-400" />,
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
        icon: <TbApi className="w-6 h-6 text-green-500" />,
        items: [
            "Authorizations strategies like JWT and cookies",
            "REST API & Json",
            "Axios and fetch APIs",
        ],
    },
    {
        title: "HTML & CSS",
        icon: <FaHtml5 className="w-6 h-6 text-orange-500" />,
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
        icon: <FaTools className="w-6 h-6 text-gray-500" />,
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

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
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
                        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform"
                    >
                        <div className="flex items-center mb-4">
                            {/* آیکون */}
                            <div className="mr-3">
                                {skill.icon}
                            </div>
                            {/* عنوان */}
                            <h3 className="text-xl font-semibold text-primary-color dark:text-white">
                                {skill.title}
                            </h3>
                        </div>
                        <ul className="space-y-2">
                            {skill.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="text-gray-700 dark:text-gray-300 text-sm flex items-center"
                                >
                                    <span className="w-2 h-2 bg-primary-color rounded-full mr-2"></span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkilTabs;