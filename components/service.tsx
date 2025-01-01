"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type IService = {
    title: string;
    desc: string;
    image: string;
};

const Service = ({ title, desc, image }: IService) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const imageVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };

    return (
        <motion.div
            variants={{
                ...cardVariants,
                hover: { scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover="hover"
            className="bg-white dark:bg-gray-800 py-[76px] pt-7 pb-10 px-8 shadow-md rounded-lg hover:shadow-lg transition-all duration-300"
        >
            <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex justify-center items-center mb-6"
            >
                <Image src={image} alt={title} width={68} height={68} />
            </motion.div>
            <h3 className="mb-3 text-lg font-medium text-center text-gray-900 dark:text-white">
                {title}
            </h3>
            <p className="text-center text-[#767676] dark:text-gray-300 line-clamp-2" title={desc}>
                {desc}
            </p>
        </motion.div>
    );
};

export default Service;