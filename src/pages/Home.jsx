import HeroSection from "../components/sections/HeroSection.jsx";
import ServicesPreview from "../components/sections/ServicesPreview.jsx";
import WhyChooseSection from "../components/sections/WhyChooseSection.jsx";
import GalleryPreview from "../components/sections/GalleryPreview.jsx";
import OutdoorLivingSection from "../components/sections/OutdoorLivingSection.jsx";
import ContactCTASection from "../components/sections/ContactCTASection.jsx";

function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseSection />
      <GalleryPreview />
      <OutdoorLivingSection />
      <ContactCTASection />
    </main>
  );
}

export default Home;
