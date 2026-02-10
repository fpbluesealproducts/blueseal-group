"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookConsultationButton } from "@/components/book-consultation-button"
import { ArrowRight, Check, Play, Users, TrendingUp, Award, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Add smooth scrolling styles
const smoothScrollStyles = `
  html {
    scroll-behavior: smooth;
  }
  @keyframes slideInFromTop {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-slide-in {
    animation: slideInFromTop 0.3s ease-out;
  }
`

export default function BluesealLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: smoothScrollStyles }} />
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-auto px-4 z-50">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="Blueseal Group" width={150} height={50} className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#about"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="#coach"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
              >
                Coach
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
              >
                Services
              </Link>
              <Link
                href="https://selar.com/m/coachfavour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </Link>
              <Link
                href="https://youtube.com/@favourphilip8359?si=N1GG5pltkkPPWoDp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <BookConsultationButton
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
              >
                Book Consultation
              </BookConsultationButton>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 animate-slide-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#coach"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Coach
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="https://selar.com/m/coachfavour"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
                Shop Courses
              </Link>
              <Link
                href="https://youtube.com/@favourphilip8359?si=N1GG5pltkkPPWoDp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch Videos
              </Link>
              <BookConsultationButton
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full transition-all duration-200 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </BookConsultationButton>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 text-sm font-medium text-gray-700 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                Trusted by 1000+ Entrepreneurs
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[0.9] mb-8 tracking-tight">
                Transform Your
                <span className="block text-gray-500 font-light italic">Business Dreams</span>
                <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Into Reality
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg font-light">
                Proven strategies that have transformed thousands of entrepreneurs into 6-figure earners with minimal
                capital.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
                <Link
                  href="https://selar.com/m/coachfavour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1"
                >
                  <Button
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl text-sm font-medium group transition-all duration-300 hover:scale-105 w-full"
                  >
                    Courses
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <BookConsultationButton
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 rounded-xl text-sm font-medium group border-gray-300 hover:border-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 flex-1 min-w-full sm:min-w-0 sm:flex-initial w-full"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" /> Consultation
                </BookConsultationButton>
                <Link
                  href="https://youtube.com/@favourphilip8359?si=N1GG5pltkkPPWoDp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 py-3 rounded-xl text-sm font-medium group border-red-300 hover:border-red-400 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-red-600 hover:text-red-700 w-full"
                  >
                    <svg
                      className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Watch Videos
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-10 text-sm text-gray-500">
                <div className="flex items-center group">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="font-medium">1000+ Success Stories</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="font-medium">6-Figure Results</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-7">
              <div className="relative">
                <div className="h-[28rem] lg:h-[36rem] relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image
                    src="/images/coach-yellow-suit.jpg"
                    alt="Coach Favour Philip Chuks"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>

                {/* Floating Achievement Card */}
                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">10+ Years</div>
                      <div className="text-sm text-gray-500 font-medium">Proven Excellence</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-gray-200/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-xs text-gray-500 font-medium">Entrepreneurs</div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-gray-50/50 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Entrepreneurs Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Business Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">6-Fig</div>
              <div className="text-sm text-gray-600">Earning Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                About Blueseal Group
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Premier Business Consulting Firm
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We show you ways to transform your financial status through your products or services by showing you
                exactly what you need to do to earn enough profits with little or no capital.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Find your target audience and build strong connections</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Build a professional brand that stands out</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scale to consistent 6-figure earnings</span>
                </div>
              </div>
              <Button
                className="bg-gray-900 hover:bg-gray-800 text-white group"
                onClick={() => {
                  const phoneNumber = "+2347042963275"
                  const message =
                    "Hello! I would like to learn more about Blueseal Group and your business consulting services."
                  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, "_blank")
                }}
              >
                Contact Us on WhatsApp
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <Image src="/images/business-plan-workshop.jpg" alt="Business workshop" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section id="coach" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Meet Your Coach</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Coach Favour Philip Chuks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Business Consultant • Award-Winning Media Personality • Humanitarian • Founder of Blueseal Group
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="columns-2 gap-4 space-y-4">
                <div className="break-inside-avoid mb-4">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/coach-purple-suit.jpg"
                      alt="Coach Favour Philip Chuks"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="break-inside-avoid mb-4">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/coach-award-ceremony.jpg"
                      alt="Coach Favour Philip Chuks at awards ceremony"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="break-inside-avoid mb-4">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/coach-burgundy-dress.jpg"
                      alt="Coach Favour Philip Chuks"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="break-inside-avoid mb-4">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/coach-speaking-event.jpg"
                      alt="Coach Favour Philip Chuks speaking at event"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="break-inside-avoid mb-4">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/coach-award-trophy.jpg"
                      alt="Coach Favour Philip Chuks with award trophy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="break-inside-avoid mb-4"></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-8 lg:p-12 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-6 h-6 text-gray-700" />
                  <span className="text-lg font-semibold text-gray-900">10+ Years of Proven Excellence</span>
                </div>

                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>
                    With over 10 years of experience in business consultancy and a degree in business with a focus on
                    profitable business setup, I have helped entrepreneurs discover their niche, goals, and purpose in
                    running or starting a business.
                  </p>
                  <p>
                    I started Blueseal Group to help entrepreneurs who have given up on their businesses and startups
                    who don't know where to start. I'm here to help you find your audience, build your brand, and
                    transform your passion into profit.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">How I Can Transform Your Business:</h4>
                  <p className="text-gray-600">
                    Get access to the right business tools, strategies, resources, and information to start, run, and
                    grow a successful business. If you want to stop guessing what works and start doing what works,
                    let's get into it.
                  </p>
                </div>

                <BookConsultationButton className="bg-gray-900 hover:bg-gray-800 text-white group">
                  Book Personal Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </BookConsultationButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 text-sm font-medium text-gray-700 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              Our Premium Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What You Need to Make Your
              <span className="block text-gray-600 font-light">Business Highly Profitable</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our services and strategies are built to give you access to the information and strategies you need to
              grow your business to a highly profitable and successful enterprise.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Brand Development Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Brand Development Strategies</h3>
              </div>

              <div className="space-y-6">
                <div className="group p-8 rounded-3xl border border-gray-200/60 hover:border-gray-300/60 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Business Plans</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Complete business plans with 5-year financial predictions for over 50 business types. Perfect
                        for grants, bank loans, and attracting investors. All done for you - just edit to suit your
                        brand.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          5-year predictions
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Grant-ready
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                          Investor-ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-8 rounded-3xl border border-gray-200/60 hover:border-gray-300/60 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Digital Courses for Resale</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        High-paying digital courses you can rebrand and sell instantly on Pinterest, TikTok, Facebook,
                        Instagram, and more. This will be paying you even when you're asleep.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                          Rebrandable
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Instant profit
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Passive income
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-8 rounded-3xl border border-gray-200/60 hover:border-gray-300/60 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Supplier Network Access</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Access to Nigerian and international suppliers, importers, wholesalers, and distributors at
                        wholesale prices. Deal directly with manufacturers worldwide.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Nigerian suppliers
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          International
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                          Wholesale prices
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth & Scaling Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Growth & Scaling Solutions</h3>
              </div>

              <div className="space-y-6">
                <div className="group p-8 rounded-3xl border border-gray-200/60 hover:border-gray-300/60 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Fast Business Growth Course</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Step-by-step guide to start, grow, and scale your business to become a 6-figure earner through
                        product or service-based business.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Step-by-step
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          6-figure potential
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                          Scalable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-8 rounded-3xl border border-gray-200/60 hover:border-gray-300/60 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Brand Like a Pro</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        The ultimate guide to doing business like a boss. Learn to shape your mindset and take the right
                        steps to brand professionally.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                          Professional branding
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Boss mindset
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Strategic
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-8 rounded-3xl border border-gray-200/60 hover:border-gray-300/60 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">International Manufacturing</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Direct contacts with manufacturers in China, Dubai, Vietnam, India, and more. Become a
                        mini-importer with exclusive product branding.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                          Direct access
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Exclusive branding
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Global network
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Visual Gallery */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See Our Services in Action</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real examples of how we help entrepreneurs transform their businesses into profitable enterprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200/60 hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/images/services-1.jpg"
                    alt="Business registration and setup services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Setup & Registration</h4>
                  <p className="text-sm text-gray-600">Complete business registration and legal setup services</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200/60 hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/images/services-2.jpg"
                    alt="Business consultation services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Strategic Consultation</h4>
                  <p className="text-sm text-gray-600">One-on-one business strategy and growth planning</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200/60 hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/images/services-3.jpg"
                    alt="Digital marketing services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Marketing</h4>
                  <p className="text-sm text-gray-600">Comprehensive digital marketing and brand building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Here's all you need to transform your low-paying business into a highly profitable enterprise. Get
                proven strategies, professional branding, supplier contacts, business plans, and digital courses.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Proven strategies to scale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Professional branding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Supplier networks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Business plans ready</span>
                </div>
              </div>

              <Link href="https://selar.com/m/coachfavour" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 group">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/coach-purple-standing.jpg"
                  alt="Coach Favour Philip Chuks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 text-sm font-medium text-gray-700 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              Your Success Journey Starts Here
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Here's How to Get Started
              <span className="block text-gray-600 font-light">With Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to begin your journey to business success and financial transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            <div className="space-y-6 lg:space-y-10">
              <div className="group flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Access Our Courses</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Click the link to access all our courses and choose what will work best for your business needs and
                    goals.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Join our business support community for direct access to me and my team for business clarity and
                    updates.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Follow on Social Media</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Follow me on all social media platforms for regular updates, tips, and business insights.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Become Profitable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transform into a profitable entrepreneur with our proven strategies and ongoing support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 lg:p-10 rounded-3xl border border-gray-200/50 backdrop-blur-sm shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Level Up?</h3>
                <p className="text-gray-600">Start your transformation journey today</p>
              </div>

              <div className="space-y-4 mb-10">
                <Link href="https://selar.com/m/coachfavour" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white justify-between group py-4 rounded-xl text-base font-medium">
                    Get Life-Changing Courses
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </Link>
                <Link href="https://t.me/fastbusinessgrowth" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full justify-between group border-gray-200 hover:border-blue-300 mt-4 hover:bg-blue-50 bg-transparent py-4 rounded-xl text-base font-medium"
                  >
                    Join Business Support Community
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </Link>
                <BookConsultationButton
                  variant="outline"
                  className="w-full justify-between group border-gray-200 hover:border-gray-300 bg-transparent py-4 rounded-xl text-base font-medium"
                >
                  Book Consultation Session
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </BookConsultationButton>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-center">Connect With Me:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                  <Link
                    href="https://youtube.com/@favourphilip8359?si=N1GG5pltkkPPWoDp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start border-gray-200 hover:border-red-300 hover:bg-red-50 bg-transparent py-3 rounded-xl group transition-all duration-300 w-full"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-red-600 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span className="text-sm font-medium">YouTube</span>
                    </Button>
                  </Link>

                  <Link href="https://t.me/fastbusinessgrowth" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start border-gray-200 hover:border-blue-300 hover:bg-blue-50 bg-transparent py-3 rounded-xl group transition-all duration-300 w-full"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-blue-600 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                      <span className="text-sm font-medium">Biz. Community</span>
                    </Button>
                  </Link>

                  <Link
                    href="https://www.instagram.com/realfavourphilip?igsh=MnRjeDRiZXE5aHdq&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start border-gray-200 hover:border-pink-300 hover:bg-pink-50 bg-transparent py-3 rounded-xl group transition-all duration-300 w-full"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-pink-600 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="text-sm font-medium">Instagram</span>
                    </Button>
                  </Link>

                  <Link
                    href="https://www.facebook.com/share/1BrXTHcRHc/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start border-gray-200 hover:border-blue-300 hover:bg-blue-50 bg-transparent py-3 rounded-xl group transition-all duration-300 w-full"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-blue-600 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="text-sm font-medium">Facebook</span>
                    </Button>
                  </Link>

                  <Link href="https://www.tiktok.com/@realfavourphilip" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start border-gray-200 hover:border-black hover:bg-gray-50 bg-transparent py-3 rounded-xl group transition-all duration-300 w-full"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-black group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                      <span className="text-sm font-medium">TikTok</span>
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    size="sm"
                    className="justify-start border-gray-200 hover:border-blue-400 hover:bg-blue-50 bg-transparent py-3 rounded-xl group transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-700 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
