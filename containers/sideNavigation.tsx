"use client";

import { useState } from "react";
import { FaComment, FaBars, FaTimes } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdHomeRepairService } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiContrast2Fill, RiHome3Fill, RiQuillPenAiFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { BsSunFill } from "react-icons/bs";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { Icon: RiHome3Fill, text: "Home", href: "#home" },
        { Icon: GrServices, text: "Services", href: "#services" },
        { Icon: RiQuillPenAiFill, text: "Projects", href: "#projects" },
        { Icon: PiStudentFill, text: "Courses", href: "#courses" },
        { Icon: MdHomeRepairService, text: "Work", href: "#work-history" },
        { Icon: FaComment, text: "Contact", href: "#contact" },
    ];

    return (
        <motion.div
            className={`sticky top-0 z-50 w-full h-24 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                } flex justify-between items-center px-4 sm:px-8 shadow-lg`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Logo or Brand Name */}
            <div className="text-2xl font-bold">bagheri-dev</div>

            {/* Hamburger Menu for Mobile */}
            <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FaTimes className="size-6" />
                ) : (
                    <FaBars className="size-6" />
                )}
            </div>

            {/* Navigation Links */}
            <div
                className={`fixed sm:static top-24 left-0 w-full sm:w-auto h-screen sm:h-auto bg-white dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
                    }`}
            >
                {navLinks.map(({ Icon, text, href }, index) => (
                    <motion.a
                        key={index}
                        href={href}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    >
                        <div
                            className={`p-3 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                                } transition-colors duration-200`}
                        >
                            <Icon
                                className={`size-6 ${darkMode ? "text-white" : "text-gray-800"
                                    } group-hover:text-blue-500 transition-colors duration-200`}
                            />
                        </div>
                        <span className="text-sm font-medium">{text}</span>
                    </motion.a>
                ))}
            </div>

            {/* Theme Toggle */}
            <motion.div
                className="cursor-pointer hidden sm:block"
                onClick={toggleTheme}
                whileHover={{
                    scale: 1.1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                }}
            >
                {darkMode ? (
                    <BsSunFill className="size-8 text-yellow-400 hover:text-yellow-300 transition-colors duration-200" />
                ) : (
                    <RiContrast2Fill className="size-8 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
                )}
            </motion.div>
        </motion.div>
    );
};

export default Header;