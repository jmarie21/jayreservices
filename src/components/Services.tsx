import {
  Scissors,
  Palette,
  Sparkles,
  Film,
  Volume2,
  Monitor,
} from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Video Editing",
      description:
        "Professional video editing with seamless cuts, transitions, and pacing that keeps your audience engaged from start to finish.",
      features: [
        "Multi-camera editing",
        "Audio synchronization",
        "Seamless transitions",
        "Timeline optimization",
      ],
    },
    {
      icon: Sparkles,
      title: "Motion Graphics",
      description:
        "Eye-catching motion graphics and animations that add visual impact and help communicate your message effectively.",
      features: [
        "2D/3D animations",
        "Title sequences",
        "Logo animations",
        "Infographic videos",
      ],
    },
    {
      icon: Palette,
      title: "Color Grading",
      description:
        "Professional color correction and grading to enhance mood, establish atmosphere, and create visual consistency.",
      features: [
        "Cinematic looks",
        "Mood enhancement",
        "Color correction",
        "Brand consistency",
      ],
    },
    {
      icon: Volume2,
      title: "Sound Design",
      description:
        "Immersive audio experiences with professional sound mixing, effects, and music integration.",
      features: [
        "Audio mixing",
        "Sound effects",
        "Music integration",
        "Voice enhancement",
      ],
    },
    {
      icon: Film,
      title: "Post-Production",
      description:
        "Complete post-production services from rough cut to final delivery, handling every aspect of your project.",
      features: [
        "Full workflows",
        "Quality control",
        "Format optimization",
        "Delivery management",
      ],
    },
    {
      icon: Monitor,
      title: "Live Streaming",
      description:
        "Professional live streaming production with multi-camera setups, graphics, and real-time editing.",
      features: [
        "Multi-cam switching",
        "Live graphics",
        "Stream optimization",
        "Real-time editing",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-stone-950 text-white font-inter overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer comprehensive video
              production services that bring your creative vision to life with
              professional excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-800 border border-gray-700 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 p-4 rounded-xl bg-green-400/10 w-fit transition-all duration-300 group-hover:scale-105">
                  <service.icon className="w-8 h-8 text-green-300" />
                </div>

                <h3 className="font-bold text-xl mb-3">{service.title}</h3>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-white/60 flex items-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-green-900 border border-green-400/20">
            {/* CTA Content */}
            <div className="relative z-20 text-center">
              <h3 className="font-bold text-2xl md:text-3xl mb-4 text-white">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Let's discuss how we can bring your vision to life with our
                professional video editing services.
              </p>
              <Button
                size="lg"
                className="min-w-[200px] bg-gradient-to-r from-blue-800 via-blue-600 to-green-400 text-white hover:brightness-110 transition-all"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
