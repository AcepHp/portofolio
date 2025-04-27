import TrashTammer from "../assets/trash.png"
import Akademik from "../assets/5.png"
import Simadang from "../assets/6.png"
import Xgboost from "../assets/7.png"
import Js from "../assets/js.png"
import Atom from "../assets/atom.png"
import Reduxs from "../assets/redux.png"
import Tailwind from "../assets/tailwind.png"
import Php from "../assets/php.png"
import CodeIgniter from "../assets/social-media.png"
import Python from "../assets/python.png"
import Flask from "../assets/flask.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function ProjectSection() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, [])
    return (
        <div>
            <div className="mx-auto max-w-7xl px-8 lg:px-8 flex items-center mb-16 sm:mb-24 md:mb-[200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-4 gap-8 md:gap-30 text-white w-full">
                    <div className="flex flex-col gap-0 md:hidden" data-aos="fade-up" data-aos-duration="800">
                        <div className="flex flex-1 justify-between items-center">
                            <div className="">
                                <h1 className="text-lg sm:text-2xl font-bold">All Creative Works.</h1>
                            </div>
                            <a href="#" className="text-sm font-medium text-[#3ccf91]">
                                Explore more →
                            </a>
                        </div>
                        <p className="text-md sm:text-lg text-gray-500 font-medium">
                            Here's some of my projects that I have worked on.
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col mb-8 md:mb-0" data-aos="fade-up" data-aos-duration="800">
                        <h1 className="text-lg md:text-2xl sm:text-3xl font-bold mb-2">All Creative Works.</h1>
                        <p className="text-lg sm:text-xl text-gray-500 font-medium mb-2">
                            Here's some of my projects that I have worked on.
                        </p>
                        <a href="#" className="text-xl sm:text-2xl font-medium text-[#3ccf91]">
                            Explore more →
                        </a>
                    </div>


                    <div className="md:row-span-2 mb-8 md:mb-0" data-aos="fade-up" data-aos-duration="800">
                        <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm border border-gray-700 md:border-0">
                            <div>
                                <img src={TrashTammer || "/placeholder.svg"} alt="Trash-Tammer" className="w-full" />
                                <div className="flex flex-1 justify-between text-xl sm:text-2xl font-medium mr-3 ml-3">
                                    <h1 className="mt-3 mb-3">TrashTammer Website</h1>
                                    {/* <a href="#">
                                        <ArrowTopRightOnSquareIcon className="size-6 sm:size-8 mt-3 mb-3" />
                                    </a> */}
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
                    <div className="md:row-span-2 md:col-start-1 md:row-start-2 mb-8 md:mb-0 " data-aos="fade-up" data-aos-duration="800">
                        <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm border border-gray-700 md:border-0">
                            <div>
                                <img src={Akademik || "/placeholder.svg"} alt="Trash-Tammer" className="w-full" />
                                <div className="flex flex-1 justify-between text-xl sm:text-2xl font-medium mr-3 ml-3">
                                    <h1 className="mt-3 mb-3">Sistem Akademik SMK-TI GNC</h1>
                                    {/* <a href="#">
                                        <ArrowTopRightOnSquareIcon className="size-6 sm:size-8 mt-3 mb-3" />
                                    </a> */}
                                </div>
                            </div>
                            <div className="flex flex-wrap flex-1 gap-1 xs:gap-2 sm:gap-3 border-b-[1px] border-gray-800 mr-2 ml-2 sm:mr-3 sm:ml-3">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(23,24,83,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                                >
                                    <img
                                        src={Php || "/placeholder.svg"}
                                        alt="Javascript"
                                        className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-5 mr-0.5 xs:mr-1"
                                    />
                                    <span className="text-[#4b00ad]">PHP</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(51,35,14,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                                >
                                    <img
                                        src={CodeIgniter || "/placeholder.svg"}
                                        alt="React"
                                        className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                    />
                                    <span className="text-[#dd9653]">CodeIgniter</span>
                                </button>
                                
                            </div>
                            <div className="description m-3">
                                <p className="text-base sm:text-lg font-medium text-gray-500">
                                    A web application that simplifies the management of academic data at SMK-TI GNC, including student information, class schedules, and grades, to improve efficiency and accessibility.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:row-span-2 md:col-start-2 md:row-start-3" data-aos="fade-up" data-aos-duration="800">
                        <div className="overflow-hidden rounded-lg bg-[#0c0c0cea] shadow-sm border border-gray-700 md:border-0">
                            <div>
                                <img src={Xgboost || "/placeholder.svg"} alt="Trash-Tammer" className="w-full" />
                                <div className="flex flex-1 justify-between text-xl sm:text-xl font-medium mr-3 ml-3">
                                    <h1 className="mt-3 mb-3">Klasifikasi Penyakit Dengan ADASYN & XGBoost</h1>
                                    {/* <a href="#">
                                        <ArrowTopRightOnSquareIcon className="size-6 sm:size-8 mt-3 mb-3" />
                                    </a> */}
                                </div>
                            </div>
                            <div className="flex flex-wrap flex-1 gap-1 xs:gap-2 sm:gap-3 border-b-[1px] border-gray-800 mr-2 ml-2 sm:mr-3 sm:ml-3">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(49,45,14,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                                >
                                    <img
                                        src={Python || "/placeholder.svg"}
                                        alt="Javascript"
                                        className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-3 mr-0.5 xs:mr-1"
                                    />
                                    <span className="text-[#FFDF00]">Python</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1 rounded-md p-0.5 bg-[rgba(14,47,51,0.99)] px-1.5 xs:px-2 sm:px-3 text-xs xs:text-sm sm:text-md md:text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mb-2 sm:mb-3 text-[10px] xs:text-xs sm:text-sm"
                                >
                                    <img
                                        src={Flask || "/placeholder.svg"}
                                        alt="React"
                                        className="-ml-0.5 size-2.5 xs:size-3 sm:size-4 md:size-5 mr-0.5 xs:mr-1"
                                    />
                                    <span className="text-[#53A7DD]">Flask</span>
                                </button>
                                
                            </div>
                            <div className="description m-3">
                                <p className="text-base sm:text-lg font-medium text-gray-500">
                                    A classification model for predicting heart disease using ADASYN for balancing the dataset and XGBoost for accurate predictions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
