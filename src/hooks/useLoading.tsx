import { useState, useEffect } from 'react'

export function useLoading(duration: number = 2000) {
  const [showBidUI, setShowBidUI] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setShowBidUI(true)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return { loading, showBidUI }
}
