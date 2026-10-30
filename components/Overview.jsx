'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[390px] md:h-[430px] lg:h-[440px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Godrej Bandra Bay Residences" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
                LUXURY SEAFRONT LIVING
              </span>
              <h2 className="text-[#0E2430] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Project Overview
              </h2>

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
                  className="space-y-3 transition-all duration-300"
                >
                  <p className="text-[#4A5568] text-[14.5px] sm:text-[15px] leading-[1.8] text-left m-0">
                    Set along Mumbai’s western edge, this exceptional address at Bandra Reclamation is immersed in over 60% open spaces and exquisitely landscaped greens, with uninterrupted Arabian Sea vistas framing every residence. Expansive outdoor running decks create a private promenade above the water, while South Mumbai, the Bandra - Worli Sea Link, BKC and Bandra’s most coveted cultural and social destinations lie effortlessly within reach.
                  </p>
                  <p className="text-[#4A5568] text-[14.5px] sm:text-[15px] leading-[1.8] text-left m-0">
                    The collection comprises limited-edition 4 BHKs and larger 5 BHK residences, each announced by a private lobby and composed for a life of grand entertaining, with voluminous living and dining spaces that open to sweeping views. Delivered in a bare-shell format, every home is an invitation to commission a residence of singular character and distinction. A private wellness realm brings together an exclusive clubhouse, an indulgent spa and elevated leisure spaces, complemented by floatation therapy and other restorative treatments conceived for profound renewal.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-3 text-[#8B6A34] hover:text-[#0E2430] font-bold text-[13.5px] sm:text-[14px] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <i className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'} text-[11px]`} />
                </button>
              </div>

              {/* ── Overview Key Features (2nd SS Design) ── */}
              <div className="mt-5 bg-white rounded-2xl sm:rounded-[20px] border border-[#EAE6DF] shadow-[0_8px_25px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="grid grid-cols-3 divide-x divide-[#EAE6DF] py-3.5 sm:py-4 px-1 sm:px-3">
                  <div className="flex flex-col items-center text-center px-1 sm:px-2">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#8B6A34] text-[#8B6A34] bg-[#FAF8F5] flex items-center justify-center mb-1.5 text-xs sm:text-sm shadow-xs">
                      <i className="fa-solid fa-arrows-up-down" />
                    </div>
                    <div className="text-[14px] sm:text-[17px] font-black text-[#0E2430] tracking-tight leading-tight">
                      11.5 Ft
                    </div>
                    <div className="text-[10px] sm:text-[11.5px] font-bold text-[#8B6A34] mt-0.5 leading-tight">
                      Rare For Bandra
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 leading-tight">
                      CEILING HEIGHT
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center px-1 sm:px-2">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#8B6A34] text-[#8B6A34] bg-[#FAF8F5] flex items-center justify-center mb-1.5 text-xs sm:text-sm shadow-xs">
                      <i className="fa-solid fa-compass" />
                    </div>
                    <div className="text-[14px] sm:text-[17px] font-black text-[#0E2430] tracking-tight leading-tight">
                      West-Facing
                    </div>
                    <div className="text-[10px] sm:text-[11.5px] font-bold text-[#8B6A34] mt-0.5 leading-tight">
                      Vastu-Aligned*
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 leading-tight">
                      ORIENTATION
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center px-1 sm:px-2">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#8B6A34] text-[#8B6A34] bg-[#FAF8F5] flex items-center justify-center mb-1.5 text-xs sm:text-sm shadow-xs">
                      <i className="fa-solid fa-water" />
                    </div>
                    <div className="text-[14px] sm:text-[17px] font-black text-[#0E2430] tracking-tight leading-tight">
                      Sea &amp; SoBo
                    </div>
                    <div className="text-[10px] sm:text-[11.5px] font-bold text-[#8B6A34] mt-0.5 leading-tight">
                      Sea Link Views
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 leading-tight">
                      VIEWS
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
