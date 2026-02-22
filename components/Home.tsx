"use client"

import Welcome from "./Welcome";
import Reveal from "./Reveal";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import TopProjects from "./TopProjects";
import Education from "./Education";
import { ArrowUp } from "lucide-react";
import AboutMe from "./AboutMe";

export default function Home() {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.01
            const nextVisible = window.scrollY > scrollThreshold;
            setVisible((prevVisible) => (prevVisible === nextVisible ? prevVisible : nextVisible));
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="bg-transparent text-white ">
            <Welcome />

            <Reveal delay={0.15}>{(visible) => <Skills visible={visible} />}</Reveal>

            <Reveal delay={0.15}>
                <TopProjects />
            </Reveal>

            <Reveal delay={0.25}>
                <Education />
            </Reveal>

            <Reveal delay={0.35}>
                <AboutMe />
            </Reveal>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600 hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)] text-white p-3 rounded-full shadow-lg transform transition-all duration-400 cursor-pointer
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
            >
                <ArrowUp size={22} />
            </button>
        </div>
    );
}