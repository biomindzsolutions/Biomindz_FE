import { Link } from 'react-router-dom'
import { 
  Newspaper, 
  ArrowRight,
  Megaphone
} from 'lucide-react'

const News = () => {
  const categories = [
    'Launch announcements',
    'New partnerships',
    'Technology releases',
    'Research breakthroughs',
    'Conference participation',
    'Regulatory approvals',
    'Awards and recognitions'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            Latest Updates
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            News, announcements, partnerships, and achievements from BIO MINDZ Solutions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 text-center">
            <Megaphone className="w-16 h-16 text-brand-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll find here</h2>
            <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {categories.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <Newspaper className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600 text-sm">
              You can add live articles later.
            </p>
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

export default News
