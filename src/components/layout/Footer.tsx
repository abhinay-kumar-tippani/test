"use client";

import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { doctor } from "@/config/doctor";

const socialLinks = [
  { key: "instagram", label: "Instagram", url: doctor.socialMedia.instagram },
  { key: "facebook", label: "Facebook", url: doctor.socialMedia.facebook },
  { key: "linkedin", label: "LinkedIn", url: doctor.socialMedia.linkedin },
].filter((s) => s.url);

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              {doctor.clinicName}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {doctor.credentials}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-gray-300">{doctor.clinicAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <a
                  href={`tel:${doctor.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {doctor.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href={`mailto:${doctor.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {doctor.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Hours
            </h4>
            <div className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-gray-300 text-sm">
                {doctor.workingHours}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Follow
            </h4>
            {socialLinks.length > 0 ? (
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">Stay tuned</p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {doctor.clinicName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
