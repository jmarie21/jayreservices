import { Button } from "./ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white font-inter overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-400 blur-3xl opacity-20 rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-500 blur-3xl opacity-20 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-black text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Bring Your{" "}
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
              Property
            </span>
            <br />
            Story To Life
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            From virtual tours to listing videos, we offer services that make
            your properties stand out. Explore our tailored packages below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#services">
              <Button className="min-w-[200px] group bg-gradient-to-r from-blue-800 via-blue-600 to-green-400 text-white hover:brightness-110 transition-all">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Our Work
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white/90">
            <div className="text-center">
              <div className="font-bold text-2xl md:text-3xl text-green-300 mb-1">
                5000+
              </div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl md:text-3xl text-cyan-300 mb-1">
                200+
              </div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl md:text-3xl text-blue-300 mb-1">
                5+
              </div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 border-2 !border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-300 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
