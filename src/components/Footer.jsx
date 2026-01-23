import React from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const adminNumber = "6285320477752"; // Sesuai referensi
  const waLink = `https://wa.me/${adminNumber}`;

  return (  
    // WRAPPER PUTIH (Untuk menampung Footer Card Hitam)
    // rounded-t-[3rem]: Lengkungan atas agar menyatu dengan desain sebelumnya
    <footer id='contact' className="bg-white rounded-t-[3rem] md:rounded-t-[5rem] pt-20 pb-32 px-6 -mt-10 relative z-50">
      
      {/* FOOTER CARD HITAM (Sesuai Referensi) */}
      <div className="max-w-6xl mx-auto bg-[#050505] text-white rounded-3xl overflow-hidden relative shadow-2xl border border-[#D4AF37]/20">
        
        {/* Hiasan Background Gelombang Emas (Abstrak) */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#D4AF37]/20 to-transparent blur-[80px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            
            {/* KIRI: Logo & Info */}
            <div className="space-y-6 max-w-lg">
                <div className="flex items-center gap-2">
                     <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                     <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-bold">Setia Event Organizer</span>
                </div>
                
                <h2 className="font-heading text-3xl md:text-4xl font-normal leading-tight">
                    Setia Bersamamu <br/>
                    Merawat Cinta <br/>
                    Sampai Surga
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Sharon Boulevard Timur, Bandung Regency, West Java, Indonesia
                </p>
            </div>

            {/* KANAN: Kontak Admin */}
            <div className="flex flex-col items-start md:items-end gap-4 text-left md:text-right">
                <div>
                    <p className="text-gray-300 text-sm">Ada pertanyaan?</p>
                    <p className="text-white font-bold text-lg">Jangan ragu hubungi kami</p>
                </div>

                <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-full transition-all group"
                >
                    <div className="bg-[#25D366] p-1 rounded-full">
                         <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-mono text-sm tracking-wide">+{adminNumber} (Admin)</span>
                </a>
            </div>

        </div>

        {/* Copyright Simple */}
        <div className="border-t border-white/10 p-6 text-center">
            <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Setia Event Organizer. All rights reserved.
            </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;