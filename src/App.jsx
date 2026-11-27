import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ContentNiches from './components/ContentNiches';
import Gallery from './components/Gallery';
import CreativeProcess from './components/CreativeProcess';
import CaseStudies from './components/CaseStudies';
import CareerGrowth from './components/CareerGrowth';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCF5E3] text-[#46578C]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ContentNiches />
        <Gallery />
        <CreativeProcess />
        <CaseStudies />
        <CareerGrowth />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
