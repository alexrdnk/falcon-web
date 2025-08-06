import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.scss';
import LinkedIn from "../../PortfolioPage/Projects/images/linkedIn.svg?react";
import GitHub from "../../PortfolioPage/Projects/images/github.svg?react";
import Avatar from "../../PortfolioPage/Projects/images/avatar.png";

export default function Team() {
  const [activeFilter, setActiveFilter] = useState('Wszyscy');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6;

  const teamData = {
    title: "Nasz Zespół",
    subtitle: "Poznaj członków Koła Naukowego FALCON - pasjonatów technologii, którzy tworzą innowacyjne projekty i osiągają sukcesy w prestiżowych konkursach.",
    allMembers: [
      // Zarząd
      {
        name: "Jan",
        surname: "Kowalski",
        position: "Przewodniczący",
        department: "Zarząd",
        linkedin: "https://linkedin.com/in/jankowalski",
        github: "https://github.com/jankowalski",
        photo: Avatar
      },
      {
        name: "Anna",
        surname: "Nowak",
        position: "Wiceprzewodnicząca",
        department: "Zarząd",
        linkedin: "https://linkedin.com/in/annanowak",
        github: "https://github.com/annanowak",
        photo: Avatar
      },
      // Software
      {
        name: "Marek",
        surname: "Zieliński",
        position: "Lead Developer",
        department: "Software",
        linkedin: "https://linkedin.com/in/marekzielinski",
        github: "https://github.com/marekzielinski",
        photo: Avatar
      },
      {
        name: "Karolina",
        surname: "Lewandowska",
        position: "Full Stack Developer",
        department: "Software",
        linkedin: "https://linkedin.com/in/karolinalewandowska",
        github: "https://github.com/karolinalewandowska",
        photo: Avatar
      },
      {
        name: "Tomasz",
        surname: "Dąbrowski",
        position: "Backend Developer",
        department: "Software",
        linkedin: "https://linkedin.com/in/tomaszdabrowski",
        github: "https://github.com/tomaszdabrowski",
        photo: Avatar
      },
      {
        name: "Magdalena",
        surname: "Kaczmarek",
        position: "Frontend Developer",
        department: "Software",
        linkedin: "https://linkedin.com/in/magdalenakaczmarek",
        github: "https://github.com/magdalenakaczmarek",
        photo: Avatar
      },
      // Elektronika
      {
        name: "Jakub",
        surname: "Pawlak",
        position: "Hardware Engineer",
        department: "Elektronika",
        linkedin: "https://linkedin.com/in/jakubpawlak",
        github: "https://github.com/jakubpawlak",
        photo: Avatar
      },
      {
        name: "Natalia",
        surname: "Michalska",
        position: "PCB Designer",
        department: "Elektronika",
        linkedin: "https://linkedin.com/in/nataliamichalska",
        github: "https://github.com/nataliamichalska",
        photo: Avatar
      },
      {
        name: "Krzysztof",
        surname: "Jankowski",
        position: "Embedded Developer",
        department: "Elektronika",
        linkedin: "https://linkedin.com/in/krzysztofjankowski",
        github: "https://github.com/krzysztofjankowski",
        photo: Avatar
      },
      // DevOps
      {
        name: "Michał",
        surname: "Wojciechowski",
        position: "DevOps Engineer",
        department: "DevOps",
        linkedin: "https://linkedin.com/in/michalwojciechowski",
        github: "https://github.com/michalwojciechowski",
        photo: Avatar
      },
      {
        name: "Aleksandra",
        surname: "Kowalczyk",
        position: "System Administrator",
        department: "DevOps",
        linkedin: "https://linkedin.com/in/aleksandrakowalczyk",
        github: "https://github.com/aleksandrakowalczyk",
        photo: Avatar
      },
      {
        name: "Daniel",
        surname: "Kamiński",
        position: "Cloud Engineer",
        department: "DevOps",
        linkedin: "https://linkedin.com/in/danielkaminski",
        github: "https://github.com/danielkaminski",
        photo: Avatar
      },
      // 3D
      {
        name: "Patrycja",
        surname: "Zalewska",
        position: "3D Designer",
        department: "3D",
        linkedin: "https://linkedin.com/in/patrycjazalewska",
        github: "https://github.com/patrycjazalewska",
        photo: Avatar
      },
      {
        name: "Rafał",
        surname: "Szewczyk",
        position: "CAD Specialist",
        department: "3D",
        linkedin: "https://linkedin.com/in/rafalszewczyk",
        github: "https://github.com/rafalszewczyk",
        photo: Avatar
      },
      {
        name: "Monika",
        surname: "Wróbel",
        position: "Visualization Artist",
        department: "3D",
        linkedin: "https://linkedin.com/in/monikawrobel",
        github: "https://github.com/monikawrobel",
        photo: Avatar
      },
      // PR
      {
        name: "Wiktoria",
        surname: "Kozłowska",
        position: "PR Manager",
        department: "PR",
        linkedin: "https://linkedin.com/in/wiktoriakozlowska",
        github: "https://github.com/wiktoriakozlowska",
        photo: Avatar
      },
      {
        name: "Adrian",
        surname: "Sobczak",
        position: "Content Creator",
        department: "PR",
        linkedin: "https://linkedin.com/in/adriansobczak",
        github: "https://github.com/adriansobczak",
        photo: Avatar
      },
      {
        name: "Julia",
        surname: "Czarnecka",
        position: "Social Media Specialist",
        department: "PR",
        linkedin: "https://linkedin.com/in/juliaczarnecka",
        github: "https://github.com/juliaczarnecka",
        photo: Avatar
      }
    ],
    departments: ["Wszyscy", "Elektronika", "PR", "Software", "3D", "DevOps"]
  };

  // Filter members based on active filter
  const filteredMembers = activeFilter === 'Wszyscy' 
    ? teamData.allMembers 
    : teamData.allMembers.filter(member => member.department === activeFilter);

  // Calculate pagination
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="team">
      <div className="team-container">
        {/* Header with Title */}
        <div className="team-header">
          <h1 className="team-title">{teamData.title}</h1>
          <p className="team-subtitle">{teamData.subtitle}</p>
        </div>

        {/* Department Filters */}
        <div className="team-filters">
          {teamData.departments.map((department) => (
            <button
              key={department}
              className={`filter-button ${activeFilter === department ? 'active' : ''}`}
              onClick={() => handleFilterChange(department)}
            >
              {department}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="team-members-grid">
          {currentMembers.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-photo">
                <img src={member.photo} alt={`${member.name} ${member.surname}`} />
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name} {member.surname}</h3>
                <p className="member-position">{member.position}</p>
              </div>

              <div className="member-socials">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link linkedin"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </a>
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link github"
                  aria-label="GitHub"
                >
                  <GitHub />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="team-pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="team-cta">
          <div className="cta-content">
            <div className="cta-text">
              <p>Chcesz tworzyć drony i jeszcze więcej innowacyjnych projektów? Dołącz do naszego zespołu — wypełnij zgłoszenie już teraz!</p>
              <Link to="/contact" className="cta-button">Dołącz do nas!</Link>
            </div>
            <div className="cta-decoration">
              <div className="decoration-circle red"></div>
              <div className="decoration-circle white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 