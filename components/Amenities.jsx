'use client'
import React from 'react'

const amenities = [
  {
    title: 'Exclusive Clubhouse',
    subtitle: 'State-of-the-art private clubhouse for social & elite recreation',
    icon: 'fa-solid fa-house-chimney',
  },
  {
    title: 'Floatation Therapy & Spa',
    subtitle: 'Indulgent restorative wellness treatments & therapeutic spa',
    icon: 'fa-solid fa-spa',
  },
  {
    title: 'Running Decks Promenade',
    subtitle: 'Expansive outdoor running decks creating a promenade above water',
    icon: 'fa-solid fa-person-running',
  },
  {
    title: 'Infinity-Edge Pool',
    subtitle: 'Resort-style pool with panoramic sea & skyline views',
    icon: 'fa-solid fa-person-swimming',
  },
  {
    title: 'Modern Gymnasium',
    subtitle: 'High-tech fitness studio with cutting-edge training equipment',
    icon: 'fa-solid fa-dumbbell',
  },
  {
    title: 'Private Lobby Experience',
    subtitle: 'Individual private lobby for each signature residence',
    icon: 'fa-solid fa-door-open',
  },
  {
    title: 'Elevated Leisure Spaces',
    subtitle: 'Sophisticated open-air lounges with sweeping sea vistas',
    icon: 'fa-solid fa-people-roof',
  },
  {
    title: '60% Landscaped Greens',
    subtitle: 'Exquisitely manicured open spaces & peaceful green realms',
    icon: 'fa-solid fa-tree',
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-12 md:py-16 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
            WORLD CLASS AMENITIES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Lifestyle That Complements Your Vision of Luxury
          </h2>
        </div>

        {/* 4x2 Clean Cards Grid (No Images, Exact Reference Design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {amenities.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={((index % 4) * 60).toString()}
                className="group relative bg-white rounded-[22px] p-7 border border-[#ececec] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[#8B6A34]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
              >
                {/* Center Content */}
                <div className="flex flex-col items-center w-full">
                  {/* Round Icon Badge */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] mb-5 transition-all duration-300 group-hover:scale-108 bg-[#F4EFE6] text-[#8B6A34] group-hover:bg-[#111111] group-hover:text-white shadow-sm font-bold">
                    <i className={item.icon}></i>
                  </div>

                  {/* Amenity Title */}
                  <h3 className="font-bold text-[17px] sm:text-[18px] mb-2 leading-snug transition-colors duration-200 text-[#111111] group-hover:text-[#8B6A34]">
                    {item.title}
                  </h3>

                  {/* Amenity Subtitle */}
                  <p className="text-[#6c757d] text-[13px] sm:text-[13.5px] leading-relaxed m-0 font-medium max-w-[230px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Amenities
