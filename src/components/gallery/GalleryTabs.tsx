"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./Lightbox";

const clinicImages = [
  { src: "/clinic/reception.jpg", alt: "Clinic reception area" },
  { src: "/clinic/treatment-room.jpg", alt: "Treatment room" },
  { src: "/clinic/equipment.jpg", alt: "Modern dental equipment" },
  { src: "/clinic/exterior.jpg", alt: "Clinic exterior" },
];

const doctorImages = [
  { src: "/doctor/hero.jpg", alt: "Doctor in clinic" },
  { src: "/doctor/about.jpg", alt: "Doctor with patient" },
  { src: "/doctor/profile.jpg", alt: "Doctor portrait" },
];

const tabs = [
  { id: "clinic", label: "Our Clinic" },
  { id: "doctor", label: "Doctor's Gallery" },
];

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState("clinic");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = activeTab === "clinic" ? clinicImages : doctorImages;

  return (
    <section className="pt-24 pb-20 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-1 bg-white rounded-xl p-1 shadow-sm mb-10 w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-muted hover:text-dark"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {images.map((img, i) => (
              <div
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              >
                {/* REPLACE: {img.src} — actual image file */}
                <div className="absolute inset-0 bg-gray-200">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null
                ? (prev - 1 + images.length) % images.length
                : null
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev + 1) % images.length : null
            )
          }
        />
      )}
    </section>
  );
}
