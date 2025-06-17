
'use client'
// Example in src/app/(site)/page.tsx
import AnnouncementBanner from '../components/sections/AnnouncementBanner';
import HeroSection from '../components/organisms/HeroSection';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

// ... other imports

export default function HomePage() {
  return (
    <> 
      <AnnouncementBanner />
      <Header />
      <HeroSection />
      <Footer displayContext="global" />
      
    </>
  );
}

