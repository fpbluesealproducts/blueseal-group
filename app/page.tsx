"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookConsultationButton } from "@/components/book-consultation-button";
import {
  ArrowRight,
  Check,
  Play,
  Users,
  TrendingUp,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { TornEdge } from "@/components/torn-edge";
import Image from "next/image";
import Link from "next/link";

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
`;

export default function BluesealLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: smoothScrollStyles }} />
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-auto px-4 z-50">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Blueseal Group"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
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
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
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
      <section className="relative bg-brand-green text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
                Grow Your Business. <br />
                <span className="text-brand-gold">Multiply Your Income.</span>
              </h1>
              <p className="text-xl lg:text-2xl font-semibold mb-8 text-gray-200">
                Build Wealth the Smart Way — Even If You’re Starting Small.
              </p>
              <p className="text-lg mb-10 text-gray-300 max-w-xl">
                Helping Nigerian entrepreneurs turn small ideas into profitable,
                scalable businesses — online and offline.
              </p>
              <Link href="#cta">
                <Button
                  size="lg"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-brown font-bold px-8 py-6 rounded-xl text-lg shadow-xl hover:scale-105 transition-transform"
                >
                  Start Growing Today
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/images/coach-yellow-suit.jpg"
                  alt="Coach Favour Philip Chuks"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        <TornEdge
          color="hsl(var(--brand-cream))"
          position="bottom"
          className="absolute bottom-0 left-0 w-full"
        />
      </section>

      {/* Harsh Truth Section */}
      <section className="bg-brand-cream py-24 relative">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/coach-purple-suit.jpg"
                  alt="The Harsh Truth"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-8">
                The Harsh Truth{" "}
                <span className="text-gray-500 font-light italic text-2xl block lg:inline">
                  Most Nigerian Entrepreneurs Face
                </span>
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  "You post. You hustle. You pray. Yet money still feels unpredictable.",
                  "Customers don’t buy consistently",
                  "Income is unstable",
                  "You’re busy but not profitable",
                  "You know there’s more, but you don’t know what to fix",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-gold rounded-full p-1 border border-brand-brown/10">
                      <Check className="w-4 h-4 text-brand-brown" />
                    </div>
                    <p className="text-lg text-brand-brown/80 font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-bold text-brand-green mb-8">
                This is not a laziness problem. <br />
                It’s a strategy problem.
              </p>
              <Link href="#cta">
                <Button
                  size="lg"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-brown font-bold px-8 py-4 rounded-xl shadow-lg border-2 border-brand-brown/10"
                >
                  Fix Your Strategy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <TornEdge
          color="hsl(var(--brand-green))"
          position="bottom"
          className="absolute bottom-0 left-0 w-full"
        />
      </section>

      {/* Bio Section */}
      <section
        id="bio"
        className="bg-brand-green text-white py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-gold mb-8">
                Meet Your Business Growth Partner
              </h2>
              <div className="prose prose-invert prose-lg mb-10">
                <p className="text-gray-200">
                  I am a Professional Business Consultant & Business Coach,
                  helping Nigerian entrepreneurs:
                </p>
                <div className="space-y-4">
                  {[
                    "Grow sustainable income",
                    "Build profitable small businesses",
                    "Monetize knowledge through high-selling PDFs & digital products",
                    "Create systems that make money even when they’re offline",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 mt-8">
                  No fluff. <br />
                  No foreign theories that don’t work here. <br />
                  <span className="text-white font-bold italic">
                    Just practical Nigerian-tested strategies.
                  </span>
                </p>
              </div>
              <Link href="#cta">
                <Button
                  size="lg"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-brown font-bold px-8 py-4 rounded-xl shadow-lg border-2 border-brand-brown/10"
                >
                  Work With Me
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/coach-burgundy-dress.jpg"
                  alt="Coach Favour Philip Chuks"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <TornEdge
          color="hsl(var(--brand-cream))"
          position="bottom"
          className="absolute bottom-0 left-0 w-full"
        />
      </section>

      {/* Why PDFs Section */}
      <section
        id="pdfs"
        className="bg-brand-cream py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-6">
              Why PDFs?{" "}
              <span className="text-gray-500 font-light italic block lg:inline">
                (And Why They’re Working Like Crazy in Nigeria)
              </span>
            </h2>
            <p className="text-lg text-brand-brown/80 max-w-3xl mx-auto font-medium">
              PDFs are one of the simplest and fastest ways to make money online
              right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: "No overhead", desc: "No office needed, no staff." },
              { title: "Low startup cost", desc: "Start with almost nothing." },
              {
                title: "Sell Anywhere",
                desc: "WhatsApp, Instagram, Telegram, and email.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-brown/5 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-brown/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl border-4 border-brand-gold/10 mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-green mb-6">
                  Real Stories From Nigerians Like You
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      name: "Aisha O., Abuja",
                      role: "Small Business Owner",
                      text: "I launch my PDF guide and made more money in one month than three months before!",
                    },
                    {
                      name: "Tunde A., Lagos",
                      role: "Digital Entrepreneur",
                      text: "I sold over 120 PDFs in just weeks. This changed my online business!",
                    },
                    {
                      name: "Chiamaka E., Owerri",
                      role: "Freelancer",
                      text: "Turning my skills into a paid PDF brought in serious clients!",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-16 h-16 bg-brand-gold rounded-full flex-shrink-0 flex items-center justify-center text-brand-brown font-bold text-xl">
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="text-brand-brown italic mb-2">
                          "{item.text}"
                        </p>
                        <p className="font-bold text-brand-green">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/images/services-2.jpg"
                  alt="Success with PDFs"
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-lg rotate-3"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="#cta">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-10 py-6 rounded-xl shadow-xl transition-all hover:scale-105"
              >
                Show Me How
              </Button>
            </Link>
          </div>
        </div>
        <TornEdge
          color="hsl(var(--brand-green))"
          position="bottom"
          className="absolute bottom-0 left-0 w-full"
        />
      </section>

      {/* Achievement & Imagine Section */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-gold mb-12">What You Get When You Work With Me</h2>
              <div className="space-y-6">
                {[
                  "Business clarity & direction",
                  "Income growth strategy tailored to Nigeria",
                  "Step-by-step PDF monetization framework",
                  "Pricing, positioning & selling guidance",
                  "Ongoing mindset & execution support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-brand-gold flex-shrink-0" />
                    <span className="text-xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-gold mb-12">Imagine Waking Up Knowing…</h2>
              <div className="space-y-6">
                {[
                  "Your business has structure",
                  "Your income is growing",
                  "You’re no longer guessing",
                  "You finally feel confident calling yourself an entrepreneur"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-brand-gold flex-shrink-0" />
                    <span className="text-xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-2xl font-bold italic text-gray-300">
                That’s not luck. <br />
                <span className="text-white">That’s intentional growth.</span>
              </p>
            </div>
          </div>
        </div>
        <TornEdge color="hsl(var(--brand-cream))" position="bottom" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="bg-brand-cream py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-green mb-8">Ready to Grow?</h2>
          
          <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-2xl border border-brand-brown/5 mb-16">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-brand-gold outline-none transition-colors text-brand-brown"
              />
              <input 
                type="text" 
                placeholder="WhatsApp Number" 
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-brand-gold outline-none transition-colors text-brand-brown"
              />
              <input 
                type="text" 
                placeholder="Email (optional)" 
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-brand-gold outline-none transition-colors text-brand-brown"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookConsultationButton className="bg-brand-gold hover:bg-brand-gold/90 text-brand-brown font-bold px-8 py-4 rounded-xl shadow-lg border-2 border-brand-brown/10 whitespace-nowrap">
                Book Your Consultation
              </BookConsultationButton>
              <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 whitespace-nowrap">
                Send Me PDF Strategy Now
              </Button>
            </div>
          </div>

          <p className="text-xl text-brand-brown/80 italic mb-12">
            Your next income level is not far — you just need the right guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-brand-green font-bold text-lg mb-12">
            <Link href="#bio" className="hover:text-brand-gold transition-colors">About</Link>
            <Link href="#pdfs" className="hover:text-brand-gold transition-colors">Testimonials</Link>
            <Link href="#cta" className="hover:text-brand-gold transition-colors">Contact</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            <Link href="https://youtube.com/@favourphilip8359?si=N1GG5pltkkPPWoDp" target="_blank">
              <Button variant="outline" size="sm" className="w-full justify-center rounded-xl border-gray-200">YouTube</Button>
            </Link>
            <Link href="https://t.me/fastbusinessgrowth" target="_blank">
              <Button variant="outline" size="sm" className="w-full justify-center rounded-xl border-gray-200">Telegram</Button>
            </Link>
            <Link href="https://www.instagram.com/realfavourphilip" target="_blank">
              <Button variant="outline" size="sm" className="w-full justify-center rounded-xl border-gray-200">Instagram</Button>
            </Link>
            <Link href="https://www.facebook.com/share/1BrXTHcRHc/" target="_blank">
              <Button variant="outline" size="sm" className="w-full justify-center rounded-xl border-gray-200">Facebook</Button>
            </Link>
            <Link href="https://www.tiktok.com/@realfavourphilip" target="_blank">
              <Button variant="outline" size="sm" className="w-full justify-center rounded-xl border-gray-200">TikTok</Button>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <Button variant="outline" size="sm" className="w-full justify-center rounded-xl border-gray-200">LinkedIn</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
