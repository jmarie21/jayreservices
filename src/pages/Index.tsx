import About from "../components/About";
import Charities from "../components/Charities";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
// import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Transitions from "../components/Transitions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Transitions />
      <Testimonials />
      <FAQ />
      <Charities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
