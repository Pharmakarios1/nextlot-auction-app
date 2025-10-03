import { Button } from "@/components/ui/button.js"
import { Card, CardContent } from "@/components/ui/card.js"
import { CheckCircle, Search, Gavel, Trophy, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

// Reusable fade-in variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <motion.section
        className="text-center space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className=" text-xl md:text-4xl font-bold bg-gradient rounded-md py-2 px-1.5 ">Revolutionizing Online Auctions with Transparency & Trust</h1>
        <p className="text-sm md:text-lg  text-muted-foreground max-w-2xl mx-auto">
          Nextlot was built with a simple goal — to make auctions fair, accessible, and exciting for everyone.
          Whether you’re a first-time bidder or a seasoned collector, we provide a platform where opportunities are endless.
        </p>
      </motion.section>

      {/* Our Story */}
      <motion.section
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-gradient">Our Story</h2>
        <p className="text-sm md:text-lg text-start text-muted-foreground">
          Founded with the vision of bridging the gap between buyers and sellers, Nextlot started as a passion
          project for simplifying the auction process. Over time, it has evolved into a platform where secure
          transactions, verified sellers, and real-time bidding come together. We believe auctions should not
          only be about winning but about trust, transparency, and community.
        </p>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-gradient">Our Mission</h2>
        <p className="text-sm md:text-lg text-start text-muted-foreground">
          To provide a secure, seamless, and engaging auction experience. To ensure that both sellers and buyers
          feel valued, respected, and protected. To constantly innovate and add features that make online bidding
          fun, fast, and fair.
        </p>
      </motion.section>

      {/* What Makes Us Different */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-gradient">What Makes Us Different</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Secure Bidding: Advanced encryption and fraud prevention tools safeguard every transaction.",
            "Instant Notifications: Stay updated with real-time alerts for bids, wins, and auctions.",
            "Verified Sellers: Every seller is vetted to ensure authenticity and reliability.",
            "Affordable Fees: Low transaction fees mean more value for both buyers and sellers."
          ].map((usp, i) => (
            <motion.div key={i} custom={i} variants={fadeInUp}>
              <Card className="shadow-md">
                <CardContent className="flex items-start gap-3 p-4 text-sm md:text-md">
                  <CheckCircle className="text-green-600 mt-1" />
                  <p>{usp}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-center text-gradient">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: "Browse", desc: "Explore auctions across categories and discover hidden gems.", icon: <Search className="w-10 h-10 mx-auto text-blue-600" /> },
            { step: "Bid", desc: "Place your bids confidently in real-time with instant updates.", icon: <Gavel className="w-10 h-10 mx-auto text-purple-600" /> },
            { step: "Win", desc: "Highest bidder secures the item — it’s that simple.", icon: <Trophy className="w-10 h-10 mx-auto text-yellow-500" /> },
            { step: "Checkout", desc: "Complete your purchase with our safe and seamless payment options.", icon: <ShoppingCart className="w-10 h-10 mx-auto text-green-600" /> }
          ].map((item, i) => (
            <motion.div key={i} custom={i} variants={fadeInUp}>
              <Card className="shadow-md">
                <CardContent className="p-6 space-y-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.step}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Community */}
      <motion.section
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-gradient">Meet the Community</h2>
        <p className="text-sm md:text-lg text-start text-muted-foreground">
          Nextlot is not just an auction site — it’s a community of passionate buyers and sellers. From rare
          collectibles to everyday essentials, you’ll find a network of people who share the excitement of auctions.
          We encourage feedback, transparency, and collaboration to keep improving.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="text-center space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-gradient">Be Part of the Auction Revolution</h2>
        <p className="text-muted-foreground">Join thousands of bidders today and experience auctions like never before!</p>
        <Button size="lg" className="mt-2 bg-gradient cursor-pointer">Join Nextlot Today →</Button>
      </motion.section>
    </div>
  )
}
