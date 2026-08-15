"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"
import { FiShare2 } from "react-icons/fi"

const projects = [
  {
    id: "phytogenix",
    name: "Phytogenix",
    description: "Digital herbal clinical research platform bridging university research and medical institutions. Research submission, peer review, and publication workflows.",
    image: "/phyto.png",
    link: "https://phytogenix.org",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "secacad",
    name: "Secacad",
    description: "Cybersecurity skills assessment platform for individuals and organisations. Adaptive testing, progress tracking, and certification-aligned question banks.",
    image: "/secacad.png?v=1",
    link: "https://secacad.vercel.app",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "panaceutics",
    name: "Panaceutics",
    description: "Biotech company advancing wellness through science-backed, plant-based formulations. Built with performance and SEO as primary goals.",
    image: "/panaceutics1.png",
    link: "https://panaceutics.org",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    id: "soprep",
    name: "Soprep",
    description: "Exam prep web app with past questions, AI-assisted explanations, and real-time progress tracking. Helped thousands of students improve their scores.",
    image: "/soprep.png",
    link: "https://soprep.app",
    tags: ["React", "OpenAI API", "TypeScript"],
  },
  {
    id: "tizzle-shop",
    name: "Tizzle Shop",
    description: "E-commerce platform with an integrated talent marketplace. Product catalogue, checkout flow, and seller onboarding built from scratch.",
    image: "/tizzle.png",
    link: "https://tizzleshop.vercel.app/",
    tags: ["Next.js", "E-commerce", "Tailwind CSS"],
  },
  {
    id: "secquiz",
    name: "Secquiz App",
    description: "Cybersecurity quiz application for skill testing and certification prep. Gamified learning with leaderboards and topic-based filtering.",
    image: "/secquiz.png",
    link: "https://secquizz.vercel.app/",
    tags: ["React", "TypeScript", "Gamification"],
  },
 
]

const ProjectsSection = () => {
  const shareProject = (project: typeof projects[0]) => {
    const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/#project-${project.id}`
    const shareText = `Check out ${project.name}: ${project.description}`
    if (navigator.share) {
      navigator.share({ title: project.name, text: shareText, url: shareUrl })
    } else {
      navigator.clipboard.writeText(shareUrl)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <section id="projects" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">04 — Dev Work</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Fullstack{" "}
              <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
              Production-grade web applications spanning e-commerce, edtech, biotech, and SaaS. Every project is live and shipped.
            </p>
          </div>
        </SlideUp>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <SlideUp key={idx} offset="-80px 0px -80px 0px">
              <div
                id={`project-${project.id}`}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 transition-colors flex flex-col"
              >
                <Link href={project.link} target="_blank">
                  <div className="overflow-hidden h-44">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      unoptimized={project.image.includes("?")}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                </Link>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="text-sm font-black text-white">{project.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 text-gray-500 text-[10px] font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <Link href={project.link} target="_blank" className="text-xs font-semibold text-gray-500 hover:text-white transition-colors flex items-center gap-1.5">
                      View live
                      <BsArrowUpRightSquare size={13} />
                    </Link>
                    <button
                      onClick={() => shareProject(project)}
                      className="text-gray-600 hover:text-white transition-colors"
                      title="Share project"
                    >
                      <FiShare2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection
