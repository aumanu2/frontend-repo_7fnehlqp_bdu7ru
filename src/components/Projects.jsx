import { ExternalLink, Code, Cpu, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Market Microstructure Visualizer",
    badge: "Fintech",
    description:
      "An interactive order book + trades explorer with replay controls and streaming data.",
    tags: ["React", "WebSockets", "D3"],
    link: "#",
    icon: LineChart,
    color: "from-rose-500/15 to-rose-400/10",
  },
  {
    title: "Robotic Arm Controller",
    badge: "Mechatronics",
    description:
      "Closed-loop control with kinematics solver, BLE telemetry, and a responsive web UI.",
    tags: ["ESP32", "Python", "FastAPI"],
    link: "#",
    icon: Cpu,
    color: "from-rose-500/15 to-rose-400/10",
  },
  {
    title: "Design System & CLI",
    badge: "Web Dev",
    description:
      "Accessible UI kit with theming and a scaffolding CLI for rapid app starts.",
    tags: ["TypeScript", "Tailwind", "Storybook"],
    link: "#",
    icon: Code,
    color: "from-rose-500/15 to-rose-400/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            Featured work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Selected Projects
          </h2>
          <p className="mt-2 text-slate-600">
            A selection spanning hardware, software, and financial markets.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, badge, description, tags, link, icon: Icon, color }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className={`group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition relative overflow-hidden`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">
                  <Icon className="h-3.5 w-3.5 text-rose-600" />
                  {badge}
                </div>
                <a href={link} className="opacity-0 group-hover:opacity-100 transition" aria-label="Open project">
                  <ExternalLink className="h-4 w-4 text-slate-500" />
                </a>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
