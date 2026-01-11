"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What are your hospital timings?",
    answer:
      "Our OPD timings are 8:00 AM to 9:00 PM. Emergency services and pharmacy are available 24/7, all days of the week including holidays.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our website by clicking the 'Book Appointment' button, calling us at 040 2353 1881, or visiting our hospital directly. Online booking is available for both in-person consultations and video consultations.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes, we accept most major health insurance providers including Star Health, ICICI Lombard, HDFC Ergo, Bajaj Allianz, and many others. We also have a dedicated insurance desk to help you with cashless claim processing.",
  },
  {
    question: "What specialities are available at MINA Hospital?",
    answer:
      "We offer over 20 specialities including Cardiology, Orthopedics, Obstetrics & Gynecology, Pediatrics, General Medicine, General Surgery, Neurology, Nephrology, Gastroenterology, Pulmonology, ENT, Ophthalmology, Dermatology, and more.",
  },
  {
    question: "Do you have emergency services?",
    answer:
      "Yes, we have 24/7 emergency services at both our Mehdipatnam and Attapur branches. Our emergency team includes experienced doctors, nurses, and support staff equipped to handle all types of medical emergencies.",
  },
  {
    question: "How can I access my medical records online?",
    answer:
      "You can access your medical records through our Patient Portal. Simply register with your mobile number and email to view your appointment history, test reports, prescriptions, and billing information securely online.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit/debit cards, UPI payments (Google Pay, PhonePe, Paytm), net banking, and cheques. EMI options are also available for major procedures through our tie-ups with leading banks.",
  },
  {
    question: "Is parking available at the hospital?",
    answer:
      "Yes, both our branches have dedicated parking facilities for patients and visitors. Valet parking service is also available at our Mehdipatnam branch.",
  },
]

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#f4b942] font-semibold text-sm uppercase tracking-wider"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-[#6682a3] mt-3 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg mb-8"
            >
              Find answers to common questions about our services, appointments,
              and facilities. Can&apos;t find what you&apos;re looking for?
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-[#6682a3] hover:text-[#f4b942] hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
