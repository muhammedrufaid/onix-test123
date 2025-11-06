import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-[1600px] mx-auto pl-2 sm:pl-4 lg:pl-6 pr-6 sm:pr-8 lg:pr-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Navigation Links - Left Column */}
          <div className="text-left">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">NAVIGATION</h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/about" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    ABOUT US
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    CONTACTS
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    SERVICES
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    CAREER
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/news" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    NEWS
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    PROJECTS
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Middle Column */}
          <div className="text-left">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">SERVICES</h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/services/structural-engineering" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    STRUCTURAL ENGINEERING
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/civil-engineering" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    CIVIL ENGINEERING
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/mep-engineering" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    MEP ENGINEERING
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/project-management" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    PROJECT MANAGEMENT
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/consultation" 
                  className="group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-white hover:text-green-400 transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-sm font-medium relative">
                    CONSULTATION
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - UAE Office */}
          <div className="text-left">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">UAE</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">+971 50 123 4567</p>
              <p className="text-gray-300 text-sm">info@onixengineering.com</p>
            </div>
          </div>

          {/* Office Info */}
          <div className="text-left">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">OFFICE</h3>
            <div className="space-y-4">
              {/* Dubai Office Card */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=ONIX+ENGINEERING+CONSULTANCY+DUBAI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-lg border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">Dubai Office</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Business District</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="mt-3 flex items-center text-green-400 text-xs font-medium">
                  <span className="group-hover:underline">Open in Google Maps</span>
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-green-500/10 group-hover:to-green-500/5 transition-all duration-500 pointer-events-none"></div>
              </a>

              {/* Abu Dhabi Office Card */}
              <a 
                href="https://www.google.com/maps/place/Onix+Engineering+Consultancy/@24.4837249,54.347451,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e67005e94375f:0x7d1b79275c7a4b73!8m2!3d24.48372!4d54.3500259!16s%2Fg%2F11xrz1qrhj?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-lg border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">Abu Dhabi Office</h4>
                      <p className="text-gray-400 text-xs mt-0.5">UAE Capital</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="mt-3 flex items-center text-green-400 text-xs font-medium">
                  <span className="group-hover:underline">Open in Google Maps</span>
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-green-500/10 group-hover:to-green-500/5 transition-all duration-500 pointer-events-none"></div>
              </a>
            </div>
          </div>

          {/* Branding & Social - Right Column (Like Studia 54) */}
          <div className="text-left lg:text-right">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">ONIX GROUP</h2>
              <p className="text-gray-300 text-sm">ONIX Engineering Consultancy</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex lg:justify-end space-x-4">
              <a href="https://www.linkedin.com/company/onix-engineering-consultancy/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/onixgroup.ae/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@onix_engineering?_r=1&_t=ZS-9198s43E4wh" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.pinterest.com/onixengineering" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.487.535 6.624 0 11.99-5.367 11.99-11.987C23.97 5.39 18.604.026 11.98.026L12.017 0z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/onixdubai/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Studia 54 Style */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Onix Group of Companies. All rights reserved.
              </p>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
