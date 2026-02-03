import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Microscope, 
  Award,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Zap,
  Shield,
  Linkedin,
  Twitter,
  Globe,
  BookOpen
} from 'lucide-react'

const About = () => {
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

  const whatWeDo = [
    'Design and develop advanced biological imaging devices.',
    'Create intelligent colony counters, cell analyzers, urine & semen analysis systems.',
    'Develop microfluidic cartridges for point-of-care testing.',
    'Provide contract research and contract manufacturing services.',
    'Collaborate with global R&D partners to accelerate innovation.'
  ]

  const approach = [
    'Artificial Intelligence',
    'Embedded Electronics',
    'Optics & Machine Vision',
    'Microfluidics',
    'Bio-imaging',
    'Data science and cloud connectivity'
  ]

  const values = [
    'Innovation with impact',
    'Customer-centric development',
    'Quality, safety, and compliance',
    'Transparency and ethical biotechnology',
    'Sustainable and scalable solutions'
  ]

  const team = [
    {
      name: 'Director',
      role: 'Director',
      description: 'Our goal is to redefine diagnostic intelligence using automation and AI. We believe in developing technologies that simplify complex biological analysis and make high-quality diagnostics accessible to every laboratory.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      website: '#',
    },
    {
      name: 'Co-Director',
      role: 'Co-Director',
      description: 'At BIO MINDZ Solutions, innovation is driven by purpose. We focus on solving real-world problems through cutting-edge engineering, microfluidics, and AI-powered biological analysis.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      website: '#',
    },
    {
      name: 'Head of Research',
      role: 'Head of R&D',
      description: 'Leading our research initiatives in AI-driven diagnostics and microfluidic technologies. Focused on transforming laboratory workflows through intelligent automation.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      website: '#',
    },
    {
      name: 'Operations Lead',
      role: 'Operations Director',
      description: 'Ensuring seamless delivery of diagnostic solutions. Expert in scaling operations and maintaining quality standards across our product portfolio.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      website: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | BIO MINDZ Solutions - AI-Enabled Diagnostic Technology</title>
        <meta name="description" content="BIO MINDZ Solutions is a biotechnology innovation company specializing in AI-enabled diagnostic devices, microfluidic platforms, and automated biosensing technologies for clinical, veterinary, and industrial applications." />
      </Helmet>
      {/* Hero Section - Dark Background */}
      <section className="relative pt-24 pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern/Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About BIO MINDZ
              <span className="block relative">
                Solutions
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A biotechnology innovation company specializing in AI-enabled diagnostic devices, 
              microfluidic platforms, and automated biosensing technologies.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              GET A QUOTE
            </Link>
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

      {/* About Us Section - Image Left, Text Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop"
                  alt="BIO MINDZ Solutions - Laboratory and research facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
                Who We Are
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-brand-500"></span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                BIO MINDZ Solutions Pvt. Ltd. is a biotechnology innovation company specializing in 
                AI-enabled diagnostic devices, microfluidic platforms, and automated biosensing technologies. 
                We work across clinical diagnostics, veterinary sciences, food safety, agriculture, and industrial biotechnology.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
            Our Story
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-brand-100 p-3 rounded-lg flex-shrink-0">
              <BookOpen className="w-8 h-8 text-brand-600" />
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                BIO MINDZ Solutions was founded with a vision to transform biological diagnostics through intelligent automation. Our journey began when our founders recognized a critical gap in the market for reliable, accurate, and accessible diagnostic technologies.
              </p>
              <p>
                Today, we serve research institutions, universities, and medical facilities across the globe. Our commitment to innovation, quality, and customer satisfaction has earned us the trust of leading researchers and scientists worldwide. We continue to push the boundaries of what's possible in AI-enabled biosensing and microfluidic diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
            What We Do
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <ul className="space-y-4">
            {whatWeDo.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
            Quality Policy
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            We at BIO MINDZ Solutions Pvt. Ltd. are committed to:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
              Delivering products that meet global regulatory and quality standards (ISO, CE, NABL requirements)
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
              Maintaining strict quality control across design, prototyping, manufacturing, and validation
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
              Ensuring safe, reliable, and user-centric diagnostic technologies
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
              Continuous improvement through R&D, market feedback, and technology upgrades
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certifications & Accreditations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="bg-white rounded-xl px-8 py-4 border border-gray-200 shadow-sm">
              <span className="text-lg font-bold text-gray-800">ISO</span>
              <p className="text-sm text-gray-600 mt-1">Certified</p>
            </div>
            <div className="bg-white rounded-xl px-8 py-4 border border-gray-200 shadow-sm">
              <span className="text-lg font-bold text-gray-800">CE</span>
              <p className="text-sm text-gray-600 mt-1">Marked</p>
            </div>
            <div className="bg-white rounded-xl px-8 py-4 border border-gray-200 shadow-sm">
              <span className="text-lg font-bold text-gray-800">NABL</span>
              <p className="text-sm text-gray-600 mt-1">Accredited</p>
            </div>
            <div className="bg-white rounded-xl px-8 py-4 border border-gray-200 shadow-sm">
              <span className="text-lg font-bold text-gray-800">FDA</span>
              <p className="text-sm text-gray-600 mt-1">Approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
            Our Approach
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            We integrate the following to build the next generation of intelligent biological diagnostic platforms:
          </p>
          <div className="flex flex-wrap gap-4">
            {approach.map((item, index) => (
              <span
                key={index}
                className="px-5 py-3 bg-brand-50 text-brand-800 rounded-xl font-medium border border-brand-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
            Our Values
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <ul className="space-y-4">
            {values.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 text-lg">
                <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
            Our Team
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Meet the leaders driving innovation at BIO MINDZ Solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center mb-5 overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-brand-500 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="flex items-center gap-3">
                  <a href={member.linkedin} aria-label="LinkedIn" className="text-gray-400 hover:text-brand-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} aria-label="Twitter" className="text-gray-400 hover:text-brand-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.website} aria-label="Website" className="text-gray-400 hover:text-brand-500 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide cutting-edge cell study machines that empower researchers, scientists, 
                and medical professionals to make breakthrough discoveries. We are committed to 
                delivering precision, reliability, and innovation in every product we create.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the global leader in cell study technology, recognized for our innovation, 
                quality, and commitment to advancing medical research. We envision a future where 
                our technology enables discoveries that transform healthcare and improve lives worldwide.
              </p>
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
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-brand-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-600">
                We invest heavily in research and development to ensure our products 
                incorporate the latest scientific advancements and technological innovations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-brand-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Industry Recognition
              </h3>
              <p className="text-gray-600">
                Our products are ISO certified, FDA approved, and recognized by leading 
                research institutions worldwide for their quality and reliability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-brand-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our team of scientists and engineers provides comprehensive support, 
                training, and consultation to ensure you get the most out of our products.
              </p>
            </div>
          </div>
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
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-200"
            >
              View Our Products
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

export default About
