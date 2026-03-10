export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-12 leading-tight">
          On bridges between fields
        </h2>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            I started my career in finance operations, solving messy accounting and reporting problems across global teams. Over time I became fascinated with the deeper layer beneath those problems—contracts, disputes, and the systems that govern business relationships. Today I'm building a career at the intersection of commercial law, dispute resolution, and technology.
          </p>

          <p className="text-lg">
            People often worry about being a "jack of many trades." In reality, modern complex problems are solved by connectors between fields. A pure accountant sees numbers. A pure lawyer sees clauses. Someone who understands finance systems, contracts, and technology simultaneously can see where disputes originate before they appear.
          </p>

          <p className="text-lg">
            That kind of profile tends to become valuable later in careers—in consulting, arbitration, startup advisory, regulatory tech, even policy. The trick is simply framing the narrative correctly, which is what this space is for.
          </p>

          <div className="pt-8 border-t border-neutral-200">
            <p className="text-neutral-600 text-base leading-relaxed">
              <span className="font-semibold">Background:</span> 6+ years in global finance operations and technology, with expertise in accounting systems, reporting, and controls.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mt-3">
              <span className="font-semibold">Current focus:</span> Commercial law, dispute resolution, and the role of technology in legal systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
