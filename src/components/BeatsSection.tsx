import BeatCard from "./BeatCard";

const beats = [
  {
    title: "2AM",
    bpm: 140,
    genre: "Trap",
    price: "$29.99",
    beatStarsLink: "https://www.beatstars.com",
  },
  {
    title: "HARD",
    bpm: 128,
    genre: "Hip-Hop",
    price: "$34.99",
    beatStarsLink: "https://www.beatstars.com",
  },
  {
    title: "DARDARA",
    bpm: 145,
    genre: "Drill",
    price: "$39.99",
    beatStarsLink: "https://www.beatstars.com",
  },
  {
    title: "WESTDZ",
    bpm: 135,
    genre: "R&B",
    price: "$29.99",
    beatStarsLink: "https://www.beatstars.com",
  },
  {
    title: "MILAN",
    bpm: 150,
    genre: "Trap",
    price: "$44.99",
    beatStarsLink: "https://www.beatstars.com",
  },
  {
    title: "NEWGEM",
    bpm: 142,
    genre: "Dark Trap",
    price: "$34.99",
    beatStarsLink: "https://www.beatstars.com",
  },
];

const BeatsSection = () => {
  return (
    <section id="beats" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_hsl(320_100%_60%_/_0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-display text-sm font-bold rounded-full mb-4">
            CATALOG
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-4">
            FEATURED <span className="text-glow text-primary">BEATS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Hand-crafted instrumentals ready for your next project. Each beat comes with full licensing options.
          </p>
        </div>

        {/* Beats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beats.map((beat, index) => (
            <div
              key={beat.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BeatCard {...beat} />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <a
            href="https://www.beatstars.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent font-display font-bold rounded-lg hover:bg-accent/10 hover:box-glow-accent transition-all duration-300"
          >
            VIEW ALL ON BEATSTARS
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeatsSection;
