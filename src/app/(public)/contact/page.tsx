import { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.shortName}. Find our contact information, locations, and reach out for any healthcare inquiries.`,
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#6682a3] to-[#4a6382]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#c9826d] font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              We&apos;re Here to Help
            </h1>
            <p className="text-gray-300 text-lg">
              Have questions about our services or need assistance? Our team is ready
              to help you. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#6682a3]/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-[#6682a3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#6682a3] mb-1">Phone</h3>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                        className="text-gray-600 hover:text-[#c9826d] transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Mon-Sat: 8AM - 9PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-600 mb-1">Emergency</h3>
                      <a
                        href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}
                        className="text-gray-600 hover:text-red-600 transition-colors font-medium"
                      >
                        {siteConfig.contact.emergencyPhone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Available 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#6682a3]/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-[#6682a3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#6682a3] mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-gray-600 hover:text-[#c9826d] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-600 mb-1">WhatsApp</h3>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp?.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        Chat with us
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Quick responses
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#6682a3]/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-[#6682a3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#6682a3] mb-1">Working Hours</h3>
                      <p className="text-gray-600">OPD: {siteConfig.workingHours.opd}</p>
                      <p className="text-gray-600">Emergency: {siteConfig.workingHours.emergency}</p>
                      <p className="text-gray-600">Pharmacy: {siteConfig.workingHours.pharmacy}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold text-[#6682a3] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your inquiry in detail..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#c9826d] font-semibold text-sm uppercase tracking-wider">
              Our Locations
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#6682a3] mt-3 mb-4">
              Visit Us
            </h2>
            <p className="text-gray-600 text-lg">
              We have two convenient locations in Hyderabad to serve you better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteConfig.locations.map((location) => (
              <Card key={location.name} className="overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location.address + ", " + location.city)}`}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name}`}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-[#6682a3] mb-3">
                    {location.name}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-[#c9826d] shrink-0 mt-0.5" />
                      <span>
                        {location.address}, {location.city}, {location.state} - {location.pincode}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-[#c9826d] shrink-0" />
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="hover:text-[#6682a3]"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <a
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
