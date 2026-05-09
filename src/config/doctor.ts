export const doctor = {
  name: "Dr. Priya Sharma",
  credentials: "BDS, MDS – Prosthodontics",
  registrationNo: "NMC Reg. No. 2024-DL-48291",
  tagline: "Precise dental care, tailored to you.",
  bio: [
    "Dr. Priya Sharma has been restoring and rebuilding smiles in Delhi for over 12 years. She completed her MDS in Prosthodontics from Maulana Azad Institute of Dental Sciences and has since trained in implantology across Mumbai and abroad.",
    "Her approach is direct — she explains every procedure clearly, works at a pace patients are comfortable with, and doesn't recommend treatments that aren't necessary. Patients come back not just because the work holds, but because they trust her judgment.",
  ],
  yearsExperience: 12,
  patientsServed: 4800,
  proceduresCompleted: 9200,
  languages: ["English", "Hindi", "Punjabi"],
  clinicName: "Sharma Dental Studio",
  clinicAddress: "B-14, Greater Kailash Part 1, New Delhi – 110048",
  phone: "+91 98100 00000",
  email: "contact@sharmadentalstudio.com",
  workingHours: "Mon – Sat: 10:00 AM – 7:00 PM",
  services: [
    {
      name: "Dental Implants",
      icon: "implant",
      description: "Permanent tooth replacement that looks and functions exactly like a natural tooth.",
    },
    {
      name: "Root Canal Treatment",
      icon: "tooth",
      description: "Painless, single-sitting RCT to save an infected tooth without extraction.",
    },
    {
      name: "Crowns & Bridges",
      icon: "crown",
      description: "Custom ceramic restorations matched precisely to your existing teeth.",
    },
    {
      name: "Orthodontics",
      icon: "align",
      description: "Braces and clear aligners for children and adults at any stage.",
    },
    {
      name: "Teeth Whitening",
      icon: "sparkle",
      description: "In-clinic laser whitening with results visible in a single session.",
    },
    {
      name: "Pediatric Dentistry",
      icon: "smile",
      description: "Gentle, child-friendly care with zero-anxiety techniques for kids.",
    },
  ],
  education: [
    { year: "2008", label: "BDS", institution: "Manipal College of Dental Sciences" },
    { year: "2012", label: "MDS – Prosthodontics", institution: "MAIDS, New Delhi" },
    { year: "2015", label: "Implantology Fellowship", institution: "ITI India Chapter" },
    { year: "2019", label: "Advanced Aesthetics Course", institution: "Aesthetic Dentistry Institute, Bangkok" },
  ],
  memberships: [
    "Indian Dental Association (IDA)",
    "Indian Prosthodontic Society",
    "ITI (International Team for Implantology)",
  ],
  socialMedia: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "",
  },
  seo: {
    title: "Dr. Priya Sharma – Dental Specialist in Delhi | Sharma Dental Studio",
    description:
      "Trusted dental care in Greater Kailash, Delhi. Implants, RCT, crowns, whitening, and pediatric dentistry by Dr. Priya Sharma, MDS Prosthodontics.",
  },
};

export type DoctorConfig = typeof doctor;
