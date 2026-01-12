"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { DoctorCard, Doctor } from "@/components/shared/doctor-card"

/**
 * Sample doctors data for the homepage.
 * In production, this would come from Supabase.
 * 
 * Note: The homepage showcases a curated selection of doctors.
 * For the full directory, users can navigate to /doctors.
 */
const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    slug: "dr-rajesh-kumar",
    specialty: "Cardiology",
    qualification: "MD, DM (Cardiology)",
    experience: 20,
    image: "",
    rating: 4.9,
    reviews: 128,
    available: true,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    slug: "dr-priya-sharma",
    specialty: "Obstetrics & Gynecology",
    qualification: "MS (OBG), DNB",
    experience: 15,
    image: "",
    rating: 4.8,
    reviews: 96,
    available: true,
  },
  {
    id: 3,
    name: "Dr. Anil Reddy",
    slug: "dr-anil-reddy",
    specialty: "Orthopedics",
    qualification: "MS (Ortho), Fellowship",
    experience: 18,
    image: "",
    rating: 4.9,
    reviews: 112,
    available: true,
  },
  {
    id: 4,
    name: "Dr. Meera Patel",
    slug: "dr-meera-patel",
    specialty: "Pediatrics",
    qualification: "MD (Pediatrics), DCH",
    experience: 12,
    image: "",
    rating: 4.7,
    reviews: 84,
    available: true,
  },
  {
    id: 5,
    name: "Dr. Syed Ahmed",
    slug: "dr-syed-ahmed",
    specialty: "Neurology",
    qualification: "DM Neurology, MBBS",
    experience: 22,
    image: "",
    rating: 4.9,
    reviews: 156,
    available: true,
  },
  {
    id: 6,
    name: "Dr. Lakshmi Rao",
    slug: "dr-lakshmi-rao",
    specialty: "Dermatology",
    qualification: "MD Dermatology",
    experience: 14,
    image: "",
    rating: 4.8,
    reviews: 92,
    available: true,
  },
]

/**
 * Specialists Section - Homepage component showcasing our doctors.
 * 
 * Design Notes:
 * - Uses the unified DoctorCard component for consistency
 * - 6 columns on desktop, 4 on tablet, 2 on mobile
 * - Subtle entrance animations for visual polish
 */
export function Specialists() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#f4b942] font-semibold text-sm uppercase tracking-wider"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-[#2853aa] mt-3 mb-4"
            >
              Meet Our Specialists
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg max-w-2xl"
            >
              Our team of experienced doctors and specialists are committed to providing
              you with the highest quality care.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" asChild>
              <Link href="/doctors">
                View All Doctors
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Doctors Grid - 6 on desktop, 4 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
