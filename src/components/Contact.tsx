import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "jayrealestate98@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 912 345 6789",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cebu City, Philippines",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-stone-950 text-white font-inter overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header */}
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
              Connect
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            Whether you’re ready to start a project or just want to say hello,
            we’re here to listen. Reach out anytime.
          </p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800 border border-gray-700 text-center transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 rounded-lg w-fit mx-auto bg-green-400/10">
                  <item.icon className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Email CTA Button */}
          <a
            href="mailto:jayrealestate98@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-800 via-blue-600 to-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:brightness-110 transition-all"
          >
            Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
