import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 min-h-[92vh] flex items-center overflow-hidden">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft gradient veil that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-xs text-slate-800 shadow-sm"
          >
            <Rocket className="h-3.5 w-3.5 text-rose-600" />
            Mechatronics • Web Dev • Markets
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-rose-700 to-slate-900 bg-clip-text text-transparent">
              Systems at the edge of hardware, code, and finance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-slate-700 text-base sm:text-lg max-w-prose"
          >
            I design and ship interactive web apps, prototype smart devices, and explore financial data—crafting reliable, elegant products with measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800 transition"
            >
              View projects <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur border border-white/60 text-slate-900 px-4 py-2 text-sm shadow hover:bg-white/90 transition"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="relative z-10 grid grid-cols-2 gap-3"
        >
          {[
            { label: 'Robotics + Controls', value: 'Mechatronics' },
            { label: 'Frontend + Backend', value: 'Web Dev' },
            { label: 'Backtesting + Data', value: 'Markets' },
            { label: 'Cloud + CI/CD', value: 'DevOps' },
          ].map((item) => (
            <motion.li
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm"
            >
              <div className="text-xs text-slate-500">{item.label}</div>
              <div className="text-sm font-semibold text-slate-900">{item.value}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
