"use client";
import Image from "next/image";
import SocialMedia from "../socialMedia";
import { motion } from "framer-motion";

const Information = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 child:border-b child:border-b-gray-400 child:pb-6 bg-white text-black dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-xl"
        >
            {/* Information */}
            <div>
                <div className="mb-8 flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="/personal-image.png"
                            alt="mahdibagheri"
                            width={144}
                            height={144}
                            className="rounded-full border-4 border-secondary-color dark:border-gray-700"
                        />
                    </motion.div>
                </div>
                <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold mb-4">Mahdi Bagheri</h2>
                    <span className="text-gray-500 dark:text-gray-400">Front-End Developer</span>
                </div>
                <div className="flex justify-center">
                    <SocialMedia />
                </div>
            </div>

            {/* Details */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-y-2 pt-6"
            >
                <div className="flex items-center justify-between">
                    <span className="bg-secondary-color text-white p-1 rounded-md dark:bg-gray-700">Age:</span>
                    <span className="dark:text-gray-300">21</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="bg-secondary-color text-white p-1 rounded-md dark:bg-gray-700">Military Service:</span>
                    <span className="font-semibold text-green-500 dark:text-green-400">Completed</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="bg-secondary-color text-white p-1 rounded-md dark:bg-gray-700">Address:</span>
                    <span className="dark:text-gray-300">Iran-Tehran</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Information;