import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Panaceuticss",
    description: "Panaceutics is a biotechnology-driven company committed to advancing wellness through science-backed, plant-based formulations.",
    image: "/panaceutics1.png",
    link: "https://panaceutics.org",
  },
  {
    name: "Tizzle Shop",
    description: "A modern e-commerce platform for quality UK-used and premium products in Nigeria, featuring an integrated talent marketplace.",
    image: "/tizzle.png",
    link: "https://tizzleshop.vercel.app/",
  },
  {
    name: "NoisyPay",
    description: "A modern, mobile-first web application for online training course payments with instant WhatsApp group access.",
    image: "/noisypay.png",
    link: "https://noisyng.com",
  },

  {
    name: "Secquiz App",
    description: "A cybersecurity quizzes app to test user cybersecurity knowledge, improve skills, and prep for cybersecurity certifications",
    image: "/secquiz.PNG",
    link: "https://secquiz.app",
  },
  {
    name: "Noisy Viral AI Content Creation Tool",
    description: "A viral content generation web app. Users generates a month's worth of content for thier products and social media activities",
    image: "/noisy.png",
    link: "https://noisyng.vercel.app/",
  },
  
  {
    name: "GCRisker App",
    description: "A risk analysis toolz for assessing the risk of a given project. It provides a comprehensive analysis of the project's risk profile, helping users make informed decisions.",
    image: "/riskapng.png",
    link: "https://riska-app.vercel.app/",
  },
  {
    name: "RunPhisher",
    description: "A phishing link detection fullstack web application. RunPhisher helps you identify malicious links and protect you from phishing attacks.",
    image: "/runph.png",
    link: "https://run-phisher.vercel.app/",
  },

  {
    name: "Hemo Dashboard",
    description: "Hemo is a health management web application dashboard currently in development for tracking health products.",
    image: "/hemo.png",
    link: "/#",
  },

  {
    name: "Personal Portfolio",
    description: "My personal fullstack developer portfolio website.",
    image: "/jlive_proj.png",
    link: "https://jdev-live.vercel.app/",
  },
  {
    name: "Kidscon",
    description: "A nonprofit organization empowering underprivileged, and homeless children through life-skills development programs.",
    image: "/kidscon_proj.png",
    link: "https://codeklin.github.io/kidscon.github.io/",
  },
  {
    name: "Gigsdev",
    description:
      "Gigsdev is a tech hub providing training and mentorship programmes for individuals aspiring to thrive in tech.",
    image: "/gigsdev_proj.png",
    link: "https://codeklin.github.io/gigsdev.github.io/",

  },


]

const ProjectsSection = () => {
  return (
    <section className="text-center sm:text-left" id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="  md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="  rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className=" flex justify-center sm:justify-start align-bottom space-x-4">

                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
