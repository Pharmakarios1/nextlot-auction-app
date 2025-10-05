import { useState, useEffect } from 'react'

const badgeColor = {
  red: 'bg-red-600',
  purple: 'bg-fuchsia-600',
  emerald: 'bg-emerald-600',
  blue: 'bg-blue-600',
  yellow: 'bg-yellow-600',
  slate: 'bg-slate-600',
}

function useRandomBadge() {
  const [color, setColor] = useState('bg-black')

  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(badgeColor)
      const randomKey = keys[Math.floor(Math.random() * keys.length)]
      setColor(badgeColor[randomKey])
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return { color }
}

export default useRandomBadge
