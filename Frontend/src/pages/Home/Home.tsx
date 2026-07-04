import heroImage from "./images/images (10).jpeg";
import ServicesBox from "./box/box";
import HomeSecound from "./HomeSecound";
import HomeThird from "./Hometherd";

export default function Home() {
  return (
    <main className="bg-black">
      
      <section className="pt-20">
        <div className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-black">
          {/* Background Image */}
          <img
            src={heroImage}
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center items-start text-left px-10 text-white max-w-2xl">
            <p className="text-sm tracking-widest text-blue-300">
              Your Career Journey Starts Here
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
              Build Your Future
              <br />
              With Confidence
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              Request professional career documents and explore internship opportunities all in one place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-blue-700 px-8 py-3 font-medium text-white hover:bg-blue-800">
                Get Started
              </button>

              <button className="rounded-full border border-white px-8 py-3 font-medium text-white hover:bg-white hover:text-black">
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
