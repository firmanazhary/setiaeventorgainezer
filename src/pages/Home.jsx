import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TargetAudience from '../components/TargetAudience';
import RealitySection from '../components/Reality';
import BenefitSection from '../components/BenefitSection';
import SpeakerSection from '../components/SpeakerSection';
import SeatSection from '../components/SeatSection';
import PackageSection from '../components/PackageSection';
import Footer from '../components/Footer';          // 1. Import Footer
import FloatingWA from '../components/FloatingWA';  // 2. Import Floating WA
import BottomNav from '../components/BottomNav';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] font-sans overflow-x-hidden">
      
      <Hero />
      <About />
      <TargetAudience />
      <RealitySection />
      <BenefitSection />
      <SpeakerSection />
      <SeatSection />
      <PackageSection />

      {/* 9. FOOTER (Kartu Hitam di atas Putih) */}
      <Footer />

      {/* 10. FLOATING WA (Muncul di semua scroll) */}
      <FloatingWA />

      {/* Navigasi Bawah tetap ada */}
      <BottomNav />

    </div>
  );
};

export default Home;