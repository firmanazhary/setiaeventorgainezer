import React from 'react';

const About = () => {
  // Ganti ID video ini dengan ID video Youtube profil kamu
  const videoId = "KZuxxUH-Ww8"; // Contoh: dQw4w9WgXcQ

  return (
    // WRAPPER CARD PUTIH
    <div id="about" className="bg-white rounded-t-[3.5rem] md:rounded-t-[5rem] px-6 pt-14 pb-24 -mt-24 relative z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.4)]">
      
      {/* CONTAINER */}
      <div className="max-w-3xl mx-auto text-center space-y-10">

        {/* --- BAGIAN HEADER --- */}
        <div className="flex flex-col items-center">
            {/* 1. Seminar */}
            <h3 className="font-heading text-4xl md:text-5xl text-[#D4AF37] italic font-medium mb-1">
                Seminar
            </h3>
            
            {/* 2. Eksklusif Pasutri */}
            <h1 className="font-script text-6xl md:text-8xl text-[#D4AF37] leading-none mb-8 drop-shadow-sm">
                Eksklusif Pasutri
            </h1>

            {/* === 3. VIDEO YOUTUBE EMBED (NEW) === */}
            {/* Wrapper agar responsif & estetik */}
            <div className="w-full max-w-xl aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/20 mb-8 relative group">
                <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0`} 
                    title="Profile Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                
                {/* Hiasan Glow Emas di belakang (Optional) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FBBF24] to-[#B45309] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 -z-10"></div>
            </div>

            {/* 4. Spesial Hadir & Button */}
            <div className="space-y-3">
                <p className="font-heading text-gray-800 text-xl md:text-2xl italic font-medium">
                    Spesial Hadir
                </p>

                {/* Tombol Kota Bandung */}
                <div className="inline-block transform hover:scale-105 transition-transform duration-300 ease-out">
                    <div className="bg-gradient-to-r from-[#FBBF24] to-[#B45309] text-black px-8 py-2 md:px-10 md:py-3 rounded-full shadow-[0_10px_20px_rgba(212,175,55,0.3)] border border-[#FBBF24]/50">
                        <span className="font-heading font-bold text-lg md:text-2xl italic tracking-wide">
                            Di Kota Bandung!
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Divider Simpel */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

        {/* --- BAGIAN TEKS NARASI --- */}
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
                
                <div className="bg-[#FFF9E5] border-l-4 border-[#D4AF37] p-5 rounded-r-xl italic text-gray-800 text-left md:text-center shadow-sm">
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