import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tags,
  github,
  link,
  image,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative glass rounded-[32px] overflow-hidden hover:border-accent/40 transition-all duration-700"
    >
      <div className="aspect-[16/10] bg-slate-900 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-800 font-display font-bold text-5xl opacity-20 group-hover:scale-110 transition-transform duration-700">
            {title.split(" ")[0]}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/5 text-slate-500 border border-white/5 group-hover:border-accent/30 group-hover:text-accent transition-all duration-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-accent transition-colors duration-500 leading-tight">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2 font-light">
          {description}
        </p>

        <div className="flex items-center gap-6 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-500 hover:text-white transition-colors"
            >
              <Github size={14} /> SOURCE
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-500 hover:text-white transition-colors"
            >
              <ExternalLink size={14} /> LAUNCH
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
