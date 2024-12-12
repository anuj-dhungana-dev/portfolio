import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <SocialLinks />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;