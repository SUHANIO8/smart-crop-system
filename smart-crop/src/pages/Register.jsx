// src/pages/Register.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth.jsx'
import authService from '../services/auth.service.js' // <- default import (fixed)
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

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedPassword = password
    const trimmedConfirm = confirmPassword

    if (!trimmedName) {
      setError('Please enter your full name.')
      setLoading(false)
      return
    }

    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address.')
      setLoading(false)
      return
    }

    if (!validatePassword(trimmedPassword)) {
      setError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
      )
      setLoading(false)
      return
    }

    if (trimmedPassword !== trimmedConfirm) {
      setError('Passwords do not match.')
      setLoading(false)
      return
    }

    try {
      const result = await authService.register({
        name: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword,
      })

      // Expect result = { token, user } (AuthProvider.login supports this)
      login(result)
      navigate('/')
    } catch (err) {
      console.error('Register error:', err, err?.response?.data)
      const message = err?.response?.data?.message || err?.message || 'Registration failed. Please try again.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-md w-full space-y-8 transition-all duration-300 hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign in to your existing account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}

          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />

          <Input
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />

          <div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Register
