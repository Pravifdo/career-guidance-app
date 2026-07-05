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
      <div className="flex flex-col space-y-10">

        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`w-full max-w-5xl flex bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden ${
                isReversed ? "flex-row-reverse ml-auto" : "mr-auto"
              }`}
            >
              {/* TEXT SIDE */}
              <div className="w-1/2 flex flex-col justify-center p-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-lg leading-7">
                  {service.description}
                </p>
              </div>

              {/* IMAGE SIDE */}
              <div className="w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default HomeThird;