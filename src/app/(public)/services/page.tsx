import { Metadata } from "next"
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
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore comprehensive healthcare services at ${siteConfig.shortName} - from cardiology to pediatrics, we offer 20+ medical specialties under one roof.`,
}

const services = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Complete heart care including ECG, Echo, stress tests, angiography, and cardiac surgeries.",
    href: "/services/cardiology",
    features: ["ECG & Echo", "Angiography", "Pacemaker Implant", "Cardiac Rehab"],
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Expert bone, joint, and spine care with advanced surgical and non-surgical treatments.",
    href: "/services/orthopedics",
    features: ["Joint Replacement", "Spine Surgery", "Sports Medicine", "Fracture Care"],
  },
  {
    icon: Baby,
    name: "Obstetrics & Gynecology",
    description: "Complete women's healthcare from pregnancy care to menopause management.",
    href: "/services/obstetrics-gynecology",
    features: ["Prenatal Care", "Normal & C-Section Delivery", "Gynec Surgeries", "Infertility Treatment"],
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Specialized care for brain, spine, and nervous system disorders.",
    href: "/services/neurology",
    features: ["Stroke Care", "Epilepsy Treatment", "Headache Clinic", "Movement Disorders"],
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    description: "Primary healthcare and internal medicine for all age groups.",
    href: "/services/general-medicine",
    features: ["Health Checkups", "Diabetes Care", "Hypertension", "Infectious Diseases"],
  },
  {
    icon: Syringe,
    name: "General Surgery",
    description: "Advanced surgical procedures using minimally invasive techniques.",
    href: "/services/general-surgery",
    features: ["Laparoscopic Surgery", "Hernia Repair", "Appendectomy", "Gallbladder Surgery"],
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Complete eye care including LASIK, cataract surgery, and retinal treatments.",
    href: "/services/ophthalmology",
    features: ["Cataract Surgery", "LASIK", "Glaucoma Treatment", "Retina Care"],
  },
  {
    icon: Activity,
    name: "Emergency Care",
    description: "24/7 emergency services with rapid response team and ICU backup.",
    href: "/emergency",
    features: ["24/7 Availability", "Trauma Care", "ICU Support", "Ambulance Service"],
  },
  {
    icon: Microscope,
    name: "Pathology & Lab",
    description: "State-of-the-art diagnostic laboratory with accurate and timely reports.",
    href: "/services/pathology",
    features: ["Blood Tests", "Histopathology", "Microbiology", "Biochemistry"],
  },
  {
    icon: Scan,
    name: "Radiology",
    description: "Advanced imaging services including CT, MRI, X-ray, and ultrasound.",
    href: "/services/radiology",
    features: ["CT Scan", "MRI", "Digital X-Ray", "Ultrasound"],
  },
  {
    icon: Thermometer,
    name: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    href: "/services/pediatrics",
    features: ["Well Baby Clinic", "Vaccinations", "NICU", "Child Development"],
  },
  {
    icon: Pill,
    name: "Gastroenterology",
    description: "Comprehensive digestive system care and advanced endoscopic procedures.",
    href: "/services/gastroenterology",
    features: ["Endoscopy", "Colonoscopy", "Liver Care", "ERCP"],
  },
  {
    icon: Waves,
    name: "Nephrology",
    description: "Kidney disease management and dialysis services.",
    href: "/services/nephrology",
    features: ["Dialysis", "Kidney Transplant Support", "CKD Management", "Hypertension"],
  },
  {
    icon: Ear,
    name: "ENT",
    description: "Expert care for ear, nose, throat, and head & neck conditions.",
    href: "/services/ent",
    features: ["Hearing Tests", "Sinus Surgery", "Tonsillectomy", "Voice Disorders"],
  },
  {
    icon: ShieldCheck,
    name: "Dermatology",
    description: "Skin, hair, and nail care including cosmetic dermatology.",
    href: "/services/dermatology",
    features: ["Skin Diseases", "Hair Treatment", "Laser Therapy", "Cosmetic Procedures"],
  },
  {
    icon: FlaskConical,
    name: "Pulmonology",
    description: "Respiratory care including asthma, COPD, and sleep disorders.",
    href: "/services/pulmonology",
    features: ["Asthma Care", "COPD Management", "Sleep Study", "Bronchoscopy"],
  },
]

export default function ServicesPage() {
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.name} href={service.href}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-[#003366]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#003366] transition-colors">
                      <service.icon className="h-7 w-7 text-[#003366] group-hover:text-white transition-colors" />
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
