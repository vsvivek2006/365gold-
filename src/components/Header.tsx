import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about/', label: 'About' },
  { to: '/guide/', label: 'Guide' },
  { to: '/features/', label: 'Features' },
  { to: '/download/', label: 'Download' },
  { to: '/help/', label: 'Help' },
  { to: '/blog/', label: 'Blog' },
  { to: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <Crown className="w-6 h-6 text-amber-400" />
            <span>Gold<span className="text-amber-400">365</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/login/"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register/"
              className="px-4 py-2 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Register
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-slate-900 border-t border-amber-500/20 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-amber-400 bg-amber-400/10' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex gap-2 pt-2 border-t border-white/10">
            <Link
              to="/login/"
              onClick={() => setOpen(false)}
              className="flex-1 text-center px-4 py-2 text-sm font-medium text-gray-300 border border-white/20 rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/register/"
              onClick={() => setOpen(false)}
              className="flex-1 text-center px-4 py-2 text-sm font-bold text-slate-900 bg-amber-400 rounded-lg"
            >
              Register
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
