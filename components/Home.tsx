"use client"

import Welcome from "./Welcome";
import Reveal from "./Reveal";
import { useEffect } from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-transparent text-white ">
            <Welcome/>

            <Reveal delay={0.15}>{(visible) => <Skills visible={visible} />}</Reveal>

            <Reveal delay={0.15}>
                <Projects/>
            </Reveal>

            <Reveal delay={0.25}>
                <Education/>
            </Reveal>

            <Reveal delay={0.35}>
                <section id="about" className="min-h-screen flex justify-center items-start py-10">
                    About me section
                </section>
            </Reveal>
        </div>
    );
}