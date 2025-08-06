import React from 'react';
import {Link} from 'react-router-dom'
import './BlogEvents.scss'
import EventImage1 from "../images/IMG_20250604_112750590_AE.jpg"
import EventImage2 from "../images/IMG_2308.jpg"
import EventImage3 from "../images/1000007190.jpg"


export default function BlogEvents() {
    const blogEvents = {
        title: "Nasze Wydarzenia",
        subtitle: "Bądź na bieżąco z najnowszymi wydarzeniami i osiągnięciami naszego koła naukowego FALCON. Odkryj relacje z hackathonów, konkursów i innych ważnych momentów.",
        events: [
          {
            id: 1,
            title: "Sukces na Hackathonie 2024!",
            category: "Wydarzenia / Konkursy",
            image: EventImage1,
            description: [
              "Nasz zespół zajął pierwsze miejsce w kategorii AI/ML podczas prestiżowego hackathonu w Warszawie.",
              "Projekt Kurina, który rozpoczęliśmy podczas tego wydarzenia, okazał się być przełomowym rozwiązaniem.",
              "Dzięki temu sukcesowi nasze koło zyskało uznanie w środowisku akademickim."
            ],
            link: "/blog/hackathon-2024"
          },
          {
            id: 2,
            title: "Udział w Droniadzie 2024",
            category: "Konkursy / Drony",
            image: EventImage2,
            description: [
              "Relacja z naszego udziału w międzynarodowych zawodach dronów - Droniada 2024.",
              "Nasze projekty SkyPix i BetterFlight zostały zaprezentowane przed międzynarodowym jury.",
              "Zajęliśmy wysokie miejsce w kategorii innowacyjnych rozwiązań."
            ],
            link: "/blog/droniada-2024"
          },
          {
            id: 3,
            title: "Rekrutacja do koła naukowego",
            category: "Rekrutacja / Koło",
            image: EventImage3,
            description: [
              "Rozpoczynamy nabór nowych członków! Sprawdź wymagania i dołącz do naszego zespołu.",
              "Szukamy pasjonatów robotyki, programowania i innowacyjnych technologii.",
              "Oferujemy unikalną możliwość pracy nad realnymi projektami i udział w prestiżowych konkursach."
            ],
            link: "/blog/rekrutacja-2024"
          }
        ]
      };

  return (
    <div className='blog-events'>
        <div className="blog-events-wrap">
            <h1 className="blog-events-title">{blogEvents.title}</h1>
            <h2 className="blog-events-subtitle">{blogEvents.subtitle}</h2>

            {blogEvents.events.map((event, index) => (
                <div className="event-block" key={event.id}>
                    <div className={`event-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="event-image">
                            <img src={event.image} alt={event.title} />
                        </div>

                        <div className="event-text">
                            <div className="event-header">
                                <h2>{event.title}</h2>
                                <span className="category">{event.category}</span>
                            </div>

                            <div className="event-content">
                                {event.description.map((line, idx) => (
                                    <p key={idx}>{line}</p>
                                ))}
                            </div>

                            <Link to={event.link} className="see-more">
                                Czytaj więcej →
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
} 