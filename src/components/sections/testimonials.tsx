"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Srinivas Rao",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "The care I received at MINA Hospital was exceptional. Dr. Rajesh and his team were incredibly professional and compassionate. The facilities are world-class and the staff made me feel comfortable throughout my treatment.",
    treatment: "Cardiac Care",
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "I had my delivery at MINA Hospital and it was a wonderful experience. Dr. Priya Sharma is an amazing doctor. The maternity ward is clean, modern, and the nurses are so caring. Highly recommend for expectant mothers!",
    treatment: "Maternity Care",
  },
  {
    id: 3,
    name: "Mohammed Imran",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "After my knee replacement surgery, I was back on my feet much sooner than expected. The orthopedics team at MINA is truly skilled. The physiotherapy department also helped me recover quickly.",
    treatment: "Orthopedic Surgery",
  },
  {
    id: 4,
    name: "Padma Reddy",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "The emergency care at MINA Hospital saved my father's life. The response time was incredible and the doctors worked tirelessly. We are forever grateful to the entire team. Thank you MINA!",
    treatment: "Emergency Care",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#f4b942] font-semibold text-sm uppercase tracking-wider"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-[#6682a3] mt-3 mb-4"
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Real stories from real patients who trusted us with their healthcare needs.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <Quote className="h-12 w-12 text-[#f4b942]/20 mb-6" />

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#6682a3]">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonials[current].treatment}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-[#6682a3]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
