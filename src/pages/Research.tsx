import { Link } from 'react-router-dom'
import { 
  Microscope, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const Research = () => {
  const programs = [
    {
      title: 'AI-Enabled Microbial Colony Counting Systems',
      description: 'We are developing an advanced colony counter with:',
      features: [
        'Deep learning-based colony identification',
        'Colony morphology classification',
        'Real-time contamination alerts',
        'Auto reporting and cloud integration',
        'Specialized imaging for bacteria, fungi, and yeast'
      ],
      applications: 'Food testing, water quality labs, pharma microbiology, and biotech R&D.'
    },
    {
      title: 'Intelligent Cell Study Devices',
      items: [
        {
          sub: 'Human Blood Cell Analyzer',
          points: ['RBC/WBC/Platelet analysis using AI image processing', 'Abnormality detection (basophils, eosinophils, sickle cells, etc.)', 'Hematology imaging without expensive reagents']
        },
        {
          sub: 'Veterinary & Animal Blood Analyzer',
          points: ['Species-specific blood cell recognition', 'Automated parasite detection', 'Field-ready portable diagnostic model']
        },
        {
          sub: 'Plant Cell Imaging System',
          points: ['Cell structure imaging and classification', 'Chloroplast & stomata analysis', 'Tissue culture cell growth monitoring']
        }
      ]
    },
    {
      title: 'Urine Analysis Device',
      description: 'Crystal detection. Bacteria, RBC, WBC, Casts identification. Fully automated microscopy with AI. Ideal for clinics, labs, and low-resource settings.'
    },
    {
      title: 'Sperm Analysis Device (Semen Analyzer)',
      description: 'Motility & morphology analysis. Concentration measurement. Automated reports. Veterinary & human fertility applications.'
    },
    {
      title: 'Microfluidic Cartridge Development',
      description: 'We are developing next-generation cartridges for: Rapid point-of-care diagnostics, Blood/plasma separation, Urine tests, Pathogen detection, Enzyme assays.',
      capabilities: ['Microchannel design', 'Lab-on-chip integration', 'Optical/AI-based readout', 'Mass manufacturing partnerships']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            Research & Development
            <span className="absolute bottom-0 left-0 w-32 h-1 bg-brand-500"></span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Our R&D division focuses on creating intelligent automated diagnostic devices 
            tailored for medical, veterinary, agricultural, and industrial applications.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 relative inline-block">
            Ongoing Research Programs
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                {program.description && <p className="text-gray-700 mb-4">{program.description}</p>}
                {program.features && (
                  <ul className="space-y-2 mb-4">
                    {program.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {program.applications && (
                  <p className="text-gray-600 text-sm"><strong>Applications:</strong> {program.applications}</p>
                )}
                {program.items && (
                  <div className="space-y-6 mt-4">
                    {program.items.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.sub}</h4>
                        <ul className="space-y-1">
                          {item.points.map((p, j) => (
                            <li key={j} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {program.capabilities && (
                  <p className="text-gray-600 text-sm mt-4">
                    <strong>Capabilities include:</strong> {program.capabilities.join(', ')}
                  </p>
                )}
              </div>
            ))}
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

export default Research
