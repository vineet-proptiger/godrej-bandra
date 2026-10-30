'use client'
import React from 'react'

const locationList = [
  {
    title: 'Bandra - Worli Sea Link',
    desc: 'Instant access connecting seamlessly directly to South Mumbai',
    time: '02 Mins',
    icon: 'fa-solid fa-bridge',
  },
  {
    title: 'BKC (Bandra Kurla Complex)',
    desc: 'Mumbai’s premier corporate and international financial epicenter',
    time: '10 Mins',
    icon: 'fa-solid fa-building-user',
  },
  {
    title: 'Western Express Highway',
    desc: 'Direct arterial highway offering effortless connectivity across the city',
    time: '05 Mins',
    icon: 'fa-solid fa-road',
  },
  {
    title: 'Lilavati Hospital & Research Centre',
    desc: 'Pioneering super-specialty healthcare and emergency medical care',
    time: '05 Mins',
    icon: 'fa-solid fa-hospital',
  },
  {
    title: 'Bandra Bandstand & Carter Road',
    desc: 'Coveted seaside promenades, luxury cafes & vibrant social life',
    time: '08 Mins',
    icon: 'fa-solid fa-water',
  },
  {
    title: 'South Mumbai (Lower Parel / Worli)',
    desc: 'Swift commute to high-end business districts & luxury retail',
    time: '15 Mins',
    icon: 'fa-solid fa-city',
  },
  {
    title: 'Mumbai International Airport (CSMIA)',
    desc: 'Expedited commute to domestic and international flight terminals',
    time: '20 Mins',
    icon: 'fa-solid fa-plane-departure',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-8 md:mb-10" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#0E2430] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Location That Keeps You Connected
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List (7 Cards) / Right Map (Equal Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 7 Location Points */}
          <div className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#F9F8F3] border border-[#EAE6DF] hover:border-[#8B6A34]/60 rounded-[12px] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200"
              >
                {/* Left side: Icon & Title + Context */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F4EFE6] group-hover:bg-[#0E2430] text-[#0E2430] group-hover:text-[#8B6A34] flex items-center justify-center text-[13px] sm:text-[14px] shrink-0 transition-colors duration-200">
                    <i className={`${item.icon} text-[#0E2430] group-hover:text-[#8B6A34]`}></i>
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <span className="text-[#1f2937] group-hover:text-[#0E2430] font-bold text-[13px] sm:text-[14px] transition-colors duration-200 leading-snug truncate">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-[11px] sm:text-[11.5px] transition-colors duration-200 leading-tight truncate">
                      {item.desc}
                    </span>
                  </div>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#F4EFE6] group-hover:bg-[#0E2430] text-[#0E2430] group-hover:text-white font-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed (Exact Equal Height) */}
          <div 
            data-aos="fade-left"
            className="w-full h-full min-h-[350px] lg:min-h-full rounded-[20px] overflow-hidden border border-[#EAE6DF] shadow-[0_4px_25px_rgba(0,0,0,0.06)] bg-gray-100 flex"
          >
            <iframe
              src="https://maps.google.com/maps?q=Bandra+Reclamation,+Bandra+West,+Mumbai,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Godrej Bandra Bay Residences, Bandra West, Mumbai Location Map"
              className="w-full h-full min-h-[350px] lg:min-h-[420px]"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
