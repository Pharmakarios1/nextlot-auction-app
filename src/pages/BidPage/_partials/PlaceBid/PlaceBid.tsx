

import { Skeleton } from '@/components/ui/skeleton.js'
import { Input } from '@/components/ui/input.js'
import { Label } from '@/components/ui/label.js'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '@/hooks/useLoading.js'
import CustomButton from '@/components/customs/CustomButton.js'

export default function PlaceBid() {
  const { loading, showBidUI } = useLoading(2000)

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Animate Skeleton Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed mt-14 inset-0 flex items-center justify-center bg-white dark:bg-slate-950  z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-md p-6 space-y-4 animate-pulse">
              <h2 className="text-xl font-semibold mb-4">
                <Skeleton className="h-6 w-32" />
              </h2>

              <div className="space-y-3">
                <div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animate Final Bid UI */}
      <AnimatePresence>
        {showBidUI && (
          <motion.div
            className="p-6 border rounded-lg shadow-lg w-full max-w-md relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            // 👆 delay makes it start fading in before skeleton is fully gone
          >
            <h2 className="text-xl font-semibold mb-4">Bid UI</h2>

            <form className="space-y-4">
              <div>
                <Label htmlFor="amount">Bid Amount</Label>
                <Input id="amount" placeholder="Enter bid amount" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Input id="message" placeholder="Optional message" />
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" placeholder="Extra details" />
              </div>

              <div className="flex space-x-3">
                <CustomButton className="flex-1 bg-gradient" text="Submit" />
                <CustomButton className="flex-1 bg-gradient" text="Cancel" />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
