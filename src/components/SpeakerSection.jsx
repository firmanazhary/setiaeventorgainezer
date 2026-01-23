import React from 'react';
 // Ganti dengan foto Kang Furqon yang benar
import speakerPhoto from '../assets/speakers/speakers.png'
const SpeakerSection = () => {
  return (
    // SECTION PUTIH (OVERLAP KE ATAS HITAM)
    // -mt-20: Naik menutupi Benefit Section
    // z-40: Layer lebih tinggi dari Benefit (z-30)
    <section className="bg-white rounded-t-[3rem] md:rounded-t-[5rem] -mt-20 pt-20 pb-24 px-6 relative z-40 shadow-[0_-10px_60px_rgba(0,0,0,0.5)]">
      
      <div className="max-w-3xl mx-auto text-center">
        
        {/* HEADER */}
        <h3 className="text-[#D4AF37] font-heading text-xl md:text-2xl font-bold uppercase tracking-widest mb-10">
            Dipandu Langsung Oleh:
        </h3>

        {/* FOTO & NAMA BADGE */}
        <div className="relative flex flex-col items-center mb-12 group">
            
            {/* Glow Effect di belakang foto */}
            <div className="absolute top-10 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-2xl group-hover:bg-[#D4AF37]/40 transition-colors"></div>

            {/* Foto Speaker */}
            {/* Pastikan background foto transparan atau rapi */}
            <img 
                src={speakerPhoto}
                alt="Kang Furqon" 
                className="w-56 md:w-64 h-auto object-cover z-10 drop-shadow-xl relative"
            />

            {/* Badge Nama (Gradient Emas) */}
            <div className="bg-gradient-to-r from-[#FBBF24] to-[#B45309] text-black px-6 py-4 rounded-xl -mt-6 z-20 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <h2 className="font-heading font-bold text-lg md:text-xl leading-tight">
                    Dr. Setia Furqon Kholid, M.Pd, C.Ht. C.NLP
                </h2>
                <p className="font-sans font-bold text-sm opacity-80">(Kang Furqon)</p>
            </div>
        </div>

        {/* LIST CREDENTIALS */}
        <div className="text-left space-y-4 md:px-10">
            {[
                "Suami yang beruntung beristrikan Manda Ina Agustina, Ayah dari 3 putra dan 1 putri",
                "Influencer dengan lebih dari 1 juta follower IG, Facebook, Youtube, Tiktok",
                "Motivator muda dengan alumni lebih dari 1 juta orang di hampir di seluruh Indonesia dari tahun 2009",
                "Founder Kelasjodoh dengan 32.000 alumni",
                "Konsultan pernikahan dan bisnis dengan lebih dari 50 orang yang telah dibantu",
                "Doktor muda di bidang pendidikan (alumni Universitas Pendidikan Indonesia)",
                "Presiden Muda Juara Indonesia 2024-2025",
                "Penulis 15 buku Best Seller, salah satunya buku 'Marriage Undercover'",
                "Entrepeneur di bawah naungan Setia Corp (Setia Kost, Kopi Setia, Kelasjodoh, Setia Agro, dll)",
                "Ketua Yayasan Setia Karya Mulia (TK Setia Kids Preneur, SMP Setia Leader Preneur)"
            ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed">
                    {/* Bullet Point Hitam Kecil */}
                    <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-black flex-shrink-0"></div>
                    <p>{item}</p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default SpeakerSection;