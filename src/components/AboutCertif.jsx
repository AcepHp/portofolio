import { useEffect, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function AboutCertif() {
    const [activeCard, setActiveCard] = useState(null)

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        })
    }, [])

    const certificates = [
        {
            id: 1,
            title: "Full-Stack Developer",
            organization: "EnigmaCamp",
            date: "Diterbitkan Mei 2022",
            skills: ["Java", "Spring Boot", "React", "MySQL"],
            color: "from-emerald-500/20 to-emerald-500/5",
        },
        {
            id: 2,
            title: "Front-End Development",
            organization: "Dicoding Academy",
            date: "Diterbitkan April 2023",
            skills: ["JavaScript", "React", "CSS", "Responsive Design"],
            color: "from-blue-500/20 to-blue-500/5",
        },
        {
            id: 3,
            title: "Front-End Development",
            organization: "Dicoding Academy",
            date: "Diterbitkan April 2023",
            skills: ["HTML5", "CSS3", "JavaScript", "Web Performance"],
            color: "from-purple-500/20 to-purple-500/5",
        },
        
    ]

    return (
        <section className="mb-[100px] md:mb-[150px]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Modern Section Header with Accent Line */}
                <div className="relative mb-10 sm:mb-16 flex items-center" data-aos="fade-up" data-aos-duration="800">
                    <div className="flex-grow h-[2px] bg-gradient-to-r from-[#3ccf91]/10 to-[#3ccf91]/80 mr-4 sm:mr-6"></div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center whitespace-nowrap">
                        My <span className="text-[#3ccf91] ml-2">Certifications</span>
                    </h2>
                    <div className="flex-grow h-[2px] bg-gradient-to-l from-[#3ccf91]/10 to-[#3ccf91]/80 ml-4 sm:ml-6"></div>
                </div>

                {/* Certification Cards - Enhanced Design */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="group relative"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={100 + index * 100}
                            onMouseEnter={() => setActiveCard(cert.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Card with enhanced styling */}
                            <div
                                className={`relative h-full bg-[#0c0c0c] rounded-xl p-5 sm:p-6 border border-gray-800/40 
                  shadow-lg transition-all duration-300 
                  ${activeCard === cert.id ? "shadow-[#3ccf91]/10" : ""}
                  hover:shadow-xl hover:border-gray-700/60 hover:-translate-y-1`}
                            >
                                {/* Subtle gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-30 rounded-xl`}></div>

                                {/* Certificate icon */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-[#0c0c0c] p-2 rounded-lg border border-gray-800/60">
                                        <svg
                                            className="w-6 h-6 text-[#3ccf91]"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.5 12L11 14.5L16 9.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    {/* Certificate number */}
                                    <span className="text-gray-500 text-sm font-mono">#{cert.id.toString().padStart(2, "0")}</span>
                                </div>

                                {/* Certificate content */}
                                <div className="relative text-white space-y-2">
                                    <h3 className="text-lg sm:text-xl font-bold">{cert.title}</h3>
                                    <p className="text-[#3ccf91] font-medium">{cert.organization}</p>
                                    <p className="text-gray-400 text-sm">{cert.date}</p>

                                    {/* Skills tags */}
                                    <div className="pt-4 flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <span key={skill} className="text-xs px-2 py-1 bg-gray-800/60 text-gray-300 rounded-md">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#3ccf91]/10 transform rotate-45 translate-x-8 -translate-y-8"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}
