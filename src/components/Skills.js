import { motion } from "motion/react";
import { Cpu, Layout, Palette, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Core",
    icon: <Layout className="text-accent" />,
    skills: ["React.js", "JavaScript", "Next.js", "HTML5", "CSS3"]
  },
  {
    title: "Styling & UI",
    icon: <Palette className="text-accent" />,
    skills: ["Tailwind CSS", "Framer Motion", "Material UI", "Responsive Design", "UI/UX Principles"]
  },
  {
    title: "Backend & Systems",
    icon: <Cpu className="text-accent" />,
    skills: ["Node.js", "Express", "MongoDB", "C# / Python", "C++"]
  },
  {
    title: "Tools & Workflow",
    icon: <Terminal className="text-accent" />,
    skills: ["Git", "GitHub", "Vite", "VS Code", "Vercel", "Linux Basics"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div 
               initial={{ opacity: 0, x: -10 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-accent text-[10px] font-bold tracking-[0.2em] mb-4 uppercase"
            >
              Technical Arsenal
            </motion.div>
            <h2 className="text-5xl font-display font-bold tracking-tight mb-8 text-gradient">
              The tools I use <br />
              to build the future.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg font-light">
              I specialize in the React ecosystem but maintain a broad technical foundation, allowing me to adapt to any stack and solve complex architectural challenges.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {["System Architecture", "Performance Tuning", "UI Precision"].map(badge => (
                <span key={badge} className="px-5 py-2 glass rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border-white/5">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-[32px] glass-hover"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-white">{cat.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
