import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth.jsx'
import authService from '../services/auth.service.js'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import PasswordInput from '../components/PasswordInput.jsx'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await authService.login({
        email: email.trim(),
        password: password.trim()
      })
      login(result)
      navigate('/')
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        err?.message ||
        'Login failed. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-[#f6fbf7] flex items-center justify-center px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-16 mb-24">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-extrabold text-[#184d37] mb-6">
            Welcome Back
          </h1>

          <p className="text-lg text-[#5f7f73] mb-10">
            Sign in to your account to access personalized farming insights,
            manage predictions, and track crop performance.
          </p>

          <ul className="space-y-4 text-[#184d37] font-medium">
            <li>✔ Access your farming profile</li>
            <li>✔ View crop predictions</li>
            <li>✔ Get personalized recommendations</li>
            <li>✔ Track your farm progress</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#dceedd] rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-[#184d37] mb-8">
            Log In
          </h2>

          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#184d37] hover:bg-[#123b2b] text-white py-3 rounded-xl text-lg"
            >
              {loading ? 'Signing in…' : 'Log In'}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-[#5f7f73]">
            Don’t have an account?{' '}
            <Link to="/register" className="text-[#184d37] font-semibold">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Login
