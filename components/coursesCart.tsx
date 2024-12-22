"use client"

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
}

const CourseCard = ({ id, name, title, description, date, link, image }: ICourseCard) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        >
            <div className="flex items-center gap-6 mb-6">
                <div className="flex-shrink-0">
                    <Image src={image} alt={name} width={120} height={120} className="rounded-full" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
                    <p className="bg-primary-color text-white text-xs p-2 rounded-md text-center">{date}</p>
                </div>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
                <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">Academy: <a href={link} className="text-blue-600 hover:underline" target="_blank">{name}</a></h4>
                <p className={`text-sm ${isExpanded ? "" : "line-clamp-3"}`}>
                    {description}
                </p>
                <button 
                    onClick={toggleDescription} 
                    className="text-blue-600 dark:text-blue-400 mt-2 hover:underline">
                    {isExpanded ? "Show Less" : "Read More"}
                </button>
            </div>
        </motion.div>
    );
};

export default CourseCard;