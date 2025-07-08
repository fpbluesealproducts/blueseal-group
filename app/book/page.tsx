"use client"

import { Button } from "@/components/ui/button"
import Cal, { getCalApi } from "@calcom/embed-react"
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function BookConsultationPage() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: "booking" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="Blueseal Group" width={150} height={50} className="h-10 w-auto" />
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 text-sm font-medium text-blue-700 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Free Consultation
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Book Your Free
                <span className="block text-gray-600 font-light">Business Consultation</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get personalized advice from Coach Favour Philip Chuks and discover how to transform your business into
                a 6-figure enterprise.
              </p>

              {/* What You'll Get */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">What You'll Get in This Session:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Personalized business assessment and strategy review</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Identification of growth opportunities and bottlenecks</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Actionable steps to increase revenue and profitability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Access to exclusive resources and tools</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Clear roadmap for your next 90 days</span>
                  </div>
                </div>
              </div>

              {/* Session Details */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 text-center">
                  <Clock className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Duration</div>
                  <div className="text-xs text-gray-600">45-60 minutes</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 text-center">
                  <Calendar className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Format</div>
                  <div className="text-xs text-gray-600">Video Call</div>
                </div>
              </div>

              {/* Coach Info */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/coach-purple-suit.jpg"
                      alt="Coach Favour Philip Chuks"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Coach Favour Philip Chuks</h4>
                    <p className="text-gray-300 text-sm">Business Consultant & Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "I've helped over 1000+ entrepreneurs transform their businesses into profitable enterprises. Let me
                  help you unlock your business potential."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Calendar Embed */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-200/50 overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Select Your Preferred Time</h2>
                <p className="text-gray-600 text-sm">
                  Choose a date and time that works best for you. All times are shown in your local timezone.
                </p>
              </div>

              <div className="h-[700px] overflow-hidden">
                <Cal
                  namespace="booking"
                  calLink="realfavour-philip-ga3kn3/booking"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful entrepreneurs who have already transformed their businesses with our proven
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://selar.com/m/coachfavour" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium">
                  Explore Our Courses
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium bg-transparent"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
