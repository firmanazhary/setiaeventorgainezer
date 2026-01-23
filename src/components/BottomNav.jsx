import React from 'react';
import { Home, Info, Ticket, MapPin } from 'lucide-react';

const BottomNav = () => {
  
  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Offset 100px agar judul section tidak ketutup nav saat scroll berhenti
        const offset = 100; 
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-0 w-full z-[100] flex justify-center pointer-events-none px-4">
        
        {/* Container Navigasi Rata */}
        <div className="bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl shadow-black/80 flex items-center justify-between gap-6 md:gap-10 pointer-events-auto">
            
            {/* 1. HOME */}
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#D4AF37] transition group w-12"
            >
                <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span className="text-[10px] font-medium">Home</span>
            </button>

            {/* 2. ABOUT */}
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#D4AF37] transition group w-12"
            >
                <Info className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span className="text-[10px] font-medium">About</span>
            </button>

            {/* 3. TIKET (Bentuk Sama, Warna Kuning Emas) */}
            <button 
              onClick={() => scrollToSection('ticket-section')}
              className="flex flex-col items-center gap-1 text-[#D4AF37] hover:text-[#FBBF24] transition group w-12"
            >
                {/* Icon Ticket Sedikit Lebih Tebal/Besar */}
                <Ticket className="w-5 h-5 group-hover:-translate-y-1 transition-transform fill-[#D4AF37]/20" />
                <span className="text-[10px] font-bold">Tiket</span>
            </button>

            {/* 4. ADDRESS */}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#D4AF37] transition group w-12"
            >
                <MapPin className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span className="text-[10px] font-medium">Address</span>
            </button>

        </div>
    </div>
  );
};

export default BottomNav;