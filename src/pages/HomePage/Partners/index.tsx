'use client'

import { motion } from 'framer-motion'

export default function PartnersCarousel() {
  const partners = [
    { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png' },
    {
      name: 'Mastercard',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    },
    {
      name: 'Stripe',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Stripe_Logo%2C_revised_2016.svg',
    },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-slate-800 dark:text-white text-gradient">
        Trusted by Leading Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {/* Duplicate logos twice for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex-shrink-0 flex justify-center items-center w-40">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
