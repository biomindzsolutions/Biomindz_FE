import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle2,
  MessageSquare,
  User
} from 'lucide-react'
import { toast } from 'react-toastify'
import apiClient from '../services/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.email && !formData.message) {
      toast.error('Please provide either an email or a message')
      return
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      const messageWithMeta = [
        formData.organization && `Organization: ${formData.organization}`,
        formData.phone && `Phone: ${formData.phone}`,
        formData.message
      ].filter(Boolean).join('\n\n')
      const response = await apiClient.post('/biomindz/newRequest', {
        fullName: formData.fullName || undefined,
        email: formData.email || undefined,
        message: messageWithMeta || undefined,
        type: 'contact',
      })

      if (response.data?.success) {
        toast.success('Thank you for contacting us! We will get back to you soon.')
        setIsSubmitted(true)
        setFormData({
          fullName: '',
          organization: '',
          email: '',
          phone: '',
          message: '',
        })

        // Reset submitted state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Something went wrong. Please try again.'
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-brand-600" />,
      title: 'Business Enquiries',
      content: 'business@biomindsolutions.com',
      link: 'mailto:business@biomindsolutions.com',
      note: 'For partnerships, collaborations, and OEM/contract manufacturing',
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-600" />,
      title: 'Support',
      content: 'support@biomindsolutions.com',
      link: 'mailto:support@biomindsolutions.com',
      note: 'For product service and technical support',
    },
    {
      icon: <Phone className="w-6 h-6 text-brand-600" />,
      title: 'Phone',
      content: 'Phone number (you will provide)',
      link: '#',
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-600" />,
      title: 'Address',
      content: 'Address (you will provide)',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are here to support your research, manufacturing, collaboration, and diagnostic needs.
            </p>
            <p className="text-gray-600 mt-2">BIO MINDZ Solutions Pvt. Ltd.</p>
          </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Enter your organization"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your inquiry..."
                    required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-600 text-white cursor-not-allowed'
                      : isSubmitting
                      ? 'bg-brand-400 text-white cursor-not-allowed'
                      : 'bg-brand-500 text-white hover:bg-brand-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Either email or message is required
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. Our team is ready to assist you 
                with any questions about our cell study machines.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                >
                  <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    {info.link !== '#' ? (
                      <a href={info.link} className="text-brand-600 hover:text-brand-700 font-medium">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                    {'note' in info && info.note && (
                      <p className="text-sm text-gray-500 mt-1">{info.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Business Hours
              </h3>
              <div className="space-y-1 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (Optional - can be replaced with actual map integration) */}
        <div className="mt-16">
          <div className="bg-gray-100 rounded-xl p-12 text-center border border-gray-200">
            <MapPin className="w-16 h-16 text-brand-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
            <p className="text-gray-600 mb-4">
              Address (you will provide). GST / CIN numbers optional.
            </p>
            <p className="text-sm text-gray-500">
              Map integration can be added here (Google Maps, Mapbox, etc.)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
