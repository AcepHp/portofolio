import React, { useEffect } from 'react'
import Profile from '../assets/profile-img.png'
import Aos from "aos"
import "aos/dist/aos.css"

export default function AboutSection() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className='mb-[100px] md:mb-[200px]'>
            <div className='mx-auto max-w-7xl px-8 lg:px-8 relative'>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
                    
                    {/* Text Section */}
                    <div className="w-full lg:w-2/3 text-white">
                        <h1 
                          className='text-xl sm:text-2xl font-bold mb-5'
                          data-aos="fade-up"
                          data-aos-delay="0"
                        >
                          ⚡ About Me
                        </h1>

                        <div className="desc text-base sm:text-lg md:text-xl md:font-medium text-gray-400">
                            <p 
                              className='mb-5'
                              data-aos="fade-up"
                              data-aos-delay="100"
                            >
                                Hi, I'm <span className='text-[#3ccf91]'>Acep Handika Permana</span>, a graduate of the Informatics program at Universitas Jenderal Achmad Yani.
                                From the start, I've been deeply interested in software development, especially in <span className='text-[#3ccf91]'>front-end development</span>.
                            </p>
                            <p 
                              className='mb-5'
                              data-aos="fade-up"
                              data-aos-delay="200"
                            >
                                I focus on building interactive interfaces using React, Next.js, Tailwind CSS, and Bootstrap to create dynamic and responsive <span className='text-[#3ccf91]'>user experiences</span>.
                            </p>
                            <p 
                              className='mb-5'
                              data-aos="fade-up"
                              data-aos-delay="300"
                            >
                                Additionally, I was a trainee at <span className='text-[#3ccf91]'>Enigma Camp</span>, where I learned <span className='text-[#3ccf91]'>full-stack development</span> with Java, Java Spring Boot, React.js, and React Native,
                                which broadened my skills in building both web and mobile applications.
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div 
                      className='w-full lg:w-1/3 flex justify-center lg:justify-end'
                      data-aos="fade-left"
                      data-aos-delay="400"
                    >
                        <img 
                            src={Profile} 
                            alt="Foto Profile"
                            className='h-60 sm:h-72 md:h-80 lg:h-80 xl:h-96 w-auto rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
