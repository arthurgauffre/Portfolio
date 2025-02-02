import homeConfig from '../config/homeConfig.json';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] p-8 pixel-font overflow-y-auto">
      <h1 className="text-4xl text-arcade-pink glow-pink mb-8 border-b-2 border-arcade-blue pb-4">
        {homeConfig.welcomeMessage}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {homeConfig.stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-arcade-darkPurple p-6 rounded-lg border-2 border-arcade-pink hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl text-arcade-blueborder-arcade-blue mb-4">{stat.title}</h2>
            <img
              src={stat.imageUrl}
              alt={stat.altText}
              className="w-full h-auto rounded-md"
            />
          </div>
        ))}
      </div>

      <a
        href={homeConfig.githubLink.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-arcade-pink text-[#0a0a0a] px-6 py-3 rounded-full hover:bg-arcade-blueborder-arcade-blue transition-all border-2 border-arcade-blue font-bold"
      >
        {homeConfig.githubLink.buttonText}
      </a>
    </div>
  );
}