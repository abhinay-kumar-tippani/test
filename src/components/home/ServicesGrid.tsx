"use client";

import type { LucideIcon } from "lucide-react";
import {
  Shield,
  Activity,
  Crown,
  AlignJustify,
  Sparkles,
  Smile,
} from "lucide-react";
import { doctor } from "@/config/doctor";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";

const iconMap: Record<string, LucideIcon> = {
  implant: Shield,
  tooth: Activity,
  crown: Crown,
  align: AlignJustify,
  sparkle: Sparkles,
  smile: Smile,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What We Treat" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctor.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <AnimatedCard key={service.name} delay={i * 0.08}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
