import React from 'react'
import { Github, Linkedin, Facebook, Download } from "lucide-react";
import Navabar from './Navabar';

const Welcome = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-transparent text-white px-8">
            <div className="w-full flex flex-row justify-center gap-14">
                {/* Left Side */}
                <div className="hidden lg:flex justify-center p-0">
                    <img
                        src="portfolio-photo.jpg"
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

                    <p className="text-gray-400 max-w-md leading-relaxed wrap-break-words">
                        Python developer with 2 years of experience in backend development, AI automation, and <span className="whitespace-nowrap">e-commerce</span> web projects.
                    </p>

                    <div className="flex space-x-6 text-3xl mt-2">
                        <a
                            href="https://github.com/FalconDevX"
                            target="_blank"
                            className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                        >
                            <Github stroke="none" fill="currentColor" strokeWidth={1.5} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mateusz-nowaczek-781779297/"
                            target="_blank"
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
                    <Navabar />
                    <button className="group relative w-40 h-12 rounded-md p-0.5 transition-all duration-500">
                        <div className="absolute inset-0 rounded-md bg-gray-300 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative flex flex-row justify-center items-center text-gray-100 bg-[#0d0d0d] w-full h-full gap-3 cursor-pointer rounded-md">
                            <Download className="text-gray-100" strokeWidth={1.5} />
                            Grab My CV
                        </div>
                    </button>

                </div>

            </div>
        </section>
    )
}

export default Welcome