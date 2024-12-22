"use client"

import Image from "next/image";
import { motion } from "framer-motion";

type IService = {
    title: string;
    desc: string;
    image: string;
};

const Service = ({ title, desc, image }: IService) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 py-[76px] pt-7 pb-10 px-8 shadow-md rounded-lg"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="flex justify-center items-center mb-6"
            >
                <Image src={image} alt={title} width={68} height={68} />
            </motion.div>
            <h3 className="mb-3 text-lg font-medium text-center text-gray-900 dark:text-white">{title}</h3>
            <p className="text-center text-[#767676] dark:text-gray-300 line-clamp-2" title={desc}>{desc}</p>
        </motion.div>
    );
};

export default Service;
