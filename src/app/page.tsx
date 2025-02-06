
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopHeader from "@/components/TopHeader";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/newsSection";
import HeroBanner from "@/components/HeroBanner";


import Product from "@/components/Product";



export default function Home() {
  return (
   <div>
    <TopHeader/>
    <Hero/>
     
     <Product/>
    <HeroBanner/>
    <NewsSection/>
    <HeroSection/>
    

    <Footer/>
  
   </div>
  );
}
