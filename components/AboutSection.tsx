"use client"
import Image from "next/image"
import { useState } from "react"
import SlideUp from "./SlideUp"

const roles = [
  "Cybersecurity Instructor (Nextgen Tech Training Project)",
  "Data Analyst",
  "Tech Leader at Gigsdev (a software company)",
  "Founder of LivrMedia (a media company)",
  "Community Leader at Gigsdev (Connecting freelancers)",
]

const skills = [
  { src: "/html5.svg", alt: "HTML5", category: "Frontend" },
  { src: "/css.svg", alt: "CSS3", category: "Frontend" },
  { src: "/javascript.svg", alt: "JavaScript", category: "Frontend" },
  { src: "/typescript.svg", alt: "TypeScript", category: "Frontend" },
  { src: "/react.svg", alt: "React", category: "Frontend" },
  { src: "/next.svg", alt: "Next.js", category: "Frontend" },
  { src: "/tailwindcss.svg", alt: "Tailwind CSS", category: "Frontend" },
  { src: "/bootstrap.svg", alt: "Bootstrap", category: "Frontend" },
  { src: "/nodejs.svg", alt: "Node.js", category: "Backend" },
  { src: "/python.svg", alt: "Python", category: "Backend" },
  { src: "/postgresql.svg", alt: "PostgreSQL", category: "Backend" },
  { src: "/postman-api.svg", alt: "Postman", category: "Tools" },
  { src: "/git.svg", alt: "Git", category: "Tools" },
  { src: "/github.svg", alt: "GitHub", category: "Tools" },
]

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<"story" | "roles" | "goal">("story")

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        {/* Section Header */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-32 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 rounded-full"></div>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about technology, security, and creating meaningful digital experiences
            </p>
          </div>
        </SlideUp>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto px-4">
          
          {/* Left Column - Interactive Story Card */}
          <SlideUp offset="-200px 0px -200px 0px">
            <div className="space-y-6">
              {/* Tab Navigation */}
              <div className="flex gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                {(["story", "roles", "goal"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-teal-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 min-h-[400px] transition-all duration-500">
                {activeTab === "story" && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                        O
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        This Is Me!
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      Hi, I'm Olajide, a{" "}
                      <span className="relative inline-block group">
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                          Fullstack Web Developer
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      , and a{" "}
                      <span className="relative inline-block group">
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                          Cybersecurity Lead Trainer/Mentor
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      .
                    </p>

                    <div className="bg-gradient-to-br from-teal-50 to-purple-50 dark:from-teal-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-l-4 border-teal-500">
                      <p className="text-gray-700 dark:text-gray-300">
                        I help individuals & businesses succeed through innovative solutions. My expertise spans creating web applications, mobile apps, training individuals, writing engaging content, producing videos, and designing impactful websites.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "roles" && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                      My Professional Roles
                    </h3>
                    {roles.map((role, idx) => (
                      <div
                        key={idx}
                        className="group relative pl-6 py-3 transition-all duration-300 hover:pl-8"
                        style={{
                          animation: `fadeIn 0.5s ease-out ${idx * 0.1}s forwards`,
                          opacity: 0,
                        }}
                      >
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-teal-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/20 to-purple-500/20"></div>
                        <p className="text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                          {role}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "goal" && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center">
                      <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        My Mission
                      </h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
                      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        To make technology accessible and help people achieve their goals in today's global world.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md">
                        <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">10+</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</p>
                      </div>
                      <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md">
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">15+</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SlideUp>

          {/* Right Column - Skills Showcase */}
          <SlideUp offset="-200px 0px -200px 0px">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                  Tech Stack
                </h3>

                {/* Skills Grid with Categories */}
                <div className="space-y-8">
                  {["Frontend", "Backend", "Tools"].map((category) => (
                    <div key={category}>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-4">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill, idx) => (
                            <div
                              key={idx}
                              className="group relative"
                              style={{
                                animation: `fadeIn 0.5s ease-out ${idx * 0.05}s forwards`,
                                opacity: 0,
                              }}
                            >
                              <div className="relative p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-teal-500/20 border border-gray-200 dark:border-gray-600">
                                <Image
                                  src={skill.src}
                                  alt={skill.alt}
                                  width={40}
                                  height={40}
                                  className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.6)]"
                                />
                                {/* Tooltip */}
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                                  {skill.alt}
                                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></span>
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-teal-500 to-purple-600 rounded-3xl p-8 shadow-xl text-white">
                <h4 className="text-2xl font-bold mb-6">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">14+</div>
                    <div className="text-sm opacity-90">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
