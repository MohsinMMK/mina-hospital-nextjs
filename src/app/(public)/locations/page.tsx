import { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Clock, Navigation, Building2, Ambulance } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Our Locations | MINA Hospitals",
  description: `Find MINA Super & Multi Speciality Hospitals locations in Hyderabad. Visit our branches at Mehdipatnam and Attapur for quality healthcare services.`,
}

const locationFeatures = [
  {
    icon: Ambulance,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency care",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "State-of-the-art medical equipment",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "OPD: 8AM - 9PM daily",
  },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#003366] to-[#002244]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#C78A3B] font-semibold text-sm uppercase tracking-wider">
              Our Locations
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Find Us Near You
            </h1>
            <p className="text-gray-300 text-lg">
              MINA Hospitals has two convenient locations in Hyderabad to serve you better. 
              Both branches offer comprehensive healthcare services with modern facilities 
              and experienced medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {siteConfig.locations.map((location, index) => (
              <Card key={location.name} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                {/* Map Embed */}
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=15&output=embed`}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name}`}
                  />
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 bg-[#003366] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {index === 0 ? "Main Branch" : "Branch 2"}
                  </div>
                </div>
                
                <CardContent className="p-8">
                  {/* Location Name */}
                  <h2 className="font-display text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#C78A3B] transition-colors">
                    {location.name}
                  </h2>
                  
                  {/* Location Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#003366]/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-[#003366]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">
                          {location.address}, {location.city}, {location.state} - {location.pincode}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#003366]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-[#003366]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a
                          href={`tel:${location.phone.replace(/\s/g, "")}`}
                          className="text-[#C78A3B] hover:underline font-medium"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#003366]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-[#003366]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Working Hours</p>
                        <p className="text-gray-600">OPD: {siteConfig.workingHours.opd}</p>
                        <p className="text-gray-600">Emergency: {siteConfig.workingHours.emergency}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1" asChild>
                      <a
                        href={location.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={`tel:${location.phone.replace(/\s/g, "")}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-[#003366] mb-4">
              What We Offer at Both Locations
            </h2>
            <p className="text-gray-600">
              Both our hospitals are equipped with modern facilities to provide you the best healthcare experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {locationFeatures.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#003366]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-[#003366]" />
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our emergency services are available 24/7 at both locations. Don&apos;t hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg" asChild>
              <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}>
                <Phone className="h-5 w-5 mr-2" />
                Emergency: {siteConfig.contact.emergencyPhone}
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/book-appointment">
                Book an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
