export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutral-50/95 backdrop-blur-md z-40 border-b border-neutral-200/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-neutral-900 font-light text-base tracking-tight"
        >
          VP
        </a>
        <div className="flex gap-10 text-sm font-light">
          <a
            href="#about"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            About
          </a>
          <a
            href="#sections"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Ideas
          </a>
          <a
            href="#contact"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
