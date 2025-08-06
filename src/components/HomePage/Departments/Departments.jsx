import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Departments.scss'

export default function Departments() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()
  
  const departments = [
    {
      id: 1,
      name: 'Elektronika',
      description: 'Projekty związane z elektroniką i układami elektronicznymi',
      longDescription: 'Tworzymy innowacyjne rozwiązania elektroniczne, od prostych układów po zaawansowane systemy IoT. Nasze projekty obejmują robotykę, automatyzację i inteligentne urządzenia.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3H15L16 4H20V6H4V4H8L9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      projects: ['IoT', 'Robotyka', 'Automatyzacja']
    },
    {
      id: 2,
      name: 'Software',
      description: 'Rozwój aplikacji i systemów informatycznych',
      longDescription: 'Tworzymy nowoczesne aplikacje webowe, mobilne i desktopowe. Specjalizujemy się w React, Node.js, Python i innych technologiach przyszłości.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 7H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 11H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 15H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      projects: ['Web Apps', 'Mobile Apps', 'AI/ML']
    },
    {
      id: 3,
      name: '3D',
      description: 'Modelowanie 3D i projektowanie przestrzenne',
      longDescription: 'Projektujemy i modelujemy w 3D, tworząc wizualizacje, prototypy i animacje. Używamy najnowszych narzędzi do projektowania przestrzennego.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      projects: ['Modelowanie', 'Animacja', 'Wizualizacja']
    },
    {
      id: 4,
      name: 'PR',
      description: 'Public Relations i komunikacja zewnętrzna',
      longDescription: 'Budujemy wizerunek koła naukowego, organizujemy wydarzenia i promujemy nasze projekty. Tworzymy treści marketingowe i zarządzamy mediami społecznościowymi.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      projects: ['Marketing', 'Social Media', 'Events']
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % departments.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + departments.length) % departments.length)
  }

  const handleTeamClick = () => {
    navigate('/team')
  }

  return (
    <div className="departments">
      <div className="departments-container">
        <div className="departments-header">
          <div className="header-content" onClick={handleTeamClick}>
            <div className="header-text">
              <h2>Poznaj zespoły, które tworzą nasze koło naukowe</h2>
              <p className="header-subtitle">Odkryj nasze specjalizacje i dołącz do naszego zespołu</p>
            </div>
            <div className="arrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="departments-slider">
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="slider-content">
            <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {departments.map((department) => (
                <div key={department.id} className="department-card">
                  <div className="department-icon">
                    {department.icon}
                  </div>
                  <h3>{department.name}</h3>
                  <p className="department-description">{department.description}</p>
                  <p className="department-long-description">{department.longDescription}</p>
                  <div className="department-projects">
                    {department.projects.map((project, index) => (
                      <span key={index} className="project-tag">{project}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="slider-dots">
          {departments.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}