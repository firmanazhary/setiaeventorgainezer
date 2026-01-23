import React from 'react';
import { Check } from 'lucide-react';

const TargetAudience = () => {
  return (
    <section className="relative pt-20 pb-24 px-6 bg-[#050505] overflow-hidden">
      
      {/* Background Glow Emas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        
        {/* JUDUL "BUAT ANDA" */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#D4AF37] mb-12 uppercase tracking-widest drop-shadow-lg">
          BUAT ANDA:
        </h2>

        {/* LIST ITEM (Center Aligned List) */}
        <div className="space-y-6 text-left inline-block">
            {[
                "Pasangan bahagia yang ingin memperkuat ikatan cinta",
                "Pasangan yang sedang menghadapi berbagai ujian",
                "Yang belum menikah dan ingin mendapatkan ilmu tentang pernikahan",
                "Atau yang trauma dalam membangun mahligai pernikahan"
            ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                    {/* Ikon Ceklis Bulat Emas (Solid) */}
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_10px_#D4AF37]">
                            <Check className="w-4 h-4 text-black font-bold" strokeWidth={4} />
                        </div>
                    </div>
                    
                    <p className="text-white text-base md:text-xl font-light leading-snug group-hover:text-[#D4AF37] transition-colors">
                        {item}
                    </p>
                </div>
            ))}
        </div>

        {/* PARAGRAF INTRO (Dipindah ke sini sesuai Screenshot) */}
        <div className="mt-20 pt-10 border-t border-[#D4AF37]/20">
            <p className="text-gray-200 text-lg md:text-2xl leading-relaxed font-light">
                Event <span className="font-bold text-[#D4AF37]">Setia Bersamamu</span> hadir 
                dalam upaya untuk menguatkan kembali cinta dalam rumah tangga.
                <br /><br />
                Belajar kembali ilmu pernikahan, saling mengerti perasaan, dan 
                menumbuhkan kembali cinta yang mungkin terkikis.
            </p>
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;