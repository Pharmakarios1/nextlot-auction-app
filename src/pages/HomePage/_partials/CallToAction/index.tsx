'use client'

import { ArrowRight, Hammer } from 'lucide-react'
import { Button } from '@/components/ui/button.js'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Main CTA Section (big hero style)
export function CallToActionMain() {
  return (
    <section className="py-20 bg-gradient">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Join Thousands of Bidders Today!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg mb-8 text-white/90"
        >
          Discover amazing deals, bid in real time, and win exclusive items. Your next big win is
          just one bid away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 font-semibold hover:bg-gray-100 transition rounded-full px-8 py-6 text-lg"
          >
            <Link to="/signup">
              Sign Up Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-gradient dark:text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
          >
            <Link to="/bidlisting">
              Start Bidding <Hammer className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Sticky CTA Banner (near footer)
export function CallToActionBanner() {
  return (
    <div className="bg-slate-950  py-6 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg font-semibold text-center md:text-left">
          Ready to make your first bid? Don’t miss out on exclusive deals!
        </p>
        <div className="flex gap-3">
          <Button
            asChild
            className="bg-white text-blue-700 font-semibold hover:bg-gray-100 transition rounded-full"
          >
            <Link to="/signup">Sign Up</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-white text-gradient dark:text-white hover:bg-white/10 rounded-full"
          >
            <Link to="/bidlisting">Start Bidding</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
