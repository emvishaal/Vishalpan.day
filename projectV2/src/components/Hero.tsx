import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-light text-neutral-900 mb-4 leading-tight">
            Vishal Pandey
          </h1>
          <p className="text-xl md:text-2xl text-accent-teal font-light mb-6">
            At the intersection of law, finance, and technology
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed font-light max-w-xl">
            Building clarity in complex systems. Solving disputes before they crystallize. Automating away friction.
          </p>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="/src/assets/vishal_Pandey.png"
            alt="Vishal Pandey"
            loading="eager"
            className="w-72 h-72 md:w-80 md:h-80 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse">
        <ChevronDown className="w-6 h-6 text-neutral-400" />
      </div>
    </section>
  );
}
