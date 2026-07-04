import cvImage from "./image/cv-writing.jpeg";
import coverLetterImage from "./image/cover-letter.jpeg";
import finalReportImage from "./image/final-report.jpeg";
import proposalImage from "./image/proposal.jpeg";
import internshipsImage from "./image/internships.jpeg";

export default function Services() {
  const services = [
    {
      title: "CV Writing",
      image: cvImage,
      description: "Professional ATS-friendly CVs tailored for your career.",
      tag: "Career",
    },
    {
      title: "Cover Letter",
      image: coverLetterImage,
      description: "Stand out with a customized cover letter.",
      tag: "Writing",
    },
    {
      title: "Final Report",
      image: finalReportImage,
      description: "Academic reports with professional formatting.",
      tag: "Academic",
    },
    {
      title: "Proposal",
      image: proposalImage,
      description: "Project proposals that impress supervisors and clients.",
      tag: "Projects",
    },
    {
      title: "Internships",
      image: internshipsImage,
      description: "Find internship opportunities and kickstart your career.",
      tag: "Jobs",
    },
  ];

  return (
    <section className="bg-white py-20 px-[6%]">
      <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[360px] md:min-w-[420px] bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
          >

            {/* Image */}
            <div className="h-[270px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <span className="text-xs font-semibold uppercase tracking-widest text-[#c88b3d]">
                {service.tag}
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                {service.description}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Learn More
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}