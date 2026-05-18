import FeaturedFacilities from "@/components/FeaturedFacilities";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <FeaturedFacilities />
    </div>
  );
}
