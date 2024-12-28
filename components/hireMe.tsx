"use client"

import { GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";

const HireMe = () => {
    return (
        <motion.button
            className="font-medium flex justify-center items-center gap-x-2 py-4 px-8 bg-primary-color text-white rounded"
            whileHover={{
                scale: 1.1,
                rotate: 3,
                backgroundColor: "#D1884F",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
        >
            <a className="flex items-center gap-x-2" href="tel:09153405360">
                HIRE ME
                <GoChevronRight />
            </a>
        </motion.button>
    );
}

export default HireMe;
