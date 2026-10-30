'use client'
import React from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[390px] md:h-[430px] lg:h-[440px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Godrej Bandra New Launch" 
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
                LUXURY LIVING
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Project Overview
              </h2>

              <div className="mb-6 space-y-3">
                <p className="text-[#4A5568] text-[14.5px] sm:text-[15px] leading-[1.8] text-left m-0">
                  Set along Mumbai’s western edge, this exceptional address at Bandra Reclamation is immersed in over 60% open spaces and exquisitely landscaped greens, with uninterrupted Arabian Sea vistas framing every residence. Expansive outdoor running decks create a private promenade above the water, while South Mumbai, the Bandra - Worli Sea Link, BKC and Bandra’s most coveted cultural and social destinations lie effortlessly within reach.
                </p>
                <p className="text-[#4A5568] text-[14.5px] sm:text-[15px] leading-[1.8] text-left m-0">
                  The collection comprises limited-edition 4 BHKs and larger 5 BHK residences, each announced by a private lobby and composed for a life of grand entertaining, with voluminous living and dining spaces that open to sweeping views. Delivered in a bare-shell format, every home is an invitation to commission a residence of singular character and distinction. A private wellness realm brings together an exclusive clubhouse, an indulgent spa and elevated leisure spaces, complemented by floatation therapy and other restorative treatments conceived for profound renewal.
                </p>
              </div>

              {/* ── Project Stats Grid (From SS) ── */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                <div>
                  <div className="text-[17px] sm:text-[19px] font-black text-[#111111] tracking-tight">2.75 Acres</div>
                  <div className="text-[11px] font-bold text-[#8B6A34] mt-0.5">60% Open Spaces</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">LAND PARCEL</div>
                </div>
                <div className="border-l border-[#EAE6DF] pl-4">
                  <div className="text-[17px] sm:text-[19px] font-black text-[#111111] tracking-tight">1 Tower</div>
                  <div className="text-[11px] font-bold text-[#8B6A34] mt-0.5">5 Distinct Wings</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">TOWER COMPOSITION</div>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-[#EAE6DF] pt-3 sm:pt-0 sm:pl-4">
                  <div className="text-[17px] sm:text-[19px] font-black text-[#111111] tracking-tight">26 Storeys</div>
                  <div className="text-[11px] font-bold text-[#8B6A34] mt-0.5">5 Basements</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">STRUCTURE</div>
                </div>
                <div className="border-t border-[#EAE6DF] pt-3">
                  <div className="text-[17px] sm:text-[19px] font-black text-[#111111] tracking-tight">11.5 Ft</div>
                  <div className="text-[11px] font-bold text-[#8B6A34] mt-0.5">Rare For Bandra</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">CEILING HEIGHT</div>
                </div>
                <div className="border-t border-l border-[#EAE6DF] pt-3 pl-4">
                  <div className="text-[17px] sm:text-[19px] font-black text-[#111111] tracking-tight">West-Facing</div>
                  <div className="text-[11px] font-bold text-[#8B6A34] mt-0.5">Vastu-Aligned*</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">ORIENTATION</div>
                </div>
                <div className="border-t sm:border-t border-l border-[#EAE6DF] pt-3 pl-4">
                  <div className="text-[17px] sm:text-[19px] font-black text-[#111111] tracking-tight">Sea &amp; SoBo</div>
                  <div className="text-[11px] font-bold text-[#8B6A34] mt-0.5">Sea Link Views</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">VIEWS</div>
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
