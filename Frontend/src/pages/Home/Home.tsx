import heroImage from "./images/images (10).jpeg";
import ServicesBox from "./box/box";
import HomeSecound from "./HomeSecound";
import HomeThird from "./Hometherd";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      
      <section className="pt-20">
        <div className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-white">
          {/* Background Image */}
          <img
            src={heroImage}
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />

          {/* Content */}
          <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center items-start text-left px-10 text-slate-900 max-w-2xl">
            <p className="text-sm tracking-widest text-slate-500">
              Your Career Journey Starts Here
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
              Build Your Future
              <br />
              With Confidence
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-700">
              Request professional career documents and explore internship opportunities all in one place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-slate-900 px-8 py-3 font-medium text-white hover:bg-slate-700">
                Get Started
              </button>

              <button className="rounded-full border border-slate-900 px-8 py-3 font-medium text-slate-900 hover:bg-slate-900 hover:text-white">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
      <ServicesBox />
      <HomeSecound/>
      <HomeThird/>
    </main>
    
  );
}
