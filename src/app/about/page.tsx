import { doctor } from "@/config/doctor";
import DoctorIntro from "@/components/about/DoctorIntro";
import CredentialsTimeline from "@/components/about/CredentialsTimeline";
import Highlights from "@/components/about/Highlights";

export const metadata = {
  title: `About ${doctor.name} – ${doctor.clinicName}`,
  description: `Learn about ${doctor.name}, ${doctor.credentials}. Education, experience, memberships, and languages.`,
};

export default function AboutPage() {
  return (
    <>
      <DoctorIntro />
      <CredentialsTimeline />
      <Highlights />
    </>
  );
}
