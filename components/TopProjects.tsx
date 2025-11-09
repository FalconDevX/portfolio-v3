import ProjectCard from "./ProjectCard"
import Reveal from "./Reveal"

const TopProjects = () => {
    return (
        <div id="projects" className="min-h-screen flex flex-col items-center py-10 scroll-mt-20">
            <div className="flex inline-block">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="w-1/3"></div>
                    
                    <div className="w-1/3 flex justify-center">
                        <Reveal>
                            <h1 className="text-xl relative inline-block pb-2">
                                Projects
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600"></span>
                            </h1>
                        </Reveal>
                    </div>
                    <a className="w-1/3 flex justify-end ">
                        <h2 className="border border-gray-300 hover:bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600 p-2 cursor-pointer transition-all duration-300 hover">
                            All projects
                        </h2>
                    </a>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-10">
                    <Reveal delay={0.2}>
                        <ProjectCard
                            title="RenderX - GPU ecomerce"
                            description="RenderX is a full-stack e&#8209;commerce platform built with Django (REST API, JWT auth, MySQL) and a Next.js/React frontend. Features include product search, file storage on GCP, user accounts with refresh tokens, and an admin panel for managing inventory."
                            image="renderx.png"
                            github=""
                        />
                    </Reveal>

                    <Reveal delay={0.3}>
                        <ProjectCard
                            title="Hermes AI"
                            description="An intelligent console agent connected to Gemini that manages a Google Calendar in real time based on natural-language prompts."
                            image="/HermesAI.png"
                            github="https://github.com/FalconDevX/hermes-ai-agent"
                        />
                    </Reveal>

                    <Reveal delay={0.4}>
                        <ProjectCard
                            title="Bee parasite visual detector"
                            description="A YOLO-based detection tool for identifying Varroa destructor parasites on honeybees, trained on a custom dataset using YOLOv8-small and YOLOv8-medium models."
                            image="/Bee.png"
                            github="https://github.com/FalconDevX/bee-varroa-destructor"
                        />
                    </Reveal>
                </div>
            </div>
            


        </div>
    )
}

export default TopProjects