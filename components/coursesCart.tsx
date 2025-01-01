"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ICourseCard = {
    id: number;
    title: string;
    name: string;
    description: string;
    image: string;
    link: string;
    date: string;
};

const CourseCard = ({ id, name, title, description, date, link, image }: ICourseCard) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    // انیمیشن‌ها
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const descriptionVariants = {
        expanded: { height: "auto" },
        collapsed: { height: "4.5em" },
    };

    return (
        <motion.div
            key={id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <div className="flex items-center gap-6 mb-6">
                <div className="flex-shrink-0">
                    <Image src={image} alt={name} width={120} height={120} className="rounded-full" />
                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
                    <span className="flex-shrink-0 bg-primary-color text-white text-xs p-2 rounded-md text-center">{date}</span>
                </div>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
                <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">
                    Academy: <a href={link} className="text-blue-600 hover:underline" target="_blank">{name}</a>
                </h4>
                <motion.p
                    variants={descriptionVariants}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-sm overflow-hidden"
                >
                    {description}
                </motion.p>
                <button
                    onClick={toggleDescription}
                    className="text-blue-600 dark:text-blue-400 mt-2 hover:underline"
                >
                    {isExpanded ? "Show Less" : "Read More"}
                </button>
            </div>
        </motion.div>
    );
};

export default CourseCard;