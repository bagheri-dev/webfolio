"use client"
import { motion } from "framer-motion";

const WorkHistory = () => {
    return (
        <section id="work-history" className="py-10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
                Work History
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12"
            >
                As a junior developer, I don't have formal work experience yet, but I have dedicated myself to acquiring strong foundational skills in front-end development. Over the past months, I've been actively working on personal projects, contributing to open-source communities, and participating in online courses and bootcamps to enhance my knowledge.
                <br /><br />
                I'm deeply passionate about continuous learning and am eager to apply the skills I've learned in real-world scenarios. My ability to quickly adapt to new technologies, combined with my problem-solving mindset, makes me confident that I can contribute effectively to any team. I'm excited about the opportunity to grow professionally and bring value to your organization.
            </motion.p>
        </section>
    );
};

export default WorkHistory;
