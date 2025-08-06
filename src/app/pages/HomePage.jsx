import React from 'react'
import Welcome from '../../components/HomePage/Welcome/Welcome.jsx'
import BoxInfo from '../../components/HomePage/BoxInfo/BoxInfo.jsx'
import Departments from '../../components/HomePage/Departments/Departments.jsx'
import ProjectsOverview from '../../components/HomePage/ProjectsOverview/ProjectsOverview.jsx'
import Blog from '../../components/HomePage/Blog/Blog.jsx'
import ContactSection from '../../components/HomePage/ContactSection/ContactSection.jsx'

export default function HomePage() {
  return (
    <div>
          <Welcome/>
          <BoxInfo/>
          <Departments/>
          <ProjectsOverview/>
          <Blog/>
          <ContactSection/>
    </div>
  )
}
