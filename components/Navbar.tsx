import React from 'react'

const Navbar = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    
    return (
        <div className='flex flex-row gap-4 text-white font-light cursor-pointer'>
            <a onClick={() => scrollTo("skills")}>Skills</a>
            <a onClick={() => scrollTo("projects")}>Projects</a>
            <a onClick={() => scrollTo("experience")}>Experience</a>
            <a onClick={() => scrollTo("about")}>About me</a>
        </div>
    )
}

export default Navbar