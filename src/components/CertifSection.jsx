import React from 'react'
import Certif from '../assets/certificate.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function CertifSection() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, [])
  return (
    <section className="mb-[100px] md:mb-[200px]">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        {/* Section Heading */}
        <div className='flex justify-between items-center text-white mb-2' data-aos="fade-up" data-aos-duration="800">
          <div className='flex flex-1 items-center'>
            <img src={Certif} alt="Certificate" className='size-5 md:size-7 lg:size-10' />
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ml-1 md:ml-3'>My Certifications</h1>
          </div>
          <div>
            <a href="#" className='text-[#3ccf91] text-sm md:text-md font-medium md:hidden'>View All →</a>
            <a href="#" className='text-[#3ccf91] text-sm md:text-lg font-medium hidden md:block'>View All Certificate →</a>
          </div>
        </div>

        {/* Certification Cards */}
        <div className="flex flex-col md:flex-row gap-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          {/* Card 1 */}
          <div className="flex-1 bg-[#0c0c0cea] rounded-xl p-6 shadow transition-shadow duration-300 hover:shadow-lg">
            <div className="text-white font-medium space-y-2">
              <h3 className="text-lg font-semibold">Belajar Dasar Pemrograman Web</h3>
              <p>Dicoding</p>
              <p className="text-gray-400">Published on 26 October 2024</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-[#0c0c0cea] rounded-xl p-6 shadow transition-shadow duration-300 hover:shadow-lg">
            <div className="text-white font-medium space-y-2">
              <h3 className="text-lg font-semibold">Training of Full-Stack Developer</h3>
              <p>EnigmaCamp</p>
              <p className="text-gray-400">Published on 22 April 2025</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-[#0c0c0cea] rounded-xl p-6 shadow transition-shadow duration-300 hover:shadow-lg">
            <div className="text-white font-medium space-y-2">
              <h3 className="text-lg font-semibold">VR Creation Training</h3>
              <p>Smarteye.id X Telkom Indonesia</p>
              <p className="text-gray-400">Published on 07 June 2022</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
