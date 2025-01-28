
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopHeader from "@/components/TopHeader";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/newsSection";
import HeroBanner from "@/components/HeroBanner";

import PRODUCT from "@/components/products/page";
import Categories from "@/components/category/page";



export default function Home() {
  return (
   <div>
    <TopHeader/>
    <Hero/>
     <PRODUCT/>
     
    <HeroBanner/>
    <NewsSection/>
    <HeroSection/>
    

    <Footer/>
  
   </div>
  );
}
