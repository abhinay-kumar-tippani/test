"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { doctor } from "@/config/doctor";
import SectionHeading from "@/components/ui/SectionHeading";

const clinicPhotos = [
  {
    src: "/clinic/reception.jpg",
    alt: "Clinic reception area",
    label: "Reception",
  },
  {
    src: "/clinic/treatment-room.jpg",
    alt: "Treatment room",
    label: "Treatment Room",
  },
  {
    src: "/clinic/equipment.jpg",
    alt: "Modern dental equipment",
    label: "Equipment",
  },
];

export default function ClinicPreview() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Step Inside Our Clinic"
          subtitle={doctor.clinicName}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {clinicPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* REPLACE: {photo.src} — actual clinic photo */}
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
          >
            See Full Gallery
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
