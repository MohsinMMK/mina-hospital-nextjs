import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { Stats } from "@/components/sections/stats"
import { Specialists } from "@/components/sections/specialists"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTAAppointment } from "@/components/sections/cta-appointment"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Stats />
      <Specialists />
      <Testimonials />
      <FAQ />
      <CTAAppointment />
    </>
  )
}
