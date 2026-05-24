import { useEffect, useState } from 'react';
import AboutConcept from './components/AboutConcept';
import BentoCards from './components/BentoCards';
import DisclaimerBanner from './components/DisclaimerBanner';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MigrationPaths from './components/MigrationPaths';
import OpenSourceSection from './components/OpenSourceSection';
import WhyPhp from './components/WhyPhp';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return true;
  }

  const saved = window.localStorage.getItem('theme');
  return saved ? saved === 'dark' : true;
};

export default function App() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const isAboutConcept = typeof window !== 'undefined' && window.location.pathname === '/about-concept';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  if (isAboutConcept) {
    return <AboutConcept />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased dark:bg-php-navy dark:text-white">
      <DisclaimerBanner />
      <Header isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main>
        <Hero />
        <BentoCards />
        <MigrationPaths />
        <WhyPhp />
        <Ecosystem />
        <OpenSourceSection />
      </main>
      <Footer />
    </div>
  );
}
