import { Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import portfolio1 from "../assets/placeholder.jpg";
// import portfolio2 from "@/assets/portfolio-2.jpg";
// import portfolio3 from "@/assets/portfolio-3.jpg";
// import portfolio4 from "@/assets/portfolio-4.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Commercial",
      category: "Commercial",
      image: portfolio1,
      description:
        "Dynamic brand video with motion graphics and fast-paced editing",
      // awards: "Gold Award - Creative Excellence",
    },
    {
      id: 2,
      title: "Corporate Documentary",
      category: "Corporate",
      image: portfolio1,
      description: "Professional corporate story with cinematic color grading",
      // awards: "Best Corporate Video 2024",
    },
    {
      id: 3,
      title: "Music Video",
      category: "Music",
      image: portfolio1,
      description:
        "Creative music video with artistic effects and dynamic transitions",
      // awards: "Viewers Choice Award",
    },
    {
      id: 4,
      title: "Documentary Film",
      category: "Documentary",
      image: portfolio1,
      description:
        "Authentic documentary editing with natural storytelling flow",
      // awards: "Festival Selection",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
                Portfolio
              </span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our collection of award-winning projects that showcase our
              expertise in video editing, motion graphics, and post-production
              excellence.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="lg"
                      className="rounded-full shadow-glow transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-inter font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Award */}
                  {/* <div className="flex items-center text-accent text-sm mb-4">
                    <Award className="w-4 h-4 mr-2" />
                    {project.awards}
                  </div> */}

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/20 hover:border-primary group-hover:shadow-glow/10"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-accent/5 to-primary/5 border-2 border-green-400">
              <h3 className="font-inter font-bold text-2xl md:text-3xl mb-4 text-foreground">
                See More of Our Work
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This is just a glimpse of our portfolio. We've worked on
                hundreds of projects across various industries and formats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="min-w-[200px] bg-gradient-to-r from-blue-800 via-blue-600 to-green-400 text-white hover:brightness-110 transition-all"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
