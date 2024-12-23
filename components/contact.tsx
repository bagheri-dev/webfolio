"use client";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"; // برای انیمیشن‌های بیشتر

const Contact = () => {
    return (
        <div className="flex justify-center items-center gap-x-9">
            <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <a href="mailto:bagheri.develop@gmail.com" className="text-4xl text-gray-800 dark:text-white hover:text-primary-color" target="_blank">
                    <MdEmail />
                </a>
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <a href="https://t.me/bagheri_dev01" className="text-4xl text-gray-800 dark:text-white hover:text-primary-color" target="_blank">
                    <FaTelegram />
                </a>
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <a href="https://www.linkedin.com/in/mahdi-bagheri-dev/" className="text-4xl text-gray-800 dark:text-white hover:text-primary-color" target="_blank">
                    <FaLinkedin />
                </a>
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <a href="https://github.com/bagheri-dev" className="text-4xl text-gray-800 dark:text-white hover:text-primary-color" target="_blank">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </div>
    );
};

export default Contact;
