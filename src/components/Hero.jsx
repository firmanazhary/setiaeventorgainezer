import React from "react";
// import { Sparkles } from "lucide-react";
// import { motion } from "framer-motion";
import bgHero from "../assets/bg/bg.png";

const Hero = () => {
  return (
    // <section className="relative pt-28 pb-40 md:pb-52 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[600px]">

    //   {/* === BACKGROUND EFFECTS === */}
    //   <div className="absolute inset-0 bg-[#050505] z-0"></div>

    //   {/* Glow Effect Emas di Tengah */}
    //   <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4AF37]/20 rounded-full blur-[100px] z-0"></div>

    //   {/* Sparkles (Partikel) */}
    //   <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
    //   <div className="absolute top-40 right-20 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse delay-100"></div>

    //   {/* === KONTEN UTAMA === */}
    //   <div className="relative z-10 space-y-2 max-w-4xl mx-auto">

    //     {/* LOGO KECIL */}
    //     <motion.div
    //       initial={{ y: -20, opacity: 0 }}
    //       animate={{ y: 0, opacity: 1 }}
    //       transition={{ duration: 0.8 }}
    //       className="flex justify-center mb-6"
    //     >
    //       <div className="flex flex-col items-center">
    //          <Sparkles className="w-6 h-6 text-[#D4AF37] mb-2" />
    //          <span className="text-[10px] tracking-[0.4em] text-white/80 uppercase font-sans">Setia Organizer</span>
    //       </div>
    //     </motion.div>

    //     {/* TYPOGRAPHY UTAMA (Sesuai Referensi 1.jpg) */}
    //     <div className="relative">
    //       {/* 1. SETIA (Font Heading Tebal - Gradient Emas) */}
    //       <motion.h1
    //         initial={{ scale: 0.9, opacity: 0 }}
    //         animate={{ scale: 1, opacity: 1 }}
    //         transition={{ delay: 0.2, duration: 0.8 }}
    //         className="font-heading text-7xl md:text-9xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FBBF24] via-[#D4AF37] to-[#B45309] drop-shadow-2xl"
    //       >
    //         Setia
    //       </motion.h1>

    //       {/* 2. BERSAMAMU (Font Script Sambung - Putih) */}
    //       <motion.h1
    //         initial={{ y: 20, opacity: 0 }}
    //         animate={{ y: 0, opacity: 1 }}
    //         transition={{ delay: 0.4, duration: 0.8 }}
    //         // Gunakan font-script (Alex Brush) disini
    //         className="font-script text-6xl md:text-8xl text-white relative -mt-4 md:-mt-8 z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
    //       >
    //         Bersamamu
    //       </motion.h1>
    //     </div>

    //     {/* TAGLINE */}
    //     <motion.p
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 0.6 }}
    //       className="font-script text-2xl md:text-3xl text-[#D4AF37] mt-4 font-light tracking-wide"
    //     >
    //       Merawat Cinta Sampai Surga
    //     </motion.p>

    //   </div>
    // </section>
    <section className="md:mb-0 mb-20">
      <img src={bgHero} className="w-full" alt="Background Hero" />
    </section>
  );
};

export default Hero;
