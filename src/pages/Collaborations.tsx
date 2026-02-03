import { Link } from 'react-router-dom'
import { 
  Building2, 
  FlaskConical, 
  GraduationCap, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const Collaborations = () => {
  const industry = [
    'Diagnostic labs',
    'Food & water testing facilities',
    'Pharmaceutical QC units',
    'Biomedical companies'
  ]

  const rd = [
    'Biotechnology and life sciences institutes',
    'Engineering labs',
    'Incubation centres',
    'Healthcare innovation hubs'
  ]

  const academic = [
    'Joint research projects',
    'Student internships',
    'Faculty consultancy',
    'Technology co-development',
    'Sponsored research projects'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            Collaborations
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We partner with industry, R&D centres, and academia to accelerate 
            innovation and deliver impact.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-10 h-10 text-brand-500" />
                <h2 className="text-xl font-bold text-gray-900">Industry Collaborations</h2>
              </div>
              <p className="text-gray-700 mb-4">We partner with:</p>
              <ul className="space-y-2">
                {industry.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <FlaskConical className="w-10 h-10 text-brand-500" />
                <h2 className="text-xl font-bold text-gray-900">R&D Centres</h2>
              </div>
              <p className="text-gray-700 mb-4">Our R&D collaborations include:</p>
              <ul className="space-y-2">
                {rd.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-10 h-10 text-brand-500" />
                <h2 className="text-xl font-bold text-gray-900">Academic Collaborations</h2>
              </div>
              <p className="text-gray-700 mb-4">We collaborate with universities for:</p>
              <ul className="space-y-2">
                {academic.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
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

export default Collaborations
