"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Award, Stethoscope, Building2, Bed, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"

const stats = [
  {
    icon: Users,
    value: 100000,
    suffix: "+",
    label: "Patients Served",
    description: "Happy patients and counting",
  },
  {
    icon: Stethoscope,
    value: 50,
    suffix: "+",
    label: "Specialist Doctors",
    description: "Expert medical professionals",
  },
  {
    icon: Building2,
    value: 20,
    suffix: "+",
    label: "Departments",
    description: "Medical specialities",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted healthcare",
  },
  {
    icon: Bed,
    value: 150,
    suffix: "+",
    label: "Hospital Beds",
    description: "Modern facilities",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Emergency Care",
    description: "Round the clock",
  },
]

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCount(Math.min(Math.floor(stepValue * currentStep), value))
      if (currentStep >= steps) {
        clearInterval(timer)
        setCount(value)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span className="font-display text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-[#003366] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#C78A3B] font-semibold text-sm uppercase tracking-wider"
          >
            Our Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4"
          >
            Trusted by Thousands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            Our commitment to excellence is reflected in the numbers that speak for themselves.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-[#C78A3B]" />
              </div>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />
              <p className="text-white font-semibold mt-2">{stat.label}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
