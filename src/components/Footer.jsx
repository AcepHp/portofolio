import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })
  }, [])
  return (
    <div className="text-gray-200 text-center md:font-medium py-6 mt-auto relative z-10">
      <div className="mb-5 md:mb-10" data-aos="fade-down" data-aos-duration="800">
        <h1 className="text-sm md:text-md">Designed and Developed By Acep Handika.</h1>
        <h1 className="text-sm md:text-md">
          Built With <span className="text-[#3ccf91]">ReactJs</span> &{" "}
          <span className="text-[#3ccf91]">TailwindCSS</span>. Hosted in <span className="text-[#3ccf91]">Vercel.</span>
        </h1>
      </div>
    </div>
  )
}
