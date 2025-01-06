import Service from "@/components/service";

const services = [
    {
        id: 1,
        title: "Responsive Web Design",
        desc: "Crafting websites that adapt seamlessly to any device.",
        image: "/responsive-design.png",
    },
    {
        id: 2,
        title: "Custom Front-End Development",
        desc: "Designing user-friendly interfaces for a better experience.",
        image: "/front-end-programming.png",
    },
    {
        id: 3,
        title: "Performance Optimization",
        desc: "Enhancing speed and efficiency for smooth browsing.",
        image: "/rocket.png",
    },
    {
        id: 4,
        title: "UI/UX Design Integration",
        desc: "Ensuring flawless functionality across all browsers.",
        image: "/web-design.png",
    },
    {
        id: 5,
        title: "Single Page Applications (SPA)",
        desc: "Adding dynamic animations for interactive user engagement",
        image: "/ux.png",
    },
    {
        id: 6,
        title: "Maintenance and Support",
        desc: "We’ll never forget you. Even after designing your website, we’re still here for you.",
        image: "/technical-support.png",
    },
];

const ServicesSection = () => {
    return (
        <section className="mt-10 lg:mt-24 px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                My Services
            </h2>
            <p className="text-center text-base sm:text-lg text-gray-600 dark:text-gray-300 mx-auto">
            At Mahdi Bagheri, we provide top-notch front-end development services to bring your digital ideas to life. From responsive websites to fast-loading SPAs and high-converting landing pages, we focus on performance, scalability, and modern design. We create stunning, seamless web solutions tailored to your brand's vision. Let’s build something exceptional together!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mt-12">
                {services.map((item) => (
                    <Service key={item.id} title={item.title} desc={item.desc} image={item.image} />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;