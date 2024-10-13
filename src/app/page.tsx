import Navbar from './components/navbar';
import Hero from './components/hero';
import Feature from './components/feature';
import Footer from './components/footer';
import { Skills } from './components/skills';
import { Portfolio } from './components/portfolio';
import { AboutMe } from './components/about-me';
import Blog from './components/blog';
import Contact from './components/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Feature />
      <Blog />
      <Skills />
      <Portfolio />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
