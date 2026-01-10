"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Clock, MapPin, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "All Services", href: "/services" },
      { name: "Cardiology", href: "/services/cardiology" },
      { name: "Orthopedics", href: "/services/orthopedics" },
      { name: "Obstetrics & Gynecology", href: "/services/obstetrics-gynecology" },
      { name: "Pediatrics", href: "/services/pediatrics" },
      { name: "General Medicine", href: "/services/general-medicine" },
      { name: "General Surgery", href: "/services/general-surgery" },
    ],
  },
  { name: "Doctors", href: "/doctors" },
  { name: "Locations", href: "/locations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-[#C78A3B] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Emergency: 24/7</span>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Mehdipatnam & Attapur</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/emergency" className="text-red-400 font-semibold hover:text-red-300 animate-pulse">
              Emergency Services
            </Link>
            <Link href="/login" className="hover:text-[#C78A3B] transition-colors">
              Patient Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "bg-white/95 backdrop-blur-md border-b transition-shadow duration-300",
          isScrolled && "shadow-md"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-lg font-bold text-[#003366] leading-tight">
                  MINA Hospitals
                </h1>
                <p className="text-xs text-muted-foreground">
                  Super & Multi Speciality
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === item.href
                        ? "text-[#003366] bg-[#003366]/5"
                        : "text-gray-700 hover:text-[#003366] hover:bg-[#003366]/5"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-lg shadow-lg border py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#003366]/5 hover:text-[#003366]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="emergency"
                size="sm"
                className="hidden sm:flex"
                asChild
              >
                <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4 mr-1" />
                  Emergency
                </a>
              </Button>
              <Button asChild className="hidden md:flex">
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="text-left">Menu</SheetTitle>
                  <div className="flex flex-col gap-4 mt-8">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block py-2 text-lg font-medium transition-colors",
                            pathname === item.href
                              ? "text-[#003366]"
                              : "text-gray-700 hover:text-[#003366]"
                          )}
                        >
                          {item.name}
                        </Link>
                        {item.children && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-1 text-sm text-gray-600 hover:text-[#003366]"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="pt-4 border-t space-y-3">
                      <Button className="w-full" asChild>
                        <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
                          Book Appointment
                        </Link>
                      </Button>
                      <Button variant="emergency" className="w-full" asChild>
                        <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Emergency: {siteConfig.contact.emergencyPhone}
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                          Patient Portal Login
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
