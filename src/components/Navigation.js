import { motion } from "motion/react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-white group"
        >
          MIH
          <span className="text-accent group-hover:text-white transition-colors">
            .
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/muhammadizhaanhumayun"
              target="_blank"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/izhanhumayun"
              target="_blank"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 glass rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-8rem)] bg-zinc-950/95 backdrop-blur-2xl z-40 p-10 flex flex-col gap-10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display font-bold text-gradient"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-auto flex gap-6">
            <a
              href="https://github.com/muhammadizhaanhumayun"
              className="p-5 glass rounded-2xl text-accent"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-izhaan-humayun"
              className="p-5 glass rounded-2xl text-accent"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:izhanfilza@gmail.com"
              className="p-5 glass rounded-2xl text-accent"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
