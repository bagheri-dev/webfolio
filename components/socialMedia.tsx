"use client";

import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";

const SocialMedia = () => {
    return (
        <div className="flex items-center justify-center gap-x-4 text-white">
            <motion.div
                className="flex items-center justify-center size-6 bg-secondary-color rounded-full p-1 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a href=""><FaTelegramPlane /></a>
            </motion.div>
            <motion.div
                className="flex items-center justify-center size-6 bg-secondary-color rounded-full p-1 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a href="https://www.linkedin.com/in/mahdi-bagheri-dev/"><FaLinkedinIn /></a>
            </motion.div>
            <motion.div
                className="flex items-center justify-center size-6 bg-secondary-color rounded-full p-1 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a href="https://github.com/bagheri-dev"><FaGithub /></a>
            </motion.div>
            <motion.div
                className="flex items-center justify-center size-6 bg-secondary-color rounded-full p-1 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <a href="mailto:bagheri.develop@gmail.com"><TfiEmail /></a>
            </motion.div>
        </div>
    );
};

export default SocialMedia;
