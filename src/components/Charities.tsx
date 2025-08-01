import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const CharityCarousel = () => {
  const charityEvents = [
    {
      title: "Charity Initiative",
      subtitle: "Making Every Project Count",
      description:
        "With every project you entrust to us, you’re not only investing in quality work — you're also contributing to a cause. A portion of each project helps support children and underprivileged communities.",
      imageUrl: "/charities/charity1.jpg",
      videoLink: "https://www.facebook.com/share/v/1Aj7p5bpY2/",
      contact: {
        facebook: "Facebook or Instagram",
        email: "jayrealestate98@gmail.com",
      },
    },
    // Add more events here
  ];

  return (
    <section id="charity" className="py-16 bg-stone-950 text-foreground">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-center font-black text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
          Charity{" "}
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
            Events
          </span>
        </h2>

        <div className="text-lg md:text-xl text-muted-foreground text-center mb-12">
          <p>
            If you wish to donate directly or learn more, feel free to reach out
            via:
          </p>
          <p className="mt-2">
            📩 <span className="font-medium">Facebook or Instagram</span>
            <br />
            📧 Email:{" "}
            <a
              href="mailto:jayrealestate98@gmail.com"
              className="underline hover:text-primary"
            >
              jayrealestate98@gmail.com
            </a>
          </p>
        </div>

        <Carousel className="w-full relative overflow-hidden">
          <CarouselContent className="px-0 sm:px-4">
            {" "}
            {/* optional padding for non-mobile */}
            {charityEvents.map((event, index) => (
              <CarouselItem key={index} className="p-4">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={event.imageUrl}
                      alt={event.subtitle}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {event.subtitle}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>

                    <a
                      href={event.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 text-white hover:opacity-90 transition text-sm font-medium"
                    >
                      📽️ Watch Our Initiative in Action
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Position buttons absolutely so they don’t interfere with layout */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default CharityCarousel;
