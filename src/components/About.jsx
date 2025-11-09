import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-1"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">About</h2>
          <p className="mt-2 text-slate-600 text-sm">
            Mechatronics background with web engineering experience and a keen eye on financial markets.
          </p>
        </motion.div>
        <div className="md:col-span-2 space-y-6">
          {[{
            title: 'Blend of Disciplines',
            text: 'From embedded systems and control to frontend architecture and scalable APIs, I move across the stack and ship end‑to‑end.'
          },{
            title: 'Fintech Focus',
            text: 'I explore backtesting, data pipelines, and interactive visualizations to turn insights into tools.'
          },{
            title: 'Values',
            text: 'Clarity, reliability, and elegant design. I value small details and smooth interactions.'
          }].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
