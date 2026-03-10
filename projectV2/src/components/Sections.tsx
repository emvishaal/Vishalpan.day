import { BookOpen, Scale, Zap, Lightbulb } from 'lucide-react';

const sections = [
  {
    id: 'systems',
    title: 'Systems',
    icon: Zap,
    description:
      'How organizations really work. Finance operations, workflows, reporting structures. The hidden infrastructure that either enables or strangles growth.',
    focus: ['Global Finance Operations', 'Accounting Systems', 'Reporting & Controls'],
  },
  {
    id: 'disputes',
    title: 'Disputes',
    icon: Scale,
    description:
      'Most disputes are born in unclear contracts and misaligned incentives. Understanding both the legal structure and the human dynamics beneath them.',
    focus: ['Commercial Law', 'Contract Analysis', 'Dispute Resolution'],
  },
  {
    id: 'technology',
    title: 'Technology',
    icon: Lightbulb,
    description:
      'Tools that automate friction. Not for flash—for clarity. Document automation, workflow optimization, and systems that prevent disputes before they start.',
    focus: ['Workflow Automation', 'Legal Tech', 'Systems Design'],
  },
  {
    id: 'ideas',
    title: 'Ideas',
    icon: BookOpen,
    description:
      'Long-form thinking on the intersection of law, finance, and technology. Where do systems break? How do disputes form? What role does automation play?',
    focus: ['Essays & Analysis', 'Research', 'Frameworks'],
  },
];

export default function Sections() {
  return (
    <section id="sections" className="py-24 px-6 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-16 leading-tight">
          Areas of focus
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white p-8 rounded-lg border border-neutral-200/60 hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-2 bg-accent-teal/5 rounded">
                    <Icon className="w-5 h-5 text-accent-teal flex-shrink-0" />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-900">
                    {section.title}
                  </h3>
                </div>

                <p className="text-neutral-700 leading-relaxed mb-8 text-base">
                  {section.description}
                </p>

                <div className="space-y-3">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Focus Areas
                  </p>
                  <ul className="space-y-2">
                    {section.focus.map((item, idx) => (
                      <li key={idx} className="text-neutral-600 text-sm leading-relaxed">
                        <span className="text-accent-teal">—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-10 bg-white rounded-lg border border-neutral-200/60">
          <h3 className="text-xl font-light text-neutral-900 mb-4">
            On future writing
          </h3>
          <p className="text-neutral-700 leading-relaxed text-base">
            This space will eventually host long-form essays exploring how these domains intersect. The focus: clarity over jargon, frameworks over opinion, and connections that others miss. For now, these sections frame the thinking that's to come.
          </p>
        </div>
      </div>
    </section>
  );
}
