'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import LeadForm from './LeadForm'
import { heroSlides } from '../lib/images'
import { RERA_NO, PHONE_NUMBER, PHONE_DISPLAY, PROJECT_NAME } from '../lib/config'

// Slides extended with clones at both ends for seamless infinite circular loop
const extendedSlides = [
  heroSlides[heroSlides.length - 1],
  ...heroSlides,
  heroSlides[0],
]

const Hero = ({ setIsOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Infinite circular auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const handleTransitionEnd = () => {
    if (currentIndex >= extendedSlides.length - 1) {
      // Reached the clone at the end -> jump back to real first slide seamlessly
      setIsTransitioning(false)
      setCurrentIndex(1)
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    } else if (currentIndex <= 0) {
      // Reached the clone at start -> jump back to real last slide seamlessly
      setIsTransitioning(false)
      setCurrentIndex(extendedSlides.length - 2)
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    }
  }

  // Active slide index (0 to 3) for highlighting tabs
  const activeSlide = (currentIndex - 1 + heroSlides.length) % heroSlides.length

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden"
      style={{
        background: '#FAF8F2',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      }}
    >
      <div className="w-full pt-[82px] pb-8 sm:pt-[88px] sm:pb-10 lg:pt-[98px] lg:pb-12 relative z-10">

        {/* Ambient subtle luxury gold & sage glows */}
        <div
          className="absolute -top-24 -right-24 w-80 sm:w-[560px] h-80 sm:h-[560px] rounded-full pointer-events-none blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(139, 106, 52, 0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full pointer-events-none blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(0, 0, 0, 0.08) 0%, transparent 70%)' }}
        />

        {/* Elegant architectural flowing contour curves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <svg className="absolute -top-12 -right-12 w-[650px] sm:w-[900px] h-auto text-[#8B6A34]" viewBox="0 0 800 350" fill="none">
            <path d="M-50,220 C150,130 260,320 480,200 C680,80 770,260 900,160" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
            <path d="M-50,260 C180,160 290,340 520,230 C720,110 800,280 900,190" stroke="currentColor" strokeWidth="1.5" />
            <path d="M-50,300 C200,200 320,370 560,260 C760,140 830,310 900,230" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="container mx-auto px-3.5 sm:px-6" style={{ maxWidth: '1380px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* ══════════════════════════════════════════════════════
                LEFT 50% (7 cols on lg): Pure Visual & Info Showcase
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 flex flex-col justify-between">

              {/* Heading & Brand Identity */}
              <div className="mb-3 sm:mb-4">
                {/* Eyebrow Developer & Status Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="text-[10.5px] sm:text-[11.5px] uppercase tracking-[1.8px] font-bold text-[#8B6A34] bg-white border border-[#8B6A34]/40 px-3.5 py-1 rounded-full shadow-xs inline-flex items-center gap-1.5">
                    <i className="fa-solid fa-crown text-[#8B6A34] text-[10px]" />
                    Godrej Properties Legacy
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] uppercase tracking-[1.5px] font-bold text-[#0E2430] bg-[#8B6A34]/15 border border-[#8B6A34]/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6A34] animate-pulse"></span>
                    Ultra-Luxury Seafront Living
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[#0E2430] font-black tracking-tight leading-[1.14] text-[26px] xs:text-[30px] sm:text-[34px] md:text-[38px] m-0">
                  Godrej Bandra Bay Residences
                </h1>

                {/* Subheadline (Location & Typology) */}
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-[13.5px] text-[#4A5568] font-medium mt-1.5 mb-1 leading-normal">
                  <span className="inline-flex items-center gap-1 text-[#0E2430] font-semibold">
                    <i className="fas fa-location-dot text-[#8B6A34] text-[12px]" />
                    Bandra Reclamation, Bandra West, Mumbai
                  </span>
                  <span className="text-gray-300 hidden sm:inline">•</span>
                  <span className="text-[#8B6A34] font-bold">Limited 4 &amp; 5 BHK Bespoke Residences</span>
                </p>
              </div>

              {/* ── LUXURY GALLERY CENTERPIECE (With refined bezel framing & badges) ── */}
              <div className="relative group p-[3px] sm:p-1 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#0E2430] via-[#8B6A34] to-[#0E2430] shadow-[0_20px_50px_rgba(14,36,48,0.18)]">
                <div className="relative rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#081720]">
                  <div 
                    onTransitionEnd={handleTransitionEnd}
                    className={`flex w-full ${
                      isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'
                    }`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {extendedSlides.map((slide, idx) => (
                      <div 
                        key={`${slide.id}-${idx}`} 
                        className="relative w-full h-[240px] xs:h-[270px] sm:h-[320px] md:h-[350px] lg:h-[370px] flex-shrink-0"
                      >
                        <Image
                          src={slide.img}
                          alt={slide.name}
                          fill
                          priority={idx === 1}
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Top-Left Floating Luxury Tag */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#0E2430]/85 border border-[#8B6A34]/60 backdrop-blur-md shadow-md flex items-center gap-1.5 pointer-events-none">
                    <i className="fa-solid fa-water text-[#8B6A34] text-[10px]" />
                    <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                      Arabian Sea &amp; Sea Link Views
                    </span>
                  </div>

                  {/* Manual Arrow Controls (Desktop hover) */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsTransitioning(true)
                      setCurrentIndex((prev) => prev - 1)
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0E2430]/80 hover:bg-[#8B6A34] text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md cursor-pointer"
                    aria-label="Previous image"
                  >
                    <i className="fa-solid fa-chevron-left text-xs" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsTransitioning(true)
                      setCurrentIndex((prev) => prev + 1)
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0E2430]/80 hover:bg-[#8B6A34] text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md cursor-pointer"
                    aria-label="Next image"
                  >
                    <i className="fa-solid fa-chevron-right text-xs" />
                  </button>

                  {/* Bottom-right artistic impression watermark */}
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs pointer-events-none">
                    <span className="text-white/60 text-[9px] tracking-widest uppercase">Artistic Impression</span>
                  </div>
                </div>
              </div>

              {/* ── SLIDE SELECTOR TABS ── */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mt-3">
                {heroSlides.map((slide, idx) => {
                  const isActive = activeSlide === idx
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        setIsTransitioning(true)
                        setCurrentIndex(idx + 1)
                      }}
                      className={`py-2 px-3 rounded-xl text-xs sm:text-[12.5px] font-bold transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 border whitespace-nowrap ${
                        isActive
                          ? 'bg-[#0E2430] text-white border-[#8B6A34] shadow-[0_4px_16px_rgba(14,36,48,0.25)] font-extrabold -translate-y-0.5 ring-1 ring-[#8B6A34]/50'
                          : 'bg-white text-[#0E2430] border-[#EAE6DF] hover:border-[#8B6A34] hover:text-[#8B6A34] hover:bg-[#F4EFE6] shadow-2xs'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#8B6A34]' : 'bg-gray-300'}`}></span>
                      <span>{slide.name}</span>
                    </button>
                  )
                })}
              </div>

              {/* ── PROJECT KEY STATS STRIP (Ultra-Premium Refined SS Design) ── */}
              <div className="mt-4 sm:mt-5 bg-white rounded-2xl sm:rounded-[22px] border border-[#8B6A34]/25 shadow-[0_12px_32px_rgba(14,36,48,0.06)] overflow-hidden">
                <div className="grid grid-cols-3 divide-x divide-[#EAE6DF] py-4 sm:py-4.5 px-1 sm:px-3">
                  <div className="flex flex-col items-center text-center px-1 sm:px-2 group">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#8B6A34] text-[#8B6A34] bg-gradient-to-b from-[#FAF8F5] to-[#F4EFE6] flex items-center justify-center mb-1.5 text-xs sm:text-sm shadow-xs transition-transform duration-300 group-hover:scale-110">
                      <i className="fa-solid fa-tree" />
                    </div>
                    <div className="text-[14px] sm:text-[17px] font-black text-[#0E2430] tracking-tight leading-tight">
                      2.75 Acres
                    </div>
                    <div className="text-[10px] sm:text-[11.5px] font-bold text-[#8B6A34] mt-0.5 leading-tight">
                      60% Open Spaces
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 leading-tight">
                      LAND PARCEL
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center px-1 sm:px-2 group">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#8B6A34] text-[#8B6A34] bg-gradient-to-b from-[#FAF8F5] to-[#F4EFE6] flex items-center justify-center mb-1.5 text-xs sm:text-sm shadow-xs transition-transform duration-300 group-hover:scale-110">
                      <i className="fa-solid fa-city" />
                    </div>
                    <div className="text-[14px] sm:text-[17px] font-black text-[#0E2430] tracking-tight leading-tight">
                      1 Tower
                    </div>
                    <div className="text-[10px] sm:text-[11.5px] font-bold text-[#8B6A34] mt-0.5 leading-tight">
                      5 Distinct Wings
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 leading-tight">
                      TOWER COMPOSITION
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center px-1 sm:px-2 group">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#8B6A34] text-[#8B6A34] bg-gradient-to-b from-[#FAF8F5] to-[#F4EFE6] flex items-center justify-center mb-1.5 text-xs sm:text-sm shadow-xs transition-transform duration-300 group-hover:scale-110">
                      <i className="fa-solid fa-building" />
                    </div>
                    <div className="text-[14px] sm:text-[17px] font-black text-[#0E2430] tracking-tight leading-tight">
                      26 Storeys
                    </div>
                    <div className="text-[10px] sm:text-[11.5px] font-bold text-[#8B6A34] mt-0.5 leading-tight">
                      5 Basements
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 leading-tight">
                      STRUCTURE
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ══════════════════════════════════════════════════════
                RIGHT 50% (5 cols on lg): Conversion Console Card
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 mt-2 lg:mt-0 flex flex-col">

              {/* Key Quick Specs Strip (Above the form) */}
              <div className="flex flex-row flex-wrap items-center justify-between gap-x-2 gap-y-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 mb-4 sm:mb-5 rounded-2xl bg-white border border-[#8B6A34]/30 text-xs sm:text-sm shadow-[0_10px_30px_rgba(14,36,48,0.06)] w-full">
                <div className="flex-shrink-0">
                  <span className="text-gray-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">
                    Starting Price
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B6A34] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B6A34]"></span>
                    </span>
                    <strong className="blink-price font-black text-[17px] sm:text-[21px] whitespace-nowrap tracking-tight text-[#0E2430]">
                      ₹ 18 Cr*
                    </strong>
                  </div>
                </div>
                <div className="border-l border-[#EAE6DF] pl-2.5 sm:pl-4 lg:pl-5 flex-shrink-0">
                  <span className="text-gray-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">
                    Configurations
                  </span>
                  <strong className="text-[#0E2430] font-black text-[13.5px] sm:text-[15.5px] whitespace-nowrap">
                    4 &amp; 5 BHK
                  </strong>
                </div>
                <div className="border-l border-[#EAE6DF] pl-2.5 sm:pl-4 lg:pl-5 flex-shrink-0">
                  <span className="text-gray-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">
                    Current Status
                  </span>
                  <span className="text-[#8B6A34] font-black text-[13px] sm:text-[14.5px] whitespace-nowrap bg-[#8B6A34]/10 px-2.5 py-0.5 rounded-full inline-block">
                    Pre-Launch
                  </span>
                </div>
              </div>

              <div
                className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 relative overflow-hidden bg-white"
                style={{
                  border: '1px solid #EAE6DF',
                  boxShadow: '0 25px 60px rgba(14, 36, 48, 0.09)',
                  borderTop: '4px solid #0E2430',
                }}
              >
                {/* Header */}
                <div className="text-center mb-4 sm:mb-5">
                  <span className="text-[#8B6A34] text-[10.5px] sm:text-[11.5px] font-bold tracking-[2px] uppercase block mb-1">
                    EXCLUSIVE INVITATION
                  </span>
                  <h3 className="text-lg xs:text-xl sm:text-[22px] font-black text-[#0E2430] tracking-tight m-0">
                    Unlock Pre-Launch Privileges
                  </h3>
                  <p className="text-[11px] sm:text-[12px] text-gray-500 mt-1 font-normal leading-relaxed max-w-sm mx-auto">
                    Register for priority residence allotment, official brochure, floor plans &amp; full cost breakdown.
                  </p>
                </div>

                {/* LeadForm */}
                <LeadForm formName="Godrej Bandra Bay Residences Form" btnText="Submit" />

                {/* ── 3 CTA BUTTONS BAR ── */}
                <div className="mt-3.5 pt-3.5 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1 sm:px-2 rounded-xl text-[11px] min-[360px]:text-[11.5px] min-[400px]:text-xs sm:text-[13px] font-bold text-center bg-[#0E2430] text-white border border-[#0E2430] hover:bg-[#8B6A34] hover:border-[#8B6A34] hover:text-white shadow-md hover:shadow-[0_8px_20px_rgba(139,106,52,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer overflow-hidden"
                    >
                      <i className="fas fa-paper-plane text-[9px] min-[360px]:text-[10px] shrink-0 text-[#E2D9CC]"></i>
                      <span className="truncate">Enquire<span className="hidden min-[380px]:inline"> Now</span></span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1 sm:px-2 rounded-xl text-[11px] min-[360px]:text-[11.5px] min-[400px]:text-xs sm:text-[13px] font-bold text-center bg-[#0E2430] text-white border border-[#0E2430] hover:bg-[#8B6A34] hover:border-[#8B6A34] hover:text-white shadow-md hover:shadow-[0_8px_20px_rgba(139,106,52,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer overflow-hidden"
                    >
                      <i className="fas fa-calendar-check text-[10px] min-[360px]:text-[11px] shrink-0 text-[#E2D9CC]"></i>
                      <span className="truncate"><span className="hidden min-[410px]:inline">Schedule </span>Visit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1 sm:px-2 rounded-xl text-[11px] min-[360px]:text-[11.5px] min-[400px]:text-xs sm:text-[13px] font-bold text-center bg-[#0E2430] text-white border border-[#0E2430] hover:bg-[#8B6A34] hover:border-[#8B6A34] hover:text-white shadow-md hover:shadow-[0_8px_20px_rgba(139,106,52,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer overflow-hidden"
                    >
                      <i className="fas fa-file-invoice-dollar text-[10px] min-[360px]:text-[11px] shrink-0 text-[#E2D9CC]"></i>
                      <span className="truncate">Cost Sheet</span>
                    </button>
                  </div>

                  {/* Direct Call Desk link */}
                  <div className="mt-3 text-center">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="inline-flex items-center gap-1.5 text-[11.5px] text-gray-600 hover:text-[#8B6A34] font-medium transition-colors"
                    >
                      <i className="fas fa-phone text-[#8B6A34] text-[10px]" />
                      <span>Direct Sales Desk: <strong className="text-[#0E2430]">{PHONE_DISPLAY}</strong></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sleek bottom gold accent divider */}
      <div className="relative z-10 h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#8B6A34] to-transparent opacity-40" />
    </section>
  )
}

export default Hero
