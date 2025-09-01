'use client'

import React from 'react'
import Image from 'next/image'

const CallToAction = () => {
  return (
    <section className="bg-white">
      <div className="w-full mx-auto px-6 lg:px-16 py-24">
        <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center"> 
            <div className="flex-1 p-8 lg:p-16">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
                Give us a shot
              </h2>
              <p className="text-purple-100 text-xl mb-8 max-w-md">
                Join over 4,000+ startups already growing with Untitled.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white hover:bg-gray-50 text-[#344054] px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group text-lg font-medium">
                  Learn more
                </button>
                <button className="bg-primary-600 hover:bg-primary-800 text-white px-10 py-4 rounded-lg transition-all duration-200 font-medium shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
                  Get started
                </button>
              </div>
            </div>
             
            <div className="w-full lg:flex-1 lg:flex-shrink-0">
              <div className="h-64 lg:h-96 relative w-full">
                <Image
                  src="/images/right-image.png"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction