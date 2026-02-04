import { Instagram, Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-2xl font-black">
            <span className="text-glow text-primary">TOJI'S</span>{" "}
            <span className="text-accent">BEATS</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/amiraziziofficial10/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden sm:inline">@amiraziziofficial10</span>
            </a>
            <a
              href="https://soundcloud.com/amir-azizi-977445003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Headphones className="w-5 h-5" />
              <span className="hidden sm:inline">SoundCloud</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Toji's Beats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
