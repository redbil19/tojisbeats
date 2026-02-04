const Equalizer = () => {
  return (
    <div className="flex items-end gap-1 h-16">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="w-1.5 bg-gradient-to-t from-primary to-accent rounded-full"
          style={{
            animation: `bar-${(i % 5) + 1} ${0.8 + Math.random() * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.05}s`,
            height: '20%',
          }}
        />
      ))}
    </div>
  );
};

export default Equalizer;
