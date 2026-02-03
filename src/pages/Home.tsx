import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Microscope, 
  FlaskConical, 
  Leaf, 
  Droplets, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Award,
  Shield,
  Zap,
  Briefcase,
  Brain,
  Target,
  Eye
} from 'lucide-react'
import { toast } from 'react-toastify'

const Home = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [hoveredTile, setHoveredTile] = useState<number | null>(null)

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

  const stats = [
    {
      number: '500+',
      label: 'Installations Worldwide',
      icon: <Microscope className="w-8 h-8" />
    },
    {
      number: '100%',
      label: 'Customer Satisfaction',
      icon: <Award className="w-8 h-8" />
    },
    {
      number: '1K+',
      label: 'Completed Projects',
      icon: <Briefcase className="w-8 h-8" />
    },
  ]

  const products = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Human Cell Study Machine',
      description: 'Advanced cell analysis technology for medical research, diagnostics, and therapeutic development.',
      featured: true
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Plant Cell Study Machine',
      description: 'Specialized equipment for botanical research, agricultural studies, and plant biology.',
      featured: false
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Soil Cell Study Machine',
      description: 'Cutting-edge soil microbiology analysis system for environmental research and agriculture.',
      featured: true
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Research Consultation',
      description: 'Expert guidance and support for your research needs and project planning.',
      featured: false
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Custom Solutions',
      description: 'Tailored cell study solutions for specific research requirements and applications.',
      featured: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Training & Support',
      description: 'Comprehensive training programs and 24/7 technical support for all users.',
      featured: false
    },
  ]

  const features = [
    {
      icon: <Award className="w-8 h-8 text-brand-500" />,
      title: 'Certified Quality',
      description: 'ISO certified and FDA approved medical equipment'
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-500" />,
      title: 'Reliable & Safe',
      description: 'Built with safety standards for laboratory environments'
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-500" />,
      title: 'Advanced Technology',
      description: 'State-of-the-art imaging and analysis capabilities'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>BIO MINDZ Solutions | AI-Enabled Diagnostic Technology & Biosensing</title>
        <meta name="description" content="Empowering diagnostics through intelligent bio-tech innovation. Advanced AI-enabled devices, microfluidics, and next-generation biosensing for clinical, veterinary, agricultural, and industrial applications." />
      </Helmet>
      {/* Hero Section - Dark Background */}
      <section className="relative pt-24 pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern/Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-brand-500/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-blue-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 border border-brand-500/10 rounded-full"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Empowering Diagnostics Through
                <span className="block relative">
                  Intelligent Bio-Tech Innovation
                  <span className="absolute bottom-0 left-0 w-40 h-1 bg-brand-500"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advancing clinical, veterinary, agricultural, and industrial diagnostics 
                with AI-enabled devices, microfluidics, and next-generation biosensing technologies.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                GET A QUOTE
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square">
                <img
                  src="https://i.pinimg.com/1200x/f3/6a/51/f36a510c1845cc59f8f33c679cacbe85.jpg"
                  alt="BIO MINDZ Solutions - Laboratory and diagnostic technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Curved Overlapping */}
      <section className="relative -mt-20 mb-12 px-4 sm:px-6">
        <div className="relative bg-white rounded-[3rem] shadow-2xl max-w-4xl mx-auto">
          <div className="px-6 py-8 sm:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-gray-800">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-base text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-500 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become a global leader in intelligent biological diagnostics by innovating accessible, 
                accurate, and automated technologies that transform human, animal, and environmental health monitoring.
              </p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-500 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Mission</h2>
              </div>
              <ul className="text-gray-700 leading-relaxed space-y-2 text-sm">
                <li>• Design and develop AI-driven biosensing and diagnostic solutions for universal access.</li>
                <li>• Integrate machine learning, microfluidics, and robotics for fully automated laboratory workflows.</li>
                <li>• Support clinicians, researchers, and industry partners with high-precision and scalable technologies.</li>
                <li>• Accelerate translational research through strong collaborations in academia, industry, and healthcare.</li>
              </ul>
            </div>
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-500 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quality Policy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm mb-2">We at BIO MINDZ Solutions Pvt. Ltd. are committed to:</p>
              <ul className="text-gray-700 leading-relaxed space-y-1 text-sm">
                <li>• Delivering products that meet global regulatory and quality standards (ISO, CE, NABL requirements).</li>
                <li>• Maintaining strict quality control across design, prototyping, manufacturing, and validation.</li>
                <li>• Ensuring safe, reliable, and user-centric diagnostic technologies.</li>
                <li>• Continuous improvement through R&D, market feedback, and technology upgrades.</li>
              </ul>
            </div>
          </div>
          {/* Director's Note */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
              About the Directors
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;Our goal is to redefine diagnostic intelligence using automation and AI. 
                  We believe in developing technologies that simplify complex biological analysis 
                  and make high-quality diagnostics accessible to every laboratory.&rdquo;
                </p>
                <p className="text-sm text-gray-600 font-medium">— Director</p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;At BIO MINDZ Solutions, innovation is driven by purpose. We focus on solving 
                  real-world problems through cutting-edge engineering, microfluidics, and AI-powered 
                  biological analysis.&rdquo;
                </p>
                <p className="text-sm text-gray-600 font-medium">— Co-Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">ISO</span>
              <span className="text-sm text-gray-600">Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">CE</span>
              <span className="text-sm text-gray-600">Marked</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">NABL</span>
              <span className="text-sm text-gray-600">Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">FDA</span>
              <span className="text-sm text-gray-600">Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link to="/research" className="text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              Research
            </Link>
            <Link to="/services" className="text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              Services
            </Link>
            <Link to="/products" className="text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200 border border-gray-200"
              >
                <div className="bg-brand-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
                We Provide Best Cell Study
                <span className="block">
                  Solutions
                  <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
                </span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-all duration-200"
              >
                VIEW PRODUCTS
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-white text-brand-600 font-semibold rounded-lg border-2 border-brand-500 hover:bg-brand-50 transition-all duration-200"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const isHovered = hoveredTile === index
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredTile(index)}
                  onMouseLeave={() => setHoveredTile(null)}
                  className={`rounded-2xl p-6 transition-all duration-200 border shadow-sm cursor-pointer ${
                    isHovered
                      ? 'bg-accent-500 border-accent-500 shadow-xl'
                      : 'bg-white text-gray-900 border-gray-200'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 border ${
                    isHovered ? 'bg-white border-gray-200' : 'bg-brand-50 border-brand-100'
                  }`}>
                    <div className={isHovered ? 'text-gray-900' : 'text-brand-500'}>
                      {product.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                    {product.title}
                  </h3>
                  <p className={isHovered ? 'text-white' : 'text-gray-600'}>
                    {product.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section - Image Left, Text Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://i.pinimg.com/736x/ca/8d/06/ca8d060306664ab130ef716da08d7d83.jpg"
                  alt="BIO MINDZ Solutions - Laboratory and research facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
                About BIO MINDZ Solutions
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-brand-500"></span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                BIO MINDZ Solutions Pvt. Ltd. is a biotechnology innovation company specializing in 
                AI-enabled diagnostic devices, microfluidic platforms, and automated biosensing technologies. 
                We work across clinical diagnostics, veterinary sciences, food safety, agriculture, and industrial biotechnology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our goal is to redefine diagnostic intelligence using automation and AI. We believe in 
                developing technologies that simplify complex biological analysis and make high-quality 
                diagnostics accessible to every laboratory.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Why Choose BIO MINDZ Solutions?
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-brand-500"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with scientific excellence to deliver 
              cell study machines that meet the highest standards of accuracy and reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-100 rounded-lg p-3 mr-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Industry-Leading Accuracy
                  </h3>
                  <p className="text-gray-600">
                    Our machines deliver precise results with minimal margin of error, 
                    ensuring reliable data for critical research.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-100 rounded-lg p-3 mr-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Support Team
                  </h3>
                  <p className="text-gray-600">
                    Our team of scientists and engineers provides comprehensive support 
                    and training to ensure optimal performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-100 rounded-lg p-3 mr-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Continuous Innovation
                  </h3>
                  <p className="text-gray-600">
                    We stay at the forefront of technology, regularly updating our 
                    systems with the latest scientific advancements.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="bg-white rounded-xl p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-100 rounded-full mb-6">
                    <Microscope className="w-12 h-12 text-brand-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Trusted by Leading Institutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our diagnostic devices and biosensing technologies are used in 
                    research laboratories, universities, and medical facilities worldwide.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-600">500+</div>
                      <div className="text-sm text-gray-600 mt-1">Installations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-600">98%</div>
                      <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-600">24/7</div>
                      <div className="text-sm text-gray-600 mt-1">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Trusted by Leading Institutions
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            <div className="bg-gray-100 rounded-lg px-8 py-4 text-gray-600 font-semibold text-sm">
              Research Labs
            </div>
            <div className="bg-gray-100 rounded-lg px-8 py-4 text-gray-600 font-semibold text-sm">
              Universities
            </div>
            <div className="bg-gray-100 rounded-lg px-8 py-4 text-gray-600 font-semibold text-sm">
              Medical Facilities
            </div>
            <div className="bg-gray-100 rounded-lg px-8 py-4 text-gray-600 font-semibold text-sm">
              Pharma QC
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the latest updates, product news, and expert insights directly to your inbox.
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 w-full border-b-2 border-gray-300 focus-within:border-brand-500 transition-colors duration-200">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 py-2 text-base"
                  disabled={isSubmitting || isSubscribed}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubscribed}
                className={`px-6 py-2 text-base font-semibold transition-all duration-200 whitespace-nowrap ${
                  isSubscribed
                    ? 'text-green-600 cursor-not-allowed'
                    : isSubmitting
                    ? 'text-brand-400 cursor-not-allowed'
                    : 'text-brand-600 hover:text-brand-700'
                }`}
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Subscribed
                  </span>
                ) : isSubmitting ? (
                  'Subscribing...'
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Advance Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of research institutions that trust BIO MINDZ Solutions for their diagnostic needs. 
            Contact us to learn how our AI-enabled devices can enhance your capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-200"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
