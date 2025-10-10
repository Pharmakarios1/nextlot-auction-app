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
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-xl lg:text-2xl font-bold mb-10 text-gradient dark:text-white text-gradient">
        Trusted by Leading Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex-shrink-0 flex justify-center items-center w-40 h-10">
              <img
                src={partner.logo}
                alt={partner.name}
                className=" object-contain  hover:grayscale-0 transition w-full h-5"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
