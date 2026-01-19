import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Materials } from "@/components/sections/Materials";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Materials />
      <GalleryPreview />
      <Testimonials />
      <Contact />
    </>
  );
}
