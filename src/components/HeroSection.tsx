import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-12 md:mb-20">
      <div className="bg-[#2A254B] text-white p-12 md:p-24 flex flex-col justify-center">
        <h1 className="font-clash text-4xl md:text-5xl font-medium mb-6">
        From a studio in London to a global brand with
        over 400 outlets
        </h1>
        <p className="text-lg mb-8 max-w-md">
        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>,
        <Button className="self-start border-white bg-gray-300 hover:bg-white hover:text-[#2A254B] text-black">
          Get in touch
        </Button>
      </div>
      <div className="bg-gray-200 aspect-square md:aspect-auto">
        <Image
          src="/Image.png"
          alt="Interior design showcase"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}