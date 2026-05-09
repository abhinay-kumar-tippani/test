import { doctor } from "@/config/doctor";
import GalleryTabs from "@/components/gallery/GalleryTabs";

export const metadata = {
  title: `Gallery – ${doctor.clinicName}`,
  description: `Photos of ${doctor.clinicName} clinic and Dr. ${doctor.name.split(" ")[1]}'s work in ${doctor.clinicAddress}.`,
};

export default function GalleryPage() {
  return <GalleryTabs />;
}
