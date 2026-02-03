import { Link } from 'react-router-dom'
import { 
  Microscope, 
  FlaskConical, 
  Leaf, 
  Droplets, 
  Users,
  Camera,
  ArrowRight
} from 'lucide-react'

const Products = () => {
  const products = [
    {
      icon: <Microscope className="w-10 h-10 text-brand-500" />,
      title: 'BioMind Colony Analyzer Pro',
      description: 'AI-enabled microbial colony counter suitable for all microbiology labs.'
    },
    {
      icon: <Users className="w-10 h-10 text-brand-500" />,
      title: 'BioMind HematoScan',
      description: 'AI-powered device for blood cell imaging and classification.'
    },
    {
      icon: <Leaf className="w-10 h-10 text-brand-500" />,
      title: 'BioMind VetScan',
      description: 'Portable blood and semen analyzer for veterinary clinics.'
    },
    {
      icon: <Droplets className="w-10 h-10 text-brand-500" />,
      title: 'BioMind UrinoScope',
      description: 'Automated urine microscopy and AI diagnosis.'
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-brand-500" />,
      title: 'BioMind AndroScan',
      description: 'Sperm motility and morphology analyzer.'
    },
    {
      icon: <Microscope className="w-10 h-10 text-brand-500" />,
      title: 'BioMind Microfluidic Cartridge Series',
      description: 'Customizable cartridges for biological and chemical assays.'
    },
    {
      icon: <Camera className="w-10 h-10 text-brand-500" />,
      title: 'BioMind Imaging & Machine Vision Modules',
      description: 'Ring lights, bar lights, optical systems, embedded camera modules.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            Our Products
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            AI-enabled diagnostic devices, colony analyzers, blood and semen analyzers, 
            urine microscopy, microfluidic cartridges, and imaging modules.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-6">Product names can be updated as per your branding.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-all duration-200"
          >
            Enquire Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
