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
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const hoverVariants = {
        hover: { scale: 1.02, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" },
    };

    const imageHoverVariants = {
        hover: { scale: 1.1 },
    };

    return (
        <motion.div
            key={id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover="hover"
            className="relative group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
        >
            <motion.div
                className="overflow-hidden"
                whileHover={imageHoverVariants.hover}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-52 object-cover transition-transform duration-300"
                />
            </motion.div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-primary-color mb-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="text-xs bg-gray-normal text-gray-700 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300 cursor-pointer"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-auto">
                    <motion.a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-secondary-color hover:text-orange-dark text-sm font-medium transition-colors"
                    >
                        View Demo
                    </motion.a>
                    <motion.a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-secondary-color hover:text-orange-dark text-sm font-medium transition-colors"
                    >
                        View Code
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;