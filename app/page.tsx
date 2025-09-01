import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CompanyLogos from '@/components/CompanyLogos'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Hero />
        </div>
      </div>

      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <CompanyLogos />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <CallToAction />
      </div>
    </div>
  )
}