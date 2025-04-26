import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


export default function AboutHeader() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, [])
  return (
    <section className="mx-auto max-w-7xl px-8 sm:px-8 md:px-8 mt-20 sm:mt-24 md:mt-28 lg:mt-30 mb-16 sm:mb-20 md:mb-20 lg:mb-20 relative">
      <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_10px_50px_rgba(60,207,145,0.08)] p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:shadow-[0_15px_60px_rgba(60,207,145,0.12)]" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">
        {/* Enhanced gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3ccf91]/10 via-[#3ccf91]/5 to-transparent pointer-events-none" />

        {/* Subtle corner accent */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#3ccf91]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-[#3ccf91]/3 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative dots with enhanced styling */}
        <div className="absolute top-6 right-6 flex space-x-1.5">
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#3ccf91]/40 animate-pulse"
          />
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#3ccf91]/60 animate-pulse"
          />
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#3ccf91]/80 animate-pulse"
          />
        </div>

        {/* Heading with enhanced responsive typography */}
        <div className="relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">
            <span className="text-[#3ccf91] relative">
              About
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#3ccf91]/80 to-transparent"></span>
            </span>{" "}
            <span className="relative">
              Me
              <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-gradient-to-r from-white/20 to-transparent"></span>
            </span>
          </h1>
        </div>

        {/* Subtitle with improved responsive styling */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-medium max-w-3xl" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">
          Little Brief About Myself
        </p>
      </div>
    </section>
  )
}
