import { Button } from "./ui/button";

const services = [
  {
    title: "Basic Style",
    videoId: "https://www.youtube.com/embed/e5SCQSz5R7Q",
    features: [
      "Retiming the clip with beat of the music",
      "With 2-3 smooth speed ramps only",
      "Some simple transitions like zoom after speed ramps",
    ],
    orderLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf1_dP5axA187uqaPI8VUz7fd0-TM4QmFKzvW-gZctDumGtrw/viewform?pli=1",
  },
  {
    title: "Deluxe Style",
    videoId: "https://www.youtube.com/embed/oaqW7kBki1c",
    features: [
      "Retiming the clip with beat of the music",
      "With Ken Burns transition",
      "With day to night (Applicable if you have both Day & Night Clips)",
      "With more than 3 smooth speed ramps",
      "With Motion Blur every speed ramps",
    ],
    orderLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdceDCIFuB-KQD1Qn4gYASw7SK8cBH3jlOzR9quaYvvOtemaw/viewform",
  },
  {
    title: "Premium Style",
    videoId: "https://player.vimeo.com/video/1106034319",
    features: [
      "Retiming the clip with beat of the music",
      "With Ken Burns transition",
      "With building a house transition",
      "With day to night (Applicable if you have both Day & Night Clips)",
      "With more than 3 smooth speed ramps",
      "With Motion Blur every speed ramps",
      "With some 3D Text if requested",
      "With sound effects",
    ],
    orderLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfwG18Werh9b1ghRDiLwI7v6-xdmtnEpg49XhHBNLdRt0im1A/viewform",
  },
  {
    title: "Luxury Style",
    videoId: "https://player.vimeo.com/video/1106032025",
    features: [
      "Retiming the clip with beat of the music",
      "With Ken Burns transition",
      "With house drop transition",
      "With day to night (Applicable if you have both Day & Night Clips)",
      "With more than 3 smooth speed ramps",
      "With Motion Blur every speed ramps",
      "With Pillar masking transition (Applicable if you have clips showing passing in the house’s pillar.)",
      "With a smooth pro zoom-in effect on the speaking agent",
      "With a smooth zoom-in effect on detailed shot clips.",
      "With few 3D Text if requested",
      "With sound effects",
    ],
    orderLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf_vA75Jv4IujD7LYHjhH60VHAimCUewfGthfYU6tcGjKVSqw/viewform",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-stone-950 text-white font-inter overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Choose from a range of editing styles tailored to your creative
              vision—from simple enhancements to cinematic effects.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, height: "100%" }}
              >
                {/* Video Embed */}
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={service.videoId}
                    title={service.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Service Details */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <ul
                    className={`grid gap-2 text-sm text-white/70 mb-6 ${
                      service.features.length > 6
                        ? "grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pushes the button to bottom */}
                  <div className="mt-auto pt-4">
                    <a
                      href={service.orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-green-400 text-white hover:brightness-110 transition-all"
                      >
                        Order Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-green-900 border border-green-400/20 text-center">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Let’s craft stunning visuals for your listings.
            </p>
            <a href="mailto:jayrealestate98@gmail.com">
              <Button
                size="lg"
                className="min-w-[200px] bg-gradient-to-r from-blue-800 via-blue-600 to-green-400 text-white hover:brightness-110 transition-all"
              >
                Get Free Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
