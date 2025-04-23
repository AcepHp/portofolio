import React from 'react'
import Profile from '../assets/profile-img.png'

export default function AboutSection() {
    return (
        <div>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-[200px]'>
                <div className='relative z-[-10]'>
                    <img
                        src="https://svgsilh.com/svg/26432.svg"
                        alt=""
                        className="
                                    absolute
                                    z-[-10]
                                    top-[0px]
                                    right-0
                                    w-[70px] md:w-[150px]
                                    invert-[0.1]
                                "
                    />
                </div>
                <div className="flex flex-1 justify-between items-start">
                    <div className="w-2xl text-white mr-25">

                        <h1 className='text-2xl font-bold mb-5'>⚡ About Me</h1>
                        <div className="desc text-xl font-medium text-gray-500">
                            <p className='mb-5'>Hi, I'm <span className='text-[#3ccf91]'>Acep Handika Permana</span>, a graduate of the Informatics program at Universitas Jenderal Achmad Yani. From the start, I've been deeply interested in software development, especially in <span className='text-[#3ccf91]'>front-end development</span>.</p>
                            <p className='mb-5'>I focus on building interactive interfaces using React, Next.js, Tailwind CSS, and Bootstrap to create dynamic and responsive <span className='text-[#3ccf91]'>user experiences</span>.</p>
                            <p className='mb-5'>Additionally, I was a trainee at <span className='text-[#3ccf91]'>Enigma Camp</span>, where I learned <span className='text-[#3ccf91]'>full-stack development</span> with Java, Java Spring Boot, React.js, and React Native, which broadened my skills in building both web and mobile applications.</p>
                        </div>
                    </div>
                    <div className='flex-1 justify-end z-[-15]'>
                        <img src={Profile} alt="Foto Profile"
                            className='h-96 w-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
