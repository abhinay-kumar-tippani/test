import { doctor } from "@/config/doctor";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutSnippet from "@/components/home/AboutSnippet";
import ClinicPreview from "@/components/home/ClinicPreview";

export const metadata = {
  title: doctor.seo.title,
  description: doctor.seo.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutSnippet />
      <ClinicPreview />
    </>
  );
}
