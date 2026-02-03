import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import CapstoneShowcase from './components/CapstoneShowcase';
import ProjectsGallery from './components/ProjectsGallery';
import CertificationBadge from './components/CertificationBadge';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-brand-beige min-h-screen">
      <Hero />
      <About />
      <ExperienceTimeline />
      <SkillsGrid />
      <CapstoneShowcase />
      <ProjectsGallery />
      <CertificationBadge />
      <Contact />

      <footer className="bg-brand-brown text-brand-tan py-6 text-center text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} Thandeka Mbokazi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
