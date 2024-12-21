import Image from "next/image";
import SocialMedia from "../socialMedia";
import { Progress } from "@/components/ui/progress"
import CVBtn from "../cvBtn";

const Information  = () => {
    return (
        <div className="child:border-b child:border-b-gray-400 child:pb-6">
            {/* Information */}
            <div>
                <div className="mb-8 flex items-center justify-center">
                    <Image src="/favicon.ico" alt="mahdibagheri" width={144} height={144}/>
                </div>
                <div className="text-center mb-4">
                    <h2 className="text-lg mb-4">Mahdi bagheri</h2>
                    <span className="text-gray-500">Front-End Developer</span>
                </div>
                <div>
                    <SocialMedia />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 pt-6">
                <div className="flex items-center justify-between"><span className="bg-secondary-color text-white p-1 rounded-md">Age:</span><span>21</span></div>
                <div className="flex items-center justify-between"><span className="bg-secondary-color text-white p-1 rounded-md">military service:</span><span className="font-semibold text-green-500">Completed</span></div>
                <div className="flex items-center justify-between"><span className="bg-secondary-color text-white p-1 rounded-md">Address:</span><span>Iran-Tehran</span></div>
            </div>
            {/* Skils */}
            <div className="space-y-3 pt-6">
                <h3 className="text-center text-lg font-bold">SKILS</h3>
                <div>
                    <h3>HTML</h3>
                    <div className="flex items-center">
                        <Progress value={98} /><span>98%</span>
                    </div>
                </div>
                <div>
                    <h3>CSS</h3>
                    <div className="flex items-center gap-x-1">
                        <Progress value={85} /><span>85%</span>
                    </div>
                </div>
                <div>
                    <h3>Javascript</h3>
                    <div className="flex items-center gap-x-1">
                        <Progress value={90} /><span>90%</span>
                    </div>
                </div>
                <div>
                    <h3>React</h3>
                    <div className="flex items-center gap-x-1">
                        <Progress value={80} /><span>80%</span>
                    </div>
                </div>
                <div>
                    <h3>NEXT.js</h3>
                    <div className="flex items-center gap-x-1">
                        <Progress value={70} /> <span>70%</span>
                    </div>
                </div>
            </div>
            {/* Extra Skills */}
            <div className="pt-6">
                <h3 className="text-lg font-bold text-center mb-6">Extra Skills</h3>
                <Image
                    src="/icons.svg"
                    alt="skills"
                    width={400}
                    height={100}
                />
            </div>
            {/* Languages */}
            <div className="flex items-center justify-between pt-6">
                <h3 className="font-bold">Languages:</h3>
                <span>intermediate</span>
            </div>
            {/* Download CV */}
            <div className="pt-6">
                <CVBtn />
            </div>
        </div>
    );
}

export default Information ;