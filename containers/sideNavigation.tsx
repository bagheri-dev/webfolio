"use client";

import { useState } from "react";
import { FaComment } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdHomeRepairService } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiContrast2Fill, RiHome3Fill, RiQuillPenAiFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { BsSunFill } from "react-icons/bs";

const SideNavigation = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const navLinks = [
        { Icon: RiHome3Fill, href: "#home" },
        { Icon: GrServices, href: "#services" },
        { Icon: PiStudentFill, href: "#courses" },
        { Icon: MdHomeRepairService, href: "#work-history" },
        { Icon: RiQuillPenAiFill, href: "#projects" },
        { Icon: FaComment, href: "#contact" },
    ];

    return (
        <motion.div
            className={`fixed right-0 top-0 w-[108px] h-screen ${darkMode ? "bg-gray-800 text-black" : "bg-white text-black"
                }`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col items-center">
                {/* Theme Toggle */}
                <motion.div
                    className="mb-28 pt-10 cursor-pointer"
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
                        <BsSunFill className="size-8 text-yellow-500" />
                    ) : (
                        <RiContrast2Fill className="size-8 text-gray-700" />
                    )}
                </motion.div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-10 child:size-10 child:rounded-full pb-10">
                    {navLinks.map(({ Icon, href }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            className="flex justify-center items-center size-10 bg-gray-normal rounded-full cursor-pointer"
                            whileHover={{ scale: 1.3, backgroundColor: "#3BBADB" }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SideNavigation;
