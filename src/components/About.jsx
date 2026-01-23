import React from 'react';

const About = () => {
  return (
    // WRAPPER CARD PUTIH (OVERLAP HERO)
    // rounded-t-[3.5rem] agar lengkungan atas lebih smooth & besar
    <div id="about" className="bg-white rounded-t-[3.5rem] md:rounded-t-[5rem] px-6 pt-14 pb-24 -mt-24 relative z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.4)]">
      
      {/* CONTAINER */}
      <div className="max-w-3xl mx-auto text-center space-y-10">

        {/* --- BAGIAN HEADER (Tipografi Cantik) --- */}
        <div className="space-y-1">
            {/* Seminar (Serif Italic Emas) */}
            <h3 className="font-heading text-4xl md:text-5xl text-[#D4AF37] italic font-medium">
                Seminar
            </h3>
            
            {/* Eksklusif Pasutri (Script Sambung Emas) - INI KUNCINYA */}
            <h1 className="font-script text-6xl md:text-8xl text-[#D4AF37] leading-none mb-6 drop-shadow-sm">
                Eksklusif Pasutri
            </h1>

            {/* Spesial Hadir (Serif Hitam Miring) */}
            <p className="font-heading text-gray-800 text-2xl md:text-3xl italic font-medium mb-4">
                Spesial Hadir
            </p>

            {/* Tombol Kota Bandung (Pill Gradient) */}
            <div className="inline-block hover:scale-105 transition-transform duration-300 ease-out">
                <div className="bg-gradient-to-r from-[#FBBF24] to-[#B45309] text-black px-10 py-3 rounded-full shadow-[0_10px_20px_rgba(212,175,55,0.3)]">
                    <span className="font-heading font-bold text-xl md:text-2xl italic tracking-wide">Di Kota Bandung!</span>
                </div>
            </div>
        </div>

        {/* Divider Simpel */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

        {/* --- BAGIAN TEKS NARASI (Referensi 2.jpg) --- */}
        <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-[#B45309]">
                Pernikahan adalah <br />
                <span className="text-[#D4AF37]">ibadah seumur hidup.</span>
            </h2>
            
            <div className="text-gray-600 text-sm md:text-lg leading-relaxed md:leading-loose font-light px-2 md:px-12 space-y-4 font-sans">
                <p>
                    Dalam perjalanannya ada banyak riak ujian yang menghadang, ada getar cinta yang sudah mulai terkikis, 
                    tergantikan dengan kebosanan, tuntutan dan kewajiban.
                </p>
                
                <div className="bg-[#FFF9E5] border-l-4 border-[#D4AF37] p-4 rounded-r-xl italic text-gray-800">
                    "Untuk itulah perlu <span className="font-bold text-[#B45309]">Couple Time</span> bersama pasangan.
                    Agar energi cinta terisi, agar arah pernikahan tertata, agar kesakinahan hadir kembali."
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;