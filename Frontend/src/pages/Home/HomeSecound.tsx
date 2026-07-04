interface CardItem {
  title: string;
  description: string;
  tag: string;
  image: string;
}

const cards: CardItem[] = [
  {
    title: "Mountain Trail",
    description: "A quiet path through the hills.",
    tag: "Nature",
    image: "https://picsum.photos/seed/card1/400/300",
  },
  {
    title: "Coastal Escape",
    description: "Waves, sand, and salty air.",
    tag: "Beach",
    image: "https://picsum.photos/seed/card2/400/300",
  },
  {
    title: "City Lights",
    description: "Streets that never sleep.",
    tag: "Urban",
    image: "https://picsum.photos/seed/card3/400/300",
  },
  {
    title: "Forest Calm",
    description: "Deep green, deep breath.",
    tag: "Nature",
    image: "https://picsum.photos/seed/card4/400/300",
  },
  {
    title: "Desert Sunset",
    description: "Where the sky sets on fire.",
    tag: "Adventure",
    image: "https://picsum.photos/seed/card5/400/300",
  },
];

export default function HomeSecound() {
  return (
    <section className="bg-white text-slate-900 font-serif pb-16">

      {/* BANNER SECTION */}
      <div className="relative h-[400px] overflow-hidden">

        {/* Background Image */}
        <img
          src="https://picsum.photos/seed/banner1/1600/700"
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text */}
        <div className="relative z-10 px-[6%] py-10 text-white">
          <h1 className="text-5xl font-bold md:text-5xl">
            Explore & Discover
          </h1>
          <p className="mt-2 text-sm md:text-base">
            Curated picks just for you
          </p>
        </div>

      </div>

      {/* CARDS SECTION OVERLAP */}
      <div className="relative -mt-20 z-20 px-[6%]">
        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">

          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl shadow-xl overflow-hidden transform transition hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500">
                  {card.description}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-[#c88b3d]">
                  {card.tag}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}