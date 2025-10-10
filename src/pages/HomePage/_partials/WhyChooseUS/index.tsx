import { ShieldCheck, BellRing, CheckCircle, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const usps = [
    {
      title: 'Secure Bidding',
      description:
        'Your safety comes first. Our platform uses advanced encryption and fraud protection to ensure every bid and transaction is 100% secure.',
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    },
    {
      title: 'Instant Notifications',
      description:
        'Never miss a moment! Get real-time alerts when you’re outbid, when auctions are ending, or when you’ve won — all instantly.',
      icon: <BellRing className="w-10 h-10 text-green-600" />,
    },
    {
      title: 'Verified Sellers',
      description:
        'Bid with confidence knowing that all sellers are verified. We carefully review and approve every seller to protect buyers from scams.',
      icon: <CheckCircle className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: 'Low Fees',
      description:
        'Keep more of what you win. Our transparent and competitive fees ensure you get the best value without hidden charges.',
      icon: <DollarSign className="w-10 h-10 text-purple-600" />,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gradient">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
              // viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm bg-gray-50 dark:bg-slate-800 hover:shadow-md transition"
            >
              <div className="mb-3">{usp.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm text-left md:text-center">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
