import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/AboutHeader'
import AboutLanyard from '../components/AboutLanyard'
import AboutCertif from '../components/AboutCertif'
import Footer from '../components/Footer'

export default function AboutPages() {
  return (
    <div>
        <div>
            <Navbar/>
            <AboutHeader/>
            <AboutLanyard/>
            <AboutCertif/>
            <Footer/>
        </div>
    </div>
  )
}
