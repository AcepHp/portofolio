import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePages from '../pages/HomePages'
import AboutPages from '../pages/AboutPages'
import ProjectPages from '../pages/ProjectPages'

export default function MainRoute() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePages/>}/>
                <Route path='/about' element={<AboutPages/>}/>
                <Route path='/project' element={<ProjectPages/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
