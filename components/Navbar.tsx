import React from 'react'

const Navbar = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    
    return (
        <div className='flex flex-row gap-4 text-white font-light cursor-pointer'>
            <a onClick={() => scrollTo("skills")} className="transition-all duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">Skills</a>
            <a onClick={() => scrollTo("projects")} className="transition-all duration-300 hover:text-orange-400 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">Projects</a>
            <a onClick={() => scrollTo("education")} className="transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">Education</a>
            <a onClick={() => scrollTo("about")} className="transition-all duration-300 hover:text-pink-400 hover:drop-shadow-[0_0_8px_rgba(219,39,119,0.5)]">About me</a>
        </div>
    )
}

export default Navbar