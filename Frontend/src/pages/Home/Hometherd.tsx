import { motion } from "framer-motion";

function HomeThird() {
  const services = [
    {
      title: "CV Writing",
      description:
        "Create a professional, ATS-friendly CV that highlights your skills, experience, and achievements. Our expert writers help you make a strong first impression and increase your chances of landing interviews.",
    },
    {
      title: "Cover Letter",
      description:
        "A compelling cover letter tailored to your dream job. Showcase your strengths, express your passion, and stand out from other applicants with a professionally written letter.",
    },
    {
      title: "Final Report",
      description:
        "Get professionally formatted and well-structured academic reports that meet university standards. We ensure clarity, quality, and a polished presentation for your final submission.",
    },
    {
      title: "Proposal",
      description:
        "Transform your ideas into a clear and persuasive project proposal. We create professional proposals with proper structure, research, and formatting to impress supervisors and clients.",
    },
    {
      title: "Internships",
      description:
        "Discover internship opportunities from trusted companies and kick-start your professional journey. Connect with employers and gain valuable industry experience for your future career.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="space-y-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl cursor-pointer"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {service.title}
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HomeThird;