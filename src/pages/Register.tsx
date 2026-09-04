import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Crown, Mail, Lock, Eye, EyeOff, User, ArrowRight, Check } from 'lucide-react';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <SEO
        title="Register for Gold365 — Create Your Account"
        description="Create your Gold365 account in minutes. Register to access the platform and start your journey."
        path="/register/"
      />
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-900 font-bold text-2xl mb-2">
              <Crown className="w-8 h-8 text-amber-500" />
              <span>Gold<span className="text-amber-500">365</span></span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Create Your Account</h1>
            <p className="text-gray-600 mt-1">Join Gold365 in just a few minutes</p>
          </div>

          <form className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Create a strong password"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" required className="mt-1 rounded" />
              <span>
                I agree to the{' '}
                <Link to="/terms/" className="text-amber-600 hover:underline">Terms & Conditions</Link>{' '}
                and{' '}
                <Link to="/privacy-policy/" className="text-amber-600 hover:underline">Privacy Policy</Link>
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login/" className="text-amber-600 font-semibold hover:text-amber-700">
              Log in here
            </Link>
          </p>

          <div className="mt-6 bg-amber-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Why register?</p>
            <ul className="space-y-1">
              {['Access the full platform', 'Sync across all devices', 'Get support and updates'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
