import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { toast } from 'react-toastify'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Login | BIO MINDZ Solutions</title>
        <meta name="description" content="Login page" />
      </Helmet>

      <section className="relative pt-16 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-brand-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3 mb-8">
            <img
              src="/logo.png"
              alt="BIO MINDZ Solutions"
              className="w-16 h-18 rounded-lg bg-white/90 p-1"
              loading="eager"
            />
            <span className="text-white font-semibold tracking-wide text-5xl">BIO MINDZ</span>
          </Link>
          <div className="flex flex-row gap-4 items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Login
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-brand-500" />
          </h1>
          </div>

        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Welcome back</h2>
                <p className="text-sm text-gray-600">Enter your details to continue.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full pl-10 pr-11 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toast.info('Login will be enabled soon.')}
                className="w-full mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
              >
                Login
              </button>

              <p className="text-xs text-gray-500">
                Authentication will be added later.
              </p>

              <div className="pt-2">
                <Link to="/" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login

