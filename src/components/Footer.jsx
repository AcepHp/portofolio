import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, [])
    return (
        <div className='text-gray-200 text-center md:font-medium'>
            <div className='mb-5 md:mb-10'>
                <h1 className='text-sm md:text-md' data-aos="fade-up" data-aos-duration="800">Designed and Developed By Acep Handika.</h1>
                <h1 className='text-sm md:text-md' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Built With <span classNadata-aos="fade-up" data-aos-duration="800" data-aos-delay="200"me='text-[#3ccf91]'>ReactJs</span> & <span className='text-[#3ccf91]'>TailwindCSS</span>. Hosted in <span className='text-[#3ccf91]'>Vercel.</span></h1>
            </div>
        </div>
    )
}
