const transitions = [
  {
    title: "DAY TO NIGHT",
    url: "https://www.youtube.com/embed/C8v9B_aotjs",
    id: "C8v9B_aotjs",
  },
  {
    title: "BUILDING A HOUSE",
    url: "https://www.youtube.com/embed/ERrkbiFAOow",
    id: "ERrkbiFAOow",
  },
  {
    title: "BUILDING DROP",
    url: "https://www.youtube.com/embed/3vVfB8AZkMw",
    id: "3vVfB8AZkMw",
  },
  {
    title: "KEN BURNS",
    url: "https://www.youtube.com/embed/lIK2S0eIvwY",
    id: "lIK2S0eIvwY",
  },
  {
    title: "PILLAR MASKING",
    url: "https://www.youtube.com/embed/byh1nKAE3Pk",
    id: "byh1nKAE3Pk",
  },
  {
    title: "EARTH ZOOM",
    url: "https://www.youtube.com/embed/dyuRMbjDJas",
    id: "dyuRMbjDJas",
  },
  {
    title: "VIRTUAL STAGING AI",
    url: "https://www.youtube.com/embed/79vg5WqKgYE",
    id: "79vg5WqKgYE",
  },
  {
    title: "PAINTING TRANSITION",
    url: "https://www.youtube.com/embed/vCW4H7puU1c",
    id: "vCW4H7puU1c",
  },
];

const Transitions = () => {
  return (
    <section
      id="transitions"
      className="py-16 px-4 md:px-10 lg:px-20 bg-stone-950 text-foreground"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          Seamless{" "}
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
            Transitions
          </span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12">
          Elevate your videos with cinematic transitions — from dramatic
          lighting changes to dynamic zooms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transitions.map(({ title, url, id }) => (
            <div key={title} className="space-y-3">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`${url}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&showinfo=0&loop=1&playlist=${id}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={title}
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="text-lg font-semibold flex items-center justify-center gap-2">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transitions;
