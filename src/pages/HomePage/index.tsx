import CustomCarousel from '@/components/customs/Carousel.js'
import Hero from '@/components/customs/Hero.js'
import BidsPage from '../BidPage/_partials/BidListing/index.js'
import HowItWorksTabs from './_partials/HowItWorks/index.js'
import WhyChooseUs from './_partials/WhyChooseUS/index.js'
import Testimonials from './_partials/Testimony/Testimony.js'
import { CallToActionBanner, CallToActionMain } from './_partials/CallToAction/index.js'
import NewsletterSignup from './_partials/Newsletter/index.js'
import PartnersCarousel from './_partials/Partners/index.js'

const Home = () => {
  return (
    <main className="my-10">
      <CustomCarousel />
      <Hero />
      <BidsPage />
      <HowItWorksTabs />
      <WhyChooseUs />
      <Testimonials />
      <CallToActionBanner />
      <CallToActionMain />
      <NewsletterSignup />
      <PartnersCarousel />
    </main>
  )
}

export default Home
