import homeConfig from '../config/homeConfig.json';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-arcade-dark p-8 pixel-font overflow-y-auto">
      <div className="max-w-6xl w-full mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-arcade-darkPurple p-8 rounded-lg border-2 border-arcade-pink">
          <img
            src={"profile.jpg"}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-arcade-pink"
          />
          <div className="flex-1">
            <h1 className="text-4xl text-arcade-pink glow-pink mb-4">
              {homeConfig.welcomeTitle}
            </h1>
            <p className="text-arcade-blue text-lg leading-relaxed">
              {homeConfig.welcomeDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full space-y-12">
        <section className="bg-arcade-darkPurple p-8 rounded-lg border-2 border-arcade-pink">
          <h2 className="text-3xl text-arcade-pink glow-pink mb-8 text-center">
            {homeConfig.statsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeConfig.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-arcade-dark p-6 rounded-lg border-2 border-arcade-blue hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl text-arcade-blue mb-4">{stat.title}</h3>
                <img
                  src={stat.imageUrl}
                  alt={stat.altText}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>
        </section>
        /</div>
    </div>
  );
}