import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
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
        <Industries />
        <Process />
        <OurFocus />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
