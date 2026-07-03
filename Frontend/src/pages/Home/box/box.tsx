import cvImage from "./image/cv-writing.jpeg";
import coverLetterImage from "./image/cover-letter.jpeg";
import finalReportImage from "./image/final-report.jpeg";
import proposalImage from "./image/proposal.jpeg";
import internshipsImage from "./image/internships.jpeg";

export default function Services() {
  const services = [
    { title: "CV Writing", image: cvImage },
    { title: "Cover Letter", image: coverLetterImage },
    { title: "Final Report", image: finalReportImage },
    { title: "Proposal", image: proposalImage },
    { title: "Internships", image: internshipsImage },
  ];

  return (
    <section className="relative z-20 overflow-x-hidden px-6 pb-16 pt-10">
      {/* Full-width row so the cards can scroll without hitting a centered limit. */}
      <div className="flex w-full gap-10 overflow-x-auto overflow-y-hidden pb-2 snap-x snap-mandatory">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex h-[37rem] w-96 shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl snap-start"
            >
              {/* Header stays compact so the image gets more space. */}
              <div className="shrink-0 border-b border-slate-100 px-6 py-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-4 text-blue-600"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Image fills the remaining card height and stays inside the box. */}
              <div className="relative m-5 mt-0 flex-1 overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}