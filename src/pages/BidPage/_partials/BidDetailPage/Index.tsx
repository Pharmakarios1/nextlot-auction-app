import { useParams } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card.js'
import { Button } from '@/components/ui/button.js'
import { Badge } from '@/components/ui/badge.js'
import { Separator } from '@/components/ui/separator.js'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.js'
import { Clock, Heart, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils.js'
import { bids } from '@/data/bid.js'
import CustomButton from '@/components/customs/CustomButton.js'

export default function BidDetailPage() {
  const { id } = useParams<{ id: string }>()

  // ✅ Find the bid by ID
  const bid = bids.find((b) => b.id === id)

  if (!bid) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-xl font-bold">Bid not found</h2>
        <p className="text-muted-foreground">The auction item you’re looking for doesn’t exist.</p>
      </div>
    )
  }

  const bidHistory = [
    { user: 'John Doe', amount: bid.currentBid, time: '2 min ago' },
    { user: 'Jane Smith', amount: '$1,150', time: '10 min ago' },
    { user: 'Mark Johnson', amount: '$1,100', time: '20 min ago' },
    { user: 'Emily Davis', amount: '$1,050', time: '30 min ago' },
  ]

  const onPlaceBid = () => {}

  return (
    <div className="main-layout mx-auto py-8">
      <Card className="overflow-hidden rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative">
            <img src={bid.image} alt={bid.title} className="h-full w-full object-cover" />
            <div className="absolute top-2 left-2 flex gap-1">
              {bid.badges.map((badge, i) => (
                <Badge key={i} variant="secondary" className="capitalize">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">{bid.title}</h1>
            <p className="text-muted-foreground">{bid.description}</p>

            <Separator />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Category:</span> {bid.category}
              </div>
              <div>
                <span className="font-medium">Seller:</span> {bid.seller}
              </div>
              <div>
                <span className="font-medium">Current Bid:</span> {bid.currentBid}
              </div>
              <div>
                <span className="font-medium">Starting Price:</span> {bid.startingPrice}
              </div>
              <div>
                <span className="font-medium">Total Bids:</span> {bid.bidCount}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {bid.timeRemaining}
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-semibold uppercase',
                  bid.status === 'live' && 'bg-green-100 text-green-700',
                  bid.status === 'upcoming' && 'bg-yellow-100 text-yellow-700',
                  bid.status === 'closed' && 'bg-red-100 text-red-700',
                )}
              >
                {bid.status}
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              <CustomButton
                className="flex-1 bg-gradient"
                disabled={bid.status !== 'live'}
                onClick={onPlaceBid}
                text="Place Bid"
                link={`/bidlisting/bid/${id}`}
              />
              <Button variant="ghost" size="icon">
                <Heart size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 size={18} />
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Bidding History */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Bidding History</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bidder</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bidHistory.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.user}</TableCell>
                  <TableCell className="font-medium">{entry.amount}</TableCell>
                  <TableCell>{entry.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
