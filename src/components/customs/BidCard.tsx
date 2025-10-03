import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card.js'
import { Button } from '@/components/ui/button.js'
import { Badge } from '@/components/ui/badge.js'
import { Clock, Heart, InfoIcon, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils.js'
import CustomButton from './CustomButton.js'
import { useNavigate } from 'react-router-dom'
import useRandomBadge from '@/hooks/useRandomBadge.js'

interface BidCardProps {
  id: string
  image: string
  title: string
  description?: string
  category?: string
  currentBid: string
  startingPrice?: string
  bidCount?: number
  timeRemaining: string
  status: 'live' | 'upcoming' | 'closed'
  seller?: string
  rating?: number
  badges?: string[]
  onPlaceBid?: () => void
  onWatch?: () => void
  onShare?: () => void
  onDetail?: () => void
}

const BidCard = ({
  id,
  image,
  title,
  description,
  category,
  currentBid,
  startingPrice,
  bidCount,
  timeRemaining,
  status,
  seller,
  rating,
  badges = [],
  onPlaceBid,
  onWatch,
  onShare,
}: BidCardProps) => {
  const navigate = useNavigate()
  const { color } = useRandomBadge()

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-md p-0 pb-1">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="absolute top-1 right-2 flex gap-1">
          {badges.map((badge, i) => (
            <Badge key={i} variant="secondary" className={`capitalize  ${color} text-white`}>
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="px-4">
        <h3 className="font-semibold text-lg line-clamp-1 text-gradient">{title}</h3>
        {category && <p className="text-xs text-muted-foreground mt-1">{category}</p>}
      </div>

      {/* Content */}
      <div className="px-4 pt-0 space-y-1">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Current Bid:</span>
          <span>{currentBid}</span>
        </div>
        {startingPrice && (
          <div className="flex justify-between text-sm">
            <span>Starting Price:</span>
            <span>{startingPrice}</span>
          </div>
        )}
        {bidCount !== undefined && (
          <div className="flex justify-between text-sm">
            <span>Bids:</span>
            <span>{bidCount}</span>
          </div>
        )}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock size={14} /> {timeRemaining}
          </div>
          <span
            className={cn(
              'text-xs font-semibold uppercase',
              status === 'live' && 'text-green-600',
              status === 'upcoming' && 'text-yellow-600',
              status === 'closed' && 'text-red-600',
            )}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 flex justify-between items-center gap-2">
        <CustomButton
          className="flex-1 bg-gradient p-0"
          disabled={status !== 'live'}
          onClick={onPlaceBid}
          text="Place Bid"
          link="/bidlisting"
        />

        <Button variant="ghost" size="icon" onClick={() => navigate(`/bidlisting/${id}`)}>
          <InfoIcon />
        </Button>

        <Button variant="ghost" size="icon" onClick={onWatch}>
          <Heart size={18} />
        </Button>
        <Button variant="ghost" size="icon" onClick={onShare}>
          <Share2 size={18} />
        </Button>
      </div>
    </Card>
  )
}

export default BidCard
