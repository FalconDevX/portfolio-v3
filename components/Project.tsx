"use client"
import React from 'react'
import { Github } from "lucide-react"
import Reveal from './Reveal'

interface ProjectProps {
    title: string;
    description: React.ReactNode;
    image: string;
    github: string;
}

const Project = ({ title, description, image, github }: ProjectProps) => {
    return (
        <div className="w-full flex flex-col items-center">
            <Reveal delay={0.1}>
                <div className="w-full flex justify-center">
                    <div className="w-1/2 flex flex-row gap-5 justify-between h-auto bg-black/80 p-5">
                    <div className="w-1/2 h-auto">
                        <h2 className="text-lg font-semibold mb-1">{title}</h2>
                        {description}
                    </div>
                    <div className="w-1/2 h-auto">
                        <img src={image} alt={title} />
                        <button onClick={() => window.open(github, "_blank")} className="flex flex-row gap-2 bg-gray-900 text-white px-4 py-2 mt-4 hover:bg-gray-800 cursor-pointer">
                            <Github />
                            View code
                        </button>
                    </div>
                    </div>
                </div>
            </Reveal>
        </div>


    )
}

export default Project