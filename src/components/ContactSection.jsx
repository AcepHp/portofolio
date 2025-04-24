import React from 'react'
import Document from '../assets/docs.png'
import Linkedin from '../assets/linkedin.png'
import Email from '../assets/email.png'

export default function ContactSection() {
    return (
        <div>
            <div className='mx-auto max-w-7xl px-8 lg:px-8 mb-[100px] md:mb-[200px]'>
                <div className="text-white flex flex-col items-center justify-center mb-10">
                    <h1 className='text-2xl md:text-5xl font-bold mb-10'>Keep In Touch.</h1>
                    <p className='text-md md:text-xl md:font-medium text-center'>I'm currently specializing in <span className='text-[#3ccf91]'>Front-end Development.</span></p>
                    <p className='text-md md:text-xl md:font-medium text-center'>Feel free to get in touch and talk more about your projects.</p>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="btn-sosmed flex gap-3">
                        <a
                            href='https://www.linkedin.com/in/acephp/'
                            target='_blank'
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-5 py-2 text-sm md:text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                            <img src={Linkedin} alt="Linkedin" className="-ml-0.5 size-4 md:size-5" />
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
                        <a
                            href='https://drive.google.com/file/d/1cIKNn9Zh0J7SDbDiQL20R9gueFtUUjPN/view?usp=sharing'
                            target='_blank'
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-[#1D1B1B] px-5 py-2 text-sm md:text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                            <img src={Document} alt="Github" className="-ml-0.5 size-4 md:size-5" />
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
