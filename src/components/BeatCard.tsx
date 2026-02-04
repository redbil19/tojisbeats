import { Play, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface BeatCardProps {
  title: string;
  bpm: number;
  genre: string;
  price: string;
  beatStarsLink: string;
}

const BeatCard = ({ title, bpm, genre, price, beatStarsLink }: BeatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative gradient-border rounded-lg overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-card p-6 h-full">
        {/* Waveform visualization */}
        <div className="flex items-center justify-center h-32 mb-4 overflow-hidden">
          <div className="flex items-center gap-[2px] h-full w-full">
            {[...Array(50)].map((_, i) => {
              const height = Math.sin(i * 0.3) * 30 + 40 + Math.random() * 20;
              return (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-primary/50 to-primary rounded-full transition-all duration-300"
                  style={{
                    height: `${height}%`,
                    transform: isHovered ? `scaleY(${1 + Math.random() * 0.3})` : 'scaleY(1)',
                    opacity: isHovered ? 1 : 0.7,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Beat info */}
        <div className="space-y-2">
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-glow transition-all">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="px-2 py-1 bg-primary/10 rounded text-primary font-medium">
              {bpm} BPM
            </span>
            <span className="px-2 py-1 bg-accent/10 rounded text-accent font-medium">
              {genre}
            </span>
          </div>
        </div>

        {/* Price and actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <span className="font-display text-xl font-bold text-primary text-glow">
            {price}
          </span>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:box-glow">
              <Play className="w-5 h-5" />
            </button>
            <a
              href={beatStarsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent text-accent-foreground hover:box-glow-accent transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Hover glow effect */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default BeatCard;
