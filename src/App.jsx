import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import OurFocus from './components/OurFocus';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <About />
        <WhyChoose />
        <Services />
        <Products />
        <Industries />
        <Process />
        <TechStack />
        <Portfolio />
        <CaseStudies />
        <OurFocus />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
