import { useState } from 'react'
import { Input } from '@/components/ui/input.js'
import { Button } from '@/components/ui/button.js'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card.js'
import { CheckCircle2 } from 'lucide-react'
import CustomButton from '@/components/customs/CustomButton.js'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true) // show success state
      setEmail('')
    }
  }

  return (
    <Card className="max-w-md mx-auto my-16 shadow-lg rounded-2xl p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Stay Updated</CardTitle>
      </CardHeader>
      <CardContent>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-sm text-slate-300 text-center">
              Subscribe to get the latest auction updates and never miss a bid!
            </p>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white"
            />
            <Button type="submit" className="w-full bg-gradient cursor-pointer">
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-6">
            <CheckCircle2 className="h-12 w-12 text-green-400" />
            <h3 className="text-lg font-semibold">Subscription Successful!</h3>
            <p className="text-sm text-slate-300 text-center">
              🎉 You’re now on our list. Watch out for upcoming auctions in your inbox.
            </p>
            <CustomButton
              variant="outline"
              className="mt-4 bg-gradient"
              onClick={() => setSubscribed(false)}
              text="  Add Another Email"
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
