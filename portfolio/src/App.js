import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import SEO from './components/SEO';
import Navbar from './components/Navbar/Navbar';
import ScrollRail from './components/Navigation/ScrollRail';
import HeroSection from './components/Hero/HeroSection';
import MetricsStrip from './components/Metrics/MetricsStrip';
import FeaturedProject from './components/Projects/FeaturedProject';
import ProjectList from './components/Projects/ProjectList';
import PrinciplesSection from './components/Principles/PrinciplesSection';
import TechStackSection from './components/TechStack/TechStackSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import ThemeToggle from './components/ThemeToggle';
import ResumeViewer from './components/Resume/ResumeViewer';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = () => setResumeOpen(true);
  const closeResume = () => setResumeOpen(false);

  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 selection:bg-accent/30">
        <Navbar onOpenResume={openResume} />
        <ScrollRail />
        <main>
          <HeroSection onOpenResume={openResume} />
          <MetricsStrip />
          <FeaturedProject />
          <ProjectList />
          <PrinciplesSection />
          <TechStackSection />
          <ContactSection />
        </main>
        <Footer onOpenResume={openResume} />
        <ThemeToggle />
        <ResumeViewer open={resumeOpen} onClose={closeResume} />
      </div>
    </HelmetProvider>
  );
}

export default App;
