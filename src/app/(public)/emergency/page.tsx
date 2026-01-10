import { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Ambulance,
  Clock,
  MapPin,
  AlertTriangle,
  Heart,
  Brain,
  Bone,
  Baby,
  Flame,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Emergency Services",
  description: `24/7 Emergency care at ${siteConfig.shortName}. Immediate medical attention for all emergencies. Call our emergency helpline now.`,
}

const emergencyServices = [
  {
    icon: Heart,
    title: "Cardiac Emergency",
    description: "Chest pain, heart attack, cardiac arrest - immediate intervention available",
  },
  {
    icon: Brain,
    title: "Stroke Care",
    description: "Time-critical stroke treatment with thrombolysis and intervention",
  },
  {
    icon: Bone,
    title: "Trauma & Accidents",
    description: "Comprehensive trauma care for road accidents and injuries",
  },
  {
    icon: Baby,
    title: "Pediatric Emergency",
    description: "Specialized emergency care for infants and children",
  },
  {
    icon: Flame,
    title: "Burns & Poisoning",
    description: "Emergency treatment for burns, poisoning, and toxic exposure",
  },
  {
    icon: Ambulance,
    title: "Ambulance Service",
    description: "Fully equipped ambulance service for patient transport",
  },
]

const whenToVisit = [
  "Severe chest pain or difficulty breathing",
  "Signs of stroke (face drooping, arm weakness, speech difficulty)",
  "Severe bleeding or deep wounds",
  "Loss of consciousness or confusion",
  "Severe allergic reactions",
  "High fever with seizures (especially in children)",
  "Severe abdominal pain",
  "Broken bones or suspected fractures",
  "Severe burns",
  "Poisoning or overdose",
]

export default function EmergencyPage() {
  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 animate-pulse" />
              <div>
                <h1 className="text-2xl font-bold">Emergency? Call Now!</h1>
                <p className="text-red-100">Available 24/7 - Every second counts</p>
              </div>
            </div>
            <Button
              size="xl"
              variant="outline"
              className="bg-white text-red-600 hover:bg-red-50 border-white"
              asChild
            >
              <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}>
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.contact.emergencyPhone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Emergency Services */}
              <div>
                <span className="text-[#C78A3B] font-semibold text-sm uppercase tracking-wider">
                  24/7 Emergency Care
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003366] mt-3 mb-6">
                  Round-the-Clock Emergency Services
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Our emergency department is equipped with state-of-the-art facilities and
                  staffed by experienced emergency medicine specialists, nurses, and support
                  staff who are trained to handle all types of medical emergencies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-[#003366]">
                    <Clock className="h-5 w-5 text-[#C78A3B]" />
                    <span className="font-medium">24/7 Availability</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#003366]">
                    <Ambulance className="h-5 w-5 text-[#C78A3B]" />
                    <span className="font-medium">Ambulance Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#003366]">
                    <Heart className="h-5 w-5 text-[#C78A3B]" />
                    <span className="font-medium">ICU Backup</span>
                  </div>
                </div>
              </div>

              {/* Emergency Services */}
              <div>
                <h3 className="font-display text-2xl font-bold text-[#003366] mb-6">
                  Emergency Services We Offer
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {emergencyServices.map((service) => (
                    <Card key={service.title}>
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                            <service.icon className="h-6 w-6 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#003366] mb-1">
                              {service.title}
                            </h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* When to Visit */}
              <div>
                <h3 className="font-display text-2xl font-bold text-[#003366] mb-6">
                  When to Visit Emergency?
                </h3>
                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Seek emergency care immediately if you or someone experiences:
                    </p>
                    <ul className="space-y-2">
                      {whenToVisit.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Emergency Contact Card */}
              <Card className="bg-red-600 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-4">
                    Emergency Hotline
                  </h3>
                  <a
                    href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}
                    className="text-3xl font-bold flex items-center gap-2 mb-4 hover:underline"
                  >
                    <Phone className="h-8 w-8" />
                    {siteConfig.contact.emergencyPhone}
                  </a>
                  <p className="text-red-100 text-sm">
                    Call us immediately for any medical emergency. Our team is available
                    24 hours a day, 7 days a week.
                  </p>
                </CardContent>
              </Card>

              {/* Locations */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#003366] mb-4">
                    Emergency Locations
                  </h3>
                  <div className="space-y-4">
                    {siteConfig.locations.map((location) => (
                      <div key={location.name} className="border-b pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium text-[#003366]">{location.name}</h4>
                        <div className="flex items-start gap-2 text-sm text-gray-600 mt-1">
                          <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{location.address}, {location.city}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <Phone className="h-4 w-4 text-red-600" />
                          <a
                            href={`tel:${location.phone.replace(/\s/g, "")}`}
                            className="text-red-600 font-medium hover:underline"
                          >
                            {location.phone}
                          </a>
                        </div>
                        <Button size="sm" variant="outline" className="mt-3 w-full" asChild>
                          <a
                            href={location.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Directions
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#003366] mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/doctors">Find a Doctor</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/services">Our Services</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/book-appointment">Book Appointment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
