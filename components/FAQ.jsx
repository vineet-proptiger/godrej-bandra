'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Godrej Bandra Bay Residences?',
    answer: (
      <>
        Godrej Bandra Bay Residences offers limited-edition <strong className="font-semibold text-[#0E2430]">4 BHK and larger configurations only</strong>, each announced by a private lobby and composed for grand entertaining with voluminous living and dining spaces that open to true panoramic sea views, delivered in a bespoke bare-shell format.
      </>
    ),
  },
  {
    question: 'What is the starting price of Godrej Bandra Bay Residences?',
    answer: (
      <>
        The starting price is <strong className="font-semibold text-[#0E2430]">₹ 18 Cr* Onwards</strong>. Exclusive pre-launch pricing, customized cost sheets, and priority allocations are available upon enquiry for registered clients.
      </>
    ),
  },
  {
    question: 'Who is the developer of Godrej Bandra Bay Residences?',
    answer:
      'Godrej Bandra Bay Residences is developed by Godrej Properties, one of India’s most trusted real estate developers renowned for architectural brilliance, sustainability, and landmark residential communities across India.',
  },
  {
    question: 'Where exactly is Godrej Bandra Bay Residences located?',
    answer: (
      <>
        The project is exceptionally located at <strong className="font-semibold text-[#0E2430]">Bandra Reclamation, Bandra West, Mumbai</strong>, on a rare 2.75-acre seafront parcel offering effortless access to the Bandra-Worli Sea Link, BKC, South Mumbai, and Bandra’s most coveted social destinations.
      </>
    ),
  },
  {
    question: 'What amenities are provided at Godrej Bandra Bay Residences?',
    answer:
      'The project features an exclusive private wellness realm with a grand clubhouse, an indulgent spa, floatation therapy, massive outdoor running decks creating a private promenade above the water, infinity pool, modern gym, and elevated leisure spaces.',
  },
  {
    question: 'What is the current status and RERA registration of the project?',
    answer:
      'The project is currently in the Pre-Launch phase. The RERA registration number is Coming Soon.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#0E2430] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#F4EFE6] text-[#0E2430] font-bold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
