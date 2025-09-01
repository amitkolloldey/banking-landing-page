'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between px-6 py-4 lg:px-16 lg:py-6">
     
        <div className="flex items-center space-x-8">
         
          <div className="flex items-center space-x-2 mr-4">
            <Image
              src="/images/Logo.png"
              alt="Untitled UI Logo"
              width={150}
              height={70}
              className="rounded-lg"
            />
          </div>
           
          <nav className=" font-medium hidden lg:flex items-center space-x-8">
            <a href="#" className=" text-white hover:text-purple-200 transition-colors duration-200">
              Home
            </a>
            <div className="flex items-center space-x-1 group cursor-pointer">
              <span className="text-white group-hover:text-purple-200 transition-colors duration-200">
                Products
              </span>
              <ChevronDown className="w-4 h-4  text-white group-hover:text-purple-200 transition-colors duration-200" />
            </div>
            <div className="flex items-center space-x-1 group cursor-pointer">
              <span className="text-white group-hover:text-purple-200 transition-colors duration-200">
                Resources
              </span>
              <ChevronDown className="w-4 h-4 text-white group-hover:text-purple-200 transition-colors duration-200" />
            </div>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-200">
              Pricing
            </a>
          </nav>
        </div>
 
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-white mr-4 hover:text-purple-200 transition-colors duration-200 font-medium">
            Log in
          </button>
          <button className="bg-primary-600 hover:bg-primary-800 text-white px-6 py-2.5 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
            Sign up
          </button>
        </div>
 
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
 
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary-800 border-t border-purple-600 px-6 py-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-purple-200 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors">Products</a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors">Resources</a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors">Pricing</a>
            <hr className="border-purple-600" />
            <button className="text-white hover:text-purple-200 transition-colors text-left">Log in</button>
            <button className="bg-primary-600 hover:bg-primary-800 text-white px-4 py-2 rounded-lg transition-colors text-left">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header