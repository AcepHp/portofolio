import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import CertifSection from '../components/CertifSection'

export default function HomePages() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <AboutSection/>
      </div>
      <div>
        <ProjectSection/>
      </div>
      <div>
        <CertifSection/>
      </div>
      <div>
        <ContactSection/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
