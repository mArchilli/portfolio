// src/pages/LandingPage.jsx
import {Header} from '../components/Header';
import {Hero} from '../components/Hero';
import {Projects} from '../components/Projects';
import {Skills} from '../components/Skills';
import {Contact} from '../components/Contact';
import {Footer} from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero/>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
