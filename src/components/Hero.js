import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import pic from "../../public/MyPic.png";
import cv from "../../public/IzhaanHumayunCV.pdf";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8 text-gradient uppercase">
            Muhammad <br />
            Izhaan <br />
            Humayun
          </h1>

          <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-light">
            I'm{" "}
            <span className="text-white font-medium">
              Muhammad Izhaan Humayun
            </span>
            , a Computer Science Student dedicated to engineering robust systems
            and elegant frontend solutions.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-2xl shadow-lg shadow-accent/20 flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href={cv}
              download="IzhaanHumayunCV.pdf"
              whileHover={{ y: -3 }}
              className="px-8 py-4 glass glass-hover text-white font-semibold rounded-2xl flex items-center gap-2"
            >
              Resume <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-96 lg:w-[400px] lg:h-[500px]">
            {/* Image Frame Decorative Elements */}
            <div className="absolute -inset-4 border border-white/5 rounded-[40px] animate-slow-spin pointer-events-none" />

            {/* The Image Container */}
            <div className="relative w-full h-full glass rounded-[32px] p-3 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[24px] bg-slate-900 overflow-hidden relative">
                <img
                  src={pic}
                  alt="Muhammad Izhaan Humayun"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-white font-display font-bold text-xl uppercase tracking-wider">
                    M. Izhaan
                  </div>
                  <div className="text-accent text-sm font-medium tracking-tight">
                    Computer Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
