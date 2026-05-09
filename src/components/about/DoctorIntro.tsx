"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { doctor } from "@/config/doctor";

export default function DoctorIntro() {
  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden"
          >
            {/* REPLACE: public/doctor/profile.jpg — professional portrait of the doctor */}
            <div className="absolute inset-0 bg-gray-200">
              <Image
                src="/doctor/profile.jpg"
                alt={doctor.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              {doctor.name}
            </h1>
            <p className="mt-2 text-accent font-medium">{doctor.credentials}</p>
            {doctor.registrationNo && (
              <p className="mt-1 text-sm text-muted">
                {doctor.registrationNo}
              </p>
            )}

            <div className="mt-8 space-y-4">
              {doctor.bio.map((paragraph, i) => (
                <p key={i} className="text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
