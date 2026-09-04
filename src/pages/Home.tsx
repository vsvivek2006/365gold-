import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import LinkCards from '@/components/LinkCards';
import {
  Crown, Smartphone, Shield, Download, HelpCircle, BookOpen,
  Star, ArrowRight, CheckCircle2, Zap, Lock, Users,
} from 'lucide-react';

const features = [
  { icon: Smartphone, title: 'Mobile App', description: 'Dedicated Android app with optimized performance and push notifications.' },
  { icon: Shield, title: 'Secure Platform', description: 'Industry-standard encryption and secure authentication protect your account.' },
  { icon: Zap, title: 'Fast & Responsive', description: 'Lightning-fast performance across desktop, tablet, and mobile devices.' },
  { icon: Lock, title: 'Account Security', description: 'Strong password protection and security tools to keep your account safe.' },
  { icon: HelpCircle, title: '24/7 Support', description: 'Comprehensive help center, FAQs, and troubleshooting guides.' },
  { icon: Users, title: 'Cross-Device Sync', description: 'Your account works seamlessly across all your devices.' },
];

const guideCards = [
  { title: 'Getting Started', description: 'New to Gold365? Start here with our quick-start guide.', path: '/getting-started/' },
  { title: 'Gold365 Guide', description: 'The complete platform walkthrough covering every feature.', path: '/guide/' },
  { title: 'Login Guide', description: 'Learn how to log in securely and troubleshoot login issues.', path: '/login-guide/' },
  { title: 'App Guide', description: 'Everything about the Gold365 mobile app and installation.', path: '/app-guide/' },
  { title: 'Download Guide', description: 'All download options explained in one place.', path: '/download-guide/' },
  { title: 'Registration Guide', description: 'Step-by-step instructions to create your account.', path: '/registration-guide/' },
];

const homeFAQs = [
  { question: 'What is Gold365?', answer: 'Gold365 is an online gaming and entertainment platform accessible via web browser and mobile app. It offers a variety of games and interactive experiences for users.' },
  { question: 'How do I create an account?', answer: 'Visit the Register page, enter your email address and a secure password, accept the terms, and submit the form. See our Registration Guide for detailed instructions.' },
  { question: 'Is there a mobile app?', answer: 'Yes, Gold365 offers a dedicated Android app available as an APK download. Visit our APK Download page for installation instructions.' },
  { question: 'Can I use Gold365 on multiple devices?', answer: 'Yes, your account works across all devices — desktop, tablet, and mobile. Simply log in with the same credentials on each device.' },
  { question: 'Is Gold365 safe?', answer: 'Gold365 employs industry-standard security practices. Users should also follow best practices — use strong passwords, log out from shared devices, and review our Security Tips.' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Gold365 — Online Gaming & Entertainment Platform"
        description="Gold365 is your trusted online gaming platform. Access games, download the mobile app, read guides, and get support — all in one place."
        path="/"
        ogTitle="Gold365 — Online Gaming & Entertainment Platform"
        ogDescription="Access games, download the app, read guides, and get 24/7 support on Gold365."
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 80%, #f59e0b 0%, transparent 40%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <Crown className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Trusted Online Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-amber-400">Gold365</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Your premier destination for online gaming and entertainment. Access games, download the mobile app, and get comprehensive support — all in one secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-400 transition-all transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/download/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Download className="w-5 h-5" />
                Download App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, label: 'Secure Platform', value: 'Industry-Standard' },
              { icon: Smartphone, label: 'Mobile App', value: 'Android Available' },
              { icon: HelpCircle, label: 'Support', value: '24/7 Help Center' },
              { icon: Star, label: 'User Experience', value: 'Cross-Device Sync' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Gold365?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Gold365 is an online gaming and entertainment platform designed to provide a seamless, secure, and engaging experience. Whether you are playing on your desktop or using our mobile app, Gold365 offers a reliable and user-friendly environment for all your gaming needs.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need for a great online gaming experience, built with security and performance in mind.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-amber-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/features/" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700">
              View all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <BookOpen className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Guides & Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive guides to help you get the most out of Gold365, from beginner basics to advanced features.</p>
          </div>
          <LinkCards cards={guideCards} />
        </div>
      </section>

      {/* App/Download Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <Smartphone className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Mobile App</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Download the Gold365 App</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get the best mobile experience with the Gold365 Android app. Faster load times, push notifications, and a touch-optimized interface — all in one app.
              </p>
              <ul className="space-y-3 mb-8">
                {['Optimized for mobile devices', 'Push notifications for account activity', 'Lower data usage than browser', 'Quick access from your home screen'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/apk/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors">
                  <Download className="w-5 h-5" />
                  Download APK
                </Link>
                <Link to="/app/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-500/20 to-slate-800 rounded-2xl border border-amber-500/20 flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-amber-400/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <HelpCircle className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to the most common questions about Gold365.</p>
          </div>
          <FAQAccordion items={homeFAQs} />
          <div className="text-center mt-8">
            <Link to="/faq/" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700">
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust/Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-xl border border-gray-200 text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Safety & Security</h3>
              <p className="text-sm text-gray-600 mb-4">Learn about our security measures and how to protect your account.</p>
              <Link to="/security/" className="text-amber-600 font-semibold text-sm hover:text-amber-700">Learn more →</Link>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Help Center</h3>
              <p className="text-sm text-gray-600 mb-4">Find answers and solutions in our comprehensive support center.</p>
              <Link to="/help/" className="text-amber-600 font-semibold text-sm hover:text-amber-700">Get help →</Link>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Responsible Use</h3>
              <p className="text-sm text-gray-600 mb-4">We are committed to responsible gaming and user well-being.</p>
              <Link to="/responsible-use/" className="text-amber-600 font-semibold text-sm hover:text-amber-700">Read more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Create your Gold365 account today and join our community of users. It takes just a few minutes."
        primary={{ label: 'Register Now', path: '/register/' }}
        secondary={{ label: 'Contact Us', path: '/contact/' }}
      />
    </>
  );
}
