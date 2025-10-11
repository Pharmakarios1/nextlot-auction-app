export default function ResetPasswordRedirect() {
  return (
    <div className="max-w-sm mx-auto mt-20 shadow-2xl main-layout border-2 py-10 px-5 rounded-md">
      <p>Please check your mail and reset your password</p>
      <p className="text-sm dark:text-muted pt-5 text-center">
        Don't have an account?{' '}
        <Link to={'/login'} className="text-blue-600 font-bold dark:text-white">
          Back to Login
        </Link>
      </p>
    </div>
  )
}
