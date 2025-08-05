import React from 'react'
import Welcome from '../components/Welcome/Welcome.jsx'
import BoxInfo from '../components/BoxInfo/BoxInfo.jsx'
import Departments from '../components/Departments/Departments.jsx'
import ProjectsOverview from '../components/ProjectsOverview/ProjectsOverview.jsx'
import Blog from '../components/Blog/Blog.jsx'
import ContactSection from '../components/ContactSection/ContactSection.jsx'

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
