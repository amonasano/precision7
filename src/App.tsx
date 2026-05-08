import { motion } from "motion/react";
import { ShoppingCart, Zap, Shield, Target, ChevronRight, Menu, ArrowRight, MessageCircle } from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-brand selection:text-white font-sans overflow-x-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 text-[40rem] font-black text-white/[0.02] leading-none select-none -mr-40 -mt-20 pointer-events-none italic tracking-tighter">
        07
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-12 py-8 flex items-center justify-between mix-blend-difference">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-black tracking-tighter italic">PRCSN</div>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
          <a href="#" className="hover:text-brand transition-colors">Technology</a>
          <a href="#" className="hover:text-brand transition-colors">Performance</a>
          <a href="#" className="hover:text-brand transition-colors">Support</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col pt-32 px-12">
        {/* Background Text Overlay */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0">
          <h1 className="text-[20vw] text-editorial-hero text-white uppercase opacity-10 whitespace-nowrap">
            Precision
          </h1>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-8 items-center relative z-10 py-12">
          {/* Left: Purchase Info */}
          <motion.div 
            className="col-span-12 lg:col-span-4 flex flex-col gap-8 self-end mb-12"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand font-black mb-3">Alto Desempenho e Custo Benefício</span>
              <span className="text-7xl font-light tracking-tighter">R$379.99</span>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-white/40 text-sm leading-relaxed max-w-sm font-medium"
            >
              Desenvolvido para oferecer estabilidade, tração e agilidade em quadra, o Nike Precision 7 é um tênis leve e confortável, com design moderno, cabedal respirável e solado aderente. Ideal para jogadores que buscam desempenho e ótimo custo-benefício..
            </motion.p>

            <div className="flex flex-col gap-4">
              <motion.a 
                href="https://meli.la/2Hwk5T7"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                id="buy-button-hero"
                className="bg-white text-black h-20 px-12 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-brand hover:text-white transition-all duration-500 w-fit flex items-center gap-4 group cursor-pointer shadow-xl"
              >
                Compre aqui — Precision 07
                <ShoppingCart size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a 
                href="https://aaaaaaaaartimanhas.app.n8n.cloud/webhook/fcf68759-ba71-4e20-a3ef-ddf1e16a5352/chat"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="bg-brand text-white h-20 px-12 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:brightness-110 transition-all duration-500 w-fit flex items-center gap-4 group cursor-pointer shadow-xl shadow-brand/20"
              >
                Tire Dúvidas
                <MessageCircle size={16} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Center: Main Visual */}
          <motion.div 
            className="col-span-12 lg:col-span-4 flex items-center justify-center relative py-20"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1.1, rotate: -12 }}
            transition={{ duration: 1.5, ease: "circOut" }}
          >
            <div className="absolute inset-0 bg-brand/10 blur-[150px] rounded-full scale-125 pointer-events-none"></div>
            <img 
              src="https://imgnike-a.akamaihd.net/360x360/028985IFA2.jpg" 
              alt="Precision 7"
              className="w-full h-auto drop-shadow-[0_45px_45px_rgba(249,115,22,0.3)] relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right: Technical Specs */}
          <motion.div 
            className="col-span-12 lg:col-span-4 flex flex-col gap-16 self-end mb-12 lg:items-end text-left lg:text-right"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">Technologia da Sola</span>
              <span className="text-2xl font-black uppercase tracking-tighter italic">Herringbone</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">Material</span>
              <span className="text-2xl font-black uppercase tracking-tighter italic">Breathable Mesh</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">Peso Aproximado</span>
              <span className="text-3xl font-black uppercase tracking-tighter italic text-brand">284g</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Navigation / Info */}
        <footer className="py-12 flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 mt-auto">
          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 font-bold italic">Series</span>
              <span className="text-xs font-mono font-bold tracking-widest">PR-07-2026</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 font-bold italic">Tipo de Quadra</span>
              <span className="text-xs font-mono font-bold tracking-widest">INDOOR / OUTDOOR</span>
            </div>
            <div className="flex flex-col gap-3 hidden md:flex">
              <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 font-bold italic">Sustentabilidade</span>
              <span className="text-xs font-mono font-bold tracking-widest">30% RECYCLED</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-24 h-px bg-white/10 group-hover:w-32 transition-all duration-500 group-hover:bg-brand"></div>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-white/40 group-hover:text-white transition-colors">Scroll for tech</span>
          </div>
        </footer>
      </main>

      {/* Decorative Frame Overlay */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-surface shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-[100]"></div>
    </div>
  );
}
