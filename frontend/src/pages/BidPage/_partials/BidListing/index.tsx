import { useState } from 'react'
import { Input } from '@/components/ui/input.js'
import { Button } from '@/components/ui/button.js'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.js'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.js'
import BidCard from '@/components/customs/BidCard.js'
import { bids } from '@/data/bid.js'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import useHome from '@/hooks/useHome.js'
import CustomButton from '@/components/customs/CustomButton.js'

export default function BidListing() {
  const [filter, setFilter] = useState('all')
  const { isHome } = useHome()

  let filteredBids = filter === 'all' ? bids : bids.filter((b) => b.status === filter)

  filteredBids = isHome ? filteredBids.slice(0, 4) : filteredBids.slice(0, 8)
  return (
    <div className="py-12">
      {/* Header */}
      <div className="flex text-center flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 ">
        <h1 className={` text-2xl md:3xl  font-bold text-shadow-cyan-400`}>
          {isHome ? 'Live Auctions' : 'Auctions Listings'}
        </h1>

        <div className={`flex justify-between items-center gap-2 ${isHome ? '' : 'flex-1'} `}>
          {isHome ? null : <Input type="text" placeholder="Search items..." className="w-full" />}
          <Select onValueChange={(value) => setFilter(value)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <HiOutlineAdjustmentsHorizontal />
          </Button>
        </div>
      </div>

      {/* Grid of BidCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredBids.map((bid, i) => (
          <BidCard key={i} {...bid} />
        ))}
      </div>
      <div className={`my-5 justify-center flex md:justify-end `}>
        {isHome && (
          <CustomButton text="More!" link="/bidlisting" className="bg-gradient px-6 py-0" />
        )}
      </div>

      <div className={`my-10`}>
        {isHome ? null : (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious size={50} href="#" className="bg-gradient h-10" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink size={25} href="#" className="bg-gradient h-5 w-5">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext size={25} href="#" className="bg-gradient h-10" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  )
}
