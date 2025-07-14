import React from "react";
import Image from "next/image";
import { Typewriter } from "@/components/ui/typewriter-text";

export const Homepage = () => {
  return (
    <section className="text-gray-600 body-font lg:py-15 md:py-10 bg-transparent">
      <div className="container mx-auto flex px-6 py-10 lg:py-15 md:px-8 lg:px-20 md:flex-row flex-col items-center gap-1 md:gap-10 lg:gap-1 bg-transparent">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center lg:justify-start md:justify-start ">
          <div className="relative">
            <Image
              className="object-cover object-center rounded-full h-65 w-65 md:h-80 md:w-80 lg:h-90 lg:w-90 animate-glow-border"
              alt="my photo"
              src="/Images/myphoto.jpg"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <Typewriter
              text={["Hello! I'm a Web Developer / Mobile App Developer / UI/UX Designer"]}
              speed={100}
              loop={true}
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            />
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a final-year undergraduate student at NSBM Green University,
            specializing in Software Engineering. With a strong foundation in
            programming, mobile app development, and web technologies, I am
            passionate about building real-world digital solutions. I have
            hands-on experience working on academic projects, and I am now
            seeking an internship opportunity where I can contribute
            meaningfully while gaining valuable industry experience to further
            enhance my skills and knowledge.
          </p>
          <div className="flex justify-center">
            <a
              href="/projects"
              className="inline-flex  font-medium text-gray-600 bg-white border-3 border-gray-400 py-2 px-6 focus:outline-black rounded-full  hover:bg-black hover:text-white "
            >
              Projects
            </a>
            <a
              href="/contact"
              className="ml-4 inline-flex  font-medium text-gray-600 bg-white border-3 border-gray-400 py-2 px-6 focus:outline-black rounded-full  hover:bg-black hover:text-white "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
