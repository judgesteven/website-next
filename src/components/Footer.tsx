'use client'

import Image from 'next/image'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/gamelayerco', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/gamelayer', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/gamelayer', icon: Instagram },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main content */}
        <div className="flex flex-col space-y-4">
          {/* Top row - Logo and Social icons */}
          <div className="flex justify-between items-center">
            {/* Left side - Logo */}
            <div className="flex items-center">
              <Image 
                src="/GameLayer_Logo_White.png" 
                alt="GameLayer Logo" 
                width={128}
                height={25}
                className="h-8 w-auto"
                priority
              />
            </div>
            
            {/* Right side - Social icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Bottom row - Company info and Legal links */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            {/* Left side - Company info */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                Company ID - 2503589-1
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Copyright 2012 - 2025 GameLayer Oy - all rights reserved
              </p>
            </div>
            
            {/* Right side - Legal links */}
            <div className="flex flex-col items-center lg:items-end space-y-1">
              <a
                href="https://gamelayer.co/privacy-policy/"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="https://gamelayer.co/terms-of-service/"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
