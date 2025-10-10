import { useEffect, useState } from 'react'
import { getCurrentUser } from '@/api/endpoints/auth.js'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => {
        window.location.href = '/login'
      })
  }, [])

  if (!user) return <p>Loading...</p>

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold">
        Welcome, {user.username} ({user.role})
      </h2>
    </div>
  )
}

export function Others() {
  return <h2> hello</h2>
}
