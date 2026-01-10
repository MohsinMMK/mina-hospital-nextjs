export const siteConfig = {
  name: "MINA Super & Multi Speciality Hospitals",
  shortName: "MINA Hospitals",
  description:
    "Leading multi and super speciality hospital in Hyderabad providing affordable, high-quality healthcare in Mehdipatnam and Shivarampally. 24/7 Emergency care, top specialists.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mina-hospitals.com",
  ogImage: "/og-image.jpg",

  contact: {
    phone: "040 2353 1881",
    emergencyPhone: "040 2353 1882",
    email: "info@mina-hospitals.com",
    whatsapp: "+919876543210",
  },

  locations: [
    {
      name: "Mehdipatnam Branch",
      address: "Royal Colony, Mehdipatnam",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500006",
      phone: "040 2353 1881",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mina+Multi+Speciality+Hospital+Mehdipatnam",
      coordinates: { lat: 17.3950, lng: 78.4403 },
    },
    {
      name: "Attapur Branch",
      address: "Near Pillar 254, Attapur",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500048",
      phone: "040 2353 1882",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mina+Hospital+Attapur",
      coordinates: { lat: 17.3690, lng: 78.4267 },
    },
  ],

  social: {
    facebook: "https://facebook.com/minahospitals",
    twitter: "https://twitter.com/minahospitals",
    instagram: "https://instagram.com/minahospitals",
    linkedin: "https://linkedin.com/company/minahospitals",
    youtube: "https://youtube.com/@minahospitals",
  },

  workingHours: {
    opd: "8:00 AM - 9:00 PM",
    emergency: "24/7",
    pharmacy: "24/7",
  },

  stats: {
    yearsOfExperience: 15,
    patientsServed: "100,000+",
    specialists: 50,
    departments: 20,
    beds: 150,
  },

  keywords: [
    "Multi Speciality Hospital Hyderabad",
    "Best Hospital Mehdipatnam",
    "Hospital near Pillar 254 Attapur",
    "Affordable Healthcare Hyderabad",
    "Emergency Care Hyderabad",
    "MINA Hospital",
  ],
}

export type SiteConfig = typeof siteConfig
