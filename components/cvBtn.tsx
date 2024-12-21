"use client";

import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const CVBtn = () => {
    return (
        <motion.div
            className="flex justify-center items-center bg-secondary-color rounded-lg p-2 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, backgroundColor: "#D1884F" }}
            whileTap={{ scale: 0.95 }}
        >
            <button className="font-semibold py-2 px-4 text-white">
                Download CV
            </button>
            <MdOutlineFileDownload className="size-6 text-white ml-2" />
        </motion.div>
    );
};

export default CVBtn;
