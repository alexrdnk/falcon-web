import React from 'react';
import {Link} from 'react-router-dom'
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
              "SkyPix to innowacyjny projekt koła naukowego FALCON, którego celem jest tworzenie zsynchronizowanych, świetlnych animacji z udziałem autonomicznych dronów.",
              "Obecnie system składa się z trzech jednostek latających, jednak architektura została zaprojektowana z myślą o skalowalności.",
              "Finalnie SkyPix ma obsługiwać nawet tysiące dronów jednocześnie."
  
            ],
            link: "/portfolio/skypix"
          },
          {
            id: 2,
            title: "Kurina",
            category: "Embedded Development",
            image: Drone1,
            description: [
             "Kurīnā (クリーナー – „Cleaner”) to inteligentny robot odkurzający rozwijany przez koło naukowe FALCON.",
  "Projekt łączy autorską elektronikę i oprogramowanie, zapoczątkowany podczas Hackathonu w 2024 roku.",
  "Robot działa autonomicznie dzięki czujnikom i algorytmom, a użytkownik może go obsługiwać z poziomu aplikacji mobilnej."
            ],
            link: "/portfolio/kurina"
          },
          {
            id: 3,
            title: "Betterflight",
            category: "Flight Control / Firmware",
            image: Drone,
            description: [
                "BetterFlight to nowoczesne oprogramowanie dla kontrolerów lotu dronów, stworzone jako alternatywa dla Betaflight, lecz w całości napisane w języku Rust.",
  "Projekt powstał z myślą o zwiększeniu efektywności, bezpieczeństwa i czytelności kodu.",
  "Całość została zaprojektowana bez kompromisów w zakresie wydajności."
            ],
            link: "/portfolio/betterflight"
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
            link: "/portfolio/falconweb"
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
            link: "/portfolio/falconbot"
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

  <Link to={project.link} className="see-more">See more →</Link>
</div>
  </div>
))}
    </div>
    </div>
  );
}
