import { Mail, Phone, Linkedin, Github, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-16 leading-tight">
          Get in touch
        </h2>

        <div className="space-y-8 mb-12">
          <a
            href="mailto:em.vishaal@gmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="p-3 bg-accent-teal/5 rounded group-hover:bg-accent-teal/10 transition-colors">
              <Mail className="w-5 h-5 text-accent-teal" />
            </div>
            <span className="text-lg text-neutral-700 group-hover:text-accent-teal transition-colors">
              em.vishaal@gmail.com
            </span>
          </a>

          <a
            href="tel:+917003676709"
            className="flex items-center gap-4 group"
          >
            <div className="p-3 bg-accent-teal/5 rounded group-hover:bg-accent-teal/10 transition-colors">
              <Phone className="w-5 h-5 text-accent-teal" />
            </div>
            <span className="text-lg text-neutral-700 group-hover:text-accent-teal transition-colors">
              +91 7003 676709
            </span>
          </a>
        </div>

        <div className="pt-12 border-t border-neutral-200">
          <p className="text-neutral-600 text-xs uppercase tracking-widest font-semibold mb-8">
            Connect elsewhere
          </p>
          <div className="flex flex-wrap gap-8">
            <a
              href="https://www.linkedin.com/in/emvishaal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-neutral-700 hover:text-accent-teal transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-neutral-700 hover:text-neutral-400 transition-colors cursor-default group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-neutral-500">GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-neutral-700 hover:text-neutral-400 transition-colors cursor-default group"
            >
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-neutral-500">YouTube</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-neutral-200 text-center text-neutral-500 text-sm">
          <p>Vishal Pandey © 2024–present</p>
        </div>
      </div>
    </section>
  );
}
