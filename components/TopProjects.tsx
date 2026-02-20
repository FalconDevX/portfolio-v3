import { useRouter } from "next/navigation"
import TopProjectCard from "./TopProjectCard"
import Reveal from "./Reveal"

const TopProjects = () => {
    const router = useRouter()

    return (
        <div id="projects" className="min-h-screen flex flex-col items-center py-10 scroll-mt-20">
            <div className="flex flex-col items-center w-fit">
                <div className="flex flex-row justify-between items-center w-full mb-10 sm:justify-start">
                    <div className="hidden sm:block sm:w-1/3"></div>

                    <div className="w-1/3 flex justify-center">
                        <Reveal>
                            <h1 className="text-xl relative inline-block pb-2">
                                Top Projects
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600"></span>
                            </h1>
                        </Reveal>
                    </div>
                    <a className="w-1/3 flex justify-end mr-10 sm:mr-0">
                        <Reveal delay={1.0}>
                            <button
                                type="button"
                                onClick={() => router.push("/projects")}
                                className="relative px-4 py-2 text-sm font-medium border-transparent rounded-md bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
                                All projects
                            </button>
                        </Reveal>
                    </a>
                </div>

                <div className="inline-flex flex-wrap gap-10 justify-center sm:justify-center">
                    <Reveal delay={0.2}>
                        <TopProjectCard
                            title="RenderX - GPU ecomerce"
                            description="RenderX is a full-stack e&#8209;commerce platform built with Django (REST API, JWT auth, MySQL) and a Next.js/React frontend. Features include product search, file storage on GCP, user accounts with refresh tokens, and an admin panel for managing inventory."
                            image="renderx.png"
                            github="https://github.com/FalconDevX/renderx-frontend"
                        />
                    </Reveal>

                    <Reveal delay={0.3}>
                        <TopProjectCard
                            title="Hermes AI"
                            description="An intelligent console agent connected to Gemini that manages a Google Calendar in real time based on natural-language prompts."
                            image="/HermesAI.png"
                            github="https://github.com/FalconDevX/hermes-ai-agent"
                        />
                    </Reveal>

                    <Reveal delay={0.4}>
                        <TopProjectCard
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