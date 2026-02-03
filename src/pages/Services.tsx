import { Link } from 'react-router-dom'
import { 
  FlaskConical, 
  Settings, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <FlaskConical className="w-10 h-10 text-brand-500" />,
      title: 'Contract Research',
      description: 'We offer end-to-end R&D support in:',
      items: [
        'Bio-instrumentation',
        'Optical and machine-vision systems',
        'Microfluidics',
        'AI & image-processing solutions',
        'Biosensor prototyping',
        'Clinical device validation'
      ],
      note: 'Our CR services help partners accelerate innovation with expert engineering and biology teams.'
    },
    {
      icon: <Settings className="w-10 h-10 text-brand-500" />,
      title: 'Contract Manufacturing',
      description: 'We provide contract manufacturing for:',
      items: [
        'Diagnostic devices',
        'Microfluidic cartridges',
        'Imaging units',
        'Embedded systems',
        'Optical modules and light sources'
      ],
      includes: [
        'Prototype-to-product conversion',
        'Pilot manufacturing',
        'Mass production scaling',
        'Regulatory documentation support'
      ]
    }
  ]

  const proDatum = [
    {
      title: 'Mechanical Design, Prototyping & Fabrication',
      description: 'Our engineering team delivers robust mechanical design solutions for diagnostic instruments and precision systems. We provide rapid prototyping, enclosure development, mechanism design, tolerance and stack-up analysis, and high-quality fabrication using additive and subtractive manufacturing processes. We ensure reliability, ergonomics, and seamless integration of optics, electronics, and microfluidic components.'
    },
    {
      title: 'CFD & CAE Simulation and Analysis',
      description: 'We utilize advanced CFD and CAE tools to simulate fluid flow, heat transfer, mechanical stresses, and multiphysics behavior in microfluidic and diagnostic systems. Our simulations accelerate product development by optimizing channel geometries, flow rates, pressure profiles, structural strength, thermal stability, and device performance by reducing prototyping cycles and improving accuracy.'
    },
    {
      title: 'R&D of Microfluidics, POCT & Diagnostic Devices',
      description: 'We specialize in end-to-end research and development of advanced microfluidic platforms and point-of-care diagnostic devices. Our expertise spans concept creation, flow-physics optimization, biosensor integration, prototyping, and validation for clinical, veterinary, environmental, and industrial applications. We transform complex diagnostic workflows into compact, automated, and user-friendly systems.'
    },
    {
      title: 'Custom Microfluidic & POCT Cartridge/System Design',
      description: 'We design bespoke microfluidic cartridges and complete POCT architectures tailored to specific assays, biomarkers, and operational environments. Our capabilities include microchannel modeling, reagent storage integration, fluid-handling strategies, capillary-driven designs, sample preparation modules, and optical/electronic readout compatibility. Every system is engineered for manufacturability, consistency, and regulatory readiness.'
    }
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
            Our Services
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Contract research and contract manufacturing for diagnostic devices, 
            microfluidics, and intelligent biosensing technologies.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                {service.note && <p className="text-gray-600 text-sm">{service.note}</p>}
                {service.includes && (
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Includes:</strong> {service.includes.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro-Datum / Core Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
            Our Core Expertise
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-brand-500"></span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Pro-Datum Engg Services — mechanical design, CFD/CAE, microfluidics R&D, and custom POCT cartridge design.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {proDatum.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{index + 1}. {item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
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

export default Services
