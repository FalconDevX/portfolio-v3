import { motion } from "framer-motion";
import {
    SiPython,
    SiDjango,
    SiFlask,
    SiPytorch,
    SiReact,
    SiMysql,
    SiMongodb,
} from "react-icons/si";

const Skills = ({ visible }: { visible?: boolean }) => {
    const icons = [SiPython, SiDjango, SiFlask, SiPytorch, SiReact, SiMysql, SiMongodb];

    return (
        <section
            id="skills"
            className="min-h-80 flex flex-col items-center py-10 scroll-mt-10"
        >
            <h1 className="text-xl relative inline-block pb-2">
                Skills
                <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600"></span>
            </h1>
            <p className="text-gray-400 leading-relaxed mt-5 max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
                Backend-focused developer experienced in Python (Django, Flask) with both SQL (MySQL) and NoSQL (MongoDB) databases. Familiar with React and TypeScript. Now shifting my career path toward data science and machine learning.
            </p>
            <motion.div
                // viewport={{ once: false }}
                className="flex flex-row gap-6 mt-10"
            >

                {icons.map((Icon, i) => (
                    <motion.div
                        key={`${i}-${visible}`}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={
                            visible
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.5, y: 20 }
                        }
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                        <Icon className="text-6xl" />
                    </motion.div>
                ))}
            </motion.div>

            {/* <motion.div  className="bg-amber-600 flex flex-row items-center justify-center gap-6 w-6xl h-20 mt-10">
                <SiPython className="text-6xl" />
                <SiDjango className="text-6xl" />
                <SiFlask className="text-6xl" />
                <SiPytorch className="text-6xl" />
                <SiReact className="text-6xl" />
            </motion.div> */}
        </section>
    );
};

export default Skills;
