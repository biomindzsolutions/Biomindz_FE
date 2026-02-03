import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Users,
  Zap
} from 'lucide-react'

const Careers = () => {
  const domains = [
    'Biotechnology',
    'Embedded systems',
    'AI & machine learning',
    'Optics and imaging',
    'Microfluidics',
    'Regulatory & quality',
    'Business development'
  ]

  const whyUs = [
    'Work on cutting-edge diagnostic technologies',
    'Interdisciplinary R&D culture',
    'Competitive compensation',
    'Growth-oriented environment',
    'Opportunities to innovate and patent'
  ]

  const openings = [
    'AI/ML Engineer',
    'Embedded Engineer',
    'Optics & Imaging Engineer',
    'Microfluidics Research Associate',
    'Biomedical Engineer',
    'Sales & Business Development Executive',
    'Internships in R&D, QA, and Marketing'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            Join Our Team
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            At BIO MINDZ Solutions, we believe in building a team of passionate innovators 
            in biotechnology, embedded systems, AI, optics, microfluidics, and more.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                Why Work With Us?
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
              </h2>
              <ul className="space-y-4">
                {whyUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">We innovate in</h3>
              <div className="flex flex-wrap gap-3">
                {domains.map((d, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-brand-100 text-brand-800 rounded-lg text-sm font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
            Current Openings
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {openings.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-brand-500" />
                  <span className="font-semibold text-gray-900">{role}</span>
                </div>
                <Link
                  to="/contact"
                  className="text-brand-600 font-medium text-sm hover:text-brand-700 flex items-center gap-1"
                >
                  Apply
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-all duration-200"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Careers
