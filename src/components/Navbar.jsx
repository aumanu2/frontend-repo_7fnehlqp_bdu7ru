import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 text-lg">
          <span className="bg-gradient-to-r from-rose-600 via-rose-700 to-rose-600 bg-clip-text text-transparent">TK</span>
          <span className="ml-1">· Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative text-slate-700 hover:text-slate-900 transition"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] bg-gradient-to-r from-rose-600 to-rose-500"
                initial={{ opacity: 0, width: 0 }}
                whileHover={{ opacity: 1, width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-white/70 transition border border-white/40"
          >
            <Github className="h-5 w-5 text-slate-800" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-white/70 transition border border-white/40"
          >
            <Linkedin className="h-5 w-5 text-slate-800" />
          </a>
        </div>
      </nav>
    </header>
  );
}
