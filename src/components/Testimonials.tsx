import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anonymous",
      content:
        "Jay RE has completely transformed my business and has helped me reach levels of quality I could have never imagined.",
      rating: 5,
      avatar: "AN",
    },
    {
      id: 2,
      name: "Anonymous",
      content:
        "Jay RE has been a game-changer for my business. Their expertise and dedication have elevated my operations to new heights, delivering results far beyond my expectations.",
      rating: 5,
      avatar: "AN",
    },
    {
      id: 3,
      name: "Anonymous",
      content:
        "Working with Jay RE has been an incredible experience. Their innovative approach and unwavering commitment to excellence have brought unparalleled growth and quality to my business.",
      rating: 5,
      avatar: "AN",
    },
    {
      id: 4,
      name: "Anonymous",
      content:
        "Professional, creative, and incredibly efficient. Jay RE delivered our documentary edit ahead of schedule without compromising quality. They understand storytelling at its core.",
      rating: 5,
      avatar: "AN",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              What Our{" "}
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
                Clients Say
              </span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to
              say about working with FrameCraft Studios and the results we've
              achieved together.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow/10 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-green-400 transform rotate-180" />
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed text-lg font-inter">
                  "{testimonial.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-green-400 fill-accent"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-green-400 font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
              <div className="font-inter font-bold text-3xl md:text-4xl text-primary mb-2">
                98%
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/10">
              <div className="font-inter font-bold text-3xl md:text-4xl text-green-400 mb-2">
                24h
              </div>
              <div className="text-sm text-muted-foreground">
                Average Response
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
              <div className="font-inter font-bold text-3xl md:text-4xl text-primary mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Satisfaction Guarantee
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/10">
              <div className="font-inter font-bold text-3xl md:text-4xl text-green-400 mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                On-Time Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
