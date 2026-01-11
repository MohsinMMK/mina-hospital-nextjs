"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Calendar, Clock, Shield, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/ui/animated-blur-blob-background"
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardDescription, GlassCardContent, GlassCardFooter } from "@/components/ui/glass-card"
import { siteConfig } from "@/config/site"

const trustIndicators = [
  { icon: Shield, label: "NABH Accredited", value: "Quality Care" },
  { icon: Award, label: "15+ Years", value: "Experience" },
  { icon: Users, label: "100,000+", value: "Patients Served" },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
          alt="MINA Hospital Building"
          fill
          className="object-cover"
          priority
        />
        {/* Glassmorphism overlay instead of gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(40, 83, 170, 0.7) 0%, rgba(40, 83, 170, 0.4) 50%, rgba(40, 83, 170, 0.3) 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
      </div>
      
      {/* Animated Blur Blobs - On top of glass, behind content */}
      <AnimatedBackground className="z-[5]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#f4b942]/20 border border-[#f4b942]/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">24/7 Emergency Services Available</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Health,{" "}
              <span className="text-[#f4b942]">Our Priority</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              Leading multi & super speciality hospital in Hyderabad providing affordable,
              compassionate healthcare with 50+ specialist doctors and state-of-the-art facilities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="xl" variant="gold" asChild>
                <Link href="/book-appointment">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
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
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-[#f4b942]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{item.value}</p>
                    <p className="text-sm text-gray-300">{item.label}</p>
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
            className="hidden lg:block"
          >
            <GlassCard className="max-w-md ml-auto p-2">
              <GlassCardHeader>
                <GlassCardTitle className="font-display text-2xl">
                  Quick Appointment
                </GlassCardTitle>
                <GlassCardDescription>
                  Book your appointment in just a few clicks
                </GlassCardDescription>
              </GlassCardHeader>

              <GlassCardContent className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Clock className="h-5 w-5 text-[#f4b942]" />
                  <div>
                    <p className="font-medium text-white">OPD Timings</p>
                    <p className="text-sm text-white/70">{siteConfig.workingHours.opd}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-red-500/20 rounded-lg backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-red-300" />
                  <div>
                    <p className="font-medium text-red-200">Emergency</p>
                    <p className="text-sm text-white/70">{siteConfig.workingHours.emergency}</p>
                  </div>
                </div>
              </GlassCardContent>

              <GlassCardFooter className="flex-col gap-3">
                <Button className="w-full" variant="gold" size="lg" asChild>
                  <Link href="/book-appointment">
                    Book Appointment Now
                  </Link>
                </Button>

                <p className="text-center text-sm text-white/70">
                  Or call us at{" "}
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-[#f4b942] font-medium hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </GlassCardFooter>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
