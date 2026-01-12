"use client"

import { useState, useEffect, Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, CheckCircle, ArrowLeft, ArrowRight, Star, Globe, Search, X, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DoctorImage } from "@/components/ui/doctor-image"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CartoonButton } from "@/components/ui/cartoon-button"
import { siteConfig } from "@/config/site"

// Unified doctor data for consistency across pages
const doctors = [
  {
    id: 1,
    name: 'Dr. Soheba Shukoor',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'MBBS, DGO, FMAS (WALS. USA)',
    experience: 29,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/3223-1-150x150.jpg',
  },
  {
    id: 2,
    name: 'Dr. Hidayatullah Khan',
    specialty: 'Ophthalmology',
    qualification: 'MS Ophthalmology (Gold Medalist)',
    experience: 10,
    rating: 4.8,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Hiday.png',
  },
  {
    id: 3,
    name: 'Dr. Sachin Narkhede',
    specialty: 'Pediatrics & Neonatology',
    qualification: 'MBBS, DCh, FIAP (Neonatology)',
    experience: 15,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Sachin-Narkhede.jpg',
  },
  {
    id: 4,
    name: 'Dr. P. Navanith Sagar Reddy',
    specialty: 'Pulmonology',
    qualification: 'Senior Pulmonologist',
    experience: 45,
    rating: 4.9,
    image: '',
  },
  {
    id: 5,
    name: 'Dr. D. Ramesh',
    specialty: 'Pediatrics',
    qualification: 'Senior Pediatrician',
    experience: 47,
    rating: 4.8,
    image: '',
  },
  {
    id: 6,
    name: 'Dr. Naseemuddin N Shaikh',
    specialty: 'Endocrinology',
    qualification: 'MBBS, MD, DM Endocrinology',
    experience: 20,
    rating: 4.7,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-NASEEMUDDIN.jpg',
  },
  {
    id: 7,
    name: 'Dr. Hameed Parekh',
    specialty: 'Orthopedics',
    qualification: 'Joint Replacement & Trauma Specialist',
    experience: 23,
    rating: 4.8,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Hameeed-Parekh.jpg',
  },
  {
    id: 8,
    name: 'Dr. Basith Hussain',
    specialty: 'Ophthalmology',
    qualification: 'Eye Surgery Specialist',
    experience: 28,
    rating: 4.7,
    image: '',
  },
  {
    id: 9,
    name: 'Dr. Shoaib Ahmed',
    specialty: 'Cardiology',
    qualification: 'MD Cardiology',
    experience: 12,
    rating: 4.7,
    image: '',
  },
  {
    id: 10,
    name: 'Dr. Syeda Bushra',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'MBBS, DGO',
    experience: 18,
    rating: 4.8,
    image: '',
  },
  {
    id: 11,
    name: 'Dr. Khizar Raoof Mohammed',
    specialty: 'Urology',
    qualification: 'MBBS, MS, MCH in Urology',
    experience: 15,
    rating: 4.6,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Khizar-Raof.jpg',
  },
  {
    id: 12,
    name: 'Dr. Asim',
    specialty: 'General Surgery',
    qualification: 'MS General Surgery',
    experience: 14,
    rating: 4.8,
    image: '',
  },
  {
    id: 13,
    name: 'Dr. Asrar',
    specialty: 'Anaesthesia',
    qualification: 'MD Anaesthesia',
    experience: 16,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr.-Asrar-2-qken33rfiuimann0nve4gdxjzxpoqzyy67x9mtrgdo.jpg',
  },
  {
    id: 14,
    name: 'Dr. Ayesha Nazneen',
    specialty: 'Dental Surgery',
    qualification: 'BDS, FCE, MHA, PGDFC',
    experience: 10,
    rating: 4.8,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr-Ayesha-Nazneen-qkdkxeinja0uub0m42yeh1aajsifjegzz13coyk9t8.jpg',
  },
  {
    id: 15,
    name: 'Dr. B Sushmitha Reddy',
    specialty: 'Dermatology',
    qualification: 'M.B.B.S, MD DVL',
    experience: 11,
    rating: 4.7,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr-Sushmita_1-1.jpg',
  },
  {
    id: 16,
    name: 'Dr. Syed Mohd. Azhar Hassan',
    specialty: 'Nephrology',
    qualification: 'M.B.B.S, MD, DM (Nephrology)',
    experience: 17,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Syed-Mohd.-Azhar-Hassan.jpg',
  },
  {
    id: 17,
    name: 'Dr. FAHAD',
    specialty: 'Pulmonology',
    qualification: 'MD, Pulmonology',
    experience: 15,
    rating: 4.8,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-FAHAD.jpg',
  },
  {
    id: 18,
    name: 'Dr. Mohammed Moiz Uddin Ansari',
    specialty: 'Physiotherapy',
    qualification: 'Senior Physiotherapist',
    experience: 12,
    rating: 4.7,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/moiz.jpg',
  },
  {
    id: 19,
    name: 'Dr. Nikitha Shirine Todeti',
    specialty: 'General Medicine',
    qualification: 'M.B.B.S, M.D, General Medicine',
    experience: 8,
    rating: 4.8,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.Nikitha-Shirine-Todeti.jpeg',
  },
  {
    id: 20,
    name: 'Dr. Zeeshan',
    specialty: 'Gastroenterology',
    qualification: 'MBBS. MD, DM (Gastroenterology)',
    experience: 9,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-ZEESHAN-1.jpeg',
  },
  {
    id: 21,
    name: 'Dr. Mohd Hameed Shareef',
    specialty: 'Neurosurgery',
    qualification: 'Consultant Neuro Surgeon',
    experience: 20,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Mohd-Hameed-Shareef.jpg',
  },
  {
    id: 22,
    name: 'Dr. Mohammed Nawar',
    specialty: 'Dental Surgery',
    qualification: 'Dental Surgeon',
    experience: 12,
    rating: 4.7,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Mohammed-Nawar.jpg',
  },
  {
    id: 23,
    name: 'Dr. Mir Zia Ur Rahman Ali',
    specialty: 'Orthopedics',
    qualification: 'Joint Replacement Surgeon',
    experience: 22,
    rating: 4.8,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/zia-2.jpg',
  },
  {
    id: 24,
    name: 'Dr. Ahmed Abdul Khabeer',
    specialty: 'ENT',
    qualification: 'MBBS, MS, ENT Specialist',
    experience: 18,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr.-Ahmed-Abdul-Khabir-qk4jmj2rfapyf9ppdzqhc8f1apwzfr477l746ee3sc.jpeg',
  },
  {
    id: 25,
    name: 'Dr. Revanth',
    specialty: 'Emergency Medicine',
    qualification: 'MBBS, MD Emergency Medicine',
    experience: 10,
    rating: 4.8,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-REVANTH.jpg',
  },
  {
    id: 26,
    name: 'Dr. Md. Zia Ul Haq',
    specialty: 'Cardiology',
    qualification: 'MD, DNB (Cardiology)',
    experience: 14,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/zia.jpg',
  },
  {
    id: 27,
    name: 'Dr. Syed Mukarrumuddin Hussain',
    specialty: 'Ophthalmology',
    qualification: 'MBBS, M.D. (Ophthal)',
    experience: 25,
    rating: 4.7,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Mukaram.jpg',
  },
  {
    id: 28,
    name: 'Dr. Syed Sayeeduddin',
    specialty: 'General Surgery',
    qualification: 'MBBS, MS, General Surgery',
    experience: 30,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Syed-Sayeeduddin.jpg',
  },
  {
    id: 29,
    name: 'Dr. Syed Musaab Mohiuddin',
    specialty: 'Ophthalmology',
    qualification: 'FRCS, MRCS, FICO',
    experience: 15,
    rating: 4.9,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Musaab.jpg',
  },
  {
    id: 30,
    name: 'Rafiya',
    specialty: 'Dietetics',
    qualification: 'Msc Nutrition and Dietetics',
    experience: 8,
    rating: 4.8,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Rafiya.jpg',
  },
  {
    id: 31,
    name: 'Dr. NARESH',
    specialty: 'Pediatrics',
    qualification: 'Pediatric Specialist',
    experience: 12,
    rating: 4.7,
    image: '',
  },
  {
    id: 32,
    name: 'Dr. SAGAR',
    specialty: 'Pulmonology',
    qualification: 'Pulmonologist',
    experience: 11,
    rating: 4.8,
    image: '',
  },
  {
    id: 33,
    name: 'Dr. SHAIZAD',
    specialty: 'ENT',
    qualification: 'ENT Surgeon',
    experience: 13,
    rating: 4.7,
    image: '',
  },
  {
    id: 34,
    name: 'Dr. SHOAIB',
    specialty: 'Cardiac Surgery',
    qualification: 'Cardiac Specialist',
    experience: 16,
    rating: 4.8,
    image: '',
  },
  {
    id: 35,
    name: 'Dr. SIDDIQUA',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'Obs & Gynae Consultant',
    experience: 14,
    rating: 4.7,
    image: '',
  },
  {
    id: 36,
    name: 'Dr. TAJAMUL',
    specialty: 'Pediatrics',
    qualification: 'Senior Pediatrician',
    experience: 19,
    rating: 4.9,
    image: '',
  },
  {
    id: 37,
    name: 'Dr. VIDYASRI',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'Obs & Gynae Expert',
    experience: 10,
    rating: 4.8,
    image: '',
  },
  {
    id: 38,
    name: 'Dr. ZUHAIR',
    specialty: 'Orthopedics',
    qualification: 'Orthopedic Surgeon',
    experience: 12,
    rating: 4.8,
    image: '',
  },
  {
    id: 39,
    name: 'Dr. AFTAB ALI KHAN',
    specialty: 'Psychiatry',
    qualification: 'MBBS, DPM, Psychiatry',
    experience: 24,
    rating: 4.9,
    image: '',
  },
]

// Get unique specialties for filter
const specialties = [...new Set(doctors.map(d => d.specialty))].sort()

// Experience ranges
const experienceRanges = [
  { value: "0-10", label: "0-10 yrs", min: 0, max: 10 },
  { value: "10-20", label: "10-20 yrs", min: 10, max: 20 },
  { value: "20+", label: "20+ yrs", min: 20, max: 100 },
]

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM"
]

function BookAppointmentContent() {
  const searchParams = useSearchParams()
  const doctorIdParam = searchParams.get("doctor")
  const specialtyParam = searchParams.get("specialty")

  const [step, setStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState("")
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [selectedExperience, setSelectedExperience] = useState("all")

  // Pre-select doctor if coming from doctors page, or preset specialty filter
  useEffect(() => {
    if (doctorIdParam) {
      const doctorId = parseInt(doctorIdParam)
      const foundDoctor = doctors.find(d => d.id === doctorId)
      if (foundDoctor) {
        setSelectedDoctor(foundDoctor)
        setStep(2) // Skip to date/time selection
      }
    } else if (specialtyParam) {
      // Pre-filter by specialty when coming from specialty pages
      // Match specialty from URL to available specialties (case-insensitive, partial match)
      const matchedSpecialty = specialties.find(
        s => s.toLowerCase() === specialtyParam.toLowerCase() ||
             s.toLowerCase().includes(specialtyParam.toLowerCase()) ||
             specialtyParam.toLowerCase().includes(s.toLowerCase())
      )
      if (matchedSpecialty) {
        setSelectedSpecialty(matchedSpecialty)
      }
    }
  }, [doctorIdParam, specialtyParam])

  const doctor = selectedDoctor

  // Filter doctors based on all criteria
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesName = doc.name.toLowerCase().includes(query)
        const matchesSpecialty = doc.specialty.toLowerCase().includes(query)
        if (!matchesName && !matchesSpecialty) return false
      }

      // Specialty filter
      if (selectedSpecialty !== "all" && doc.specialty !== selectedSpecialty) {
        return false
      }

      // Experience filter
      if (selectedExperience !== "all") {
        const range = experienceRanges.find(r => r.value === selectedExperience)
        if (range && (doc.experience < range.min || doc.experience >= range.max)) {
          return false
        }
      }

      return true
    })
  }, [searchQuery, selectedSpecialty, selectedExperience])

  const hasActiveFilters = searchQuery.length > 0 || selectedSpecialty !== "all" || selectedExperience !== "all"

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedSpecialty("all")
    setSelectedExperience("all")
  }

  // Disable past dates and weekends
  const disabledDays = [
    { before: new Date() },
    { dayOfWeek: [0] }, // Sunday
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cal.com-inspired Booking Interface */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">

        {/* Step 1: Select Doctor */}
        {step === 1 && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Book an Appointment
              </h1>
              <p className="text-gray-500">
                Select a doctor to schedule your visit
              </p>
            </div>

            {/* Filter Bar */}
            <div className="bg-white border rounded-xl p-4 shadow-sm mb-6">
              <div className="flex flex-col gap-4">
                {/* Search + Filters Row */}
                <div className="flex flex-col lg:flex-row gap-3">
                  {/* Search Input */}
                  <div className="relative flex-1 min-w-0 lg:max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search doctors..."
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

                  {/* Specialty Filter */}
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger className="h-11 w-full lg:w-[200px] bg-gray-50 border-gray-200">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <SelectValue placeholder="Specialty" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      {specialties.map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Experience Filter */}
                  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                    <SelectTrigger className="h-11 w-full lg:w-[160px] bg-gray-50 border-gray-200">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-gray-500" />
                        <SelectValue placeholder="Experience" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Experience</SelectItem>
                      {experienceRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearFilters}
                      className="h-11 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Active Filters + Count */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t">
                    {selectedSpecialty !== "all" && (
                      <Badge
                        variant="secondary"
                        className="bg-[#2853aa]/10 text-[#2853aa] hover:bg-[#2853aa]/20 cursor-pointer px-3 py-1.5"
                        onClick={() => setSelectedSpecialty("all")}
                      >
                        <span className="font-medium">Specialty:</span>
                        <span className="ml-1">{selectedSpecialty}</span>
                        <X className="h-3 w-3 ml-2" />
                      </Badge>
                    )}
                    {selectedExperience !== "all" && (
                      <Badge
                        variant="secondary"
                        className="bg-[#2853aa]/10 text-[#2853aa] hover:bg-[#2853aa]/20 cursor-pointer px-3 py-1.5"
                        onClick={() => setSelectedExperience("all")}
                      >
                        <span className="font-medium">Experience:</span>
                        <span className="ml-1">{experienceRanges.find(r => r.value === selectedExperience)?.label}</span>
                        <X className="h-3 w-3 ml-2" />
                      </Badge>
                    )}
                    {searchQuery && (
                      <Badge
                        variant="secondary"
                        className="bg-[#2853aa]/10 text-[#2853aa] hover:bg-[#2853aa]/20 cursor-pointer px-3 py-1.5"
                        onClick={() => setSearchQuery("")}
                      >
                        <span className="font-medium">Search:</span>
                        <span className="ml-1">&quot;{searchQuery}&quot;</span>
                        <X className="h-3 w-3 ml-2" />
                      </Badge>
                    )}
                    <span className="text-sm text-gray-500 ml-auto">
                      {filteredDoctors.length} doctors found
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Doctors Grid */}
            {filteredDoctors.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[calc(100vh-400px)] sm:max-h-[500px] overflow-y-auto pr-2 pb-20 sm:pb-0">
                {filteredDoctors.map((doc) => (
                  <Card
                    key={doc.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedDoctor?.id === doc.id
                        ? "ring-2 ring-[#2853aa] shadow-md"
                        : "hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedDoctor(doc)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <DoctorImage
                          src={doc.image}
                          alt={doc.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {doc.name}
                          </h3>
                          <p className="text-sm text-gray-500">{doc.specialty}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600">{doc.rating}</span>
                            <span className="text-xs text-gray-400">
                              {doc.experience} yrs
                            </span>
                          </div>
                        </div>
                        {selectedDoctor?.id === doc.id && (
                          <CheckCircle className="h-5 w-5 text-[#2853aa] shrink-0" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <Button variant="outline" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Continue Button - Sticky on mobile */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg sm:relative sm:bottom-auto sm:left-auto sm:right-auto sm:p-0 sm:bg-transparent sm:border-0 sm:shadow-none sm:mt-8 flex justify-center z-50">
              <CartoonButton
                label="Continue →"
                onClick={() => setStep(2)}
                disabled={!selectedDoctor}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        )}

        {/* Step 2: Calendar + Time Selection (Cal.com style) */}
        {step === 2 && doctor && (
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-[1fr,300px] divide-y md:divide-y-0 md:divide-x">
              {/* Left Side - Doctor Info + Calendar */}
              <div className="p-6">
                {/* Doctor Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                  <button
                    onClick={() => setStep(1)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-500" />
                  </button>
                  <DoctorImage
                    src={doctor.image}
                    alt={doctor.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-900">{doctor.name}</h2>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  </div>
                </div>

                {/* Appointment Info */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Consultation</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>30 min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="h-4 w-4" />
                      <span>Asia/Kolkata</span>
                    </div>
                  </div>
                </div>

                {/* Calendar */}
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date)
                      setSelectedTime("")
                    }}
                    disabled={disabledDays}
                    className="rounded-md border-0"
                  />
                </div>
              </div>

              {/* Right Side - Time Slots */}
              <div className="p-6 bg-gray-50">
                <div className="sticky top-6">
                  {selectedDate ? (
                    <>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {selectedDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Available time slots
                      </p>
                      <div className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto pr-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-2 text-xs font-medium rounded-md border transition-all ${
                              selectedTime === time
                                ? "bg-[#2853aa] text-white border-[#2853aa]"
                                : "bg-white text-gray-900 border-gray-200 hover:border-[#2853aa]"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>

                      {selectedTime && (
                        <CartoonButton
                          label="Continue →"
                          onClick={() => setStep(3)}
                          className="w-full mt-4"
                        />
                      )}
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">
                        Select a date to view available times
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && doctor && selectedDate && (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              {/* Back Button */}
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Back</span>
              </button>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-4">
                  <DoctorImage
                    src={doctor.image}
                    alt={doctor.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {selectedDate.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{selectedTime}</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-semibold text-gray-900 mb-4">Your Details</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input id="age" type="number" placeholder="25" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Visit (Optional)</Label>
                    <Textarea
                      id="reason"
                      placeholder="Briefly describe your symptoms or concern..."
                      rows={3}
                    />
                  </div>

                  <CartoonButton
                    label="✓ Confirm Booking"
                    type="submit"
                    color="bg-[#2853aa]"
                    className="w-full"
                  />

                  <p className="text-xs text-center text-gray-500">
                    By booking, you agree to our terms of service and privacy policy
                  </p>
                </form>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Need help? Call us at{" "}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="text-[#2853aa] font-medium hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2853aa] mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    }>
      <BookAppointmentContent />
    </Suspense>
  )
}
