import { UserButton } from '@clerk/clerk-react'

export function Others() {
  return (
    <div className="inset-0 ">
      <h1>COmponents</h1>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <UserButton userProfileUrl="/profile" />
    </div>
  )
}

export default Dashboard
