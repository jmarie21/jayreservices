import { Camera, Award, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Camera,
      title: "Creative Excellence",
      description:
        "Every frame crafted with artistic vision and technical precision.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning work trusted by leading brands and creators.",
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description:
        "We work closely with you to ensure your vision comes to life.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "Quick delivery without compromising on quality and attention to detail.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-stone-950 text-white font-inter overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Header */}
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Crafting Stories Through{" "}
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
              Visual Excellence
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            At Jay RE, we don't just edit videos – we sculpt experiences. With
            over 5 years of industry expertise and a passion for storytelling,
            we transform raw footage into compelling narratives that captivate
            audiences.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800 border border-gray-700 text-left transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 rounded-lg w-fit bg-green-400/10">
                  <feature.icon className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-green-900 border border-green-400/20">
            <h3 className="font-bold text-2xl md:text-3xl mb-4 text-white">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To elevate every project with innovative editing techniques,
              stunning visual effects, and meticulous attention to detail. We
              believe that great editing is invisible – it should enhance the
              story, not distract from it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
