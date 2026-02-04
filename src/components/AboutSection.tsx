import tojiArtwork from "@/assets/toji-artwork.jpg";

const AboutSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_hsl(180_100%_50%_/_0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative group flex-shrink-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Image container with border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden gradient-border">
                <img 
                  src={tojiArtwork} 
                  alt="Toji" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse box-glow" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full animate-pulse box-glow-accent" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-display text-sm font-bold rounded-full mb-4">
              THE PRODUCER
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-6">
              ABOUT <span className="text-glow text-primary">TOJI</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mb-6 leading-relaxed">
              Creating unique beats that blend dark atmospheres with hard-hitting rhythms. 
              Every track is crafted with passion and precision, designed to make your music stand out.
            </p>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              From trap to drill, R&B to hip-hop — each beat tells a story waiting for your voice.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8">
              <div className="text-center">
                <div className="font-display text-3xl font-black text-primary text-glow">6+</div>
                <div className="text-muted-foreground text-sm">Beats Available</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-black text-accent text-glow-accent">100%</div>
                <div className="text-muted-foreground text-sm">Original</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-black text-primary text-glow">24/7</div>
                <div className="text-muted-foreground text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
