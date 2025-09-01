'use client'

import React from 'react'
import { PlayCircle } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex flex-col items-center px-6 lg:px-16 pt-16 relative overflow-hidden">
     
      <div className="text-center max-w-4xl mb-16 relative z-20">
        <p className="text-purple-200 text-lg mb-6 font-medium text-left sm:text-center">Super. Simple. Banking.</p>

        <h1 className="text-4xl lg:text-7xl font-semibold lg:font-bold text-white mb-4 lg:mb-8 leading-tight text-left sm:text-center">
          Banking technology<br /> 
          that has your back.
        </h1>

        <p className="text-purple-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-left sm:text-center">
          Simple, transparent banking. No hidden fees and free overdrafts.
        </p>
 
        <div className="hidden sm:flex flex-row gap-6 justify-center items-center">
          <button className="flex items-center space-x-3 bg-white hover:bg-gray-50 text-[#344054] px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group text-lg font-medium">
            <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Demo</span>
          </button>
          <button className="bg-primary-600 hover:bg-primary-800 text-white px-10 py-4 rounded-lg transition-all duration-200 font-medium shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
            Sign up
          </button>
        </div>
 
        <div className="flex sm:hidden flex-col gap-4 justify-center items-center w-full max-w-md mx-auto">
          <button className="w-full bg-primary-600 hover:bg-primary-800 text-white px-10 py-4 rounded-lg transition-all duration-200 font-medium shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
            Sign up
          </button>
          <button className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-gray-50 text-[#344054] px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group text-lg font-medium">
            <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Demo</span>
          </button>
        </div>
      </div>
 
      <div className="relative w-full flex justify-center">
        <Image
          src="/images/cards.png"
          alt="Credit card stack"
          width={1300}
          height={900}
          className="mb-[-10px] lg:mb-[-30px] drop-shadow-2xl w-auto h-auto animate-float hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>
 
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Hero