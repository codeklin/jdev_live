import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootsrap" },
  { skill: "TypeScript" },
  { skill: "Redux" },
  { skill: "NodeJs" },
  { skill: "Express" },
  { skill: "Postman" },
  { skill: "Postgres" },
  { skill: "Python" },
  { skill: "Git" },
  { skill: "GitHub" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold  text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            
          <div className="md:w-1/2 ">
            <h1 className="text-center text-stone-700 text-2xl font-bold mb-6 md:text-left">
              This Is Me!
            </h1>
            <p>
              
              Hi, my name is Olajide, a{" "}
              <span className="font-bold text-pink-500">{"Fullstack Web Developer"}</span>, and a 
              <span className="font-bold text-blue-600">{" Cybersecurity Lead Trainer/Mentor"}</span>.
              I&#39;m a tech expert who helps businesses and people succeed through innovative solutions. My skills include:
Creating web applications and mobile apps, writing engaging online content, making videos and short films, designing websites and managing social media.

            </p>
            <br />
            <span className="font-bold text-teal-600">{" My Roles:"}</span>
<br/>Tech Leader at Gigsdev (a software company)
<br/>Founder of LivrMedia (a media company)
<br/>Community Leader at Gigsdev (Connecting freelancers)

            <p>
            <span className="font-bold text-teal-500">{" My Goal:"}</span>
            <br/>To make technology accessible and help people achieve their goals in today&#39;s global world.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 text-stone-600">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-pink-200 px-4 py-2 mr-2 mt-2 text-blue-800 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
              <Image
              src="/skills.jpg"
              alt=""
              width={300}
              height={200}
              className="hidden mt-6 md:block md:relative md:bottom-4  md:z-0"
            />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
