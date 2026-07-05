import { motion } from "framer-motion";
import cvImg from "./images/cv.jpeg";
import coverImg from "./images/cover.jpeg";
import reportImg from "./images/report.jpeg";
import proposalImg from "./images/proposal.jpeg";
import internshipImg from "./images/internship.jpeg";

function HomeThird() {
  const services = [
    {
      title: "CV Writing",
      image: cvImg,
      description:
        "Create a professional, ATS-friendly CV that highlights your skills, experience, and achievements.",
    },
    {
      title: "Cover Letter",
      image: coverImg,
      description: "A compelling cover letter tailored to your dream job.",
    },
    {
      title: "Final Report",
      image: reportImg,
      description: "Get professionally formatted academic reports.",
    },
    {
      title: "Proposal",
      image: proposalImg,
      description: "Transform your ideas into a clear project proposal.",
    },
    {
      title: "Internships",
      image: internshipImg,
      description:
        "Discover internship opportunities from trusted companies.",
    },
  ];

  return (
    <section className="w-full px-10 py-20">
      <div className="flex flex-col space-y-6">

        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`w-full max-w-3xl flex bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden ${
                isReversed ? "flex-row-reverse ml-auto" : "mr-auto"
              }`}
            >
              {/* TEXT */}
              <div className="w-1/2 flex flex-col justify-center p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-base leading-6">
                  {service.description}
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-1/2 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[250px] object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

export default HomeThird;