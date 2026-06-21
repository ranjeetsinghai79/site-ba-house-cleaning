import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "BA House Cleaning",
    tagline: "Sparkling Homes, Happy East Bay Families.",
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
    { icon: "home", title: "Recurring Cleaning", desc: "Keep your home consistently fresh with our scheduled cleaning plans.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Thoroughly clean every nook and cranny for a truly refreshed space.", urgent: false },
    { icon: "truck", title: "Move In/Out Cleaning", desc: "Ensure a spotless transition with our comprehensive moving cleaning services.", urgent: true },
    { icon: "shield-check", title: "Sanitizing Services", desc: "Eliminate germs and bacteria for a healthier, safer environment.", urgent: false },
    { icon: "star", title: "Vacation Rental Cleaning", desc: "Prepare your rental for guests with professional, efficient cleaning.", urgent: false },
    { icon: "briefcase", title: "Office Cleaning", desc: "Maintain a pristine and productive workspace for your business.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Oakland", stars: 5, text: "BA House Cleaning did an incredible deep clean on my home last month. They spent over 4 hours meticulously cleaning every surface, and the house has never felt so fresh. The team was punctual, professional, and incredibly thorough. Worth every penny!" },
    { name: "Mark T.", location: "Berkeley", stars: 5, text: "We've been using BA House Cleaning for our bi-weekly recurring service for the past year, and they are consistently excellent. My kitchen and bathrooms always sparkle, and they even organize my kids' toys! It's such a relief to come home to a clean house after a long day." },
    { name: "Jessica R.", location: "Alameda", stars: 5, text: "I hired BA House Cleaning for a move-out clean, and they exceeded all my expectations. The apartment looked brand new, which really helped me get my full security deposit back. They were efficient, affordable, and paid attention to all the small details. Highly recommend!" }
  ],

  trustBadges: [
    "Diamond Certified", "Top 100 Cleaning Partner", "4.9 Star Rated", "Licensed & Insured", "500+ Happy Clients"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Flexible Scheduling", desc: "We work around your busy life, offering convenient cleaning times." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "No hidden fees, just clear, upfront quotes for all services." },
    { icon: "award", title: "Diamond Certified", desc: "Recognized for superior quality and customer satisfaction." },
    { icon: "thumbs-up", title: "Satisfaction Guaranteed", desc: "We ensure you're delighted with every clean, every time." },
    { icon: "phone", title: "Responsive Support", desc: "Our friendly team is always ready to assist with your needs." },
    { icon: "home", title: "Eco-Friendly Products", desc: "Safe for your family, pets, and the environment." }
  ],

  formServiceOptions: ["Recurring Cleaning Services", "Deep Cleaning", "Move In/Out Cleaning Services", "Sanitizing Services", "Vacation Rental Cleaning", "Office Cleaning Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!