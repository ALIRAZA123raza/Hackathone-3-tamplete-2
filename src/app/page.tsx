
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopHeader from "@/components/TopHeader";
import Feutures from "@/components/Feutures";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/newsSection";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
   <div>
    <TopHeader/>
    <Hero/>
    <Feutures/>
    <HeroBanner/>
    <NewsSection/>
    <HeroSection/>
    

    <Footer/>
  
   </div>
  );
}
