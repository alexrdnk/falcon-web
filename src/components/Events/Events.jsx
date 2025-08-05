import React from 'react'
import { useParams } from 'react-router-dom';
import EventImage1 from "../../images/IMG_20250604_112750590_AE.jpg"
import EventImage2 from "../../images/IMG_2308.jpg"
import EventImage3 from "../../images/1000007190.jpg"
import Avatar from "../Projects/images/avatar.png"
import LinkedIn from "../Projects/images/linkedIn.svg?react"
import GitHub from "../Projects/images/github.svg?react"
import "./Events.scss"

export default function Events() {
const events = {
    "hackathon-2024": {
        title: 'Sukces na Hackathonie 2024!',
        subtitle: 'Wydarzenia / Konkursy',
        fullTitle: 'Sukces na Hackathonie 2024! – Pierwsze miejsce w kategorii AI/ML',
        image: EventImage1,
        description: [
          {
            text: 'Nasz zespół zajął pierwsze miejsce w kategorii AI/ML podczas prestiżowego hackathonu w Warszawie. Projekt Kurina, który rozpoczęliśmy podczas tego wydarzenia, okazał się być przełomowym rozwiązaniem. Dzięki temu sukcesowi nasze koło zyskało uznanie w środowisku akademickim.'
          },
          {
            title: 'O wydarzeniu',
            text: ['Hackathon odbył się w dniach 15-17 marca 2024 roku w Warszawie, gromadząc ponad 200 uczestników z całej Polski. Nasz zespół w składzie 4 osób pracował nad projektem przez 48 godzin, wykorzystując najnowsze technologie w dziedzinie sztucznej inteligencji i uczenia maszynowego.', 'Konkurencja była bardzo silna, ale nasze innowacyjne podejście do problemu i wysokiej jakości implementacja pozwoliły nam zdobyć pierwsze miejsce w kategorii AI/ML.']
          },
          {
            title: 'Projekt Kurina',
            text: ['Podczas hackathonu rozpoczęliśmy pracę nad projektem Kurina – inteligentnym robotem odkurzającym. Projekt łączył w sobie elementy robotyki, AI i embedded systems, co idealnie pasowało do naszych kompetencji.', 'Główne cechy projektu Kurina:', '• Autonomiczna nawigacja z wykorzystaniem algorytmów AI', '• System czujników do mapowania otoczenia', '• Aplikacja mobilna do kontroli robota', '• Optymalizacja zużycia energii']
          },
          {
            title: 'Technologie wykorzystane',
            text: ['• Python z bibliotekami TensorFlow i PyTorch', '• C++ dla oprogramowania embedded', '• STM32 dla kontroli sprzętowej', '• React Native dla aplikacji mobilnej', '• LoRa dla komunikacji bezprzewodowej']
          },
          {
            title: 'Rezultat i wpływ',
            text: ['Zdobycie pierwszego miejsca w prestiżowym hackathonie przyniosło nam nie tylko uznanie, ale także możliwość dalszego rozwoju projektu Kurina. Dzięki temu sukcesowi nasze koło zyskało rozgłos w środowisku akademickim i nawiązało kontakty z firmami technologicznymi.', 'Projekt Kurina kontynuowany jest jako jeden z głównych projektów koła, rozwijany przez zespół studentów pod opieką wykładowców.']
          }
        ],
        team: Array(4).fill({
          name: 'Jakub Nowak',
          role: 'AI Developer',
          linkedin: '#',
          github: '#',
          photo: Avatar
        })
      },
    
      "droniada-2024": {
        title: 'Udział w Droniadzie 2024',
        subtitle: 'Konkursy / Drony',
        fullTitle: 'Udział w Droniadzie 2024 – Międzynarodowe Zawody Dronów',
        image: EventImage2,
        description: [
          {
            text: 'Relacja z naszego udziału w międzynarodowych zawodach dronów - Droniada 2024. Nasze projekty SkyPix i BetterFlight zostały zaprezentowane przed międzynarodowym jury. Zajęliśmy wysokie miejsce w kategorii innowacyjnych rozwiązań.'
          },
          {
            title: 'O Droniadzie 2024',
            text: ['Droniada to największe w Polsce międzynarodowe zawody dronów, organizowane przez Politechnikę Wrocławską. W 2024 roku w zawodach wzięło udział ponad 50 zespołów z całego świata, prezentując innowacyjne rozwiązania w dziedzinie robotyki i technologii dronowych.', 'Nasz zespół reprezentował Politechnikę Wrocławską w kategorii "Innowacyjne Rozwiązania", prezentując dwa projekty: SkyPix i BetterFlight.']
          },
          {
            title: 'Projekt SkyPix na Droniadzie',
            text: ['SkyPix został zaprezentowany jako system zsynchronizowanych animacji dronowych. Pokazaliśmy możliwości naszego autorskiego protokołu komunikacji LoRa oraz aplikacji do sterowania flotą dronów.', 'Główne elementy prezentacji:', '• Demonstracja synchronizacji 8 dronów', '• Prezentacja autorskiego protokołu komunikacji', '• Pokaz aplikacji desktopowej do sterowania', '• Omówienie architektury systemu']
          },
          {
            title: 'Projekt BetterFlight',
            text: ['BetterFlight został przedstawiony jako nowoczesna alternatywa dla tradycyjnych systemów kontroli lotu. Zaprezentowaliśmy korzyści płynące z wykorzystania języka Rust w embedded systems.', 'Kluczowe aspekty prezentacji:', '• Porównanie wydajności z Betaflight', '• Demonstracja bezpieczeństwa pamięci', '• Prezentacja kompatybilności z różnymi kontrolerami', '• Omówienie planów rozwoju']
          },
          {
            title: 'Rezultaty i doświadczenia',
            text: ['Zajęliśmy wysokie miejsce w kategorii innowacyjnych rozwiązań, co potwierdziło wysoką jakość naszych projektów. Droniada była doskonałą okazją do nawiązania kontaktów z innymi zespołami badawczymi oraz firmami z branży dronowej.', 'Doświadczenia zdobyte podczas zawodów pomogły nam w dalszym rozwoju projektów i otworzyły nowe możliwości współpracy.']
          }
        ],
        team: Array(4).fill({
          name: 'Anna Kowalska',
          role: 'Robotics Engineer',
          linkedin: '#',
          github: '#',
          photo: Avatar
        })
      },
    
      "rekrutacja-2024": {
        title: 'Rekrutacja do koła naukowego',
        subtitle: 'Rekrutacja / Koło',
        fullTitle: 'Rekrutacja do Koła Naukowego FALCON 2024',
        image: EventImage3,
        description: [
          {
            text: 'Rozpoczynamy nabór nowych członków! Sprawdź wymagania i dołącz do naszego zespołu. Szukamy pasjonatów robotyki, programowania i innowacyjnych technologii. Oferujemy unikalną możliwość pracy nad realnymi projektami i udział w prestiżowych konkursach.'
          },
          {
            title: 'O naszym kole',
            text: ['Koło Naukowe FALCON to dynamiczna organizacja studencka działająca przy Wydziale Informatyki i Telekomunikacji Politechniki Wrocławskiej. Specjalizujemy się w projektach z zakresu robotyki, embedded systems, AI/ML oraz technologii dronowych.', 'Nasze koło ma bogatą historię sukcesów w konkursach i hackathonach, a nasi członkowie regularnie zdobywają doświadczenie w prestiżowych firmach technologicznych.']
          },
          {
            title: 'Aktualne projekty',
            text: ['• SkyPix – system zsynchronizowanych animacji dronowych', '• BetterFlight – nowoczesny firmware dla UAV', '• Kurina – inteligentny robot odkurzający', '• Własne kontrolery lotu i płytki PCB', '• Aplikacje mobilne i desktopowe']
          },
          {
            title: 'Wymagania dla kandydatów',
            text: ['• Studenci kierunków informatycznych, elektronicznych lub pokrewnych', '• Pasja do robotyki, programowania lub elektroniki', '• Chęć do nauki i pracy w zespole', '• Podstawowa znajomość programowania (C++, Python, JavaScript)', '• Mile widziane doświadczenie z projektami embedded lub robotyką']
          },
          {
            title: 'Co oferujemy',
            text: ['• Pracę nad realnymi, innowacyjnymi projektami', '• Uczestnictwo w hackathonach i konkursach', '• Dostęp do nowoczesnego sprzętu i narzędzi', '• Mentoring ze strony doświadczonych członków', '• Możliwość nawiązania kontaktów w branży technologicznej', '• Certyfikaty i referencje dla CV']
          },
          {
            title: 'Jak dołączyć',
            text: ['1. Wypełnij formularz zgłoszeniowy na naszej stronie', '2. Przygotuj krótkie portfolio swoich projektów', '3. Weź udział w rozmowie kwalifikacyjnej', '4. Przejdź przez okres próbny (2-3 miesiące)', '5. Zostań pełnoprawnym członkiem koła!']
          }
        ],
        team: Array(4).fill({
          name: 'Marek Wiśniewski',
          role: 'Team Lead',
          linkedin: '#',
          github: '#',
          photo: Avatar
        })
      }
    };

  const { slug } = useParams();
  const event = events[slug];
  if (!event) return <div className="event-page__not-found">Wydarzenie nie znalezione</div>;

  return (
    <div className="event-page">
      {/* Hero section */}
      <div className="event-page__hero">
        <img src={event.image} alt={event.title} className="event-page__hero-image" />
        <div className="event-page__hero-overlay">
          <h1 className="event-page__title">{event.title}</h1>
          <p className="event-page__subtitle">{event.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <div className="event-page__content">
        <h2 className="event-page__full-title">{event.fullTitle}</h2>
        {event.description.map((section, i) => (
          <div key={i} className="event-page__section">
            {section.title && <h3 className="event-page__section-title">● {section.title}</h3>}
            {Array.isArray(section.text) ? (
              section.text.map((p, j) => (
                <p key={j} className="event-page__paragraph">{p}</p>
              ))
            ) : (
              <p className="event-page__paragraph">{section.text}</p>
            )}
          </div>
        ))}
      </div>

      {/* Team */}
      {event.team.length > 0 && (
        <div className="event-page__team">
          <h2 className="event-page__team-title">Zespół wydarzenia</h2>
          <div className="event-page__team-grid">
            {event.team.map((member, i) => (
              <div key={i} className="event-page__team-member">
                <img src={member.photo} className="event-page__team-photo" />
                <p className="event-page__team-name">{member.name}</p>
                <p className="event-page__team-role">{member.role}</p>

                <div className="event-page__team-socials">
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