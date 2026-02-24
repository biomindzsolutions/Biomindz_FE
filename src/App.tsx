/**
 * App Component
 * Main application component with routing and theme provider
 */

import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollToTop from './ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Research = lazy(() => import('./pages/Research'))
const Services = lazy(() => import('./pages/Services'))
const Products = lazy(() => import('./pages/Products'))
const Careers = lazy(() => import('./pages/Careers'))
const IpPatents = lazy(() => import('./pages/IpPatents'))
const Collaborations = lazy(() => import('./pages/Collaborations'))
const News = lazy(() => import('./pages/News'))
const NewsDetail = lazy(() => import('./pages/NewsDetail'))
const Login = lazy(() => import('./pages/Login'))
const Nopage = lazy(() => import('./404'))

const AppFrame = () => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login'

  return (
    <>
      <ScrollToTop />
      {!isAuthPage && <Navbar />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ zIndex: 9999 }}
        toastStyle={{ zIndex: 9999 }}
      />
      <div className={`${!isAuthPage ? 'pt-16 ' : ''}min-h-screen flex flex-col`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/research" element={<Research />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/ip-patents" element={<IpPatents />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </Suspense>
        {!isAuthPage && <Footer />}
      </div>
    </>
  )
}

// Basename for GitHub Pages (e.g. /Biomindz_FE); empty when base is /
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

const App = () => {
  return (
    <HelmetProvider>
      <Router
        basename={basename}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppFrame />
      </Router>
    </HelmetProvider>
  )
}

export default App
