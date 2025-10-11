import { useState } from 'react'
import { login } from '@/api/endpoints/auth.js'
import { useAuth } from '@/context/Auth/AuthContext.js'
import { Separator } from '@/components/ui/separator.js'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const { setUser } = useAuth()
  const [form, setForm] = useState({ username: '', password: '', email: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(form.username, form.password)
      const userRes = await fetch('http://127.0.0.1:8000/users/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      const user = await userRes.json()
      setUser(user)
      window.location.href = '/dashboard'
    } catch (err) {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-20 shadow-2xl main-layout border-2 py-10 px-5 rounded-md">
      <div className="text-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-gradient">Sign Up to Nextlot</h1>
        <p className=" text-sm dark:text-muted mt-2">Please sign up to continue</p>
      </div>
      <div className="border-[1px] flex gap-3 mb-4 text-sm place-content-center p-2 rounded-sm dark:text-muted cursor-pointer">
        <FcGoogle size={20} /> <p>Continue with Google</p>
      </div>
      <div className="flex items-center my-8">
        <Separator />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4 text-sm">
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="password"
          placeholder="Confirm Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded bg-gradient cursor-pointer"
        >
          Continue
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <p className="text-sm dark:text-muted pt-5 text-center">
        Already a member?{' '}
        <Link to={'/login'} className="text-blue-600 font-bold dark:text-white">
          Sign In
        </Link>
      </p>
    </div>
  )
}
