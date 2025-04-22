import React from 'react';
import './Portfolio.scss'
import Drone from "./images/drone.png"
import Drone1 from "./images/drone1.png"


export default function Portfolio() {
    const portfolioProjects = {
        title: "Our Projects",
        subtitle: "Innowacje, które latają. Projekty, które inspirują.",
        projects: [
          {
            id: 1,
            title: "SkyPix",
            category: "Robotics / Swarm Drones",
            image: Drone,
            description: [
              "SkyPix to system sterowania chmarą dronów umożliwiający tworzenie zsynchronizowanych animacji w powietrzu.",
  "Projekt składa się z dwóch modułów: oprogramowania pokładowego i systemu zarządzania lotem.",
  "Wykorzystano języki C++ i Python oraz zaawansowaną komunikację między jednostkami."
            
            ],
            link: "#"
          },
          {
            id: 2,
            title: "Kurina",
            category: "Embedded Development",
            image: Drone1,
            description: [
              "Kurina to projekt robota-odkurzacza częściowo zrealizowany podczas hackathonu w 2024 roku.",
  "System został zaprojektowany z wykorzystaniem języków C++ oraz CMake, z naciskiem na prostotę, modułowość i możliwość dalszego rozwoju.",
  "Kurina stanowi połączenie elektroniki, programowania i praktycznego zastosowania systemów wbudowanych."
            ],
            link: "#"
          },
          {
            id: 3,
            title: "Betterflight",
            category: "Flight Control / Firmware",
            image: Drone,
            description: [
                "Betterflight to nowoczesny firmware dla dronów, inspirowany Betaflight i INAV.",
                "Projekt wykorzystuje język Rust do zapewnienia wysokiej wydajności i bezpieczeństwa lotu.",
                "System umożliwia elastyczną konfigurację oraz precyzyjne sterowanie ruchem UAV."
            ],
            link: "#"
          },
          {
            id: 4,
            title: "Strona FALCON",
            category: "Web Development",
            image: Drone1,
            description: [
                "Oficjalna strona internetowa koła naukowego FALCON, zaprojektowana z myślą o przejrzystości i dostępności.",
                "Zawiera informacje o projektach, członkach, aktualnościach i wydarzeniach.",
                "Wdrożona przy użyciu HTML, CSS i JavaScript z responsywnym designem."
            ],
            link: "#"
          },
          {
            id: 5,
            title: "FALCON Bot",
            category: "Automation / Discord Bot",
            image: Drone,
            description: [
                "Bot zaprojektowany do automatycznego zarządzania dostępem i rolami w kanałach komunikacyjnych.",
                "Obsługuje przypisywanie uprawnień, autoryzację członków i moderację treści.",
                "Zaprogramowany w Pythonie z myślą o prostocie i niezawodności."
            ],
            link: "#"
          }
        ]
      };

  return (
    <div className='portfolio'>
        <span className="blob blob--1" />
  <span className="blob blob--2" />
  <span className="blob blob--3" />
  <span className="blob blob--4" />
  <span className="blob blob--5" />
    <div className="portfolio-wrap">
    
      <h1 className="portfolio-title">{portfolioProjects.title}</h1>
      <h2 class="portfolio-subtitle">{portfolioProjects.subtitle}</h2>

      {portfolioProjects.projects.map((project, index) => (
  <div
    className={`project-block ${index % 2 === 0 ? 'left' : 'right'}`}
    key={project.id}
  >
    <div className="project-image">
      <img src={project.image} alt={project.title} />
    </div>

    <div className="project-text">
  <div className="project-header">
    <h2>{project.title}</h2>
    <span className="category">{project.category}</span>
  </div>

  <div className="project-content">
    {project.description.map((line, idx) => (
      <p key={idx}>{line}</p>
    ))}
  </div>

  <a href={project.link} className="see-more">See more →</a>
</div>
  </div>
))}
    </div>
    </div>
  );
}
