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
      icon: "fa-file-pdf",
      color: "from-blue-500 to-blue-600",
      description:
        "Create a professional, ATS-friendly CV that highlights your skills, experience, and achievements. Stand out from the competition with a well-crafted resume.",
    },
    {
      title: "Cover Letter",
      image: coverImg,
      icon: "fa-envelope",
      color: "from-purple-500 to-purple-600",
      description:
        "A compelling cover letter tailored to your dream job. Make a lasting impression with a personalized letter that showcases your passion and qualifications.",
    },
    {
      title: "Final Report",
      image: reportImg,
      icon: "fa-file-alt",
      color: "from-green-500 to-green-600",
      description:
        "Get professionally formatted academic reports. Ensure your final year project report meets all academic standards and impresses your evaluators.",
    },
    {
      title: "Project Proposal",
      image: proposalImg,
      icon: "fa-file-word",
      color: "from-orange-500 to-orange-600",
      description:
        "Transform your ideas into a clear project proposal. Get expert guidance to structure and present your research proposal effectively.",
    },
    {
      title: "Internships",
      image: internshipImg,
      icon: "fa-briefcase",
      color: "from-red-500 to-red-600",
      description:
        "Discover internship opportunities from trusted companies. Kickstart your career with valuable industry experience and networking opportunities.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full px-4 md:px-10 py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-blue-100">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            What We Offer
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
            Professional services to help you succeed in your academic and career journey
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col space-y-8 md:space-y-12 max-w-6xl mx-auto"
      >
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex flex-col md:flex-row bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-300/30 transition-all duration-300 ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[200px] md:h-[280px] lg:h-[320px] overflow-hidden relative group">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Gradient Overlay on Image */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Image Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <i className={`fas ${service.icon} text-sm`} style={{ color: service.color.split(' ')[1]?.replace('to-', '') || '#3b82f6' }}></i>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Service Number */}
                  <span className="text-xs font-semibold text-blue-500 mb-2 block">
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.title}
                    </span>
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 group"
                  >
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-500/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-white/80 text-base mb-6">
            Let us help you create the perfect academic and career documents
          </p>
          <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97]">
            Contact Us Now
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </motion.div>

      {/* Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </section>
  );
}

export default HomeThird;