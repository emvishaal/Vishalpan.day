import { useState, useEffect } from 'react';

const languages = [
  { lang: 'English', greeting: 'Good' },
  { lang: 'Español', greeting: 'Buenas' },
  { lang: 'Français', greeting: 'Bon' },
  { lang: '中文', greeting: '早上' },
  { lang: '日本語', greeting: 'おはよう' },
  { lang: 'हिंदी', greeting: 'नमस्ते' },
  { lang: 'বাংলা', greeting: 'সালাম' },
  { lang: 'தமிழ்', greeting: 'வணக்கம்' },
  { lang: 'తెలుగు', greeting: 'నమస్కారం' },
  { lang: 'मराठी', greeting: 'नमस्कार' },
];

export default function GreetingAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('Morning');
    else if (hour < 18) setTimeOfDay('Afternoon');
    else setTimeOfDay('Evening');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % languages.length);
    }, 350);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-neutral-50 flex items-center justify-center transition-opacity duration-500 will-change-opacity ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="mb-8 h-16 overflow-hidden">
          <p
            key={currentIndex}
            className="text-6xl md:text-7xl font-light text-neutral-900 animate-fade-in-out"
          >
            {languages[currentIndex].greeting}
          </p>
        </div>
        {timeOfDay && (
          <p className="text-lg text-neutral-600 font-light tracking-wide">
            Good {timeOfDay}
          </p>
        )}
        <div className="mt-10 flex justify-center gap-1">
          {languages.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 will-change-transform ${
                idx === currentIndex
                  ? 'w-8 bg-accent-teal'
                  : 'w-2 bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-12px);
          }
        }
        .animate-fade-in-out {
          animation: fadeInOut 0.35s ease-in-out;
        }
      `}</style>
    </div>
  );
}
