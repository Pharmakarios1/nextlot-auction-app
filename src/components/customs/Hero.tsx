import { ArrowRight, Scale } from 'lucide-react'
import CustomButton from './CustomButton.js'

const Hero = () => {
  return (
    <div className=" max-w-full sm:max-w-2/3 md:max-w-1/2 mx-auto my-16 md:my-0 ">
      <p className="text-sm sm:text-xl md:text-2xl text-center text-gray-600 font-inter my-10 md:my-0 dark:text-white">
        Nextlot is the future of digital auctions, merging technology, transparency, and trust into
        every bidding experience worldwide.
      </p>
      <div className="flex flex-col justify-center gap-5 md:flex-row items-center my-5 md:my-12  w-[80%] md:max-w-1/2 mx-auto">
        <CustomButton
          variant="default"
          className="bg-gradient w-full"
          text="  Browse Auctions!"
          link="/bidlisting"
          icons={<ArrowRight />}
        />
        <CustomButton
          variant="default"
          className="bg-gradient w-full "
          text=" Compare Bids"
          link="/lotmatch"
          icons={<Scale />}
        />
      </div>
    </div>
  )
}

export default Hero
