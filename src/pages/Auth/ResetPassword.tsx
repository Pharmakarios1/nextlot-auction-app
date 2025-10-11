import { useState } from 'react'
import { resetpassword } from '@/api/endpoints/auth.js'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

export default function ResetPassword() {
  const mutation = useMutation({
    mutationFn: resetpassword,
    onSuccess: (data) => {
      alert('password reset successful')
      console.log(data)
    },
    onError: (error) => {
      alert(error.message)
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.value
    mutation.mutate(email)
  }

  return (
    <div className="max-w-sm mx-auto mt-20 shadow-2xl main-layout border-2 py-10 px-5 rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
        <input
          name="email"
          placeholder="Enter your mail to reset"
          type="email"
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded bg-gradient cursor-pointer"
        >
          Continue
        </button>
      </form>
      <p className="text-sm dark:text-muted pt-5 text-center">
        Don't have an account?{' '}
        <Link to={'/login'} className="text-blue-600 font-bold dark:text-white">
          Back to Login
        </Link>
      </p>
    </div>
  )
}
