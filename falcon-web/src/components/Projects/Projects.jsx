import React from 'react'
import { useParams } from 'react-router-dom';
import SkyPixImage from "./images/drone.png"
import Avatar from "./images/avatar.png"
import LinkedIn from "./images/linkedIn.svg?react"
import GitHub from "./images/github.svg?react"
import "./Projects.scss"

export default function Projects() {
const projects = {
    skypix: {
        title: 'SkyPix',
        subtitle: 'Chmara dronów',
        fullTitle: 'SkyPix – Inteligentne Animacje Dronów od Koła FALCON',
        image: SkyPixImage,
        description: [
          {
            text: 'SkyPix to innowacyjny projekt koła naukowego FALCON, w którym tworzymy zsynchronizowane animacje z użyciem autonomicznych dronów. Nasze drony komunikują się przez LoRa za pomocą autorskiego protokołu, a cały system oparty jest na naszych własnych płytkach PCB. Sterowanie odbywa się przez stworzoną przez nas aplikację z graficznym interfejsem, która umożliwia łatwe przypisywanie animacji i kontrolę lotu. Projekt jest w pełni skalowalny – od kilku do tysięcy dronów – i łączy elektronikę, programowanie i sztukę w nowoczesnym wydaniu.'
          },
          {
            title: 'Autorski hardware i protokół komunikacji',
            text: ['Każdy dron w projekcie SkyPix oparty jest na naszej własnej, specjalnie zaprojektowanej płytce PCB, dostosowanej do wymogów projektu i zoptymalizowanej pod kątem niskiego zużycia energii oraz wysokiej precyzji sterowania.', 'Drony komunikują się bezprzewodowo poprzez technologię LoRa, co zapewnia stabilną łączność na dużą odległość i przy minimalnym zużyciu energii. Aby osiągnąć pełną kontrolę nad przepływem danych oraz zapewnić niezawodność systemu, opracowaliśmy własny, lekki protokół komunikacyjny, dostosowany do wymagań animacji czasu rzeczywistego.']
          },
          {
            title: 'Zaawansowane oprogramowanie sterujące',
            text: 'Cały system napędzany jest przez oprogramowanie stworzone przez członków koła. Oprogramowanie na pokładzie dronów napisane jest w C++, co pozwala na maksymalne wykorzystanie zasobów sprzętowych i zapewnia niskopoziomową kontrolę nad ruchem dronów.'
          },
          {
            title: 'Dodatkowo stworzyliśmy aplikację desktopową w języku Python, która umożliwia:',
            text: ['Sterowanie dronami w czasie rzeczywistym,', "Tworzenie, zarządzanie i przypisywanie animacji do poszczególnych dronów,", "Monitorowanie stanu systemu i debugowanie,", "Wizualizację planowanych trajektorii i efektów świetlnych.", "Aplikacja posiada intuicyjne GUI, co czyni pracę z systemem przystępną nawet dla osób spoza zespołu deweloperskiego."
        ]},
          {
            title: 'Nasza wizja',
            text: ['SkyPix to nie tylko system animacji dronowych – to platforma eksperymentalna, która łączy elektronikę, informatykę, robotykę i sztukę. Projekt stanowi fundament do przyszłych badań nad koordynacją wielu jednostek autonomicznych, synchronizacją w czasie rzeczywistym oraz komunikacją w rozproszonych systemach embedded.', 'W kolejnych etapach planujemy rozbudowę floty, dalszą optymalizację algorytmów ruchu, rozwój narzędzi do projektowania animacji 3D, a także organizację pokazów dronowych – zarówno na uczelni, jak i w przestrzeni publicznej.']
          }
        ],
        team: Array(4).fill({
          name: 'Jakub Nowak',
          role: 'Rust Developer',
          linkedin: '#',
          github: '#',
          photo: Avatar
        })
      },
    
      kurina: {
        title: 'Kurina',
        subtitle: 'Embedded Development',
        fullTitle: 'Kurina – Robot Mobilny z Hackathonu 2024',
        image: SkyPixImage,
        description: [
          {
            text: ['Kurīnā to inteligentny robot odkurzający tworzony przez zespół KN FALCON. Rozpoczęty podczas Hackathonu w Krakowie w 2024, dziś rozwijany jako kompleksowa platforma z własnym sprzętem i oprogramowaniem. Robot wykorzystuje czujniki odległości, enkodery i monitorowanie baterii, by efektywnie poruszać się w pomieszczeniach, oszczędzając energię. Sterowany przez algorytmy takie jak rozszerzony S-Move i wall-following. Projekt uzupełnia aplikacja mobilna do śledzenia trasy i zarządzania robotem z poziomu smartfona.']
          },
          {
            title: 'Robot wyposażony jest w szereg czujników:',
            text: ['1. czujniki odległości – do mapowania otoczenia i unikania przeszkód,', '2. enkodery – do kontroli ruchu i lokalizacji,', '3. monitorowanie baterii – do optymalizacji zużycia energii.', 'Oprogramowanie zostało napisane w języku C++ dla platformy ARM (STM32), co gwarantuje wysoką wydajność i precyzyjne sterowanie w czasie rzeczywistym. Zastosowano nowoczesne algorytmy nawigacyjne, takie jak rozszerzony S-Move, wall-following i adaptacyjne planowanie trasy, co pozwala robotowi skutecznie poruszać się nawet w trudnych, złożonych przestrzeniach.']
          },
          {
            title: 'Kurīnā nie kończy się jednak na samym robocie – zespół rozwija również aplikację mobilną, która umożliwia:',
            text: ['1. śledzenie trasy robota w czasie rzeczywistym,', '2. sprawdzanie poziomu baterii,', '3. wyznaczanie pozycji stacji dokującej.', 'W dłuższej perspektywie Kurīnā stanie się modularną platformą, idealną do eksperymentów z automatyczną nawigacją, integracją sensorów, planowaniem trajektorii oraz tworzeniem własnych rozwiązań smart home.']
          }
          
        ],
        team: Array(4).fill({
          name: 'Jakub Nowak',
          role: 'Rust Developer',
          linkedin: '#',
          github: '#',
          photo: Avatar
        })
      },
    
      betterflight: {
        title: 'BetterFlight',
        subtitle: 'Flight Control / Firmware',
        fullTitle: 'BetterFlight – Bezpieczny Firmware dla UAV',
        image: SkyPixImage,
        description: [
          {
            text: 'BetterFlight to szybkie i bezpieczne oprogramowanie do dronów, napisane w Rust. Stanowi nowoczesną alternatywę dla Betaflight, łącząc wysoką wydajność z łatwiejszym rozwojem i wsparciem także dla starszych kontrolerów lotu. Równolegle projektujemy własne, kompaktowe kontrolery lotu, zoptymalizowane pod nasz system. Dzięki Rustowi eliminujemy wiele typowych błędów programistycznych, oferując stabilne i przyszłościowe rozwiązanie dla lotnictwa hobbystycznego i profesjonalnego.'
          },
          {
            title: 'W przeciwieństwie do tradycyjnych projektów opartych na C/C++, BetterFlight korzysta z silnych gwarancji bezpieczeństwa języka Rust, co pozwala:',
            text: ['1. wyeliminować całe klasy typowych błędów (np. dereferencje wskaźników null, wycieki pamięci, wyścigi danych),', '2. przyspieszyć rozwój poprzez bardziej czytelny i mniej podatny na błędy kod,', '3. zachować wysoką wydajność nawet na starszych kontrolerach lotu.', 'Projekt rozwijamy równolegle z pracami nad naszymi autorskimi, kompaktowymi kontrolerami lotu, zoptymalizowanymi do współpracy z oprogramowaniem BetterFlight. Te jednostki będą energooszczędne, nowoczesne i w pełni przystosowane do wymagań systemu.']
          },
          {
            text: 'BetterFlight celuje nie tylko w nowoczesne platformy, ale także oferuje wsparcie dla starszych jednostek MCU, z zachowaniem nowych funkcji i niskich opóźnień sterowania. To projekt dla tych, którzy chcą stabilności i nowoczesnych funkcji, bez potrzeby wymiany sprzętu.'
          },
          {
            text: 'Długoterminowym celem jest stworzenie modularnej, łatwo rozszerzalnej platformy, która stanie się nowym standardem w świecie firmware’u dla dronów, oferując czystą architekturę, szybszy rozwój i większą niezawodność.'
          }
        ],
        team: Array(4).fill({
          name: 'Jakub Nowak',
          role: 'Rust Developer',
          linkedin: '#',
          github: '#',
          photo: Avatar
        })
      },
    
      falconweb: {
        title: 'Strona FALCON',
        subtitle: 'Web Development',
        fullTitle: 'Oficjalna Strona Koła FALCON',
        image: SkyPixImage,
        description: [
          {
            text: 'Oficjalna strona internetowa koła naukowego FALCON, zaprojektowana z myślą o przejrzystości i dostępności.'
          },
          {
            text: 'Zawiera informacje o projektach, członkach, aktualnościach i wydarzeniach.'
          },
          {
            text: 'Wdrożona przy użyciu HTML, CSS i JavaScript z responsywnym designem.'
          }
        ],
        team: Array(4).fill({
          name: 'Jakub Nowak',
          role: 'Rust Developer',
          linkedin: '#',
          github: '#',
          photo: Avatar
        })
      },
    
      falconbot: {
        title: 'FALCON Bot',
        subtitle: 'Automation / Discord Bot',
        fullTitle: 'FALCON Bot – Automatyzacja Komunikacji',
        image: SkyPixImage,
        description: [
          {
            text: 'Bot zaprojektowany do automatycznego zarządzania dostępem i rolami w kanałach komunikacyjnych.'
          },
          {
            text: 'Obsługuje przypisywanie uprawnień, autoryzację członków i moderację treści.'
          },
          {
            text: 'Zaprogramowany w Pythonie z myślą o prostocie i niezawodności.'
          }
        ],
        team: Array(4).fill({
          name: 'Jakub Nowak',
          role: 'Rust Developer',
          linkedin: '#',
          github: '#',
          photo: Avatar
        })
      }
    };

    const { slug } = useParams();
    const project = projects[slug];
    if (!project) return <div className="project-page__not-found">Projekt nie znaleziony</div>;
  
    return (
      <div className="project-page">
        {/* Hero section */}
        <span className="blob blob--1" />
  <span className="blob blob--2" />
  <span className="blob blob--3" />
  <span className="blob blob--4" />
  <span className="blob blob--5" />
        <div className="project-page__hero">
          <img src={project.image} alt={project.title} className="project-page__hero-image" />
          <div className="project-page__hero-overlay">
            <h1 className="project-page__title">{project.title}</h1>
            <p className="project-page__subtitle">{project.subtitle}</p>
          </div>
        </div>
  
        {/* Description */}
        <div className="project-page__content">
          <h2 className="project-page__full-title">{project.fullTitle}</h2>
          {project.description.map((section, i) => (
            <div key={i} className="project-page__section">
              {section.title && <h3 className="project-page__section-title">● {section.title}</h3>}
              {Array.isArray(section.text) ? (
                section.text.map((p, j) => (
                  <p key={j} className="project-page__paragraph">{p}</p>
                ))
              ) : (
                <p className="project-page__paragraph">{section.text}</p>
              )}
            </div>
          ))}
        </div>
  
        {/* Team */}
        {project.team.length > 0 && (
          <div className="project-page__team">
            <h2 className="project-page__team-title">Zespół projektu</h2>
            <div className="project-page__team-grid">
              {project.team.map((member, i) => (
                <div key={i} className="project-page__team-member">
                  <img src={member.photo} className="project-page__team-photo" />
                  <p className="project-page__team-name">{member.name}</p>
                  <p className="project-page__team-role">{member.role}</p>

                  <div className="project-page__team-socials">
  <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
  <LinkedIn/>
  </a>
  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <GitHub/>
  </a>
</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}
