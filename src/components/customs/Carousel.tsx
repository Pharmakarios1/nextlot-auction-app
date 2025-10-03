import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.js'
import Autoplay from 'embla-carousel-autoplay'

const CustomCarousel = () => {
  const AuctoCarousel = [
    {
      id: 1,
      boldtext: 'Bid smart, Win Big Bounties!',
    },
    {
      id: 2,
      boldtext: 'Your Next Lot, Your Next  Win!',
    },
    {
      id: 3,
      boldtext: 'Offering Seamless Auctions',
    },
    {
      id: 4,
      boldtext: 'Bid Boldly, Win Confidently!',
    },
    {
      id: 5,
      boldtext: 'Onboard, Transact Seamlessly',
    },
  ]
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
        slidesToScroll: 1,
        inViewThreshold: 0.5,
        skipSnaps: true,
      }}
      plugins={[Autoplay({ delay: 5000 })]}
      orientation="vertical"
      className="w-full mx-auto max-w-[768px]  px-5 "
    >
      <CarouselContent className="max-h-48  text-center">
        {AuctoCarousel.map((_, index) => (
          <CarouselItem key={index} className=" md:basis-[50%]">
            <div className="">
              <div className="border-none shadow-none outline-0">
                <div className="flex items-center justify-center px-3 pb-4 ">
                  <h1 className=" text-5xl  md:text-7xl  font-body font-bold text-gradient">
                    {' '}
                    {_.boldtext}
                  </h1>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CustomCarousel
