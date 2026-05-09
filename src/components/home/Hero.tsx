"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { doctor } from "@/config/doctor";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* REPLACE: public/doctor/hero.jpg — professional headshot of the doctor */}
      <div className="absolute inset-0 bg-gray-300">
        <Image
          src="/doctor/hero.jpg"
          alt={doctor.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-medium text-sm sm:text-base uppercase tracking-widest mb-4"
        >
          {doctor.credentials}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-heading font-bold leading-tight max-w-3xl"
        >
          {doctor.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl text-gray-200 max-w-xl"
        >
          {doctor.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors"
          >
            About Dr. {doctor.name.split(" ")[1]}
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-medium text-sm backdrop-blur-sm transition-colors"
          >
            See Our Clinic
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
