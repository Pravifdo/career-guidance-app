import React from "react";
import { LuCircleCheck, LuFileText, LuShieldCheck, LuSparkles } from "react-icons/lu";

const steps = [
  {
    title: "Choose a Template",
    description:
      "Select from professional CV templates designed to help you create a modern and job-winning resume.",
    image: "/images/template.png",
  },
  {
    title: "Add Your Experience",
    description:
      "Easily add your work history, achievements, and professional experience with our simple editor.",
    image: "/images/experience.png",
  },
  {
    title: "Select Your Job Role",
    description:
      "Choose your target job role and customize your CV to match your career goals.",
    image: "/images/job-role.png",
  },
  {
    title: "Add Your Skills",
    description:
      "Highlight your skills and strengths to make your resume stand out to employers.",
    image: "/images/skills.png",
  },
  {
    title: "Add Your Education",
    description:
      "Show your academic background, qualifications, and educational achievements.",
    image: "/images/education.png",
  },
  {
    title: "Add Your Certifications",
    description:
      "Include your certificates and professional training to improve your profile.",
    image: "/images/certifications.png",
  },
];

export default function CVWriting() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Build a job-winning resume for free
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Create a professional CV easily with beautiful templates and
              powerful editing tools.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <LuCircleCheck className="text-green-600" />
                <span>First Resume, Free Forever</span>
              </div>

              <div className="flex items-center gap-3">
                <LuShieldCheck className="text-green-600" />
                <span>Privacy & GDPR Compliant</span>
              </div>

              <div className="flex items-center gap-3">
                <LuSparkles className="text-green-600" />
                <span>Professional Templates</span>
              </div>

            </div>

          </div>


          <div className="flex justify-center">

            <img
              src="/images/cv-template.png"
              alt="CV Template"
              className="w-full max-w-md rounded-2xl shadow-xl hover:scale-105 transition duration-300"
            />

          </div>

        </div>
      </section>



      {/* How it Works */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-900">
              Create a professional resume
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              FlowCV makes it easy to create and edit your resume (CV).
              Here's how it works:
            </p>

          </div>



          <div className="space-y-20">


            {steps.map((step, index) => (

              <div
                key={index}
                className="
                grid 
                md:grid-cols-2 
                gap-12 
                items-center
                "
              >

                {/* LEFT IMAGE */}
                <div className="flex justify-center">

                  <img
                    src={step.image}
                    alt={step.title}
                    className="
                    w-full
                    max-w-lg
                    rounded-2xl
                    shadow-lg
                    hover:-translate-y-2
                    transition
                    duration-300
                    "
                  />

                </div>


                {/* RIGHT TEXT */}

                <div>

                  <div className="flex items-center gap-3">

                    <div
                      className="
                      w-10
                      h-10
                      rounded-full
                      bg-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                      "
                    >
                      {index + 1}
                    </div>


                    <h3 className="text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                  </div>


                  <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>


                </div>


              </div>

            ))}


          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="py-20 px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to create your professional CV?
        </h2>

        <p className="mt-4 text-gray-600">
          Start building your resume today.
        </p>


        <button
          className="
          mt-8
          bg-blue-600
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          hover:bg-blue-700
          transition
          "
        >
          Create My Resume
        </button>

      </section>



      {/* Footer */}

      <footer className="bg-gray-900 text-white py-10 text-center">

        <p>
          © 2026 CV Writing. All rights reserved.
        </p>

      </footer>


    </div>
  );
}