"use client";

import { motion } from "framer-motion";
import { doctor } from "@/config/doctor";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CredentialsTimeline() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education & Training"
          centered={false}
        />

        <div className="relative pl-8 border-l-2 border-primary/20">
          {doctor.education.map((entry, i) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[2.35rem] top-1 w-5 h-5 rounded-full bg-primary border-4 border-surface" />
              <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-2">
                {entry.year}
              </span>
              <h3 className="text-lg font-heading font-semibold text-dark">
                {entry.label}
              </h3>
              <p className="text-muted text-sm">{entry.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
