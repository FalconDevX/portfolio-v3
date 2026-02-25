import React from 'react'
import HorizontalReveal from './HorizontalReveal'
import Reveal from './Reveal'

const items = [
  {
    text: "3rd-year Computer Science student interested in Data Science and Python frameworks.",
    side: "left",
    delay: 0.4
  },
  {
    text: "Currently developing skills in Machine Learning and Deep Learning.",
    side: "right",
    delay: 0.8
  },
  {
    text: "Focused on improving practical programming and analytical abilities.",
    side: "left",
    delay: 1.0
  },
  {
    text: "Hobbies include playing the piano and following space technologies.",
    side: "right",
    delay: 1.4
  },
  {
    text: "Interested in space exploration and modern engineering topics.",
    side: "left",
    delay: 1.6
  }
]

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center py-10 relative">

      <Reveal>
        <h1 className="text-xl relative inline-block pb-2 mb-12">
          About me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-600"></span>
        </h1>
      </Reveal>

      <div className="relative w-full max-w-4xl flex flex-col gap-16">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-neutral-400/30" />

        {items.map((item, i) => (
          <div
            key={i}
            className={`w-full flex ${item.side === "right"
                ? "justify-end"
                : "justify-start"
              }`}
          >
            <div className="w-1/2 px-6">
              <HorizontalReveal
                delay={item.delay}
                direction={item.side === "right" ? "right" : "left"}
              >
                <p className={item.side === "right" ? "text-left" : "text-right"}>
                  {item.text}
                </p>
              </HorizontalReveal>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default AboutMe