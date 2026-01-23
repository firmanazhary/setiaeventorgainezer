import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import gambarBanner from '../assets/banner/banner.webp'
import denahPanggung from '../assets/stage/stage.png'
// Ganti dengan path gambar yang sesuai di project kamu
// Gambar Denah Panggung

const SeatSection = () => {
  return (
    // SECTION HITAM (OVERLAP KE ATAS PUTIH)
    // -mt-20: Naik menutupi Speaker Section
    // z-50: Layer paling atas saat ini
    <section className="bg-[#050505] rounded-t-[3rem] md:rounded-t-[5rem] -mt-20 pt-20 pb-24 px-6 relative z-50 shadow-[0_-10px_60px_rgba(0,0,0,0.5)]">
      
      {/* Background Glow Emas */}
      <div className="absolute top-0 right-0 w-[300px] h-[600px] bg-gradient-to-l from-[#D4AF37]/10 to-transparent blur-[80px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-12">
        
        {/* --- 1. POSTER BANNER --- */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
            <img 
                src={gambarBanner} 
                alt="Seat Terbatas" 
                className="w-full h-auto object-cover"
            />
        </div>

        {/* --- 2. TEKS CTA --- */}
        <div className="space-y-6">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#D4AF37] italic animate-pulse">
                SEAT TERBATAS!
            </h3>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                SEGERA AMANKAN <br />
                SEAT ANDA BERSAMA <br />
                PASANGAN!
            </h2>
        </div>

        {/* --- 3. DETAIL LOKASI --- */}
        <div className="inline-flex flex-col gap-4 items-center md:flex-row md:gap-8 justify-center bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-red-500" />
                <span className="text-white font-bold text-lg">Hotel Luminor (MIM Bandung)</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-gray-300" />
                <span className="text-white font-bold text-lg">Minggu, 8 Maret 2026</span>
            </div>
        </div>

        {/* --- 4. DENAH PANGGUNG (STAGE) --- */}
        <div className="space-y-4">
             <h3 className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase">
                Layout & Seating Plan
             </h3>
             <div className="bg-white p-2 rounded-3xl shadow-xl">
                <img 
                    src={denahPanggung}
                    alt="Stage Map" 
                    className="w-full h-auto rounded-2xl"
                />
             </div>
             <p className="text-xs text-gray-500 italic">
                *Posisi duduk disesuaikan dengan urutan pemesanan tiket
             </p>
        </div>

      </div>
    </section>
  );
};

export default SeatSection;