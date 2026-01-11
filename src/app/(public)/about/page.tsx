import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Heart, Users, Shield, Target, Eye, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} - our history, mission, values, and commitment to providing quality healthcare in Hyderabad.`,
}

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with empathy, kindness, and respect, understanding their unique needs.",
  },
  {
    icon: Shield,
    title: "Excellence",
    description: "We strive for the highest standards in medical care, technology, and patient outcomes.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Our multidisciplinary teams collaborate to provide comprehensive, coordinated care.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We maintain ethical practices, transparency, and honesty in all our interactions.",
  },
]

const achievements = [
  "NABH Accreditation",
  "ISO 9001:2015 Certified",
  "Best Multi-Specialty Hospital Award 2023",
  "100,000+ Successful Treatments",
  "50+ Specialist Doctors",
  "24/7 Emergency Services",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#6682a3] to-[#4a6382]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#3a5f6f] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Your Trusted Healthcare Partner Since 2009
            </h1>
            <p className="text-gray-300 text-lg">
              MINA Super & Multi Speciality Hospitals has been serving the Hyderabad community
              with dedication, compassion, and excellence in healthcare for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#3a5f6f] font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#6682a3] mt-3 mb-6">
                A Legacy of Healing
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, MINA Hospital started with a simple mission: to provide
                  affordable, quality healthcare to every individual regardless of their
                  economic background. What began as a small clinic in Mehdipatnam has now
                  grown into one of Hyderabad&apos;s most trusted multi-specialty hospitals.
                </p>
                <p>
                  Over the years, we have expanded our services, added state-of-the-art
                  facilities, and assembled a team of highly qualified specialists across
                  20+ medical departments. Our second branch in Attapur ensures that quality
                  healthcare is accessible to more communities.
                </p>
                <p>
                  Today, with over 100,000 patients served, we continue to uphold our
                  founding principles while embracing modern medical advances. Our
                  commitment to patient care, combined with cutting-edge technology,
                  makes us a preferred choice for families across Telangana.
                </p>
              </div>
              <Button className="mt-8" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80"
                alt="MINA Hospital Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#6682a3]/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-[#6682a3]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#6682a3] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To deliver compassionate, patient-centered healthcare of the highest quality,
                  making advanced medical treatments accessible and affordable to all sections
                  of society. We aim to be a healing sanctuary where every patient feels
                  valued, respected, and cared for.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#3a5f6f]/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-[#3a5f6f]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#6682a3] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be recognized as the leading healthcare institution in South India,
                  known for clinical excellence, innovative treatments, and unwavering
                  commitment to patient welfare. We envision a healthier community where
                  quality healthcare is within everyone&apos;s reach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#3a5f6f] font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#6682a3] mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              These principles guide every decision we make and every interaction we have
              with our patients and community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#6682a3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-[#6682a3]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#6682a3] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-[#6682a3]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#3a5f6f] font-semibold text-sm uppercase tracking-wider">
              Recognition
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Our Achievements
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3"
              >
                <CheckCircle className="h-5 w-5 text-[#3a5f6f] shrink-0" />
                <span className="text-white">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#6682a3] mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join the thousands of families who trust MINA Hospital for their healthcare needs.
            Book your appointment today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/doctors">Meet Our Doctors</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
