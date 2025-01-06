"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import PortfolioCard from "@/components/portfolioCard";

const projects = [
    {
        id: 1,
        title: "Travlog",
        description: "A modern and responsive travel website UI designed for showcasing destinations and travel services with visually appealing layouts and user-friendly design, built using Tailwind CSS.",
        image: "/travlog-desktop.png",
        demoLink: "https://bagheri-dev.github.io/travlog/",
        codeLink: "https://github.com/bagheri-dev/travlog",
        techStack: ["Tailwind CSS"],
    },
    {
        id: 2,
        title: "shopet",
        description: "A beautifully designed pet shop website built with React using a fully component-based architecture. The project showcases a stunning UI tailored to enhance user engagement and highlight my front-end design skills.",
        image: "/shopet.png",
        demoLink: "https://bagheri-dev.github.io/shopet/",
        codeLink: "https://github.com/bagheri-dev/shopet",
        techStack: ["React.js", "Tailwind CSS"],
    },
    {
        id: 3,
        title: "Nexcent",
        description: "This project is a modern UI built using React and Tailwind CSS. The goal of this project is to provide an engaging and seamless user experience with clean and optimized code. It includes reusable components, modular design, and customization options for fast and easy web application development.",
        image: "/nexcent-desktop.png",
        demoLink: "https://bagheri-dev.github.io/Nexcent/",
        codeLink: "https://github.com/bagheri-dev/Nexcent",
        techStack: ["Tailwind CSS", "React.js", "vite"],
    },
    {
        id: 4,
        title: "golden coffee shop",
        description: "Welcome to Golden Coffee Shop, an elegant and fully responsive online platform for selling coffee! Built with Next.js, this project combines performance, scalability, and modern design to deliver an exceptional user experience for coffee lovers worldwide.",
        image: "/golden-coffee-shop.png",
        demoLink: "https://golden-coffee-shop.vercel.app/",
        codeLink: "https://github.com/bagheri-dev/golden-coffee-shop",
        techStack: ["Next JS", "Tailwind CSS", "Axios", "react-hook-form", "zod", "zustand"],
    },
];

const Portfolio = () => {
    return (
        <section id="projects" className="mt-10 lg:mt-24 py-4 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    My Portfolio
                </h2>
                <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    A showcase of my journey as a front-end developer. Each project reflects my commitment to innovation, creativity, and technical excellence. For a deeper dive into my full portfolio and more projects, feel free to explore my GitHub.
                </p>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="swiper-container"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="swiper-slide">
                            <PortfolioCard
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                codeLink={project.codeLink}
                                demoLink={project.demoLink}
                                techStack={project.techStack}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Portfolio;