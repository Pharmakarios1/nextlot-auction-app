import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <UserButton userProfileUrl="/profile" />
    </div>
  )
}

export default Dashboard
