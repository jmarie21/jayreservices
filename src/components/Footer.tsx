import { Instagram, Mail, Facebook } from "lucide-react";
import logoWhite from "../assets/jayre.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/jayrealestate98/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/jayreservices/",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Video Editing",
    "Motion Graphics",
    "Color Grading",
    "Sound Design",
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <img
                    src={logoWhite}
                    alt="Jay RE Logo"
                    className="h-26 md:h-26 object-contain"
                  />
                </div>
                <span className="font-inter font-bold text-2xl text-foreground">
                  Jay Re
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming visions into stunning visual stories through
                professional video editing and post-production excellence.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:shadow-glow/20"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-inter font-semibold text-lg mb-6 text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-inter font-semibold text-lg mb-6 text-foreground">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-inter font-semibold text-lg mb-6 text-foreground">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span>jayrealestate98@gmail.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Facebook className="w-5 h-5 mr-3 text-primary" />
                  <span>facebook.com/jayreservices/</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Instagram className="w-5 h-5 mr-3 text-primary" />
                  <span>instagram.com/jayrealestate98/</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Jay Re Video Editing Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
