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
    <section className="bg-[#f4f1ea] text-[#1c1a17] font-serif pb-16">
      <div className="relative w-full h-[42vh] min-h-[260px] flex items-end overflow-hidden">
        <img
          src="https://picsum.photos/seed/banner1/1600/700"
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="relative z-10 px-[6%] py-10 text-[#fdfaf3]">
          <h1 className="text-3xl font-bold md:text-5xl">
            Explore & Discover
          </h1>
          <p className="mt-2 text-sm text-[#e4ddc8] md:text-base">
            Curated picks just for you
          </p>
        </div>
      </div>

      <div className="px-[6%] pt-10">
        <div className="flex gap-6 overflow-x-auto pb-4 -mt-24 scroll-smooth md:-mt-28">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[240px] overflow-hidden rounded-2xl bg-white shadow-xl transition transform hover:-translate-y-3 hover:shadow-2xl md:min-w-[300px]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                <p className="text-sm leading-6 text-gray-500">
                  {card.description}
                </p>
                <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-[#c88b3d]">
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
