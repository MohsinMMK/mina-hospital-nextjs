"use client"

import Link from "next/link"
import {
  Heart,
  Bone,
  Baby,
  Brain,
  Stethoscope,
  Syringe,
  Eye,
  Activity,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment facilities",
    href: "/services/cardiology",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Expert bone and joint care including surgery and rehabilitation",
    href: "/services/orthopedics",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Baby,
    name: "Obstetrics & Gynecology",
    description: "Complete women's health services from pregnancy to menopause",
    href: "/services/obstetrics-gynecology",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Specialized care for brain, spine and nervous system disorders",
    href: "/services/neurology",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    description: "Primary healthcare and internal medicine for all age groups",
    href: "/services/general-medicine",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Syringe,
    name: "General Surgery",
    description: "Advanced surgical procedures with minimal invasive techniques",
    href: "/services/general-surgery",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Complete eye care including LASIK and cataract surgery",
    href: "/services/ophthalmology",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Activity,
    name: "Emergency Care",
    description: "24/7 emergency services with rapid response team",
    href: "/emergency",
    color: "bg-red-50 text-red-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#f4b942] font-semibold text-sm uppercase tracking-wider"
          >
            Our Specialities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-[#2853aa] mt-3 mb-4"
          >
            Comprehensive Healthcare Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            From primary care to advanced speciality treatments, we offer a wide range of
            medical services to meet all your healthcare needs under one roof.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={itemVariants}>
              <Link href={service.href}>
                <div className="clay-card h-full group cursor-pointer p-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-semibold text-lg text-[#2853aa] mb-2 group-hover:text-[#14b8a6] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <span className="text-[#2853aa] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all group-hover:text-[#14b8a6]">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
