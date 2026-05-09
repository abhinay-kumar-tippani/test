"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { doctor } from "@/config/doctor";

export default function AboutSnippet() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            {/* REPLACE: public/doctor/about.jpg — doctor in clinic environment */}
            <div className="absolute inset-0 bg-gray-200">
              <Image
                src="/doctor/about.jpg"
                alt={doctor.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Meet {doctor.name}
            </h2>
            <p className="mt-2 text-accent font-medium text-sm">
              {doctor.credentials}
            </p>
            {doctor.registrationNo && (
              <p className="mt-1 text-xs text-muted">{doctor.registrationNo}</p>
            )}

            <p className="mt-6 text-muted leading-relaxed">{doctor.bio[0]}</p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
            >
              Read Full Story
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
