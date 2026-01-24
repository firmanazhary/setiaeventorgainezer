import React from "react";
import { AlertCircle } from "lucide-react";

const RealitySection = () => {
  return (
    <section className="bg-[#050505] pt-20 pb-0 relative font-sans">
      {/* === BAGIAN 2: REALITANYA (KARTU PUTIH OVERLAP) === */}
      {/* rounded-t-[3rem]: Membuat lengkungan atas */}
      <div className="bg-white rounded-t-[3rem] md:rounded-t-[5rem] px-6 pt-16 pb-24 relative z-20 shadow-[0_-10px_60px_rgba(255,255,255,0.1)]">
        <div className="max-w-3xl mx-auto">
          {/* JUDUL REALITANYA */}
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#D4AF37] uppercase tracking-wide mb-2">Realitanya:</h2>
            <div className="w-20 h-1 bg-[#D4AF37]/30 mx-auto rounded-full"></div>
          </div>

          {/* LIST MASALAH */}
          <div className="space-y-4">
            {[
              "Banyak yang merasa hambar dalam hubungan setelah menikah",
              "Ingin menemukan kembali getar rasa cinta pada pasangan halal",
              "Merasa tak punya arah dan tak menemukan makna bahagia dalam rumah tangga",
              "Suami kurang merasa dihargai dan diapresiasi",
              "Istri merasa kurang mendapatkan nafkah lahir dan batin",
              "Tak punya ilmu untuk mengerti dan memahami harapan pasangan",
              "Ketakutan pasangan yang selingkuh atau sudah tak setia lagi",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D4AF37]/30 hover:bg-[#FFF9E5] transition-colors duration-300 group">
                {/* Bullet Point Merah/Emas */}
                <div className="mt-1.5 min-w-[10px] h-[10px] rounded-full bg-red-400 group-hover:bg-[#D4AF37] transition-colors shadow-sm"></div>

                <p className="text-gray-700 text-sm md:text-lg leading-relaxed group-hover:text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
