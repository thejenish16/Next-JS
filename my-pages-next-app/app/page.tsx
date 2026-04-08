import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import BenefitsSection from "./components/BenefitsSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div id="top" className="top"></div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <BenefitsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
