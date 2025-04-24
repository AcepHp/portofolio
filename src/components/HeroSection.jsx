import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Github from '../assets/github-logo.png'
import Linkedin from '../assets/linkedin.png'
import Email from '../assets/email.png'

export default function HeroSection() {
    return (
        <div className='mt-[150px] md:mt-[300px] mb-[100px] md:mb-[200px]'>
            <div className="mx-auto max-w-7xl px-8 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                    <div className='flex-1'>
                        {/* Background Icon */}
                        <div className='relative'>
                            <img
                                src="https://svgsilh.com/svg/26432.svg"
                                alt=""
                                className="
                                    absolute
                                    -z-10
                                    top-[-5px] md:top-[-20px]
                                    left-[-0.5rem] md:left-[-2.5rem]
                                    w-[70px] md:w-[150px]
                                    invert-[0.1]
                                "
                            />
                        </div>

                        {/* Greeting */}
                        <p className='text-xl sm:text-2xl md:text-4xl text-[#3ccf91] font-medium'>
                            Hey there!, I'm-
                        </p>

                        {/* Name */}
                        <p className='text-[50px] sm:text-[60px] md:text-[100px] lg:text-[120px] xl:text-[150px] mt-[-10px] sm:mt-[-20px] md:mt-[-35px] text-white font-bold mb-3 md:mb-0'>
                            Acep Handika.
                        </p>

                        {/* Role + Description */}
                        <p className='text-md sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-medium mb-6 max-w-xl sm:max-w-2xl lg:max-w-4xl'>
                            <span className='text-white font-semibold'>Front End Developer.</span> Passionate about Computer Science and building user friendly interfaces.
                        </p>

                        {/* Current Focus */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">
                            🚀 Currently specializing in Frontend (React / Next.js)
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium mb-10">
                            ⚡ Trainee at <span className='text-[#3ccf91]'>EnigmaCamp</span>
                        </p>

                        {/* Social Buttons */}
                        <div className="btn-sosmed flex flex-wrap gap-3">
                            <a
                                href='https://github.com/AcepHp'
                                target='_blank'
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-4 py-2 text-sm sm:text-md font-semibold text-white hover:bg-gray-900 transition"
                            >
                                <img src={Github} alt="Github" className="size-5" />
                                Github
                            </a>
                            <a
                                href='https://www.linkedin.com/in/acephp/'
                                target='_blank'
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-4 py-2 text-sm sm:text-md font-semibold text-white hover:bg-gray-900 transition"
                            >
                                <img src={Linkedin} alt="Linkedin" className="size-5" />
                                Linkedin
                            </a>
                            <a
                                href="mailto:acephandika27@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-4 py-2 text-sm sm:text-md font-semibold text-white hover:bg-gray-900 transition"
                            >
                                <img src={Email} alt="Email" className="size-5" />
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
