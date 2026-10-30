'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-16 md:py-20 lg:py-24 bg-[#0E2430] text-white font-poppins relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1280px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-20px] gap-12 lg:gap-0">
          
          {/* ── Left Column: Framed Image with Offset Gold Border ── */}
          <div className="w-full lg:w-1/2 lg:px-[20px] flex justify-center lg:sticky lg:top-28">
            <div className="relative w-full max-w-[520px] pt-3 pl-3">
              {/* Decorative Offset Gold Border (from Screenshot) */}
              <div className="absolute top-0 left-0 w-full h-full border border-[#8B6A34]/50 rounded-[22px] pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[530px] rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#081720]">
                <Image 
                  src={overviewImage} 
                  alt="About Godrej Bandra Bay Residences" 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105" 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                />
                
                {/* Location Badge on Image (Bottom Left, from Screenshot) */}
                <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-sm bg-[#0E2430]/90 border border-[#8B6A34]/70 backdrop-blur-md shadow-lg">
                  <span className="text-[#8B6A34] text-[11px] sm:text-[12px] font-bold tracking-[2.5px] uppercase">
                    BANDRA WEST, MUMBAI
                  </span>
                </div>

                {/* Subtle artistic impression label */}
                <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                  <span className="text-white/40 text-[9px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Editorial Typography, Content, Stats & CTA ── */}
          <div className="w-full lg:w-1/2 lg:px-[20px] lg:pl-12">
            <div>
              {/* Eyebrow */}
              <span className="text-[#8B6A34] font-bold text-[12.5px] sm:text-[13.5px] tracking-[3px] uppercase mb-2.5 block">
                OVERVIEW
              </span>

              {/* Headline (Quiet Luxury, Rooted In Bandra style) */}
              <h2 className="text-white text-[28px] sm:text-[34px] md:text-[40px] font-extrabold leading-[1.2] mb-4 tracking-tight">
                Quiet Luxury,<br />
                <span className="text-[#8B6A34]">Rooted In Bandra.</span>
              </h2>

              {/* Gold Divider Line */}
              <div className="w-12 h-[2.5px] bg-[#8B6A34] mb-6 rounded-full" />

              {/* Text Paragraphs with 9-Line Read More Toggle */}
              <div className="mb-6">
                <div
                  style={
                    !isExpanded
                      ? {
                          display: '-webkit-box',
                          WebkitLineClamp: 9,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }
                      : undefined
                  }
                  className="space-y-3.5 transition-all duration-300"
                >
                  <p className="text-gray-300 text-[14.5px] sm:text-[15px] leading-[1.85] text-left m-0">
                    Set along Mumbai’s western edge, this exceptional address at Bandra Reclamation is immersed in over 60% open spaces and exquisitely landscaped greens, with uninterrupted Arabian Sea vistas framing every residence. Expansive outdoor running decks create a private promenade above the water, while South Mumbai, the Bandra - Worli Sea Link, BKC and Bandra’s most coveted cultural and social destinations lie effortlessly within reach.
                  </p>
                  <p className="text-gray-300 text-[14.5px] sm:text-[15px] leading-[1.85] text-left m-0">
                    The collection comprises limited-edition 4 BHKs and larger 5 BHK residences, each announced by a private lobby and composed for a life of grand entertaining, with voluminous living and dining spaces that open to sweeping views. Delivered in a bare-shell format, every home is an invitation to commission a residence of singular character and distinction. A private wellness realm brings together an exclusive clubhouse, an indulgent spa and elevated leisure spaces, complemented by floatation therapy and other restorative treatments conceived for profound renewal.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-3.5 text-[#8B6A34] hover:text-white font-bold text-[13.5px] sm:text-[14px] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <i className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'} text-[11px]`} />
                </button>
              </div>

              {/* ── Stats Grid (SS Inspired 3x2 Typography Design) ── */}
              <div className="mt-8 pt-6 border-t border-white/15">
                <div className="grid grid-cols-3 gap-y-6 gap-x-3 sm:gap-x-4">
                  {/* Item 1 */}
                  <div>
                    <div className="text-[24px] sm:text-[30px] md:text-[34px] font-black text-[#8B6A34] tracking-tight leading-none">
                      11.5 Ft
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest mt-1.5">
                      CEILING HEIGHT
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-gray-400 mt-0.5 font-medium">
                      Rare For Bandra
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div>
                    <div className="text-[24px] sm:text-[30px] md:text-[34px] font-black text-[#8B6A34] tracking-tight leading-none">
                      West-Facing
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest mt-1.5">
                      ORIENTATION
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-gray-400 mt-0.5 font-medium">
                      Vastu-Aligned*
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div>
                    <div className="text-[24px] sm:text-[30px] md:text-[34px] font-black text-[#8B6A34] tracking-tight leading-none">
                      Sea &amp; SoBo
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest mt-1.5">
                      VIEWS
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-gray-400 mt-0.5 font-medium">
                      Sea Link Views
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="col-span-3 border-t border-white/10" />

                  {/* Item 4 */}
                  <div>
                    <div className="text-[24px] sm:text-[30px] md:text-[34px] font-black text-[#8B6A34] tracking-tight leading-none">
                      2.75
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest mt-1.5">
                      ACRES
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-gray-400 mt-0.5 font-medium">
                      60% Open Spaces
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div>
                    <div className="text-[24px] sm:text-[30px] md:text-[34px] font-black text-[#8B6A34] tracking-tight leading-none">
                      1 Tower
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest mt-1.5">
                      TOWERS
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-gray-400 mt-0.5 font-medium">
                      5 Distinct Wings
                    </div>
                  </div>

                  {/* Item 6 */}
                  <div>
                    <div className="text-[24px] sm:text-[30px] md:text-[34px] font-black text-[#8B6A34] tracking-tight leading-none">
                      26
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest mt-1.5">
                      STOREYS
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-gray-400 mt-0.5 font-medium">
                      5 Basements
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Request Brochure Gold CTA Button (from Screenshot) ── */}
              <div className="mt-8 sm:mt-10">
                <button
                  type="button"
                  onClick={() => setIsOpen && setIsOpen(true)}
                  className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg font-black text-[13px] sm:text-[14px] uppercase tracking-[2px] bg-[#8B6A34] text-[#0E2430] hover:bg-[#A68245] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(139,106,52,0.45)] cursor-pointer active:scale-95 inline-flex items-center gap-2"
                >
                  <i className="fa-solid fa-file-arrow-down text-sm" />
                  <span>REQUEST BROCHURE</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
