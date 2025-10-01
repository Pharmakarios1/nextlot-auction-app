import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className="flex place-content-center mx-auto my-10 ">
      <SignIn signUpUrl="/signup" forceRedirectUrl="/dashboard" />
    </div>
  )
}

export default Login
