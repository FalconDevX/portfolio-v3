import React from 'react'
import { Github, Linkedin, Facebook } from "lucide-react";
import Navabar from './Navabar';

const Welcome = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white px-8">
            <div className="max-w-6xl w-full flex flex-row justify-center gap-14">  
                {/* Left Side */}
                <div className="flex justify-center p-0">
                    <img
                        src="portfolio-photo.png"
                        alt="portfolio"
                        className="w-80 h-auto object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Side */}
                <div className="flex flex-col space-y-6">
                    <h1 className="text-5xl font-light leading-tight">
                        Hi, I'm <span className="font-semibold text-white">Matt</span>
                    </h1>

                    <h2 className="text-4xl font-light leading-tight">
                        I'm a{" "}
                        <span className="font-bold bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]">
                            Python
                        </span>{" "}
                        software developer
                    </h2>

                    <p className="text-gray-400 max-w-md leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>

                    <div className="flex space-x-6 text-3xl mt-2">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                        >
                            <Github stroke="none" fill="currentColor" strokeWidth={1.5}/>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                        >
                            <Linkedin strokeWidth={1.5} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-pink-600 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(219,39,119,0.5)]"
                        >
                            <Facebook strokeWidth={1.5} />
                        </a>
                    </div>
                    <Navabar/>
                </div>
                
            </div>
        </section>
    )
}

export default Welcome