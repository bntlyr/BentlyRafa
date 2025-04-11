"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Button from "@/components/ui/button"
import { FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Star component with twinkling animation
const Star = ({
  x,
  y,
  size,
  delay,
  duration,
}: {
  x: number
  y: number
  size: number
  delay: number
  duration: number
}) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        opacity: [0.1, 1, 0.1],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

export default function Home() {
  const [stars, setStars] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = []
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 10000) + 50

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 200,
          y: Math.random() * 200,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        })
      }

      setStars(newStars)
    }

    generateStars()

    // Regenerate stars on window resize
    const handleResize = () => {
      generateStars()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = () => {
    alert("Button clicked!")
  }

  return (
    <div className="relative min-h-scree overflow-hidden">
      <Header />

      {/* STARS BACKGROUND WITH ANIMATION */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          {stars.map((star) => (
            <Star key={star.id} x={star.x} y={star.y} size={star.size} delay={star.delay} duration={star.duration} />
          ))}
        </AnimatePresence>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 gap-5">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#0077FF] text-transparent bg-clip-text">Hello! I&apos;m Bently Rafa</h1>
        <h2 className="text-4xl font-black text-[#C5C5C5] tracking-widest">{'[ FULLSTACK DEVELOPER & DATABASE ENGINEER ]'}</h2>
        <h3 className="text-2xl font-normal text-[#C5C5C5]">{'// Specializes in back-end development and AI engineering'}</h3>

        <div className="flex gap-5 mt-10">
          {/* GITHUB REDIRECT BUTTON */}
          <Button
            className="z-10 w-42.5"
            icon={
              <Image
                src="/github.svg"
                alt="GitHub"
                width={25}
                height={25}
              />
            }
            title="GitHub"
            onClick={handleClick}
          />

          {/* RESUME REDIRECT BUTTON */}
          <Button
            className="z-10"
            icon={
              <FileText/>
            }
            title="Resume"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}
