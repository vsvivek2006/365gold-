import { Link } from 'react-router-dom';
import { Crown, Mail, Shield, FileText, HelpCircle, Info } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { to: '/about/', label: 'About Us' },
      { to: '/contact/', label: 'Contact Us' },
      { to: '/features/', label: 'Features' },
      { to: '/how-it-works/', label: 'How It Works' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { to: '/guide/', label: 'Gold365 Guide' },
      { to: '/getting-started/', label: 'Getting Started' },
      { to: '/login-guide/', label: 'Login Guide' },
      { to: '/app-guide/', label: 'App Guide' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/help/', label: 'Help Center' },
      { to: '/faq/', label: 'FAQ' },
      { to: '/troubleshooting/', label: 'Troubleshooting' },
      { to: '/security/', label: 'Safety & Security' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy-policy/', label: 'Privacy Policy' },
      { to: '/terms/', label: 'Terms & Conditions' },
      { to: '/disclaimer/', label: 'Disclaimer' },
      { to: '/cookie-policy/', label: 'Cookie Policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Crown className="w-6 h-6 text-amber-400" />
              <span>Gold<span className="text-amber-400">365</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              Gold365 is your trusted platform for online gaming and entertainment.
              Access guides, download the app, and get support all in one place.
            </p>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-amber-400" />
              <Shield className="w-5 h-5 text-amber-400" />
              <FileText className="w-5 h-5 text-amber-400" />
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <Info className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm hover:text-amber-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Gold365. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/disclaimer/" className="hover:text-amber-400 transition-colors">Disclaimer</Link>
            <Link to="/sitemap.xml" className="hover:text-amber-400 transition-colors">Sitemap</Link>
            <Link to="/accessibility/" className="hover:text-amber-400 transition-colors">Accessibility</Link>
            <Link to="/responsible-use/" className="hover:text-amber-400 transition-colors">Responsible Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
