"use client";
import { motion } from "framer-motion";

type IPortfolioCard = {
    id: number;
    image: string;
    title: string;
    description: string;
    techStack: Array<string>;
    demoLink: string;
    codeLink: string;
};

const PortfolioCard = ({
    id,
    title,
    description,
    image,
    codeLink,
    demoLink,
    techStack,
}: IPortfolioCard) => {
    return (
        <motion.div
            key={id}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        >
            <div className="overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-primary-color mb-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-normal text-gray-700 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-auto">
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-color hover:text-orange-dark text-sm font-medium transition-colors"
                    >
                        View Demo
                    </a>
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-color hover:text-orange-dark text-sm font-medium transition-colors"
                    >
                        View Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;
