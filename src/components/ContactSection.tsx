import { Instagram, Mail, Music2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_hsl(180_100%_50%_/_0.1)_0%,_transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-display text-sm font-bold rounded-full mb-4">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-4">
              LET'S <span className="text-glow-accent text-accent">CREATE</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Custom beats, collaborations, or exclusive licenses. Reach out and let's make something legendary.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/amiraziziofficial10/"
              target="_blank"
              rel="noopener noreferrer"
              className="group gradient-border rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:box-glow-accent transition-all">
                <Instagram className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm">@amiraziziofficial10</p>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@tojisbeats.com"
              className="group gradient-border rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:box-glow transition-all">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">Business inquiries</p>
            </a>

            {/* BeatStars */}
            <a
              href="https://www.beatstars.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group gradient-border rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:box-glow-accent transition-all">
                <Music2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">BeatStars</h3>
              <p className="text-muted-foreground text-sm">Browse & License</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
