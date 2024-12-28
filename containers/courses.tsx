import CourseCard from "@/components/coursesCart";

const courses = [
    {
        id: 1,
        title: "bootcamp ReactJS-118 maktabsharif",
        name : "Maktabsharif",
        description: "In this comprehensive course, I mastered a variety of advanced web development skills, including the intricacies of Next.js such as App Router, server-side rendering (SSR), incremental static regeneration (ISR), and API routes. I delved deeply into React concepts like JSX, component architecture, hooks, state management (with Context, Reducer, and Redux), and modern React libraries such as Material UI and Tanstack Query. I also enhanced my TypeScript and JavaScript expertise, focusing on OOP, functional programming, and asynchronous handling with promises and callbacks. Additionally, I explored networking concepts like JWT, cookies, REST APIs, and GraphQL, alongside mastering HTML5 and CSS3, including responsive design with Tailwind and Flexbox. Throughout the course, I worked with tools like Node.js, Git, Figma, and Trello to streamline the development process and manage projects effectively.This course gave me the knowledge and hands-on experience needed to build highly performant, scalable, and maintainable web applications.",
        image: "/photo_2024-12-22_18-28-17.jpg",
        link: "https://www.linkedin.com/company/maktabsharif/",
        date : "2024   June - 2025   January"
    },
    {
        id: 2,
        title: "Front-End",
        name : "Sabzlearn",
        description: "Viewing Front-End Courses on SabzLearn",
        image: "/photo_2024-12-22_18-27-37.jpg",
        link: "https://sabzlearn.ir/",
        date : "If needed"
    },
    {
        id: 3,
        title: "Front-End",
        name : "Youtube",
        description: "Viewing Front-End Courses on Youtube",
        image: "/youtube.jpg",
        link: "https://www.youtube.com/",
        date : "evermore"
    },

];
const CoursesSection = () => {
    return (
        <section id="courses" className="py-10">
            <h2 className="text-center text-5xl font-bold mb-6 text-gray-900 dark:text-white">My Courses</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
                Over the years, I've taken numerous courses that have shaped my skills
                as a developer. Below are some of the most impactful ones.
            </p>
            <div className="space-y-3">
                {courses.map((course) => (
                    <CourseCard
                        name={course.name}
                        id={course.id}
                        date={course.date}
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        image={course.image}
                        link={course.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default CoursesSection;