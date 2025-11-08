import Reveal from './Reveal'

const Education = () => {
    return (
        <section id="education" className="min-h-screen flex flex-col items-center py-10 scroll-mt-20">
            <Reveal>
                <h1 className="text-xl relative inline-block pb-2 mb-8">
                    Education
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600"></span>
                </h1>
            </Reveal>

            <div className="flex flex-col gap-6 w-full max-w-2xl px-4">
                <Reveal delay={0.2}>
                    <div className="flex flex-col bg-black/80 p-5 shadow-md">
                        <div className="flex flex-row items-center gap-4">
                            <img src="/logo-agh.svg" alt="AGH logo" className="w-12 h-auto" />
                            <h2 className="text-lg font-semibold">
                                AGH University of Science and Technology
                            </h2>
                        </div>
                        <p className="text-gray-400 ml-16">
                            Undergraduate in Computer Science and Engineering (2023–Present)
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.25}>
                    <div className="flex flex-col bg-black/80 p-5 shadow-md">
                        <h2 className="text-lg font-semibold mb-1">Academic Projects</h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, assumenda! Recusandae doloribus ab voluptatibus nihil.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="flex flex-col bg-black/80 p-5 shadow-md">
                        <h2 className="text-lg font-semibold mb-1">Member of Student Club at AGH</h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora unde expedita officiis laboriosam. Similique?
                        </p>
                    </div>
                </Reveal>

            </div>
        </section>

    )
}

export default Education