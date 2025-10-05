'use client'

import * as React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel.js'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Antique Collector',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'Nextlot made bidding so easy! I won a rare antique vase at an amazing price, and the whole process was seamless.',
    rating: 5,
  },
  {
    name: 'Michael Lee',
    role: 'Tech Enthusiast',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'I love the instant notifications — I never miss out on a bid. The platform feels safe and professional.',
    rating: 4,
  },
  {
    name: 'Olivia Brown',
    role: 'Small Business Owner',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote:
      'Selling was just as smooth as buying. The verified sellers feature gave me confidence, and I’ll definitely be back.',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }), // 4 seconds per slide
  )

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          What Our Users Say
        </motion.h2>

        <Carousel plugins={[plugin.current]} className="w-full">
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8 flex flex-col items-center text-center max-w-[500px] mx-auto"
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{t.role}</p>

                  {/* Star Rating */}
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
