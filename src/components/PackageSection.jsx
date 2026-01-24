import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckSquare, AlertCircle } from "lucide-react";

const packages = [
  {
    id: "vip",
    name: "VIP COUPLE",
    oldPrice: "1.250.000",
    price: "1.000.000",
    rawPrice: 1000000,
    color: "bg-gradient-to-b from-[#FBBF24] to-[#B45309]", // Gradient Emas
    buttonColor: "bg-gradient-to-r from-[#FBBF24] to-[#B45309]",
    textColor: "text-[#B45309]",
    features: ["Berlaku Untuk Satu Pasangan Suami - Istri (Dua Orang)", "Buku Marriage Undercover atau Cita Cinta Setia", "2 Paket Chemistry Card", "Tempat Duduk VIP (Front Row)", "Foto bersama Setia Furqon Kholid"],
  },
  {
    id: "reg-couple",
    name: "REG COUPLE",
    oldPrice: "700.000",
    price: "450.000",
    rawPrice: 450000,
    color: "bg-[#0056b3]", // Biru
    buttonColor: "bg-[#0056b3]",
    textColor: "text-[#0056b3]",
    features: ["Berlaku Untuk Satu Pasangan Suami - Istri (Dua Orang)", "2 Paket Chemistry Card", "Tempat Duduk Regular"],
  },
  {
    id: "reg-single",
    name: "REG SINGLE",
    oldPrice: "400.000",
    price: "250.000",
    rawPrice: 250000,
    color: "bg-[#8a2be2]", // Ungu
    buttonColor: "bg-[#8a2be2]",
    textColor: "text-[#8a2be2]",
    features: ["Berlaku Untuk Satu Orang", "1 Paket Chemistry Card", "Tempat Duduk Single Regular"],
  },
];

const PackageSection = () => {
  const navigate = useNavigate();

  const handleSelect = (pkg) => {
    navigate("/order", { state: { selectedPkg: pkg } });
  };

  return (
    // Background Hitam (Melanjutkan section sebelumnya)
    <section id="ticket-section" className="bg-[#050505] pt-10 pb-32 px-6 relative z-50">
      <div className="max-w-6xl mx-auto">
        {/* JUDUL SECTION */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2">Pilih Paket</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2">Early Bird : Limited Seat</h2>
        </div>

        {/* GRID KARTU PAKET */}
        {/* Mobile: 1 Kolom, Desktop: 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
              {/* HEADER KARTU (Warna Warni) */}
              <div className={`${pkg.color} p-6 text-center text-white relative`}>
                {/* Judul Paket */}
                <div className="inline-block border border-white/30 bg-black/10 px-6 py-2 rounded-xl mb-4 backdrop-blur-sm">
                  <h3 className="font-bold text-xl md:text-2xl uppercase tracking-wider">{pkg.name}</h3>
                </div>

                <p className="text-sm opacity-90 font-medium mb-1">Investasi Terbaik</p>
                <div className="flex flex-col items-center justify-center items-baseline gap-1">
                  <div>
                    <span className="text-sm font-bold">Rp</span>
                    <del className="font-heading text-md md:text-2xl font-extrabold">{pkg.oldPrice}</del>
                  </div>
                  <div>
                    <span className="text-sm font-bold">Rp</span>
                    <span className="font-heading text-4xl md:text-5xl font-extrabold">{pkg.price}</span>
                  </div>
                </div>
              </div>

              {/* BODY KARTU (Putih) */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm md:text-base font-medium">
                      <CheckSquare className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.textColor}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* TOMBOL PILIH */}
                <button onClick={() => handleSelect(pkg)} className={`w-full py-4 rounded-full text-white font-bold shadow-lg uppercase tracking-wide transform active:scale-95 transition-all ${pkg.buttonColor} hover:brightness-110`}>
                  PILIH TIKET INI
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CATATAN PENTING (REFUND POLICY) - Referensi 11.jpg */}
        <div className="mt-16 max-w-3xl mx-auto bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="text-white font-bold text-lg">Catatan Penting:</h4>
              <ul className="list-disc pl-5 text-gray-300 text-sm md:text-base space-y-1">
                <li>Tiket yang sudah dibeli bersifat final.</li>
                <li>Tiket yang telah dibeli tidak dapat di-refund, dipindahtangankan, dan dipindah sesi.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
