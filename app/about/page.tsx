import Craftmen from "@/components/about/Craftmen";
import HeroSection from "@/components/about/HeroSection";
import Story from "@/components/about/Story";
import VMV from "@/components/about/VMV";
import ContactBanner from "@/components/home/ContactBanner";

const About = () => {
  return (
    <>
      <HeroSection />
      <Story />
      <VMV />
      <Craftmen />
      <ContactBanner />
    </>
  );
};

export default About;
