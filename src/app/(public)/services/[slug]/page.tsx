import { Suspense } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  Star, 
  CheckCircle2, 
  Stethoscope,
  Phone,
  ArrowRight,
} from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getSpecialtyBySlug, getAllSpecialtySlugs } from "@/lib/specialties"
import { siteConfig } from "@/config/site"

// Real Mina Hospital doctors data (same as doctors page)
const doctors = [
  {
    id: 1,
    name: 'Dr. Soheba Shukoor',
    slug: 'dr-soheba-shukoor',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'MBBS, DGO, FMAS (WALS. USA)',
    experience: 29,
    rating: 4.9,
    reviews: 120,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/3223-1-150x150.jpg',
    available: true,
  },
  {
    id: 2,
    name: 'Dr. Hidayatullah Khan',
    slug: 'dr-hidayatullah-khan',
    specialty: 'Ophthalmology',
    qualification: 'MS Ophthalmology (Gold Medalist)',
    experience: 10,
    rating: 4.8,
    reviews: 85,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Hiday.png',
    available: true,
  },
  {
    id: 3,
    name: 'Dr. Sachin Narkhede',
    slug: 'dr-sachin-narkhede',
    specialty: 'Pediatrics & Neonatology',
    qualification: 'MBBS, DCh, FIAP (Neonatology)',
    experience: 15,
    rating: 4.9,
    reviews: 200,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Sachin-Narkhede.jpg',
    available: true,
  },
  {
    id: 4,
    name: 'Dr. P. Navanith Sagar Reddy',
    slug: 'dr-navanith-sagar-reddy',
    specialty: 'Pulmonology',
    qualification: 'Senior Pulmonologist',
    experience: 45,
    rating: 4.9,
    reviews: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5JCV2XTMxm8Rx_PGkTbHYdIBZhEPcYtf7CFYnsC__9ZGHWqy_ySAmBwBtq5dUUoE5qrJSwPDWJv0TCr_Pyq3AFqxo65aQOuCe_9RernpNjdnEUxfkTUDFA-mqSXzVXmNAOXxeI2LuiyKJfiD3qFktMhS0bes4ni4AEhcfwnhmdNp4va3sj3TnAlWroENwQ32gexb6HC_Q39I5So6_N3dXguEwD2acpd_idKKqJWspQtD2Wy1a22TqKnmT1ZOv60OHonUb10qUfpc',
    available: true,
  },
  {
    id: 5,
    name: 'Dr. D. Ramesh',
    slug: 'dr-d-ramesh',
    specialty: 'Pediatrics',
    qualification: 'Senior Pediatrician',
    experience: 47,
    rating: 4.8,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 6,
    name: 'Dr. Naseemuddin N Shaikh',
    slug: 'dr-naseemuddin-shaikh',
    specialty: 'Endocrinology',
    qualification: 'MBBS, MD, DM Endocrinology',
    experience: 20,
    rating: 4.7,
    reviews: 90,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-NASEEMUDDIN.jpg',
    available: true,
  },
  {
    id: 7,
    name: 'Dr. Hameed Parekh',
    slug: 'dr-hameed-parekh',
    specialty: 'Orthopedics',
    qualification: 'Joint Replacement & Trauma Specialist',
    experience: 23,
    rating: 4.8,
    reviews: 150,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Hameeed-Parekh.jpg',
    available: true,
  },
  {
    id: 8,
    name: 'Dr. Basith Hussain',
    slug: 'dr-basith-hussain',
    specialty: 'Ophthalmology',
    qualification: 'Eye Surgery Specialist',
    experience: 28,
    rating: 4.7,
    reviews: 110,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 9,
    name: 'Dr. Shoaib Ahmed',
    slug: 'dr-shoaib-ahmed',
    specialty: 'Cardiology',
    qualification: 'MD Cardiology',
    experience: 12,
    rating: 4.7,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 10,
    name: 'Dr. Syeda Bushra',
    slug: 'dr-syeda-bushra',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'MBBS, DGO',
    experience: 18,
    rating: 4.8,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 11,
    name: 'Dr. Khizar Raoof Mohammed',
    slug: 'dr-khizar-raoof',
    specialty: 'Urology',
    qualification: 'MBBS, MS, MCH in Urology',
    experience: 15,
    rating: 4.6,
    reviews: 75,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Khizar-Raof.jpg',
    available: true,
  },
  {
    id: 12,
    name: 'Dr. Asim',
    slug: 'dr-asim',
    specialty: 'General Surgery',
    qualification: 'MS General Surgery',
    experience: 14,
    rating: 4.8,
    reviews: 100,
    image: 'https://images.unsplash.com/photo-1594824476969-513346381849?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 13,
    name: 'Dr. Asrar',
    slug: 'dr-asrar',
    specialty: 'Anaesthesia',
    qualification: 'MD Anaesthesia',
    experience: 16,
    rating: 4.9,
    reviews: 80,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr.-Asrar-2-qken33rfiuimann0nve4gdxjzxpoqzyy67x9mtrgdo.jpg',
    available: true,
  },
  {
    id: 14,
    name: 'Dr. Ayesha Nazneen',
    slug: 'dr-ayesha-nazneen',
    specialty: 'Dental Surgery',
    qualification: 'BDS, FCE, MHA, PGDFC',
    experience: 10,
    rating: 4.8,
    reviews: 95,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr-Ayesha-Nazneen-qkdkxeinja0uub0m42yeh1aajsifjegzz13coyk9t8.jpg',
    available: true,
  },
  {
    id: 15,
    name: 'Dr. B Sushmitha Reddy',
    slug: 'dr-sushmitha-reddy',
    specialty: 'Dermatology',
    qualification: 'M.B.B.S, MD DVL',
    experience: 11,
    rating: 4.7,
    reviews: 110,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr-Sushmita_1-1.jpg',
    available: true,
  },
  {
    id: 16,
    name: 'Dr. Syed Mohd. Azhar Hassan',
    slug: 'dr-azhar-hassan',
    specialty: 'Nephrology',
    qualification: 'M.B.B.S, MD, DM (Nephrology)',
    experience: 17,
    rating: 4.9,
    reviews: 88,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Syed-Mohd.-Azhar-Hassan.jpg',
    available: true,
  },
  {
    id: 17,
    name: 'Dr. FAHAD',
    slug: 'dr-fahad',
    specialty: 'Pulmonology',
    qualification: 'MD, Pulmonology',
    experience: 15,
    rating: 4.8,
    reviews: 92,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-FAHAD.jpg',
    available: true,
  },
  {
    id: 18,
    name: 'Dr. Nikitha Shirine Todeti',
    slug: 'dr-nikitha-todeti',
    specialty: 'General Medicine',
    qualification: 'M.B.B.S, M.D, General Medicine',
    experience: 8,
    rating: 4.8,
    reviews: 105,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.Nikitha-Shirine-Todeti.jpeg',
    available: true,
  },
  {
    id: 19,
    name: 'Dr. Zeeshan',
    slug: 'dr-zeeshan',
    specialty: 'Gastroenterology',
    qualification: 'MBBS. MD, DM (Gastroenterology)',
    experience: 9,
    rating: 4.9,
    reviews: 78,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-ZEESHAN-1.jpeg',
    available: true,
  },
  {
    id: 20,
    name: 'Dr. Mohd Hameed Shareef',
    slug: 'dr-hameed-shareef',
    specialty: 'Neurosurgery',
    qualification: 'Consultant Neuro Surgeon',
    experience: 20,
    rating: 4.9,
    reviews: 130,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Mohd-Hameed-Shareef.jpg',
    available: true,
  },
  {
    id: 21,
    name: 'Dr. Mir Zia Ur Rahman Ali',
    slug: 'dr-zia-rahman',
    specialty: 'Orthopedics',
    qualification: 'Joint Replacement Surgeon',
    experience: 22,
    rating: 4.8,
    reviews: 115,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/zia-2.jpg',
    available: true,
  },
  {
    id: 22,
    name: 'Dr. Ahmed Abdul Khabeer',
    slug: 'dr-abdul-khabeer',
    specialty: 'ENT',
    qualification: 'MBBS, MS, ENT Specialist',
    experience: 18,
    rating: 4.9,
    reviews: 142,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr.-Ahmed-Abdul-Khabir-qk4jmj2rfapyf9ppdzqhc8f1apwzfr477l746ee3sc.jpeg',
    available: true,
  },
  {
    id: 23,
    name: 'Dr. Md. Zia Ul Haq',
    slug: 'dr-zia-ul-haq',
    specialty: 'Cardiology',
    qualification: 'MD, DNB (Cardiology)',
    experience: 14,
    rating: 4.9,
    reviews: 125,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/zia.jpg',
    available: true,
  },
  {
    id: 24,
    name: 'Dr. Syed Mukarrumuddin Hussain',
    slug: 'dr-mukarrumuddin',
    specialty: 'Ophthalmology',
    qualification: 'MBBS, M.D. (Ophthal)',
    experience: 25,
    rating: 4.7,
    reviews: 118,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Mukaram.jpg',
    available: true,
  },
  {
    id: 25,
    name: 'Dr. Syed Sayeeduddin',
    slug: 'dr-sayeeduddin',
    specialty: 'General Surgery',
    qualification: 'MBBS, MS, General Surgery',
    experience: 30,
    rating: 4.9,
    reviews: 210,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Syed-Sayeeduddin.jpg',
    available: true,
  },
  {
    id: 26,
    name: 'Dr. Syed Musaab Mohiuddin',
    slug: 'dr-musaab',
    specialty: 'Ophthalmology',
    qualification: 'FRCS, MRCS, FICO',
    experience: 15,
    rating: 4.9,
    reviews: 98,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Musaab.jpg',
    available: true,
  },
  {
    id: 27,
    name: 'Dr. NARESH',
    slug: 'dr-naresh',
    specialty: 'Pediatrics',
    qualification: 'Pediatric Specialist',
    experience: 12,
    rating: 4.7,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 28,
    name: 'Dr. SAGAR',
    slug: 'dr-sagar',
    specialty: 'Pulmonology',
    qualification: 'Pulmonologist',
    experience: 11,
    rating: 4.8,
    reviews: 72,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 29,
    name: 'Dr. SHAIZAD',
    slug: 'dr-shaizad',
    specialty: 'ENT',
    qualification: 'ENT Surgeon',
    experience: 13,
    rating: 4.7,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1594824476969-513346381849?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 30,
    name: 'Dr. SHOAIB',
    slug: 'dr-shoaib',
    specialty: 'Cardiac Surgery',
    qualification: 'Cardiac Specialist',
    experience: 16,
    rating: 4.8,
    reviews: 81,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 31,
    name: 'Dr. SIDDIQUA',
    slug: 'dr-siddiqua',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'Obs & Gynae Consultant',
    experience: 14,
    rating: 4.7,
    reviews: 77,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 32,
    name: 'Dr. TAJAMUL',
    slug: 'dr-tajamul',
    specialty: 'Pediatrics',
    qualification: 'Senior Pediatrician',
    experience: 19,
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 33,
    name: 'Dr. VIDYASRI',
    slug: 'dr-vidyasri',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'Obs & Gynae Expert',
    experience: 10,
    rating: 4.8,
    reviews: 66,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
  {
    id: 34,
    name: 'Dr. ZUHAIR',
    slug: 'dr-zuhair',
    specialty: 'Orthopedics',
    qualification: 'Orthopedic Surgeon',
    experience: 12,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=350',
    available: true,
  },
]

// Generate static params for all specialty pages
export async function generateStaticParams() {
  return getAllSpecialtySlugs().map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const specialty = getSpecialtyBySlug(slug)
  
  if (!specialty) {
    return { title: "Specialty Not Found" }
  }

  return {
    title: `${specialty.name} Department | MINA Hospitals`,
    description: specialty.fullDescription.slice(0, 160),
    openGraph: {
      title: `${specialty.name} - MINA Super & Multi Speciality Hospitals`,
      description: specialty.shortDescription,
    },
  }
}

export default async function SpecialtyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const specialty = getSpecialtyBySlug(slug)

  if (!specialty) {
    notFound()
  }

  // Filter doctors by specialty
  const specialtyDoctors = doctors.filter((doctor) =>
    specialty.doctorSpecialties.some((s) => 
      doctor.specialty.toLowerCase().includes(s.toLowerCase()) ||
      s.toLowerCase().includes(doctor.specialty.toLowerCase())
    )
  )

  const IconComponent = specialty.icon

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#6682a3] to-[#4a6382]">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            href="/services"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className={`w-20 h-20 rounded-2xl ${specialty.color} flex items-center justify-center shrink-0`}>
              <IconComponent className="h-10 w-10" />
            </div>
            <div>
              <span className="text-[#f4b942] font-semibold text-sm uppercase tracking-wider">
                Department
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                {specialty.name}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                {specialty.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#6682a3] mb-6">
                About Our {specialty.name} Department
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {specialty.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href={`/book-appointment?specialty=${encodeURIComponent(specialty.doctorSpecialties[0] || specialty.name)}`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-semibold text-xl text-[#6682a3] mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {specialty.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      {specialtyDoctors.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#6682a3] mb-4">
                Our {specialty.name} Specialists
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet our experienced team of specialists dedicated to providing the best care in {specialty.name.toLowerCase()}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {specialtyDoctors.slice(0, 8).map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden group hover:shadow-lg transition-shadow bg-white">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={doctor.available ? "success" : "secondary"}
                        className="shadow"
                      >
                        {doctor.available ? "Available" : "Unavailable"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="gold" className="mb-2">
                      {doctor.specialty}
                    </Badge>
                    <h3 className="font-semibold text-lg text-[#6682a3]">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{doctor.qualification}</p>
                    <p className="text-gray-600 text-sm mb-3">
                      {doctor.experience} years experience
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{doctor.rating}</span>
                      <span className="text-gray-400 text-sm">({doctor.reviews})</span>
                    </div>
                    <Button
                      className="w-full"
                      size="sm"
                      disabled={!doctor.available}
                      asChild={doctor.available}
                    >
                      {doctor.available ? (
                        <Link href={`/book-appointment?doctor=${doctor.id}`}>
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Appointment
                        </Link>
                      ) : (
                        <>
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Appointment
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {specialtyDoctors.length > 8 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link href={`/doctors?specialty=${encodeURIComponent(specialty.doctorSpecialties[0])}`}>
                    View All {specialty.name} Doctors
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Procedures Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#6682a3] mb-8 text-center">
            Services & Procedures
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {specialty.procedures.map((procedure, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${specialty.color} flex items-center justify-center shrink-0`}>
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-gray-800">{procedure}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Doctors Message for Diagnostic Departments */}
      {specialtyDoctors.length === 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-xl mx-auto">
              <div className={`w-16 h-16 rounded-full ${specialty.color} flex items-center justify-center mx-auto mb-6`}>
                <IconComponent className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#6682a3] mb-4">
                {specialty.name} Services
              </h2>
              <p className="text-gray-600 mb-8">
                Our {specialty.name.toLowerCase()} services are available through our central facilities. 
                For more information or to schedule a service, please contact us or book an appointment.
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
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6682a3] to-[#4a6382]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Expert {specialty.name} Care?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Book an appointment with our specialists today and take the first step towards better health.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href={`/book-appointment?specialty=${encodeURIComponent(specialty.doctorSpecialties[0] || specialty.name)}`}>
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s/g, "")}`}>
                <Phone className="h-4 w-4 mr-2" />
                Emergency: {siteConfig.contact.emergencyPhone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
