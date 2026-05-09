"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { doctor } from "@/config/doctor";

const stats = [
  { label: "Years Experience", value: doctor.yearsExperience, suffix: "+" },
  { label: "Patients Served", value: doctor.patientsServed, suffix: "+" },
  {
    label: "Procedures Completed",
    value: doctor.proceduresCompleted,
    suffix: "+",
  },
];

function Counter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const displayValue = isInView ? to : from;

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
