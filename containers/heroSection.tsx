import HireMe from "@/components/hireMe";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="home" className="bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-14 py-10">
                <div>
                    <h1 className="text-5xl font-bold mb-5 text-black dark:text-white">
                        I’m Mahdi Bagheri <br />
                        <span className="text-orange-dark">Front-end</span> Developer
                    </h1>
                    <p className="w-[424px] text-gray-500 dark:text-gray-300">
                        Hello, I'm Mahdi Bagheri, a passionate Front-End Developer dedicated to creating beautiful and functional websites. Although I'm early in my career, I bring a strong foundation in web technologies and an eagerness to learn and grow. I believe in the power of clean, user-friendly design and am committed to continuously improving my skills to deliver the best results. Let's work together to bring your digital vision to life.
                    </p>
                    <div className="mt-6">
                        <HireMe />
                    </div>
                </div>
                <div>
                    <Image src={"/favicon.ico"} alt="image" width={325.72} height={459.09} />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
