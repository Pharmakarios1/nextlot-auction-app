import { SignUp } from '@clerk/clerk-react'
const Signup = () => {
  return (
    <div className="flex place-content-center mx-auto my-10">
      <SignUp signInUrl="/login" forceRedirectUrl="/dashboard" />
    </div>
  )
}

export default Signup
