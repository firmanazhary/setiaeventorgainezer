import React from "react";
import { BadgeCheck } from "lucide-react";

const BenefitSection = () => {
  return (
    // SECTION HITAM (OVERLAP KE ATAS PUTIH)
    // -mt-20: Naik menutupi bagian Realitanya
    // rounded-t-[3rem]: Lengkungan atas
    <section className="bg-[#050505] rounded-t-[3rem] md:rounded-t-[5rem] -mt-20 pt-20 pb-24 px-6 relative z-30 shadow-[0_-10px_60px_rgba(0,0,0,0.5)]">
      {/* Background Glow Emas (Kiri) */}
      <div className="absolute top-0 left-0 w-[300px] h-[600px] bg-gradient-to-r from-[#D4AF37]/10 to-transparent blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* JUDUL */}
        <div className="text-center mb-12 space-y-2">
          <h3 className="text-[#D4AF37] font-heading text-2xl md:text-3xl font-medium italic">InsyaAllah dalam seminar</h3>
          <h2 className="text-white font-heading text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-[#D4AF37]">Setia Bersamamu,</span> <br />
            Anda akan menemukan:
          </h2>
        </div>

        {/* LIST BENEFIT */}
        <div className="grid gap-6">
          {[
            "Cara agar suami makin setia, tidak berpaling ke lain hati",
            "Cara agar istri semakin mempesona di mata suami",
            "Bagaimana cara menghargai suami, agar makin harmonis",
            "Cara memahami Bahasa cinta pasangan",
            "Menemukan arah dan visi keluarga",
            "Bagaimana cara membahagiakan suami dan istri",
            "Mengurai masalah dan menemukan solusi dari konflik pasangan",
            "Memahami arti penting nafkah lahir batin",
            "Cara merawat cinta setelah menikah",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-2 md:p-3 group hover:translate-x-2 transition-transform duration-300">
              {/* Icon Ceklis Gerigi Emas */}
              <div className="flex-shrink-0 mt-0.5">
                <BadgeCheck className="w-6 h-6 md:w-8 md:h-8 text-white fill-[#D4AF37]" />
              </div>

              <p className="text-gray-200 text-sm md:text-lg font-medium leading-snug group-hover:text-white transition-colors">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
