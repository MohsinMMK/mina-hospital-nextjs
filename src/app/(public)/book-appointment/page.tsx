"use client"

import { useState } from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { siteConfig } from "@/config/site"

const departments = [
  "Cardiology",
  "Orthopedics",
  "Obstetrics & Gynecology",
  "Pediatrics",
  "Neurology",
  "Dermatology",
  "General Surgery",
  "Gastroenterology",
  "ENT",
  "Ophthalmology",
  "Urology",
  "Nephrology",
]

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
]

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"
]

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1)
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const filteredDoctors = selectedDepartment
    ? doctors.filter(d => d.specialty === selectedDepartment)
    : doctors

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#003366] to-[#002244]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#C78A3B] font-semibold text-sm uppercase tracking-wider">
              Book Appointment
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Schedule Your Visit
            </h1>
            <p className="text-gray-300 text-lg">
              Book an appointment with our expert doctors in just a few simple steps.
              Choose your preferred doctor, date, and time.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {[
              { num: 1, label: "Select Doctor" },
              { num: 2, label: "Choose Time" },
              { num: 3, label: "Your Details" },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s.num
                        ? "bg-[#003366] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > s.num ? <CheckCircle className="h-5 w-5" /> : s.num}
                  </div>
                  <span className={`hidden md:block font-medium ${step >= s.num ? "text-[#003366]" : "text-gray-400"}`}>
                    {s.label}
                  </span>
                </div>
                {index < 2 && (
                  <ArrowRight className={`mx-4 h-5 w-5 ${step > s.num ? "text-[#003366]" : "text-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Step 1: Select Doctor */}
            {step === 1 && (
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Department & Doctor</CardTitle>
                    <CardDescription>
                      Choose the department and doctor you would like to visit
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Department</Label>
                      <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <Label>Available Doctors</Label>
                      <div className="grid gap-4">
                        {filteredDoctors.map((doctor) => (
                          <div
                            key={doctor.id}
                            onClick={() => setSelectedDoctor(doctor.id.toString())}
                            className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedDoctor === doctor.id.toString()
                                ? "border-[#003366] bg-[#003366]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <Image
                              src={doctor.image}
                              alt={doctor.name}
                              width={60}
                              height={60}
                              className="rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-[#003366]">{doctor.name}</h4>
                              <p className="text-sm text-gray-500">{doctor.specialty}</p>
                              <div className="flex items-center gap-4 mt-1">
                                <span className="flex items-center text-sm">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                  {doctor.rating}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {doctor.experience} yrs exp
                                </span>
                              </div>
                            </div>
                            {selectedDoctor === doctor.id.toString() && (
                              <CheckCircle className="h-6 w-6 text-[#003366]" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={!selectedDoctor}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Choose Time */}
            {step === 2 && (
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date & Time</CardTitle>
                    <CardDescription>
                      Choose your preferred appointment date and time slot
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Select Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Available Time Slots</Label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className="justify-center"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => setStep(3)}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Patient Details */}
            {step === 3 && (
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Details</CardTitle>
                    <CardDescription>
                      Please provide your contact information to complete the booking
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="Your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="Your phone number" required />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="your.email@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="age">Age *</Label>
                          <Input id="age" type="number" placeholder="Your age" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason">Reason for Visit</Label>
                        <Textarea
                          id="reason"
                          placeholder="Briefly describe your symptoms or reason for consultation..."
                          rows={4}
                        />
                      </div>

                      {/* Booking Summary */}
                      <Card className="bg-gray-50">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-[#003366] mb-3">Appointment Summary</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Doctor:</span>
                              <span className="font-medium">
                                {doctors.find(d => d.id.toString() === selectedDoctor)?.name}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Department:</span>
                              <span className="font-medium">
                                {doctors.find(d => d.id.toString() === selectedDoctor)?.specialty}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Date:</span>
                              <span className="font-medium">{selectedDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Time:</span>
                              <span className="font-medium">{selectedTime}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </form>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" size="lg" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button size="lg" className="bg-[#C78A3B] hover:bg-[#B67A2B]">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-[#003366] mb-4">
              Need Help Booking?
            </h2>
            <p className="text-gray-600 mb-6">
              Our patient care team is available to assist you with appointment scheduling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call: {siteConfig.contact.phone}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp?.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
