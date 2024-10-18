// src/pages/LandingPage.jsx
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <section data-aos="fade-up">
          <Hero />
        </section>
        <section data-aos="fade-up" data-aos-delay="200">
          <Projects />
        </section>
        <section data-aos="fade-up" data-aos-delay="200">
          <Skills />
        </section>
        <section data-aos="fade-up" data-aos-delay="200">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
