"use client"

import Welcome from "./Welcome";
import Reveal from "./Reveal";
import { useEffect } from "react";

export default function Home() {
    //after refresh scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="bg-[#0d0d0d] text-white">
            <Welcome />

            <Reveal><section id="skills" className="min-h-screen flex items-center justify-center">Skills section</section></Reveal>
            <Reveal delay={0.15}><section id="projects" className="min-h-screen flex items-center justify-center">Projects section</section></Reveal>
            <Reveal delay={0.25}><section id="experience" className="min-h-screen flex items-center justify-center">Experience section</section></Reveal>
            <Reveal delay={0.35}><section id="about" className="min-h-screen flex items-center justify-center">About me section</section></Reveal>
        </div>
    );
}