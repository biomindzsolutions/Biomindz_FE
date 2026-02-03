import { Link } from 'react-router-dom'
import { 
  FileText, 
  Shield, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const IpPatents = () => {
  const focusAreas = [
    'AI algorithms for biological imaging',
    'Microfluidic cartridge architecture',
    'Optical illumination systems for bio-diagnostics',
    'Automated diagnostic workflows',
    'Machine vision–based lab instruments'
  ]

  const strategy = [
    'Protect core technology',
    'Enable licensing opportunities',
    'Support global expansion',
    'Ensure competitive advantage'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            IP & Patents
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            BIO MIND Solutions actively protects its innovations through patents, 
            copyrights, and design registrations.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
            Our Intellectual Property Portfolio
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-10 h-10 text-brand-500" />
                <h3 className="text-xl font-bold text-gray-900">Focus Areas</h3>
              </div>
              <ul className="space-y-3">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-brand-500" />
                <h3 className="text-xl font-bold text-gray-900">Patent Strategy</h3>
              </div>
              <ul className="space-y-3">
                {strategy.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-gray-600 text-sm">
            You can later add: Published patents, IP status, application numbers, etc.
          </p>
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

export default IpPatents
