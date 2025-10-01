import { Button } from '../ui/button.js'
import { ArrowRight, Scale } from 'lucide-react'
import CustomButton from './CustomButton.js'

const Hero = () => {
  return (
    <div className=" max-w-full sm:max-w-2/3 md:max-w-1/2 mx-auto ">
      <p className="text-md sm:text-xl md:text-2xl text-center text-gray-600 font-inter ">
        Nextlot is the future of digital auctions, merging technology, transparency, and trust into
        every bidding experience worldwide.
      </p>
      <div className="flex flex-col justify-center gap-5 md:flex-row items-center my-5 md:my-12 ">
        <CustomButton
          variant="default"
          className="bg-gradient  min-w-1/2"
          text="  Bid Now!"
          link="/bid"
          icons={<ArrowRight />}
        />
        <CustomButton
          variant="default"
          className="bg-gradient  min-w-1/2"
          text=" Compare Bids"
          link="/compare"
          icons={<Scale />}
        />
      </div>
    </div>
  )
}

export default Hero
