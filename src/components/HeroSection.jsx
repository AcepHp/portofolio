import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Github from '../assets/github-logo.png'
import Linkedin from '../assets/linkedin.png'
import Email from '../assets/email.png'

export default function HeroSection() {
    return (
        <div className='mt-[300px] mb-[200px]'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex flex-1 justify-between items-center">
                    <div className='flex-1'>
                        <div className='relative z-[-10]'>
                            <img
                                src="https://svgsilh.com/svg/26432.svg"
                                alt=""
                                className="
                            absolute
                            z-[-10]
                            top-[-20px]
                            left-[-1rem] md:left-[-2.5rem]
                            w-[70px] md:w-[150px]
                            invert-[0.1]
                        "
                            />
                        </div>

                        <p className='text-4xl text-[#3ccf91] font-medium'>
                            Hey there!, I'm-
                        </p>
                        <p className='text-[150px] mt-[-35px] text-white font-bold'>
                            Acep Handika.
                        </p>
                        <p className='text-3xl text-gray-400 font-medium mb-10'>
                            <span className='text-white font-semibold'>Front End Developer. </span>
                            Passionate about Computer Science and building <br /> user friendly interfaces.
                        </p>
                        <p className="text-2xl text-gray-400 font-medium">
                            🚀 Currently specializing in Frontend (React / Next.js)
                        </p>
                        <p className="text-2xl text-gray-400 font-medium mb-10">
                            ⚡ Trainee at <span className='text-[#3ccf91]'>EnigmaCamp</span>
                        </p>
                        <div className="btn-sosmed flex gap-3">
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-5 py-2 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                            >
                                <img src={Github} alt="Github" className="-ml-0.5 size-5" />
                                Github
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-5 py-2 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                            >
                                <img src={Linkedin} alt="Linkedin" className="-ml-0.5 size-5" />
                                Linkedin
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-5 py-2 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                            >
                                <img src={Email} alt="Email" className="-ml-0.5 size-5" />
                                Email
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
