'use client'
import { useEffect, useRef, useState } from "react";
import Tag from "./ui/tag";
import { useScroll, useTransform } from "motion/react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ")
const Introduction = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end start'] });
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

  useEffect(() => {
    wordIndex.on('change', (latest) => {
      setCurrentWord(latest)
    })
  }, [wordIndex])
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introduction Layers</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>{" "}
            <span className="">
              {words.map((word, wordIndex) => {
                return (
                  <span key={wordIndex} className={twMerge("transition duration-500 text-white/15", wordIndex < currentWord && "text-white")}>
                    {`${word} `} 
                  </span>
                )
              })}
            </span>
            <span className="text-lime-400 block">That&apos;s why we built Layers.</span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  )
}

export default Introduction