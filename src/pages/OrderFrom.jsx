import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { packages } from '../data/data';
// Pastikan fotonya ada

const OrderForm = () => {
  const navigate = useNavigate();
  const [selectedPkg, setSelectedPkg] = useState(packages[0]); // Default paket A
  const [form, setForm] = useState({ nama: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo Admin, Daftar ${selectedPkg.name}. Nama: ${form.nama}`;
    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white font-sans max-w-md mx-auto border-x border-white/5 pb-10">
      
      {/* Navbar Simple */}
      <div className="p-6 flex items-center gap-4 border-b border-white/5">
        <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="font-heading font-bold text-xl">Registrasi Event</h1>
      </div>

      <div className="p-6">
        {/* Pilihan Paket (Horizontal Scroll) */}
        <p className="text-sm text-gray-400 mb-3 font-bold uppercase tracking-wider">1. Pilih Kategori</p>
        <div className="flex gap-4 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg)}
              className={`min-w-[160px] p-4 rounded-2xl border cursor-pointer transition-all ${
                selectedPkg.id === pkg.id 
                ? 'border-gold-light bg-gold-light/10' 
                : 'border-white/10 bg-luxury-card'
              }`}
            >
              <p className={`text-xs font-bold mb-1 ${selectedPkg.id === pkg.id ? 'text-gold-light' : 'text-gray-500'}`}>
                {pkg.name}
              </p>
              <p className="font-bold text-lg">Rp {pkg.price.toLocaleString('id-ID')}</p>
            </div>
          ))}
        </div>

        {/* QRIS Section */}
        <div className="bg-luxury-card p-6 rounded-3xl border border-white/10 mb-8 text-center">
            <p className="text-sm font-bold text-gray-300 mb-4">Scan QRIS untuk Pembayaran</p>
            <div className="w-48 h-48 mx-auto bg-white p-2 rounded-xl">
                <img src={qrisImg} alt="QRIS" className="w-full h-full object-contain" />
            </div>
            <p className="text-xs text-gold-light mt-3 bg-gold-light/10 py-2 px-4 rounded-full inline-block">
                Total: Rp {selectedPkg.price.toLocaleString('id-ID')}
            </p>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Nama Lengkap</label>
                <input 
                    required 
                    type="text"
                    className="w-full bg-luxury-card border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-light focus:ring-1 focus:ring-gold-light outline-none transition"
                    placeholder="Nama sesuai KTP"
                    onChange={(e) => setForm({...form, nama: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">WhatsApp</label>
                <input 
                    required 
                    type="tel"
                    className="w-full bg-luxury-card border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-light focus:ring-1 focus:ring-gold-light outline-none transition"
                    placeholder="0812xxxx"
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                />
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-gold-light to-gold-dark text-white font-bold rounded-xl shadow-lg shadow-gold-dark/20 mt-4 active:scale-95 transition-transform flex justify-center gap-2 items-center">
                <Send className="w-5 h-5" /> Konfirmasi via WhatsApp
            </button>
        </form>

      </div>
    </div>
  );
};

export default OrderForm;