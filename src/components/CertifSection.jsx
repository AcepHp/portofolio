import React from 'react'
import Certif from '../assets/certificate.png'

export default function CertifSection() {
  return (
    <section className="mb-[200px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className='flex justify-between items-center text-white mb-2'>
            <div className='flex flex-1 items-center'>
                <img src={Certif} alt="Certificate" className='size-10'/>
                <h1 className='text-3xl font-bold ml-3'>My Certifications</h1>
            </div>
            <div>
                <a href="#" className='text-[#3ccf91] text-md font-medium'>View All Certificate →</a>
            </div>
        </div>

        {/* Certification Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1 */}
          <div className="flex-1 bg-[#0c0c0cea] rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <div className="text-white font-medium space-y-2">
              <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
              <p>EnigmaCamp</p>
              <p className="text-gray-400">Diterbitkan Mei 2022</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-[#0c0c0cea] rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <div className="text-white font-medium space-y-2">
              <h3 className="text-xl font-semibold">Front-End Development</h3>
              <p>Dicoding Academy</p>
              <p className="text-gray-400">Diterbitkan April 2023</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-[#0c0c0cea] rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <div className="text-white font-medium space-y-2">
              <h3 className="text-xl font-semibold">Front-End Development</h3>
              <p>Dicoding Academy</p>
              <p className="text-gray-400">Diterbitkan April 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
