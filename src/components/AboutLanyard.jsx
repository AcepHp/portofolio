import { useEffect, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Lanyard from "./Lanyard/Lanyard"

export default function AboutLanyard() {
  const [aosDelay, setAosDelay] = useState(500)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth >= 768) {
        setAosDelay(200)
      } else {
        setAosDelay(500)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="mb-[100px] md:mb-[150px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay={aosDelay}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Modern Section Header with Accent Line */}
        <div className="relative mb-10 sm:mb-16 flex items-center">
          <div className="flex-grow h-[1px] bg-gradient-to-r from-[#3ccf91]/10 to-[#3ccf91]/80 mr-4 sm:mr-6"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center whitespace-nowrap">
            About <span className="text-[#3ccf91] ml-2">Me</span>
          </h2>
          <div className="flex-grow h-[1px] bg-gradient-to-l from-[#3ccf91]/10 to-[#3ccf91]/80 ml-4 sm:ml-6"></div>
        </div>

        {/* Content Container with Improved Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* Text Column - Now with Cards */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-4 sm:space-y-6">
            {/* Bio Card */}
            <div
              className="bg-[#0c0c0c] rounded-xl border border-gray-800/40 p-4 sm:p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-[#3ccf91]/10 p-2 rounded-lg mr-3 flex items-center justify-center">
                  {/* Education icon */}
                  <svg
                    className="w-5 h-5 text-[#3ccf91]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Background</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Hi, I'm <span className="text-[#3ccf91] font-medium">Acep Handika Permana</span>, a graduate of the
                Informatics program at Universitas Jenderal Achmad Yani. From the start, I've been deeply interested in
                software development, especially in <span className="text-[#3ccf91]">front-end development</span>.
              </p>
            </div>

            {/* Skills Card */}
            <div
              className="bg-[#0c0c0c] rounded-xl border border-gray-800/40 p-4 sm:p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-[#3ccf91]/10 p-2 rounded-lg mr-3 flex items-center justify-center">
                  {/* Code icon */}
                  <svg
                    className="w-5 h-5 text-[#3ccf91]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 18L22 12L16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 6L2 12L8 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Focus</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                I focus on building interactive interfaces using React, Next.js, Tailwind CSS, and Bootstrap to create
                dynamic and responsive <span className="text-[#3ccf91]">user experiences</span>.
              </p>
            </div>

            {/* Experience Card */}
            <div
              className="bg-[#0c0c0c] rounded-xl border border-gray-800/40 p-4 sm:p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-[#3ccf91]/10 p-2 rounded-lg mr-3 flex items-center justify-center">
                  {/* Briefcase icon */}
                  <svg
                    className="w-5 h-5 text-[#3ccf91]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Experience</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                I was a trainee at <span className="text-[#3ccf91]">Enigma Camp</span>, where I learned{" "}
                <span className="text-[#3ccf91]">full-stack development</span> with Java, Java Spring Boot, React.js,
                and React Native, which broadened my skills in building both web and mobile applications.
              </p>
            </div>
          </div>

          {/* Lanyard Column with Enhanced Container */}
          <div className="lg:col-span-5 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="400">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3ccf91]/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#3ccf91]/5 rounded-full blur-xl"></div>

              {/* Card container with better styling */}
              <div className="relative bg-gradient-to-br from-[#0c0c0c] to-[#121212] rounded-xl border border-gray-800/40 p-3 sm:p-4 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>

                <div className="relative">
                  {/* Header */}
                  <div className="mb-2 sm:mb-3 flex justify-between items-center">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-400">Interactive ID Card</h4>
                    <div className="flex space-x-1">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#3ccf91]/60"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gray-600"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>

                  {/* Lanyard container - Responsive height */}
                  <div className="aspect-square w-full md:h-120 bg-black/30 rounded-lg overflow-hidden">
                    <Lanyard position={[0, 0, 15]} gravity={[0, -30, 0]} />
                  </div>

                  {/* Footer */}
                  <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-center text-gray-500">
                    Drag the card to interact • Click to rotate
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
