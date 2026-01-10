import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Star, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Our Doctors",
  description: `Meet our team of 50+ specialist doctors at ${siteConfig.shortName}. Find the right doctor for your healthcare needs and book an appointment.`,
}

// Sample data - In production, this would come from Supabase
const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    slug: "dr-rajesh-kumar",
    specialty: "Cardiology",
    qualification: "MD, DM (Cardiology), FACC",
    experience: 20,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.9,
    reviews: 128,
    languages: ["English", "Hindi", "Telugu"],
    available: true,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    slug: "dr-priya-sharma",
    specialty: "Obstetrics & Gynecology",
    qualification: "MS (OBG), DNB, FMAS",
    experience: 15,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.8,
    reviews: 96,
    languages: ["English", "Hindi"],
    available: true,
  },
  {
    id: 3,
    name: "Dr. Anil Reddy",
    slug: "dr-anil-reddy",
    specialty: "Orthopedics",
    qualification: "MS (Ortho), MCh, Fellowship (Joint Replacement)",
    experience: 18,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.9,
    reviews: 112,
    languages: ["English", "Hindi", "Telugu"],
    available: true,
  },
  {
    id: 4,
    name: "Dr. Meera Patel",
    slug: "dr-meera-patel",
    specialty: "Pediatrics",
    qualification: "MD (Pediatrics), DCH, IAP Fellow",
    experience: 12,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.7,
    reviews: 84,
    languages: ["English", "Hindi", "Gujarati"],
    available: true,
  },
  {
    id: 5,
    name: "Dr. Suresh Rao",
    slug: "dr-suresh-rao",
    specialty: "Neurology",
    qualification: "MD, DM (Neurology)",
    experience: 16,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.8,
    reviews: 92,
    languages: ["English", "Hindi", "Telugu"],
    available: true,
  },
  {
    id: 6,
    name: "Dr. Kavitha Menon",
    slug: "dr-kavitha-menon",
    specialty: "Dermatology",
    qualification: "MD (Dermatology), DVD",
    experience: 10,
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.6,
    reviews: 78,
    languages: ["English", "Hindi", "Malayalam"],
    available: true,
  },
  {
    id: 7,
    name: "Dr. Mohammed Irfan",
    slug: "dr-mohammed-irfan",
    specialty: "General Surgery",
    qualification: "MS (Surgery), FAIS",
    experience: 14,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.7,
    reviews: 88,
    languages: ["English", "Hindi", "Urdu"],
    available: false,
  },
  {
    id: 8,
    name: "Dr. Lakshmi Narayana",
    slug: "dr-lakshmi-narayana",
    specialty: "Gastroenterology",
    qualification: "MD, DM (Gastroenterology)",
    experience: 13,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&h=400&q=80",
    rating: 4.8,
    reviews: 95,
    languages: ["English", "Hindi", "Telugu"],
    available: true,
  },
]

const specialties = [
  "All Specialties",
  "Cardiology",
  "Orthopedics",
  "Obstetrics & Gynecology",
  "Pediatrics",
  "Neurology",
  "Dermatology",
  "General Surgery",
  "Gastroenterology",
]

export default function DoctorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#003366] to-[#002244]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#C78A3B] font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Meet Our Expert Doctors
            </h1>
            <p className="text-gray-300 text-lg">
              Our team of 50+ highly qualified specialists are committed to providing
              you with the best medical care. Find the right doctor for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search doctors by name..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {specialties.slice(0, 5).map((specialty) => (
                <Button
                  key={specialty}
                  variant={specialty === "All Specialties" ? "default" : "outline"}
                  size="sm"
                >
                  {specialty}
                </Button>
              ))}
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!doctor.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-medium bg-black/70 px-3 py-1 rounded-full text-sm">
                        Currently Unavailable
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={doctor.available ? "success" : "secondary"}
                      className="shadow"
                    >
                      {doctor.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <Badge variant="gold" className="mb-2">
                    {doctor.specialty}
                  </Badge>
                  <h3 className="font-semibold text-lg text-[#003366]">
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="hover:text-[#C78A3B] transition-colors"
                    >
                      {doctor.name}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">{doctor.qualification}</p>
                  <p className="text-gray-600 text-sm mb-3">
                    {doctor.experience} years experience
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{doctor.rating}</span>
                      <span className="text-gray-400 text-sm">({doctor.reviews})</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {doctor.languages.join(", ")}
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    size="sm"
                    disabled={!doctor.available}
                    asChild={doctor.available}
                  >
                    {doctor.available ? (
                      <Link href={`/doctors/${doctor.slug}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Link>
                    ) : (
                      <>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Doctors
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003366] mb-6">
            Can&apos;t Find the Right Doctor?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us and our patient care team will help you find the most suitable
            specialist for your healthcare needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                Call Us: {siteConfig.contact.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Send Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
