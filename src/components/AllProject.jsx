import React from 'react'
import TrashTammer from "../assets/TrashTammerNew.png"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid"
import Js from "../assets/js.png"
import Atom from "../assets/atom.png"
import Reduxs from "../assets/redux.png"
import Tailwind from "../assets/tailwind.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function AllProject() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, [])
    return (
        <div>
            <div className='mx-auto max-w-7xl px-8 lg:px-8 mb-[70px] md:mb-[200px]' >
                <div className="text-white flex flex-col md:flex-row gap-5 md:gap-10 mb-5 md:mb-10" >
                    <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm border border-gray-700 md:border-0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <div>
                            <img src={TrashTammer || "/placeholder.svg"} alt="Trash-Tammer" className="w-full" />
                            <div className="flex flex-1 justify-between text-xl sm:text-2xl font-medium mr-3 ml-3">
                                <h1 className="mt-3 mb-3">TrashTammer Website</h1>
                                <a href="#">
                                    <ArrowTopRightOnSquareIcon className="size-6 sm:size-8 mt-3 mb-3" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-1 gap-1 xs:gap-2 sm:gap-3 border-b-[1px] border-gray-800 mr-2 ml-2 sm:mr-3 sm:ml-3">
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(49,45,14,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Js || "/placeholder.svg"}
                                    alt="Javascript"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#FFDF00]">Javascript</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(14,47,51,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Atom || "/placeholder.svg"}
                                    alt="React"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#53A7DD]">React</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(31,13,37,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Reduxs || "/placeholder.svg"}
                                    alt="Redux"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#6C4EB0]">Redux</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(16,51,56,0.95)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Tailwind || "/placeholder.svg"}
                                    alt="Tailwind"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#00ACC1]">TailwindCSS</span>
                            </button>
                        </div>
                        <div className="description m-3">
                            <p className="text-base sm:text-lg font-medium text-gray-500">
                                A website that helps users manage waste digitally and encourages eco-friendly habits through smart
                                features.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm border border-gray-700 md:border-0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <div>
                            <img src={TrashTammer || "/placeholder.svg"} alt="Trash-Tammer" className="w-full" />
                            <div className="flex flex-1 justify-between text-xl sm:text-2xl font-medium mr-3 ml-3">
                                <h1 className="mt-3 mb-3">TrashTammer Website</h1>
                                <a href="#">
                                    <ArrowTopRightOnSquareIcon className="size-6 sm:size-8 mt-3 mb-3" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-1 gap-1 xs:gap-2 sm:gap-3 border-b-[1px] border-gray-800 mr-2 ml-2 sm:mr-3 sm:ml-3">
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(49,45,14,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Js || "/placeholder.svg"}
                                    alt="Javascript"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#FFDF00]">Javascript</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(14,47,51,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Atom || "/placeholder.svg"}
                                    alt="React"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#53A7DD]">React</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(31,13,37,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Reduxs || "/placeholder.svg"}
                                    alt="Redux"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#6C4EB0]">Redux</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(16,51,56,0.95)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Tailwind || "/placeholder.svg"}
                                    alt="Tailwind"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#00ACC1]">TailwindCSS</span>
                            </button>
                        </div>
                        <div className="description m-3">
                            <p className="text-base sm:text-lg font-medium text-gray-500">
                                A website that helps users manage waste digitally and encourages eco-friendly habits through smart
                                features.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="text-white flex flex-col md:flex-row gap-5 md:gap-10">
                    <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm border border-gray-700 md:border-0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <div>
                            <img src={TrashTammer || "/placeholder.svg"} alt="Trash-Tammer" className="w-full" />
                            <div className="flex flex-1 justify-between text-xl sm:text-2xl font-medium mr-3 ml-3">
                                <h1 className="mt-3 mb-3">TrashTammer Website</h1>
                                <a href="#">
                                    <ArrowTopRightOnSquareIcon className="size-6 sm:size-8 mt-3 mb-3" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-1 gap-1 xs:gap-2 sm:gap-3 border-b-[1px] border-gray-800 mr-2 ml-2 sm:mr-3 sm:ml-3">
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(49,45,14,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Js || "/placeholder.svg"}
                                    alt="Javascript"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#FFDF00]">Javascript</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(14,47,51,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Atom || "/placeholder.svg"}
                                    alt="React"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#53A7DD]">React</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(31,13,37,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Reduxs || "/placeholder.svg"}
                                    alt="Redux"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#6C4EB0]">Redux</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(16,51,56,0.95)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Tailwind || "/placeholder.svg"}
                                    alt="Tailwind"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#00ACC1]">TailwindCSS</span>
                            </button>
                        </div>
                        <div className="description m-3">
                            <p className="text-base sm:text-lg font-medium text-gray-500">
                                A website that helps users manage waste digitally and encourages eco-friendly habits through smart
                                features.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm border border-gray-700 md:border-0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <div>
                            <img src={TrashTammer || "/placeholder.svg"} alt="Trash-Tammer" className="w-full" />
                            <div className="flex flex-1 justify-between text-xl sm:text-2xl font-medium mr-3 ml-3">
                                <h1 className="mt-3 mb-3">TrashTammer Website</h1>
                                <a href="#">
                                    <ArrowTopRightOnSquareIcon className="size-6 sm:size-8 mt-3 mb-3" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-1 gap-1 xs:gap-2 sm:gap-3 border-b-[1px] border-gray-800 mr-2 ml-2 sm:mr-3 sm:ml-3">
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(49,45,14,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Js || "/placeholder.svg"}
                                    alt="Javascript"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#FFDF00]">Javascript</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(14,47,51,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Atom || "/placeholder.svg"}
                                    alt="React"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#53A7DD]">React</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(31,13,37,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Reduxs || "/placeholder.svg"}
                                    alt="Redux"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#6C4EB0]">Redux</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(16,51,56,0.95)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                            >
                                <img
                                    src={Tailwind || "/placeholder.svg"}
                                    alt="Tailwind"
                                    className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                />
                                <span className="text-[#00ACC1]">TailwindCSS</span>
                            </button>
                        </div>
                        <div className="description m-3">
                            <p className="text-base sm:text-lg font-medium text-gray-500">
                                A website that helps users manage waste digitally and encourages eco-friendly habits through smart
                                features.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
