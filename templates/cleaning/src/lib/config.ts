import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "BA House Cleaning",
    tagline: "Sparkling Homes. Happy Lives. Guaranteed.",
    phone: "(510) 788-0048",
    phoneHref: "tel:+15107880048",
    email: "info@bahousecleaning.com",
    address: "123 Main St",
    city: "Oakland",
    serviceAreas: ["East Bay Area", "Oakland"],
    license: "Licensed & Insured",
    since: "2005",
    google_rating: "4.9",
    review_count: "500+",
    emergency: false,
    theme: "navy",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "Recurring Cleaning", desc: "Maintain a consistently clean home with our scheduled recurring cleaning services.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Experience a thorough, top-to-bottom clean that revitalizes every corner of your home.", urgent: false },
    { icon: "truck", title: "Move In/Out Cleaning", desc: "Ensure a spotless transition with our comprehensive cleaning for moving in or out of a property.", urgent: false },
    { icon: "shield-check", title: "Sanitizing Services", desc: "Protect your family with professional sanitizing services that eliminate germs and bacteria.", urgent: false },
    { icon: "briefcase", title: "Office Cleaning", desc: "Keep your workspace pristine and productive with our reliable commercial cleaning solutions.", urgent: false },
    { icon: "scissors", title: "Carpet Cleaning", desc: "Restore the beauty and freshness of your carpets with our deep and effective cleaning methods.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Oakland", stars: 5, text: "BA House Cleaning did an incredible deep clean on my apartment last month. I was moving out and needed everything spotless for the landlord. They were prompt, thorough, and even got out a stubborn coffee stain I thought was permanent! Worth every penny for the peace of mind." },
    { name: "Mark T.", location: "Berkeley", stars: 5, text: "We've been using BA House Cleaning for our bi-weekly recurring service for over a year now. They are consistently excellent. Our home always feels fresh and clean after they leave. The team is friendly and trustworthy, and they always pay attention to the little details." },
    { name: "Jessica R.", location: "Alameda", stars: 5, text: "I hired BA House Cleaning for a post-party cleanup, and they saved my weekend! The house was a disaster, but they transformed it in just a few hours. The kitchen was sparkling, and the floors looked amazing. I was so impressed with their efficiency and professionalism." }
  ],

  trustBadges: [
    "Diamond Certified", "500+ 5-Star Reviews", "Top 100 Cleaning Partner 2023", "Licensed & Insured", "Satisfaction Guaranteed"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 15, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Flexible Scheduling", desc: "We work around your busy life, offering convenient cleaning times that fit your schedule." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "No hidden fees or surprises. Get a clear, upfront quote for all our cleaning services." },
    { icon: "award", title: "Experienced Cleaners", desc: "Our team consists of highly trained and vetted professionals dedicated to excellence." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work. If you're not happy, we'll make it right, guaranteed." },
    { icon: "phone", title: "Easy Booking Online", desc: "Schedule your cleaning service quickly and effortlessly through our user-friendly website." },
    { icon: "heart", title: "Eco-Friendly Options", desc: "We offer green cleaning solutions to protect your family and the environment." }
  ],

  formServiceOptions: ["Recurring Cleaning", "Deep Cleaning", "Move In/Out Cleaning", "Sanitizing Services", "Office Cleaning", "Carpet Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!