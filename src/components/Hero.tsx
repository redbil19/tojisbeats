import { Instagram, Music, Headphones } from "lucide-react";
import Equalizer from "./Equalizer";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(180_100%_50%_/_0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_hsl(320_100%_60%_/_0.1)_0%,_transparent_50%)]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(180 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(180 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Equalizer */}
          <div className="mb-8 opacity-80">
            <Equalizer />
          </div>

          {/* Main title with glitch effect */}
          <h1 
            className="glitch font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4"
            data-text="TOJI'S"
          >
            <span className="text-glow">TOJI'S</span>
          </h1>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-accent text-glow-accent mb-8">
            BEATS
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Premium beats crafted for your next hit. 
            <span className="text-primary"> Unique sounds</span>, 
            <span className="text-accent"> unlimited potential</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#beats"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:box-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Music className="w-5 h-5" />
                EXPLORE BEATS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="https://soundcloud.com/amir-azizi-977445003"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-accent text-accent font-display font-bold text-lg rounded-lg transition-all duration-300 hover:bg-accent/10 hover:box-glow-accent flex items-center gap-2"
            >
              <Headphones className="w-5 h-5" />
              SOUNDCLOUD
            </a>
          </div>

          {/* Social link */}
          <a
            href="https://www.instagram.com/amiraziziofficial10/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Instagram className="w-6 h-6" />
            <span className="font-medium">@amiraziziofficial10</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
