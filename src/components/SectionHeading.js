import { motion } from "motion/react";

const SectionHeading = ({ title, subtitle, number, centered }) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {number && (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-accent text-sm font-bold tracking-widest mb-2 flex items-center gap-4"
        >
          <span className="h-px w-8 bg-accent" />
          {number}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-6xl font-display font-bold tracking-tighter mb-4"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/40 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeading;
