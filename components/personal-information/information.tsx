import Image from "next/image";
import SocialMedia from "../socialMedia";
import { Progress } from "@/components/ui/progress";
import CVBtn from "../cvBtn";

const Information = () => {
    return (
        <div className="child:border-b child:border-b-gray-400 child:pb-6 bg-white text-black dark:bg-gray-900 dark:text-white">
            {/* Information */}
            <div>
                <div className="mb-8 flex items-center justify-center">
                    <Image src="/personal.png" alt="mahdibagheri" width={144} height={144}  className="ml-8 rounded-full"/>
                </div>
                <div className="text-center mb-4">
                    <h2 className="text-lg mb-4">Mahdi Bagheri</h2>
                    <span className="text-gray-500 dark:text-gray-400">Front-End Developer</span>
                </div>
                <div>
                    <SocialMedia />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 pt-6">
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
            </div>
            {/* Skills */}
            <div className="space-y-3 pt-6">
                <h3 className="text-center text-lg font-bold dark:text-gray-200">SKILLS</h3>
                <div>
                    <h3 className="dark:text-gray-300">HTML</h3>
                    <div className="flex items-center">
                        <Progress value={98} />
                        <span className="dark:text-gray-300">98%</span>
                    </div>
                </div>
                <div>
                    <h3 className="dark:text-gray-300">CSS</h3>
                    <div className="flex items-center gap-x-1">
                        <Progress value={85} />
                        <span className="dark:text-gray-300">85%</span>
                    </div>
                </div>
                <div>
                    <h3 className="dark:text-gray-300">Javascript</h3>
                    <div className="flex items-center gap-x-1">
                        <Progress value={90} />
                        <span className="dark:text-gray-300">90%</span>
                    </div>
                </div>
                <div>
                    <h3 className="dark:text-gray-300">React</h3>
                    <div className="flex items-center gap-x-1">
                        <Progress value={80} />
                        <span className="dark:text-gray-300">80%</span>
                    </div>
                </div>
                <div>
                    <h3 className="dark:text-gray-300">NEXT.js</h3>
                    <div className="flex items-center gap-x-1">
                        <Progress value={70} />
                        <span className="dark:text-gray-300">70%</span>
                    </div>
                </div>
            </div>
            {/* Extra Skills */}
            <div className="pt-6">
                <h3 className="text-lg font-bold text-center mb-6 dark:text-gray-200">Extra Skills</h3>
                <Image
                    src="/icons.svg"
                    alt="skills"
                    width={400}
                    height={100}
                />
            </div>
            {/* Languages */}
            <div className="flex items-center justify-between pt-6">
                <h3 className="font-bold dark:text-gray-200">Languages:</h3>
                <span className="dark:text-gray-300">Intermediate</span>
            </div>
            {/* Download CV */}
            <div className="pt-6">
                <CVBtn />
            </div>
        </div>
    );
};

export default Information;
