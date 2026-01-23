import React from 'react';

import { MessageCircle } from 'lucide-react';



const FloatingWA = () => {

  const adminNumber = "6285320477752"; // Nomor Admin Sesuai Footer

  const message = "Halo Admin, saya ingin bertanya tentang Seminar Setia Bersamamu.";

  const waLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;



  return (

    <a 

      href={waLink}

      target="_blank"

      rel="noopener noreferrer"

      className="fixed bottom-24 md:bottom-10 right-6 z-[100] group"

    >

      {/* Tombol Utama */}

      <div className="bg-[#D4AF37] hover:bg-[#B45309] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] flex items-center gap-2 transition-all duration-300 animate-bounce cursor-pointer hover:scale-110">

         <MessageCircle className="w-7 h-7 fill-white text-[#D4AF37]" />

         <span className="hidden md:inline-block font-bold pr-2">Chat Admin</span>

      </div>

      

      {/* Tooltip (Muncul saat hover di HP/Desktop) */}

      <div className="absolute right-0 bottom-full mb-3 w-max bg-white text-black text-xs font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">

          Butuh Bantuan?

          {/* Segitiga kecil */}

          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45"></div>

      </div>

    </a>

  );

};



export default FloatingWA;
