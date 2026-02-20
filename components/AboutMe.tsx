import React from 'react'

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex justify-center items-start py-10">
        <h1 className="text-xl relative inline-block pb-2">
            About me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600"></span>
        </h1>
    </section>
  )
}

export default AboutMe