"use client"

import Link from "next/link"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DoctorImage } from "@/components/ui/doctor-image"
import { CartoonButton } from "@/components/ui/cartoon-button"

/**
 * Doctor data interface for the DoctorCard component.
 * 
 * This interface represents the minimum data required to render
 * a doctor profile card consistently across the application.
 */
export interface Doctor {
  id: number
  name: string
  slug: string
  specialty: string
  qualification: string
  experience: number
  rating: number
  reviews: number
  image: string
  available: boolean
}

interface DoctorCardProps {
  doctor: Doctor
  /** Show animation on scroll into view */
  animated?: boolean
  /** Animation delay in milliseconds */
  animationDelay?: number
}

/**
 * DoctorCard - A premium, minimal doctor profile card component.
 * 
 * Design Philosophy:
 * - Clean, uncluttered layout following modern healthcare UX
 * - Emphasis on the doctor's photo as the primary visual
 * - Clear availability status for quick scanning
 * - Stats row provides at-a-glance credibility indicators
 * - Prominent CTA drives appointment conversions
 * 
 * Usage:
 * ```tsx
 * <DoctorCard doctor={doctorData} animated animationDelay={100} />
 * ```
 */
export function DoctorCard({ doctor, animated = false, animationDelay = 0 }: DoctorCardProps) {
  return (
    <Card 
      className={`
        overflow-hidden group bg-white
        hover:shadow-xl transition-all duration-300
        ${animated ? 'animate-fade-in-up' : ''}
      `}
      style={animated ? { animationDelay: `${animationDelay}ms` } : undefined}
    >
      {/* Photo Section - Rounded corners like reference */}
      <div className="p-3 pb-0">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <DoctorImage
            src={doctor.image}
            alt={doctor.name}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Availability Badge - Top Right */}
          <div className="absolute top-3 right-3">
            <Badge
              variant={doctor.available ? "success" : "secondary"}
              className="shadow-md backdrop-blur-sm text-xs font-medium px-2.5 py-1"
            >
              {doctor.available ? "Available" : "Unavailable"}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-5">
        {/* Doctor Name */}
        <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">
          <Link 
            href={`/doctors/${doctor.slug}`} 
            className="hover:text-[#2853aa] transition-colors"
          >
            {doctor.name}
          </Link>
        </h3>
        
        {/* Specialty & Qualification */}
        <p className="text-[#2853aa] text-sm font-medium mb-1">
          {doctor.specialty}
        </p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-1">
          {doctor.qualification}
        </p>

        {/* Stats Row with Dividers */}
        <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4 mb-4">
          {/* Rating */}
          <div className="text-center flex-1">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-gray-900">{doctor.rating}</span>
            </div>
            <span className="text-gray-400 text-xs">Rating</span>
          </div>
          
          {/* Divider */}
          <div className="h-8 w-px bg-gray-200" />
          
          {/* Experience */}
          <div className="text-center flex-1">
            <div className="font-bold text-gray-900 mb-0.5">
              {doctor.experience}+
            </div>
            <span className="text-gray-400 text-xs">Years</span>
          </div>
          
          {/* Divider */}
          <div className="h-8 w-px bg-gray-200" />
          
          {/* Reviews */}
          <div className="text-center flex-1">
            <div className="font-bold text-gray-900 mb-0.5">
              {doctor.reviews}
            </div>
            <span className="text-gray-400 text-xs">Reviews</span>
          </div>
        </div>

        {/* CTA Button - Animated cartoon style */}
        {doctor.available ? (
          <CartoonButton
            label="Book Appointment"
            href={`/book-appointment?doctor=${doctor.id}`}
            className="w-full"
          />
        ) : (
          <CartoonButton
            label="Currently Unavailable"
            disabled
            className="w-full"
          />
        )}
      </CardContent>
    </Card>
  )
}
