import { Separator } from '@/components/ui/separator.js'
import BidsPage from './_partials/BidListing/index.js'
import { Pagination } from '@/components/ui/pagination.js'

const Bidboard = () => {
  return (
    <div className="">
      <BidsPage />
      <Separator />
      <Pagination />
    </div>
  )
}

export default Bidboard
