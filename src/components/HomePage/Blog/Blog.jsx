import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.scss';

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Sukces na Hackathonie 2024!",
      excerpt: "Nasz zespół zajął pierwsze miejsce w kategorii AI/ML podczas prestiżowego hackathonu w Warszawie.",
      category: "Wydarzenia",
      readTime: "3 min",
      image: "hackathon-article"
    },
    {
      id: 2,
      title: "Rekrutacja do koła naukowego",
      excerpt: "Rozpoczynamy nabór nowych członków! Sprawdź wymagania i dołącz do naszego zespołu.",
      category: "Rekrutacja",
      readTime: "4 min",
      image: "recruitment-article"
    },
    {
      id: 3,
      title: "Udział w Droniadzie 2024",
      excerpt: "Relacja z naszego udziału w międzynarodowych zawodach dronów - Droniada 2024.",
      category: "Konkursy",
      readTime: "5 min",
      image: "droniada-article"
    }
  ];

  const handleBlogClick = () => {
    navigate('/blog'); // Tymczasowo do portfolio
  };

  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <div className="header-content">
            <div className="header-text">
              <h2>Co nowego w kole naukowym?</h2>
              <p className="header-subtitle">Bądź na bieżąco z najnowszymi wydarzeniami i osiągnięciami naszego koła</p>
            </div>
            <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="blog-post" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="post-image">
                <div className={`image-placeholder ${post.image}`}>
                  <div className="image-content">
                    <div className="icon-placeholder">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-footer">
                  <span className="read-more">Czytaj więcej</span>
                  <svg className="read-more-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-cta">
          <button className="view-all-posts" onClick={handleBlogClick}>
            Zobacz wszystkie artykuły
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog; 