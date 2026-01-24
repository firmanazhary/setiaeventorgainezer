import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
// Import gambar QRIS (pastikan file ada)
import qrisImg from '../assets/qris/setia-qris.jpeg'; 

const OrderForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // Mengambil data paket yang dikirim dari PackageSection
  const pkg = state?.selectedPkg;

  const [form, setForm] = useState({
    nama: '',
    email: '',
    phone: '',
  });
  
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Redirect ke Home jika user membuka halaman ini langsung tanpa memilih paket
  useEffect(() => {
    if (!pkg) navigate('/');
  }, [pkg, navigate]);

  if (!pkg) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminPhone = "6285320477752"; // Nomor Admin

    // Format Pesan WhatsApp
    let message = `*HALO ADMIN, SAYA MAU DAFTAR TIKET EVENT*\n\n`;
    message += `----------------------------------\n`;
    message += `📋 *DATA DIRI PEMESAN*\n`;
    message += `Nama : ${form.nama}\n`;
    message += `Email : ${form.email}\n`;
    message += `No HP : ${form.phone}\n`;
    message += `----------------------------------\n`;
    message += `🎟️ *PAKET DIPILIH*\n`;
    message += `Tipe : ${pkg.name}\n`;
    // Menggunakan rawPrice dari data packages untuk format angka yang benar
    message += `Tagihan : *Rp ${pkg.rawPrice ? pkg.rawPrice.toLocaleString('id-ID') : pkg.price}*\n`;
    message += `----------------------------------\n`;
    message += `✅ *STATUS PEMBAYARAN*\n`;
    message += `User menyatakan sudah melakukan pembayaran.\n`;
    message += `_Mohon info rekening/validasi bukti transfer._`;

    const waUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 flex items-center justify-center font-sans">
      
      {/* Background Glow Effect */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Container Utama (Card Hitam) */}
      <div className="bg-[#121212] max-w-5xl w-full rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row min-h-[600px] relative z-10">
        
        {/* === KOLOM KIRI (FORMULIR) === */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
          
          <button onClick={() => navigate('/')} className="flex items-center text-gray-400 hover:text-[#D4AF37] mb-8 transition w-max group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Kembali
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-sans text-xs tracking-[0.2em] font-bold text-[#D4AF37] uppercase">Setia Organizer</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Lengkapi Data Diri</h1>
            <p className="text-gray-400 text-sm">Pastikan data yang kamu isi valid untuk e-tiket.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Nama */}
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wide mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input 
                name="nama"
                required
                type="text" 
                className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/50 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all placeholder-gray-600"
                placeholder="Nama sesuai KTP"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Input Email */}
              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wide mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  name="email"
                  required
                  type="email" 
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/50 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all placeholder-gray-600"
                  placeholder="email@aktif.com"
                  onChange={handleChange}
                />
              </div>
              {/* Input WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wide mb-2">
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <input 
                  name="phone"
                  required
                  type="tel" 
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/50 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all placeholder-gray-600"
                  placeholder="0812xxxx"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Checkbox Pernyataan */}
            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-4 mt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  required 
                  type="checkbox" 
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-[#D4AF37] rounded focus:ring-[#D4AF37] bg-black border-gray-600 accent-[#D4AF37]"
                />
                <div className="text-sm">
                  <span className="font-bold text-gray-200">Saya sudah melakukan pembayaran.</span>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    Setelah klik tombol kirim, Anda akan diarahkan ke WhatsApp Admin untuk validasi pesanan.
                  </p>
                </div>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#B45309] text-white font-bold rounded-xl shadow-[0_5px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.5)] transform hover:scale-[1.02] transition-all flex justify-center items-center gap-2 mt-4"
            >
              <Send className="w-5 h-5" />
              Lanjut ke WhatsApp
            </button>
          </form>
        </div>

        {/* === KOLOM KANAN (INFO & QRIS) === */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2 border-l border-white/5">
          
          {/* Hiasan */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-2 mb-6 bg-white/5 backdrop-blur-md w-max px-4 py-1.5 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Secure Payment</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
              Investasi <span className="text-[#D4AF37] italic">Cinta</span> <br/> Terbaik Anda.
            </h2>
          </div>

          {/* Card Ringkasan Pesanan */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative z-10">
             
             {/* Detail Paket */}
             <div className="border-b border-dashed border-white/20 pb-4 mb-4">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Paket Dipilih</p>
                <h3 className="text-xl font-heading font-bold text-white">{pkg.name}</h3>
                <p className="text-3xl font-heading font-bold text-[#D4AF37] mt-2">
                   {/* Logic harga: Utamakan rawPrice untuk format Rp yang benar */}
                   Rp {pkg.rawPrice ? pkg.rawPrice.toLocaleString('id-ID') : pkg.price}
                </p>
             </div>

             {/* QRIS AREA */}
             <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                    <p className="text-xs font-bold text-gray-300 tracking-wide">SCAN QRIS PEMBAYARAN</p>
                </div>
                
                {/* Kotak QRIS Putih agar bisa discan */}
                <div className="bg-white p-3 rounded-xl mx-auto max-w-[200px] shadow-lg">
                    <img 
                        src={qrisImg} 
                        alt="QRIS Setia Organizer" 
                        className="w-full h-auto object-contain rounded-lg" 
                    />
                </div>
                <p className="text-[10px] text-gray-500 mt-3">
                    *Transfer sesuai nominal tertera
                </p>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderForm;