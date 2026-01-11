"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, X, Stethoscope } from "lucide-react"
import {
  Heart,
  Bone,
  Baby,
  Brain,
  Syringe,
  Eye,
  Activity,
  Pill,
  Microscope,
  Scan,
  Thermometer,
  Ear,
  ShieldCheck,
  Waves,
  FlaskConical,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { siteConfig } from "@/config/site"

const services = [
  {
    icon: Heart,
    name: "Cardiology",
    category: "Specialty",
    description: "Complete heart care including ECG, Echo, stress tests, angiography, and cardiac surgeries.",
    href: "/services/cardiology",
    features: ["ECG & Echo", "Angiography", "Pacemaker Implant", "Cardiac Rehab"],
  },
  {
    icon: Bone,
    name: "Orthopedics",
    category: "Surgical",
    description: "Expert bone, joint, and spine care with advanced surgical and non-surgical treatments.",
    href: "/services/orthopedics",
    features: ["Joint Replacement", "Spine Surgery", "Sports Medicine", "Fracture Care"],
  },
  {
    icon: Baby,
    name: "Obstetrics & Gynecology",
    category: "Specialty",
    description: "Complete women's healthcare from pregnancy care to menopause management.",
    href: "/services/obstetrics-gynecology",
    features: ["Prenatal Care", "Normal & C-Section Delivery", "Gynec Surgeries", "Infertility Treatment"],
  },
  {
    icon: Brain,
    name: "Neurology",
    category: "Specialty",
    description: "Specialized care for brain, spine, and nervous system disorders.",
    href: "/services/neurology",
    features: ["Stroke Care", "Epilepsy Treatment", "Headache Clinic", "Movement Disorders"],
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    category: "Primary Care",
    description: "Primary healthcare and internal medicine for all age groups.",
    href: "/services/general-medicine",
    features: ["Health Checkups", "Diabetes Care", "Hypertension", "Infectious Diseases"],
  },
  {
    icon: Syringe,
    name: "General Surgery",
    category: "Surgical",
    description: "Advanced surgical procedures using minimally invasive techniques.",
    href: "/services/general-surgery",
    features: ["Laparoscopic Surgery", "Hernia Repair", "Appendectomy", "Gallbladder Surgery"],
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    category: "Specialty",
    description: "Complete eye care including LASIK, cataract surgery, and retinal treatments.",
    href: "/services/ophthalmology",
    features: ["Cataract Surgery", "LASIK", "Glaucoma Treatment", "Retina Care"],
  },
  {
    icon: Activity,
    name: "Emergency Care",
    category: "Emergency",
    description: "24/7 emergency services with rapid response team and ICU backup.",
    href: "/emergency",
    features: ["24/7 Availability", "Trauma Care", "ICU Support", "Ambulance Service"],
  },
  {
    icon: Microscope,
    name: "Pathology & Lab",
    category: "Diagnostic",
    description: "State-of-the-art diagnostic laboratory with accurate and timely reports.",
    href: "/services/pathology",
    features: ["Blood Tests", "Histopathology", "Microbiology", "Biochemistry"],
  },
  {
    icon: Scan,
    name: "Radiology",
    category: "Diagnostic",
    description: "Advanced imaging services including CT, MRI, X-ray, and ultrasound.",
    href: "/services/radiology",
    features: ["CT Scan", "MRI", "Digital X-Ray", "Ultrasound"],
  },
  {
    icon: Thermometer,
    name: "Pediatrics",
    category: "Primary Care",
    description: "Specialized healthcare for infants, children, and adolescents.",
    href: "/services/pediatrics",
    features: ["Well Baby Clinic", "Vaccinations", "NICU", "Child Development"],
  },
  {
    icon: Pill,
    name: "Gastroenterology",
    category: "Specialty",
    description: "Comprehensive digestive system care and advanced endoscopic procedures.",
    href: "/services/gastroenterology",
    features: ["Endoscopy", "Colonoscopy", "Liver Care", "ERCP"],
  },
  {
    icon: Waves,
    name: "Nephrology",
    category: "Specialty",
    description: "Kidney disease management and dialysis services.",
    href: "/services/nephrology",
    features: ["Dialysis", "Kidney Transplant Support", "CKD Management", "Hypertension"],
  },
  {
    icon: Ear,
    name: "ENT",
    category: "Specialty",
    description: "Expert care for ear, nose, throat, and head & neck conditions.",
    href: "/services/ent",
    features: ["Hearing Tests", "Sinus Surgery", "Tonsillectomy", "Voice Disorders"],
  },
  {
    icon: ShieldCheck,
    name: "Dermatology",
    category: "Specialty",
    description: "Skin, hair, and nail care including cosmetic dermatology.",
    href: "/services/dermatology",
    features: ["Skin Diseases", "Hair Treatment", "Laser Therapy", "Cosmetic Procedures"],
  },
  {
    icon: FlaskConical,
    name: "Pulmonology",
    category: "Specialty",
    description: "Respiratory care including asthma, COPD, and sleep disorders.",
    href: "/services/pulmonology",
    features: ["Asthma Care", "COPD Management", "Sleep Study", "Bronchoscopy"],
  },
]

// Get unique categories
const categories = [...new Set(services.map(s => s.category))].sort()

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter services
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesName = service.name.toLowerCase().includes(query)
        const matchesDescription = service.description.toLowerCase().includes(query)
        const matchesFeatures = service.features.some(f => f.toLowerCase().includes(query))
        if (!matchesName && !matchesDescription && !matchesFeatures) return false
      }

      // Category filter
      if (selectedCategory !== "all" && service.category !== selectedCategory) {
        return false
      }

      return true
    })
  }, [searchQuery, selectedCategory])

  const hasActiveFilters = searchQuery.length > 0 || selectedCategory !== "all"

  const handleClearAll = () => {
    setSearchQuery("")
    setSelectedCategory("all")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#003366] to-[#002244]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#C78A3B] font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Comprehensive Healthcare Under One Roof
            </h1>
            <p className="text-gray-300 text-lg">
              From routine checkups to complex surgeries, our 20+ specialized departments
              offer world-class medical care with state-of-the-art facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 bg-gray-50 sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex flex-col gap-4">
              {/* Search + Filters Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1 min-w-0 sm:max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="pl-10 h-11 bg-gray-50 border-gray-200"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-11 w-full sm:w-[180px] bg-gray-50 border-gray-200">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category} ({services.filter(s => s.category === category).length})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Clear All */}
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearAll}
                    className="h-11 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                )}
              </div>

              {/* Active Filters + Results */}
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t">
                  {selectedCategory !== "all" && (
                    <Badge
                      variant="secondary"
                      className="bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20 cursor-pointer px-3 py-1.5"
                      onClick={() => setSelectedCategory("all")}
                    >
                      <span className="font-medium">Category:</span>
                      <span className="ml-1">{selectedCategory}</span>
                      <X className="h-3 w-3 ml-2" />
                    </Badge>
                  )}
                  {searchQuery && (
                    <Badge
                      variant="secondary"
                      className="bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20 cursor-pointer px-3 py-1.5"
                      onClick={() => setSearchQuery("")}
                    >
                      <span className="font-medium">Search:</span>
                      <span className="ml-1">&quot;{searchQuery}&quot;</span>
                      <X className="h-3 w-3 ml-2" />
                    </Badge>
                  )}
                  <span className="text-sm text-gray-500 ml-auto">
                    {filteredServices.length} services found
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Link key={service.name} href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-[#003366]/10 rounded-xl flex items-center justify-center group-hover:bg-[#003366] transition-colors">
                          <service.icon className="h-7 w-7 text-[#003366] group-hover:text-white transition-colors" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-xl text-[#003366] mb-2 group-hover:text-[#C78A3B] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters or search query</p>
              <Button variant="outline" onClick={handleClearAll}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003366] mb-6">
            Need Help Choosing a Service?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to guide you to the right specialist. Book a general
            consultation or contact us for assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
