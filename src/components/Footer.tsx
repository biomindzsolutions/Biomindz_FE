import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  Microscope,
  CheckCircle2
} from 'lucide-react'
import { toast } from 'react-toastify'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call - replace with actual API endpoint
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Thank you for subscribing to our newsletter!')
      setIsSubscribed(true)
      setEmail('')
      
      // Reset subscription status after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/research', label: 'Research' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ]

  const moreLinks = [
    { path: '/ip-patents', label: 'IP & Patents' },
    { path: '/collaborations', label: 'Collaborations' },
    { path: '/news', label: 'News' },
  ]

  const informationLinks = [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cancellation & Refund', href: '#' },
    { label: 'Help & Support', href: '#' },
  ]

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="BIO MINDZ Solutions"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-gray-900">BIO MINDZ Solutions</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering diagnostics through intelligent bio-tech innovation. AI-enabled devices,
              microfluidics, and next-generation biosensing technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-600 hover:text-brand-700 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4">More</h3>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-600 hover:text-brand-700 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4">Information</h3>
            <ul className="space-y-2">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-brand-600 hover:text-brand-700 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:business@biomindsolutions.com"
                  className="text-gray-600 hover:text-brand-600 text-sm transition-colors duration-200"
                >
                  business@biomindsolutions.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-gray-600 mr-3 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-brand-600 text-sm transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  123 Research Avenue, Opp Science Park,<br />
                  Research District, RD 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="max-w-2xl">
            <h3 className="text-gray-900 font-semibold text-base mb-2">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest updates, product news, and expert insights directly to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-4">
              <div className="flex-1 border-b-2 border-gray-300 focus-within:border-brand-600 transition-colors duration-200">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 py-2 text-sm"
                  disabled={isSubmitting || isSubscribed}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubscribed}
                className={`px-6 py-2 text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  isSubscribed
                    ? 'text-green-600 cursor-not-allowed'
                    : isSubmitting
                    ? 'text-blue-400 cursor-not-allowed'
                    : 'text-brand-600 hover:text-brand-700'
                }`}
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Subscribed
                  </span>
                ) : isSubmitting ? (
                  'Subscribing...'
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} BIO MINDZ Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">Follow Us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-500 hover:text-brand-600 transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
