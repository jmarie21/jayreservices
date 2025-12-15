import { useState } from "react";
import { Button } from "./ui/button";
import weddingImg1 from "../assets/wedding/wedding.jpg";
import weddingImg2 from "../assets/wedding/wedding2.jpg";
import weddingImg3 from "../assets/wedding/wedding3.jpg";
import weddingImg4 from "../assets/wedding/wedding4.jpg";
import eventImg1 from "../assets/event/event.jpg";
import eventImg2 from "../assets/event/event2.jpg";
import eventImg3 from "../assets/event/event3.jpg";
import eventImg4 from "../assets/event/event4.jpg";
import constructionImg1 from "../assets/construction/construction.jpg";
import constructionImg2 from "../assets/construction/construction2.jpg";
import constructionImg3 from "../assets/construction/construction3.jpg";
import constructionImg4 from "../assets/construction/construction4.jpg";

const services = [
  {
    title: "Basic Style",
    videoId: "https://www.youtube.com/embed/e5SCQSz5R7Q",
    categories: ["Real Estate"],
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
    categories: ["Real Estate"],
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
    categories: ["Real Estate"],
    features: [
      "Retiming the clip with beat of the music",
      "With Ken Burns transition",
      "With building a house transition",
      "With day to night (Applicable if you have both Day & Night Clips)",
      "With more than 3 smooth speed ramps",
      "With Motion Blur every speed ramps",
      "With some 3D Text if requested",
      "With sound effects",
      "With Earth zoom transition if requested",
    ],
    orderLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfwG18Werh9b1ghRDiLwI7v6-xdmtnEpg49XhHBNLdRt0im1A/viewform",
  },
  {
    title: "Luxury Style",
    videoId: "https://player.vimeo.com/video/1106032025",
    categories: ["Real Estate"],
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
      "With Earth zoom transition if requested",
    ],
    orderLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf_vA75Jv4IujD7LYHjhH60VHAimCUewfGthfYU6tcGjKVSqw/viewform",
  },
  // Wedding Service
  {
    title: "Wedding Service",
    imageUrl: [weddingImg1, weddingImg2, weddingImg3, weddingImg4],
    categories: ["Wedding"],
    description:
      "Transform your wedding footage into a cinematic masterpiece that captures every precious moment of your special day. Our expert editors will craft a timeless love story that you'll cherish forever, complete with emotional transitions, color grading, and carefully synchronized music that brings tears of joy.",
    layout: "two-column",
  },
  // Event Service
  {
    title: "Event Service",
    imageUrl: [eventImg1, eventImg2, eventImg3, eventImg4],
    categories: ["Event"],
    description:
      "Whether it's a corporate gathering, birthday celebration, or milestone event, we create engaging highlight reels that capture the energy and atmosphere of your occasion. Professional editing with dynamic pacing, smooth transitions, and branded elements that showcase your event's unique character and memorable moments.",
    layout: "two-column",
  },
  // Construction Service
  {
    title: "Construction Service",
    imageUrl: [constructionImg1, constructionImg2, constructionImg3, constructionImg4],
    categories: ["Construction"],
    description:
      "Document your construction project from groundbreaking to completion with compelling time-lapse videos and progress reels. Perfect for showcasing your work to clients, stakeholders, or marketing purposes. Includes professional transitions, on-screen text for project milestones, and aerial drone footage integration when available.",
    layout: "two-column",
  },
];

const Services = () => {
  const categories = ["Real Estate", "Wedding", "Event", "Construction"];
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );

  const filteredServices = services.filter((s) =>
    s.categories?.includes(selectedCategory)
  );

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

          {/* Category Buttons */}
          <div className="flex justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="lg"
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-800 via-blue-600 to-green-400 text-white"
                    : "bg-gray-800 text-white/80 hover:brightness-110"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            {selectedCategory === "Real Estate" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredServices.map((service, index) => (
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
                          (service.features?.length ?? 0) > 6
                            ? "grid-cols-2"
                            : "grid-cols-1"
                        }`}
                      >
                        {service.features?.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Pushes the button to bottom */}
                      <div className="mt-auto pt-4">
                        <a href="#contact">
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
            ) : (
              // Two-column layout for Wedding, Event, Construction
              <div className="max-w-7xl mx-auto">
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Left: Text Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6">
                          {service.title}
                        </h3>
                        <p className="text-lg text-white/80 leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <div>
                          <a href="#contact">
                            <Button
                              size="lg"
                              className="bg-gradient-to-r from-blue-800 via-blue-600 to-green-400 text-white hover:brightness-110 transition-all"
                            >
                              Order Now
                            </Button>
                          </a>
                        </div>
                      </div>

                      {/* Right: Image */}
                      <div className="aspect-video md:aspect-auto">
                        {Array.isArray(service.imageUrl) ? (
                          <div className="relative h-full min-h-[400px] md:min-h-[600px] bg-gray-900 flex items-center justify-center p-4">
                            {service.imageUrl.map((img, idx) => {
                              const positions = [
                                { top: '5%', left: '5%', rotate: -8, width: '45%', height: '42%' },
                                { top: '8%', left: '45%', rotate: 5, width: '48%', height: '45%' },
                                { top: '48%', left: '10%', rotate: 3, width: '42%', height: '48%' },
                                { top: '52%', left: '52%', rotate: -6, width: '45%', height: '43%' }
                              ];
                              return (
                                <div
                                  key={idx}
                                  className="absolute transition-transform hover:scale-110 hover:z-50 cursor-pointer"
                                  style={{
                                    top: positions[idx].top,
                                    left: positions[idx].left,
                                    width: positions[idx].width,
                                    height: positions[idx].height,
                                    transform: `rotate(${positions[idx].rotate}deg)`,
                                    zIndex: idx,
                                  }}
                                >
                                  <img
                                    className="w-full h-full object-cover rounded-sm shadow-2xl border-4 border-white"
                                    src={img}
                                    alt={`${service.title} ${idx + 1}`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <img
                            className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
                            src={service.imageUrl}
                            alt={service.title}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-green-900 border border-green-400/20 text-center">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Let’s craft stunning visuals for your listings.
            </p>
            <a href="#contact">
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
