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
    <span className="font-display text-3xl md:text-4xl font-bold text-[#3b82f6]">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#f4b942] font-semibold text-sm uppercase tracking-wider"
          >
            Our Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-[#3b82f6] mt-3 mb-4"
          >
            Trusted by Thousands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Our commitment to excellence is reflected in the numbers that speak for themselves.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="clay-card p-4 text-center flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-3">
                <stat.icon className="h-7 w-7 text-[#3b82f6]" />
              </div>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />
              <p className="text-[#3b82f6] font-bold text-sm mt-1">{stat.label}</p>
              <p className="text-gray-500 text-xs mt-1 leading-tight">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
