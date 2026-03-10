import { useEffect, useState } from 'react';
import GreetingAnimation from './components/GreetingAnimation';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Sections from './components/Sections';
import Contact from './components/Contact';

function App() {
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showGreeting && <GreetingAnimation />}
      {!showGreeting && (
        <div className="bg-neutral-50 text-neutral-900">
          <Navigation />
          <Hero />
          <About />
          <Sections />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
