import SkilTabs from "@/components/skilTabs";

const Skils = () => {
    return (
        <section id="services" className="py-10">
            <h2 className="text-center text-5xl font-bold mb-6 text-gray-900 dark:text-white">Skils</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">Exploring the tools and technologies I’ve mastered so far, while constantly learning and growing in my journey as a front-end developer.</p>
            <SkilTabs />
        </section>
    );
}

export default Skils;