"use client"

import Welcome from "./Welcome";
import Reveal from "./Reveal";
import { useEffect } from "react";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-transparent text-white ">
            <Welcome/>

            <Reveal>
                <Skills/>
            </Reveal>

            <Reveal delay={0.15}>
                <Projects/>
            </Reveal>

            <Reveal delay={0.25}>
                <section id="experience" className="min-h-screen flex justify-center items-start py-10">
                    Experience section
                </section>
            </Reveal>

            <Reveal delay={0.35}>
                <section id="about" className="min-h-screen flex justify-center items-start py-10">
                    About me section
                </section>
            </Reveal>
        </div>
    );
}