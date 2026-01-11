import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
} from "lucide-react"

import { siteConfig } from "@/config/site"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Find a Doctor", href: "/doctors" },
  { name: "Locations", href: "/locations" },
  { name: "Contact Us", href: "/contact" },
  { name: "Careers", href: "/careers" },
]

const services = [
  { name: "Cardiology", href: "/services/cardiology" },
  { name: "Orthopedics", href: "/services/orthopedics" },
  { name: "Obstetrics & Gynecology", href: "/services/obstetrics-gynecology" },
  { name: "Pediatrics", href: "/services/pediatrics" },
  { name: "General Medicine", href: "/services/general-medicine" },
  { name: "Emergency Care", href: "/emergency" },
]

const patientResources = [
  { name: "Book Appointment", href: "/book-appointment" },
  { name: "Patient Portal", href: "/login" },
  { name: "Health Blog", href: "/blog" },
  { name: "FAQs", href: "/faq" },
  { name: "Insurance & Billing", href: "/billing" },
  { name: "Medical Tourism", href: "/medical-tourism" },
]

export function Footer() {
  return (
    <footer className="bg-[#6682a3] text-white">
      {/* Emergency Banner */}
      <div className="bg-red-600 py-3">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="font-semibold animate-pulse">24/7 Emergency Services Available</span>
          <a
            href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}
            className="bg-white text-red-600 px-4 py-1 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.contact.emergencyPhone}
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#6682a3] font-bold text-2xl">M</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">MINA Hospitals</h3>
                <p className="text-sm text-gray-300">Super & Multi Speciality</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Providing affordable, high-quality healthcare with compassion and excellence.
              Your health is our priority, serving Hyderabad with 24/7 emergency care and
              50+ specialist doctors.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-gray-300 hover:text-[#f4b942] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-[#f4b942] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <p>OPD: {siteConfig.workingHours.opd}</p>
                  <p>Emergency: {siteConfig.workingHours.emergency}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#f4b942]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:pl-1 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#f4b942]">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white hover:pl-1 transition-all"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#f4b942]">Patient Resources</h4>
            <ul className="space-y-2">
              {patientResources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white hover:pl-1 transition-all"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="font-semibold text-lg mb-6 text-[#f4b942]">Our Locations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.locations.map((location) => (
              <a
                key={location.name}
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-[#4a6382] rounded-lg hover:bg-[#001a33] transition-colors group"
              >
                <MapPin className="h-5 w-5 text-[#f4b942] mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h5 className="font-semibold">{location.name}</h5>
                  <p className="text-sm text-gray-300">
                    {location.address}, {location.city} - {location.pincode}
                  </p>
                  <p className="text-sm text-[#f4b942] mt-1">{location.phone}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a6382] rounded-full flex items-center justify-center hover:bg-[#f4b942] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a6382] rounded-full flex items-center justify-center hover:bg-[#f4b942] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a6382] rounded-full flex items-center justify-center hover:bg-[#f4b942] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a6382] rounded-full flex items-center justify-center hover:bg-[#f4b942] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a6382] rounded-full flex items-center justify-center hover:bg-[#f4b942] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1 flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for better healthcare
            </p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 pt-6 border-t border-gray-700 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/disclaimer" className="hover:text-white transition-colors">
            Medical Disclaimer
          </Link>
          <Link href="/sitemap" className="hover:text-white transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  )
}
