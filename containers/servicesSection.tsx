import Service from "@/components/service";

const services = [
    {
        id:1,
        title : "Responsive Web Design",
        desc : "Crafting websites that adapt seamlessly to any device.",
        image : "/responsive-design.png"
    },
    {
        id:2,
        title : "Custom Front-End Development",
        desc : "Designing user-friendly interfaces for a better experience.",
        image : "/front-end-programming.png"
    },
    {
        id:3,
        title : "Performance Optimization",
        desc : "Enhancing speed and efficiency for smooth browsing.",
        image : "/rocket.png"
    },
    {
        id:4,
        title : "UI/UX Design Integration",
        desc : "Ensuring flawless functionality across all browsers.",
        image : "/web-design.png"
    },
    {
        id:5,
        title : "Single Page Applications (SPA)",
        desc : "Adding dynamic animations for interactive user engagement",
        image : "/ux.png"
    },
    {
        id:6,
        title : "Maintenance and Support",
        desc : "We’ll never forget you. Even after designing your website, we’re still here for you.",
        image : "/technical-support.png"
    },
]

const ServicesSection = () => {
    return (
        <section id="services" className="mt-[137.91px]">
            <h2 className="text-center text-5xl font-bold mb-6 text-gray-900 dark:text-white">My Services</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">At Mahdi Bagheri, we offer a comprehensive range of front-end development services designed to bring your digital ideas to life. Whether you need a responsive, user-friendly website, a fast-loading single-page application, or a high-converting landing page, we’ve got you covered. With a keen focus on performance, scalability, and modern design trends, we create web solutions that not only look stunning but also work seamlessly across all devices.By working with us, you’re not just getting a website; you’re investing in a digital experience tailored to your brand's unique vision and goals. Let’s collaborate to build something exceptional!</p>
            <div className="grid grid-cols-3 gap-3 justify-center items-center mt-12">
                {services.map((item) => {
                    return <Service key={item.id} title={item.title} desc={item.desc} image={item.image}/>
                })}
            </div>
        </section>
    );
}

export default ServicesSection;