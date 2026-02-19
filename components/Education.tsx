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
                        <h2 className="text-lg font-semibold mb-1">
                            AGH University of Science and Technology
                        </h2>
                        <div className="flex flex-row gap-5 items-start">
                            <div className="w-18 h-18 bg-black/50 rounded-lg flex items-center justify-center shrink-0">
                                <img
                                    src="/logo-agh.svg"
                                    alt="AGH logo"
                                    className="object-contain w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>
                                    <span className="font-normal">Undergraduate in Computer Science and Engineering (2023–Present)</span>
                                </p>

                                <p className="text-gray-400">
                                    Coursework includes statistical data analysis, optimization methods, databases (SQL & NoSQL), algorithms, and object-oriented programming.
                                </p>
                            </div>
                        </div>

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
                        <h2 className="text-lg font-semibold mb-1">Member of Analytica Student Club at AGH</h2>
                        <div className="flex flex-row gap-5 items-start">
                            <div className="w-18 h-18 bg-black/50 rounded-lg flex items-start justify-center shrink-0">
                                <img
                                    src="/analytica-logo.png"
                                    alt="hack-yeah logo"
                                    className="object-contain w-full h-full rounded-lg brightness-0 invert"
                                />
                            </div>
                            <p className="text-gray-400">
                            Working on an NLP-based system for extracting geodetic parameters from user input to support <span className="whitespace-nowrap">land-plot</span> search. Focused on prompt design, structured argument extraction, data validation and guided interaction workflows.
                            </p>
                        </div>

                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="flex flex-col bg-black/80 p-5 shadow-md">
                        <h2 className="text-lg font-semibold mb-1">Hackathons</h2>
                        <div className="flex flex-row gap-5 items-start">
                            <div className="w-18 h-18 bg-black/50 rounded-lg flex items-center justify-center shrink-0 mt-2">
                                <img
                                    src="/hack-yeah.jpg"
                                    alt="hack-yeah logo"
                                    className="object-contain w-full h-full rounded-lg"
                                />
                            </div>

                            <p className="text-gray-400">
                                Participated in a four-person team at the
                                <span className="font-bold"> HackYeah</span>
                                {" "}hackathon, where we developed a retirement simulation system for the Polish Social Insurance Institution (ZUS).
                            </p>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>

    )
}

export default Education