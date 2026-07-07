import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import AboutSection from "./components/AboutSection";
import TrainingGrid from "./components/TrainingGrid";
import VideoShowcase from "./components/VideoShowcase";
import WhyChooseUs from "./components/WhyChooseUs";
import LabGallery from "./components/LabGallery";
import LearningJourney from "./components/LearningJourney";
import CertificationSection from "./components/CertificationSection";
import Gallery from "./components/Gallery";
import FAQAccordion from "./components/FAQAccordion";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <AboutSection />
        <TrainingGrid />
        <VideoShowcase />
        <WhyChooseUs />
        <LabGallery />
        <LearningJourney />
        <CertificationSection />
        <Gallery />
        <FAQAccordion />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
