import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Calendar } from 'lucide-react'
import { getNewsById } from '../data/news'

const formatNewsDate = (iso: string) => {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>()
  const article = id ? getNewsById(id) : undefined

  if (!article) {
    return <Navigate to="/news" replace />
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{article.title} | BIO MINDZ Solutions</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      {/* Back to News - fixed top left */}
      <Link
        to="/news"
        className="fixed top-20 left-4 sm:left-6 z-20 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 hover:bg-black/70 text-white/90 hover:text-white text-sm font-medium transition-colors backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4 flex-shrink-0" />
        Back to News
      </Link>

      {/* Hero with image */}
      <section className="relative pt-24 pb-12 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/20 rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <p className="flex items-center gap-2 text-gray-300 text-sm">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            {formatNewsDate(article.date)}
          </p>
        </div>
      </section>

      {/* Full article body */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            {article.body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all news
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsDetail
