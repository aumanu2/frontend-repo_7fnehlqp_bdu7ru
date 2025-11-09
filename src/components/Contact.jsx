import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been noted.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <Mail className="h-3.5 w-3.5 text-rose-600" />
            Contact
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s collaborate</h2>
          <p className="mt-2 text-slate-600">Have a project in mind or want to chat about fintech, robotics, or web? Drop a note.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required type="text" placeholder="Name" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <textarea required rows={4} placeholder="Message" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">Or email me directly: <a className="underline decoration-dotted underline-offset-4" href="mailto:you@example.com">you@example.com</a></p>
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800 transition">
              Send <Send className="h-4 w-4" />
            </motion.button>
          </div>
          {status && <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-3 py-2">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
