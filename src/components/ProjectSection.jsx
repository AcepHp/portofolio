import React from 'react'
import TrashTammer from '../assets/TrashTammerNew.png'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid'
import Js from '../assets/js.png'
import Atom from '../assets/atom.png'
import Reduxs from '../assets/redux.png'
import Tailwind from '../assets/tailwind.png'

export default function ProjectSection() {
    return (
        <div>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center mb-[200px]'>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-rows-4 gap-30 text-white">
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>All Creative Works.</h1>
                        <p className='text-xl text-gray-500 font-medium mb-2'>Here's some of my projects that I have worked on.</p>
                        <a href="#" className='text-2xl font-medium text-[#3ccf91]'>Explore more →</a>
                    </div>
                    <div className="row-span-2">
                        <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm">
                            <div>
                                <img src={TrashTammer} alt="Trash-Tammer" />
                                <div className='flex flex-1 justify-between text-2xl font-medium mr-3 ml-3'>
                                    <h1 className='mt-3 mb-3'>TrashTammer Website</h1>
                                    <ArrowTopRightOnSquareIcon className='size-8 mt-3 mb-3' />
                                </div>
                            </div>
                            <div className='flex flex-1 gap-4 border-b-1 border-gray-800 mr-3 ml-3'>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(49,45,14,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Js} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#FFDF00]'>Javascript</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(14,47,51,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Atom} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#53A7DD]'>React</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(31,13,37,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Reduxs} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#6C4EB0]'>Redux</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(16,51,56,0.95)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Tailwind} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#00ACC1]'>TailwindCSS</span>
                                </button>
                            </div>
                            <div className="description m-3">
                                <p className='text-lg font-medium text-gray-500'>A website that helps users manage waste digitally and encourages eco-friendly habits through smart features.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 col-start-2 row-start-3">
                    <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm">
                            <div>
                                <img src={TrashTammer} alt="Trash-Tammer" />
                                <div className='flex flex-1 justify-between text-2xl font-medium mr-3 ml-3'>
                                    <h1 className='mt-3 mb-3'>TrashTammer Website</h1>
                                    <ArrowTopRightOnSquareIcon className='size-8 mt-3 mb-3' />
                                </div>
                            </div>
                            <div className='flex flex-1 gap-4 border-b-1 border-gray-800 mr-3 ml-3'>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(49,45,14,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Js} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#FFDF00]'>Javascript</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(14,47,51,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Atom} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#53A7DD]'>React</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(31,13,37,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Reduxs} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#6C4EB0]'>Redux</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(16,51,56,0.95)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Tailwind} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#00ACC1]'>TailwindCSS</span>
                                </button>
                            </div>
                            <div className="description m-3">
                                <p className='text-lg font-medium text-gray-500'>A website that helps users manage waste digitally and encourages eco-friendly habits through smart features.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 col-start-1 row-start-2">
                    <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm">
                            <div>
                                <img src={TrashTammer} alt="Trash-Tammer" />
                                <div className='flex flex-1 justify-between text-2xl font-medium mr-3 ml-3'>
                                    <h1 className='mt-3 mb-3'>TrashTammer Website</h1>
                                    <ArrowTopRightOnSquareIcon className='size-8 mt-3 mb-3' />
                                </div>
                            </div>
                            <div className='flex flex-1 gap-4 border-b-1 border-gray-800 mr-3 ml-3'>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(49,45,14,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Js} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#FFDF00]'>Javascript</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(14,47,51,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Atom} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#53A7DD]'>React</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(31,13,37,0.99)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Reduxs} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#6C4EB0]'>Redux</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md p-0.5 bg-[rgba(16,51,56,0.95)] px-3 text-md font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-3"
                                >

                                    <img src={Tailwind} alt="Linkedin" className="-ml-0.5 size-4 mr-1" />
                                    <span className='text-[#00ACC1]'>TailwindCSS</span>
                                </button>
                            </div>
                            <div className="description m-3">
                                <p className='text-lg font-medium text-gray-500'>A website that helps users manage waste digitally and encourages eco-friendly habits through smart features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
