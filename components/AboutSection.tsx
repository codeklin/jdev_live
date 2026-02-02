import React from "react"
import Image from "next/image"



const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold  text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            
          <div className="md:w-1/2 text-center sm:text-left">
            <h1 className="text-center text-stone-700 text-2xl font-bold mb-6 md:text-left">
              This Is Me!
            </h1>
            <p>
              
              Hi, I&#39;m Olajide, a{" "}
              <span className="font-bold text-pink-500">{"Fullstack Web Developer"}</span>, and a 
              <span className="font-bold text-blue-600">{" Cybersecurity Lead Trainer/Mentor"}</span>.
              I help individuals & businesses succeed through innovative solutions. My skills include:
              Creating web applications and mobile apps, training individuals, writing engaging online content, making videos and short films, and designing websites.

            </p>
            <br />
            <span className="font-bold text-teal-600">{" My Roles:"}</span>
            <br/>Cybersecurity Instructor (Nextgen Tech Training Project)
            <br/>Data Analyst
            <br/>Tech Leader at Gigsdev (a software company)
            <br/>Founder of LivrMedia (a media company)
            <br/>Community Leader at Gigsdev (Connecting freelancers)

            <p>
            <span className="font-bold text-teal-500">{" My Goal:"}</span>
            <br/>To make technology accessible and help people achieve their goals in today&#39;s global world.
            </p>
          </div>
          <div className=" grid grid-column-1 text-center md:w-1/2 md:text-left">
            <div className=" flex flex-col gap-5 "> {/*Leave this please*/}
              <h1 className="text-2xl font-bold mb-1 text-stone-600">My Skills</h1>
              <div className="flex flex-wrap  rounded-2xl bg-slate-100 justify-around md:justify-center lg:gap-5 md:gap-5 x-6 py-6">
                <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-2 text-center">
                  <div className=" text-xl font-light mb-6 text-slate-500"> <span className="text-blue-600 text-4xl font-semibold ">10+</span> <br/>Years of Experience</div>
                  <div className=" text-xl text-slate-500 font-light mb-2"><span className="text-blue-600 text-4xl font-semibold">15+</span> <br/>Projects</div>
                </div>
              </div>
              <div className="flex flex-wrap flex-row gap-1 rounded-2xl bg-slate-100 lg:col-span-3 justify-center z-10 md:justify-center px-6 py-6">
            
                <Image src="/html5.svg" alt="html5" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/css.svg" alt="css" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/next.svg" alt="next" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/react.svg" alt="react" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/typescript.svg" alt="typescript" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/nodejs.svg" alt="nodejs" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/github.svg" alt="github" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/tailwindcss.svg" alt="tailwindcss" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/git.svg" alt="git" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/javascript.svg" alt="javascript" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/bootstrap.svg" alt="bootstrap" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/python.svg" alt="python" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/postman-api.svg" alt="postman-api" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
                <Image src="/postgresql.svg" alt="postgresql" width={50} height={50} className=" mt-6 md:block md:relative md:bottom-4  md:z-0"/>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
