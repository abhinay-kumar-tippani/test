"use client";

import { motion } from "framer-motion";
import { doctor } from "@/config/doctor";

export default function Highlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <h3 className="text-2xl font-heading font-bold text-primary mb-6">
            Professional Memberships
          </h3>
          <div className="flex flex-wrap gap-3">
            {doctor.memberships.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="px-4 py-2 bg-primary/5 text-primary text-sm font-medium rounded-full border border-primary/10"
              >
                {m}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-heading font-bold text-primary mb-6">
            Languages Spoken
          </h3>
          <div className="flex flex-wrap gap-3">
            {doctor.languages.map((lang, i) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
