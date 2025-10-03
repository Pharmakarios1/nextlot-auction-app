import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.js'
import { Search, Gavel, Trophy, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HowItWorksTabs() {
  const steps = [
    {
      value: 'browse',
      title: 'Browse',
      icon: <Search className="w-5 h-5 mr-2 text-red-400" />,
      description:
        'Explore our wide range of auctions across multiple categories. Whether you’re searching for electronics, collectibles, or rare finds, there’s always something exciting. Each auction comes with detailed descriptions and high-quality images, making browsing both fun and reliable.',
    },
    {
      value: 'bid',
      title: 'Bid',
      icon: <Gavel className="w-5 h-5 mr-2 text-blue-800" />,
      description:
        'Found something you like? Jump into the action by placing a bid. Our real-time bidding system keeps you updated instantly as the competition heats up. With each bid, you’re not just buying—you’re experiencing the thrill of the auction floor from your device.',
    },
    {
      value: 'win',
      title: 'Win',
      icon: <Trophy className="w-5 h-5 mr-2 text-fuchsia-900" />,
      description:
        'The countdown hits zero, and if your bid stands at the top—you win! Winning feels amazing, and it’s not just about luck; it’s your timing and smart strategy that made it happen. Relish the moment of outbidding the competition in a fair and secure environment.',
    },
    {
      value: 'checkout',
      title: 'Checkout',
      icon: <CreditCard className="w-5 h-5 mr-2 text-pink-900" />,
      description:
        'Once you’ve won, completing your purchase is quick and secure. With trusted payment methods, you can finalize your order safely. After checkout, your item will be processed and shipped promptly—bringing your hard-fought win straight to your doorstep.',
    },
  ]
  const [activeTab, setActiveTab] = useState('browse')
  const currentIndex = steps.findIndex((s) => s.value === activeTab) + 1
  const progress = (currentIndex / steps.length) * 100

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gradient">How It Works</h2>

      {/* Step progress indicator */}
      <div className="text-center mb-2 text-gray-600 dark:text-gray-300">
        Step {currentIndex} of {steps.length}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-slate-700 h-2 rounded-full mb-6">
        <motion.div
          className="h-2 rounded-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <Tabs defaultValue="browse" className="w-full " onValueChange={(val) => setActiveTab(val)}>
        <TabsList className="grid grid-cols-2 h-fit bg-gradient md:grid-cols-4 gap-2 w-full md:w-fit p-5 ">
          {steps.map((step) => (
            <TabsTrigger key={step.value} value={step.value} className="">
              {step.icon}
              {step.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {steps.map((step) => (
          <TabsContent key={step.value} value={step.value}>
            <motion.div
              key={step.value}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-6 rounded-lg bg-white shadow-md dark:bg-slate-800"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                {step.icon} {step.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-gradient">
                {step.description}
              </p>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
