import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth.jsx'
import authService from '../services/auth.service.js'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import PasswordInput from '../components/PasswordInput.jsx'
import { validateEmail, validatePassword } from '../utils/validators.js'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      setLoading(false)
      return
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters and include uppercase, lowercase, and a number.'
      )
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      setLoading(false)
      return
    }

    try {
      const result = await authService.register({
        name: name.trim(),
        email: email.trim(),
        password
      })
      login(result)
      navigate('/')
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        err?.message ||
        'Registration failed.'
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
            Start Your Farming Journey
          </h1>

          <p className="text-lg text-[#5f7f73] mb-10">
            Join our community and gain access to intelligent soil monitoring,
            crop predictions, and expert farming insights.
          </p>

          <ul className="space-y-4 text-[#184d37] font-medium">
            <li>✔ Real-time soil monitoring</li>
            <li>✔ AI-powered crop predictions</li>
            <li>✔ Personalized recommendations</li>
            <li>✔ Community support & expertise</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#dceedd] rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-[#184d37] mb-8">
            Create Account
          </h2>

          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=""
              required
            />

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

            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#184d37] hover:bg-[#123b2b] text-white py-3 rounded-xl text-lg"
            >
              {loading ? 'Creating Account…' : 'Create Account'}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-[#5f7f73]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#184d37] font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Register
