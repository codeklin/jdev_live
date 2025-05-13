"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col gap-12 text-center items-center justify-around  animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">

        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl  font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Olajide!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Cybersecurity Expert & a Fullstack Software Engineer{" "}
            </span>. I design and I create fullstack web applications, mobile apps,and dashboard solutions.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt="Olajide's headshot"
            width={400}
            height={400}
            priority
            className="rounded-3xl shadow-2xl"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
