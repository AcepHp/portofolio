import React from 'react'
import Document from '../assets/docs.png'
import Linkedin from '../assets/linkedin.png'
import Email from '../assets/email.png'

export default function ContactSection() {
    return (
        <div>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-[200px]'>
                <div className="text-white flex flex-col items-center justify-center mb-10">
                    <h1 className='text-5xl font-bold mb-10'>Keep In Touch.</h1>
                    <p className='text-xl font-medium'>I'm currently specializing in <span className='text-[#3ccf91]'>Front-end Development.</span></p>
                    <p className='text-xl font-medium'>Feel free to get in touch and talk more about your projects.</p>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="btn-sosmed flex gap-3">
                        
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
                        <button
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-5 py-2 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                            <img src={Document} alt="Github" className="-ml-0.5 size-5" />
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
