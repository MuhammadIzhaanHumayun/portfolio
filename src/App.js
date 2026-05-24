import Navigation from "./components/Navigation.js";
import Hero from "./components/Hero.js";
import SectionHeading from "./components/SectionHeading.js";
import ProjectCard from "./components/ProjectCard.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import { motion } from "motion/react";

const projects = [
  {
    title: "Whitepace Website",
    description:
      "A refined login and signup experience for the Whitepace platform, focusing on user flow and responsive design.",
    tags: ["React", "CSS3", "JavaScript"],
    github:
      "https://github.com/MuhammadIzhaanHumayun/Whitepace-Website-login-signup",
    link: "https://muhammadizhaanhumayun.github.io/Whitepace-Website-login-signup/",
    image: "w.png",
  },
  {
    title: "Library Management System",
    description:
      "A comprehensive solution for managing book inventories, member records, and borrowing processes with a clean interface.",
    tags: ["Database", "System Design", "Logic"],
    github: "https://github.com/MuhammadIzhaanHumayun/Csharp-Course-Projects",
    image: "lms.png",
  },
  {
    title: "Restaurant Management System",
    description:
      "An efficiently designed system to handle orders, menu management, and staff assignments for modern dining establishments.",
    tags: ["Software Engineering", "UI Design", "Backend"],
    github: "https://github.com/MuhammadIzhaanHumayun/Database-Project",
    image: "rms.png",
  },
];

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white overflow-x-hidden">
      <Navigation />

      <main>
        <Hero />

        {/* Projects Grid */}
        <section id="projects" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              number="01"
              title="Recent Works."
              subtitle="A selection of my best work representing technical skill and design awareness."
              centered
            />
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} {...project} index={i} />
              ))}
            </div>

            <div className="mt-20 text-center">
              <motion.a
                href="https://github.com/MuhammadIzhaanHumayun"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full text-white/60 hover:text-white transition-colors"
              >
                View Full Archive on GitHub
              </motion.a>
            </div>
          </div>
        </section>

        <Skills />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 border-dashed">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm">
            © 2026 Muhammad Izhaan Humayun
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a
              href="https://linkedin.com/in/izhanhumayun"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MuhammadIzhaanHumayun"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:izhanhumayun26@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
