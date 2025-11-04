import React from 'react'
import { useState, useEffect } from "react"
import { Github } from "lucide-react"

interface ProjectCardProps{
    title: string,
    description: string,
    image: string,
    github: string
}

const ProjectCard = ({title, description, image, github}:ProjectCardProps) => {
    const [imageOpen, setImageOpen] = useState(false)

    //block scroll
    useEffect(() => {
        if (imageOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [imageOpen]);

    return (
        <div className="p-0.5 bg-linear-to-b from-orange-500 to-yellow-600 mt-10">
            <div className="flex flex-col h-full">
                <div className='flex flex-col w-100 bg-black p-10 h-full'>
                    <h2>{title}</h2>
                    <p className="text-gray-400 mt-5">
                        {description}
                    </p>
                    <img src={image} className="mt-5 cursor-pointer" onClick={() => setImageOpen(true)} />

                    {imageOpen && (
                        <div
                            className="fixed inset-0 flex justify-center items-center z-50 bg-black/60 backdrop-blur-sm"
                            onClick={() => setImageOpen(false)}
                        >
                            <img src={image} className="max-w-[90%] max-h-[90%]" />
                        </div>
                    )}

                    <a className="inline-flex w-fit flex-row mt-5 gap-3 bg-gray-900 px-4 py-2 hover:bg-gray-800 cursor-pointer"
                        href={github} target="_blank"
                    >
                        <Github />
                        View code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard