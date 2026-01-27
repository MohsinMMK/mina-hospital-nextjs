"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Calendar, Clock, Shield, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/ui/animated-blur-blob-background"

import { siteConfig } from "@/config/site"

const trustIndicators = [
  { icon: Shield, label: "NABH Accredited", value: "Quality Care" },
  { icon: Award, label: "15+ Years", value: "Experience" },
  { icon: Users, label: "100,000+", value: "Patients Served" },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 lg:pt-0">
      
      {/* Animated Blur Blobs - Subtle background decoration */}
      <AnimatedBackground className="z-[0] opacity-60" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#3b82f6]"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-[#3b82f6]/20 rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600">24/7 Emergency Services Available</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#3b82f6]">
              Your Health,{" "}
              <span className="text-[#3b82f6]">Our Priority</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Leading multi & super speciality hospital in Hyderabad providing affordable,
              compassionate healthcare with 50+ specialist doctors and state-of-the-art facilities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="xl" className="clay-button hover:text-white" asChild>
                <Link href="/book-appointment">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                size="xl"
                className="clay-button-secondary"
                asChild
              >
                <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-white/40"
                >
                  <div className="w-12 h-12 clay-card flex items-center justify-center text-[#3b82f6] rounded-2xl shadow-none">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#3b82f6]">{item.value}</p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Quick Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
             {/* Decorative blob behind card */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-[#3b82f6]/20 to-[#3b82f6]/20 rounded-[40px] blur-2xl -z-10" />
             
            <div className="clay-card max-w-md ml-auto p-8 border border-white/80">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-[#3b82f6]">
                  Quick Appointment
                </h3>
                <p className="text-gray-500 mt-2">
                  Book your appointment in just a few clicks
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <Clock className="h-5 w-5 text-[#3b82f6]" />
                  <div>
                    <p className="font-medium text-[#3b82f6]">OPD Timings</p>
                    <p className="text-sm text-gray-600">{siteConfig.workingHours.opd}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <Phone className="h-5 w-5 text-[#3b82f6]" />
                  <div>
                    <p className="font-medium text-[#3b82f6]">Emergency</p>
                    <p className="text-sm text-gray-600">{siteConfig.workingHours.emergency}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button className="w-full clay-button hover:text-white h-12 text-lg" asChild>
                  <Link href="/book-appointment">
                    Book Appointment Now
                  </Link>
                </Button>

                <p className="text-center text-sm text-gray-500 mt-2">
                  Or call us at{" "}
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-[#3b82f6] font-bold hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
