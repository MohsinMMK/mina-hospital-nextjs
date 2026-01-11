"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample data - In production, this would come from Supabase
const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    slug: "dr-rajesh-kumar",
    specialty: "Cardiology",
    qualification: "MD, DM (Cardiology)",
    experience: 20,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    slug: "dr-priya-sharma",
    specialty: "Obstetrics & Gynecology",
    qualification: "MS (OBG), DNB",
    experience: 15,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.8,
    reviews: 96,
  },
  {
    id: 3,
    name: "Dr. Anil Reddy",
    slug: "dr-anil-reddy",
    specialty: "Orthopedics",
    qualification: "MS (Ortho), Fellowship",
    experience: 18,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.9,
    reviews: 112,
  },
  {
    id: 4,
    name: "Dr. Meera Patel",
    slug: "dr-meera-patel",
    specialty: "Pediatrics",
    qualification: "MD (Pediatrics), DCH",
    experience: 12,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.7,
    reviews: 84,
  },
]

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
              className="text-[#c9826d] font-semibold text-sm uppercase tracking-wider"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-[#6682a3] mt-3 mb-4"
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

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="w-full" asChild>
                      <Link href={`/doctors/${doctor.slug}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <Badge variant="gold" className="mb-2">
                    {doctor.specialty}
                  </Badge>
                  <h3 className="font-semibold text-lg text-[#6682a3]">
                    <Link href={`/doctors/${doctor.slug}`} className="hover:text-[#c9826d] transition-colors">
                      {doctor.name}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{doctor.qualification}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{doctor.experience} yrs exp.</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-gray-400">({doctor.reviews})</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
