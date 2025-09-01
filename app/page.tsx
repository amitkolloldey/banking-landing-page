import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CompanyLogos from '@/components/CompanyLogos'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main Hero Section with Purple Background */}
      <div className="bg-gradient-to-br from-primary-800 to-primary-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Hero />
        </div>
      </div>
      
      {/* Company Logos Section */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <CompanyLogos />
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto">
        <CallToAction />
      </div>
    </div>
  )
}