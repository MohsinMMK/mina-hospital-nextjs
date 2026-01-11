"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Calendar, Star, User, Briefcase, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DoctorImage } from "@/components/ui/doctor-image"
import { FilterBar, FilterConfig } from "@/components/shared/filter-bar"
import { siteConfig } from "@/config/site"

// Real Mina Hospital doctors data
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
    languages: ['English', 'Hindi', 'Urdu'],
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
    languages: ['English', 'Hindi', 'Urdu'],
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
    languages: ['English', 'Hindi', 'Marathi'],
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
    image: '',
    languages: ['English', 'Hindi', 'Telugu'],
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
    image: '',
    languages: ['English', 'Hindi', 'Telugu'],
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
    languages: ['English', 'Hindi', 'Urdu'],
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
    languages: ['English', 'Hindi', 'Urdu'],
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
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
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
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
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
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
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
    languages: ['English', 'Hindi', 'Urdu'],
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
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
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
    languages: ['English', 'Hindi', 'Urdu'],
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
    languages: ['English', 'Hindi', 'Urdu'],
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
    languages: ['English', 'Hindi', 'Telugu'],
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
    languages: ['English', 'Hindi', 'Urdu'],
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
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 18,
    name: 'Dr. Mohammed Moiz Uddin Ansari',
    slug: 'dr-moiz-ansari',
    specialty: 'Physiotherapy',
    qualification: 'Senior Physiotherapist',
    experience: 12,
    rating: 4.7,
    reviews: 65,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/moiz.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 19,
    name: 'Dr. Nikitha Shirine Todeti',
    slug: 'dr-nikitha-todeti',
    specialty: 'General Medicine',
    qualification: 'M.B.B.S, M.D, General Medicine',
    experience: 8,
    rating: 4.8,
    reviews: 105,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.Nikitha-Shirine-Todeti.jpeg',
    languages: ['English', 'Hindi', 'Telugu'],
    available: true,
  },
  {
    id: 20,
    name: 'Dr. Zeeshan',
    slug: 'dr-zeeshan',
    specialty: 'Gastroenterology',
    qualification: 'MBBS. MD, DM (Gastroenterology)',
    experience: 9,
    rating: 4.9,
    reviews: 78,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-ZEESHAN-1.jpeg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 21,
    name: 'Dr. Mohd Hameed Shareef',
    slug: 'dr-hameed-shareef',
    specialty: 'Neurosurgery',
    qualification: 'Consultant Neuro Surgeon',
    experience: 20,
    rating: 4.9,
    reviews: 130,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Mohd-Hameed-Shareef.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 22,
    name: 'Dr. Mohammed Nawar',
    slug: 'dr-mohammed-nawar',
    specialty: 'Dental Surgery',
    qualification: 'Dental Surgeon',
    experience: 12,
    rating: 4.7,
    reviews: 84,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Mohammed-Nawar.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 23,
    name: 'Dr. Mir Zia Ur Rahman Ali',
    slug: 'dr-zia-rahman',
    specialty: 'Orthopedics',
    qualification: 'Joint Replacement Surgeon',
    experience: 22,
    rating: 4.8,
    reviews: 115,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/zia-2.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 24,
    name: 'Dr. Ahmed Abdul Khabeer',
    slug: 'dr-abdul-khabeer',
    specialty: 'ENT',
    qualification: 'MBBS, MS, ENT Specialist',
    experience: 18,
    rating: 4.9,
    reviews: 142,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr.-Ahmed-Abdul-Khabir-qk4jmj2rfapyf9ppdzqhc8f1apwzfr477l746ee3sc.jpeg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 25,
    name: 'Dr. Revanth',
    slug: 'dr-revanth',
    specialty: 'Emergency Medicine',
    qualification: 'MBBS, MD Emergency Medicine',
    experience: 10,
    rating: 4.8,
    reviews: 160,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-REVANTH.jpg',
    languages: ['English', 'Hindi', 'Telugu'],
    available: true,
  },
  {
    id: 26,
    name: 'Dr. Md. Zia Ul Haq',
    slug: 'dr-zia-ul-haq',
    specialty: 'Cardiology',
    qualification: 'MD, DNB (Cardiology)',
    experience: 14,
    rating: 4.9,
    reviews: 125,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/zia.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 27,
    name: 'Dr. Syed Mukarrumuddin Hussain',
    slug: 'dr-mukarrumuddin',
    specialty: 'Ophthalmology',
    qualification: 'MBBS, M.D. (Ophthal)',
    experience: 25,
    rating: 4.7,
    reviews: 118,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Mukaram.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 28,
    name: 'Dr. Syed Sayeeduddin',
    slug: 'dr-sayeeduddin',
    specialty: 'General Surgery',
    qualification: 'MBBS, MS, General Surgery',
    experience: 30,
    rating: 4.9,
    reviews: 210,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Syed-Sayeeduddin.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 29,
    name: 'Dr. Syed Musaab Mohiuddin',
    slug: 'dr-musaab',
    specialty: 'Ophthalmology',
    qualification: 'FRCS, MRCS, FICO',
    experience: 15,
    rating: 4.9,
    reviews: 98,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Musaab.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 30,
    name: 'Rafiya',
    slug: 'rafiya',
    specialty: 'Dietetics',
    qualification: 'Msc Nutrition and Dietetics',
    experience: 8,
    rating: 4.8,
    reviews: 55,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Rafiya.jpg',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 31,
    name: 'Dr. NARESH',
    slug: 'dr-naresh',
    specialty: 'Pediatrics',
    qualification: 'Pediatric Specialist',
    experience: 12,
    rating: 4.7,
    reviews: 88,
    image: '',
    languages: ['English', 'Hindi', 'Telugu'],
    available: true,
  },
  {
    id: 32,
    name: 'Dr. SAGAR',
    slug: 'dr-sagar',
    specialty: 'Pulmonology',
    qualification: 'Pulmonologist',
    experience: 11,
    rating: 4.8,
    reviews: 72,
    image: '',
    languages: ['English', 'Hindi', 'Telugu'],
    available: true,
  },
  {
    id: 33,
    name: 'Dr. SHAIZAD',
    slug: 'dr-shaizad',
    specialty: 'ENT',
    qualification: 'ENT Surgeon',
    experience: 13,
    rating: 4.7,
    reviews: 64,
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 34,
    name: 'Dr. SHOAIB',
    slug: 'dr-shoaib',
    specialty: 'Cardiac Surgery',
    qualification: 'Cardiac Specialist',
    experience: 16,
    rating: 4.8,
    reviews: 81,
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 35,
    name: 'Dr. SIDDIQUA',
    slug: 'dr-siddiqua',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'Obs & Gynae Consultant',
    experience: 14,
    rating: 4.7,
    reviews: 77,
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 36,
    name: 'Dr. TAJAMUL',
    slug: 'dr-tajamul',
    specialty: 'Pediatrics',
    qualification: 'Senior Pediatrician',
    experience: 19,
    rating: 4.9,
    reviews: 112,
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 37,
    name: 'Dr. VIDYASRI',
    slug: 'dr-vidyasri',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'Obs & Gynae Expert',
    experience: 10,
    rating: 4.8,
    reviews: 66,
    image: '',
    languages: ['English', 'Hindi', 'Telugu'],
    available: true,
  },
  {
    id: 38,
    name: 'Dr. ZUHAIR',
    slug: 'dr-zuhair',
    specialty: 'Orthopedics',
    qualification: 'Orthopedic Surgeon',
    experience: 12,
    rating: 4.8,
    reviews: 89,
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
  {
    id: 39,
    name: 'Dr. AFTAB ALI KHAN',
    slug: 'dr-aftab-khan',
    specialty: 'Psychiatry',
    qualification: 'MBBS, DPM, Psychiatry',
    experience: 24,
    rating: 4.9,
    reviews: 145,
    image: '',
    languages: ['English', 'Hindi', 'Urdu'],
    available: true,
  },
]

// Get unique values for filters
const specialties = [...new Set(doctors.map(d => d.specialty))].sort()
const languages = [...new Set(doctors.flatMap(d => d.languages))].sort()

// Experience ranges
const experienceRanges = [
  { value: "0-10", label: "0-10 years", min: 0, max: 10 },
  { value: "10-20", label: "10-20 years", min: 10, max: 20 },
  { value: "20-30", label: "20-30 years", min: 20, max: 30 },
  { value: "30+", label: "30+ years", min: 30, max: 100 },
]

function DoctorsContent() {
  const searchParams = useSearchParams()
  const specialtyParam = searchParams.get("specialty")

  const [searchQuery, setSearchQuery] = useState("")
  const [filterValues, setFilterValues] = useState<Record<string, string>>({
    specialty: "all",
    experience: "all",
    language: "all",
  })

  // Pre-set specialty filter from URL params (when coming from services page)
  useEffect(() => {
    if (specialtyParam && specialties.includes(specialtyParam)) {
      setFilterValues(prev => ({ ...prev, specialty: specialtyParam }))
    }
  }, [specialtyParam])

  // Filter configurations
  const filterConfigs: FilterConfig[] = useMemo(() => [
    {
      id: "specialty",
      label: "Specialty",
      icon: <User className="h-4 w-4" />,
      placeholder: "All Specialties",
      options: specialties.map(s => ({
        value: s,
        label: s,
        count: doctors.filter(d => d.specialty === s).length,
      })),
    },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase className="h-4 w-4" />,
      placeholder: "All Experience",
      options: experienceRanges.map(r => ({
        value: r.value,
        label: r.label,
        count: doctors.filter(d => d.experience >= r.min && d.experience < r.max).length,
      })),
    },
    {
      id: "language",
      label: "Language",
      icon: <Globe className="h-4 w-4" />,
      placeholder: "All Languages",
      options: languages.map(l => ({
        value: l,
        label: l,
        count: doctors.filter(d => d.languages.includes(l)).length,
      })),
    },
  ], [])

  // Filter doctors based on all criteria
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesName = doctor.name.toLowerCase().includes(query)
        const matchesSpecialty = doctor.specialty.toLowerCase().includes(query)
        if (!matchesName && !matchesSpecialty) return false
      }

      // Specialty filter
      if (filterValues.specialty && filterValues.specialty !== "all") {
        if (doctor.specialty !== filterValues.specialty) return false
      }

      // Experience filter
      if (filterValues.experience && filterValues.experience !== "all") {
        const range = experienceRanges.find(r => r.value === filterValues.experience)
        if (range && (doctor.experience < range.min || doctor.experience >= range.max)) {
          return false
        }
      }

      // Language filter
      if (filterValues.language && filterValues.language !== "all") {
        if (!doctor.languages.includes(filterValues.language)) return false
      }

      return true
    })
  }, [searchQuery, filterValues])

  const handleFilterChange = (filterId: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [filterId]: value }))
  }

  const handleClearAll = () => {
    setSearchQuery("")
    setFilterValues({
      specialty: "all",
      experience: "all",
      language: "all",
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2853aa] to-[#1e3f7d]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#f4b942] font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Meet Our Expert Doctors
            </h1>
            <p className="text-gray-300 text-lg">
              Our team of 50+ highly qualified specialists are committed to providing
              you with the best medical care. Find the right doctor for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 bg-gray-50 sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <FilterBar
            filters={filterConfigs}
            values={filterValues}
            onFilterChange={handleFilterChange}
            onClearAll={handleClearAll}
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="Search doctors by name or specialty..."
            resultsCount={filteredDoctors.length}
            resultsLabel="doctors found"
          />
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredDoctors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square overflow-hidden">
                    <DoctorImage
                      src={doctor.image}
                      alt={doctor.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {!doctor.available && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-medium bg-black/70 px-3 py-1 rounded-full text-sm">
                          Currently Unavailable
                        </span>
                      </div>
                    )}
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
                    <h3 className="font-semibold text-lg text-[#2853aa]">
                      <Link
                        href={`/doctors/${doctor.slug}`}
                        className="hover:text-[#f4b942] transition-colors"
                      >
                        {doctor.name}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{doctor.qualification}</p>
                    <p className="text-gray-600 text-sm mb-3">
                      {doctor.experience} years experience
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-sm">{doctor.rating}</span>
                        <span className="text-gray-400 text-sm">({doctor.reviews})</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {doctor.languages.join(", ")}
                      </span>
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
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2853aa] mb-6">
            Can&apos;t Find the Right Doctor?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us and our patient care team will help you find the most suitable
            specialist for your healthcare needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                Call Us: {siteConfig.contact.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Send Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function DoctorsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2853aa] mx-auto mb-4"></div>
          <p className="text-gray-500">Loading doctors...</p>
        </div>
      </div>
    }>
      <DoctorsContent />
    </Suspense>
  )
}
