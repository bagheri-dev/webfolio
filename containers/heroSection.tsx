"use client"; // برای استفاده از useEffect و useState

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import HireMe from "@/components/hireMe";
import Image from "next/image";

const HeroSection = () => {
    // ایجاد ref برای عناصر متن
    const typedTextRef1 = useRef(null); // برای "I’m Mahdi Bagheri"
    const typedTextRef2 = useRef(null); // برای "Front-end Developer"

    useEffect(() => {
        // تنظیمات Typed.js برای "I’m Mahdi Bagheri"
        const options1 = {
            strings: ["I’m Mahdi Bagheri"],
            typeSpeed: 50, // سرعت تایپ
            backSpeed: 30, // سرعت پاک کردن
            startDelay: 500, // تاخیر قبل از شروع
            showCursor: true, // نمایش مکان‌نما
            cursorChar: "|", // شکل مکان‌نما
            loop: true, // اجرای لوپ
        };

        // تنظیمات Typed.js برای "Front-end Developer"
        const options2 = {
            strings: ["Front-end Developer"],
            typeSpeed: 50, // سرعت تایپ
            backSpeed: 30, // سرعت پاک کردن
            startDelay: 2000, // تاخیر قبل از شروع (بعد از اتمام انیمیشن اول)
            showCursor: false, // عدم نمایش مکان‌نما
            loop: true, // اجرای لوپ
        };

        // مقداردهی Typed.js برای هر دو متن
        const typed1 = new Typed(typedTextRef1.current, options1);
        const typed2 = new Typed(typedTextRef2.current, options2);

        // پاک کردن Typed.js هنگام unmount
        return () => {
            typed1.destroy();
            typed2.destroy();
        };
    }, []);

    return (
        <section id="home" className="bg-white dark:bg-gray-800 rounded-lg mt-5 w-[75%]">
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-14 py-10">
                {/* متن و توضیحات */}
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold mb-5 text-black dark:text-white">
                        {/* ارتفاع ثابت برای "I’m Mahdi Bagheri" */}
                        <div style={{ height: "60px", whiteSpace: "nowrap" }}>
                            <span ref={typedTextRef1}></span>
                        </div>
                        <div style={{ height: "60px", whiteSpace: "nowrap" }}>
                            <span className="text-orange-dark" ref={typedTextRef2}></span>
                        </div>
                    </h1>
                    <p className="w-full md:w-[424px] text-gray-500 dark:text-gray-300">
                        Hello, I'm Mahdi Bagheri, a passionate Front-End Developer dedicated to creating beautiful and functional websites. Although I'm early in my career, I bring a strong foundation in web technologies and an eagerness to learn and grow. I believe in the power of clean, user-friendly design and am committed to continuously improving my skills to deliver the best results. Let's work together to bring your digital vision to life.
                    </p>
                    <div className="mt-6">
                        <HireMe />
                    </div>
                </div>

                {/* تصویر */}
                <div className="order-1 md:order-2 mb-8 md:mb-0">
                    <Image
                        src={"/icons-about-programmers-work-with-part-code-programmer-looking-bugs_Nero AI_background_remover_edit.png"}
                        alt="image"
                        width={350}
                        height={459.09}
                        className="w-full h-auto max-w-[300px] md:max-w-[450px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;