import FeaturedFacilities from "@/components/FeaturedFacilities";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <FeaturedFacilities />
      <WhyChooseUs />
      <Reviews />
      
    </div>
  );
}
