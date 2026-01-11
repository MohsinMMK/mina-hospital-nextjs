"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, CheckCircle, ArrowLeft, ArrowRight, Star, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { siteConfig } from "@/config/site"

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4.9,
    experience: 20,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Obstetrics & Gynecology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4.8,
    experience: 15,
  },
  {
    id: 3,
    name: "Dr. Anil Reddy",
    specialty: "Orthopedics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4.9,
    experience: 18,
  },
  {
    id: 4,
    name: "Dr. Meera Patel",
    specialty: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4.7,
    experience: 12,
  },
  {
    id: 5,
    name: "Dr. Suresh Rao",
    specialty: "Neurology",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4.8,
    experience: 16,
  },
  {
    id: 6,
    name: "Dr. Kavitha Menon",
    specialty: "Dermatology",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4.6,
    experience: 10,
  },
]

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM"
]

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState("")

  const doctor = selectedDoctor

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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Book an Appointment
              </h1>
              <p className="text-gray-500">
                Select a doctor to schedule your visit
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {doctors.map((doc) => (
                <Card
                  key={doc.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedDoctor?.id === doc.id
                      ? "ring-2 ring-[#003366] shadow-md"
                      : "hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedDoctor(doc)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Image
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
                        <CheckCircle className="h-5 w-5 text-[#003366] shrink-0" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                onClick={() => setStep(2)}
                disabled={!selectedDoctor}
                className="min-w-[200px]"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
                  <Image
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
                      <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`w-full py-3 px-4 text-sm font-medium rounded-md border transition-all ${
                              selectedTime === time
                                ? "bg-[#003366] text-white border-[#003366]"
                                : "bg-white text-gray-900 border-gray-200 hover:border-[#003366]"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>

                      {selectedTime && (
                        <Button
                          className="w-full mt-4"
                          size="lg"
                          onClick={() => setStep(3)}
                        >
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
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
                  <Image
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#003366] hover:bg-[#002244]"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Confirm Booking
                  </Button>

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
              className="text-[#003366] font-medium hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
