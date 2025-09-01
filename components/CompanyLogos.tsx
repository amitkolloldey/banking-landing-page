import React from 'react'
import Image from 'next/image'

const CompanyLogos = () => {
  const companies = [
    { name: 'Boltshift', src: '/images/Fictional company logo.png' },
    { name: 'Lightbox', src: '/images/Fictional company logo-1.png' },
    { name: 'FeatherDev', src: '/images/Fictional company logo-2.png' },
    { name: 'Spherule', src: '/images/Fictional company logo-3.png' },
    { name: 'GlobalBank', src: '/images/Fictional company logo-4.png' },
    { name: 'Nietzsche', src: '/images/Fictional company logo-5.png' }
  ]

  return (
    <div className="w-full px-6 lg:px-16  ">
      <p className="text-center text-gray-600 mb-8 font-medium">Join 4,000+ companies already growing</p>
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-8">
        {companies.map((company, index) => (
          <div key={index} className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-200">
            <Image
              src={company.src}
              alt={`${company.name} logo`}
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyLogos