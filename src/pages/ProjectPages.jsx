import React from 'react'
import Navbar from '../components/Navbar'
import ProjectHeader from '../components/ProjectHeader'
import AllProject from '../components/AllProject'
import Footer from '../components/Footer'

export default function ProjectPages() {
  return (
    <div>
        <Navbar/>
        <ProjectHeader/>
        <AllProject/>
        <Footer/>
    </div>
  )
}
