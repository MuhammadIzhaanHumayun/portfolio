import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="p-6 sm:p-10 lg:p-20 glass rounded-[32px] sm:rounded-[48px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
            <div>
              <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6 lg:mb-8 text-gradient">
                Let's start <br />
                a conversation.
              </h2>
              <p className="text-slate-400 mb-10 lg:mb-12 max-w-md font-light leading-relaxed">
                I'm currently open to new roles and collaborations. If you're looking for a developer who values precision and performance, I'd love to hear from you.
              </p>

              <div className="space-y-6 lg:space-y-8">
                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:text-white transition-colors">
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Direct Email</div>
                    <a href="mailto:izhanfilza@gmail.com" className="text-lg sm:text-xl font-medium text-white hover:text-accent transition-colors tracking-tight truncate block">izhanfilza@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:text-white transition-colors">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Current Base</div>
                    <div className="text-lg sm:text-xl font-medium text-white tracking-tight">Karachi, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] shadow-2xl relative">
              <form className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-accent/40 outline-none transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-accent/40 outline-none transition-all" placeholder="Enter email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-accent/40 outline-none transition-all resize-none" placeholder="What's on your mind?"></textarea>
                </div>
                <button className="w-full py-4 sm:py-5 bg-accent text-white font-bold rounded-2xl flex items-center justify-center gap-3 group transition-all shadow-lg shadow-accent/20 hover:bg-accent-strong">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
