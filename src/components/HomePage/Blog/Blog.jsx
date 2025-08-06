import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.scss';
import hackathonImage from './images/IMG_2308.jpg';
import recruitmentImage from './images/IMG_20250604_112750590_AE.jpg';
import droniadaImage from './images/1000007190.jpg';

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Sukces na Hackathonie 2024!",
      excerpt: "Nasz zespół zajął pierwsze miejsce w kategorii AI/ML podczas prestiżowego hackathonu w Warszawie.",
      category: "Wydarzenia",
      readTime: "3 min",
      image: hackathonImage
    },
    {
      id: 2,
      title: "Rekrutacja do koła naukowego",
      excerpt: "Rozpoczynamy nabór nowych członków! Sprawdź wymagania i dołącz do naszego zespołu.",
      category: "Rekrutacja",
      readTime: "4 min",
      image: recruitmentImage
    },
    {
      id: 3,
      title: "Udział w Droniadzie 2024",
      excerpt: "Relacja z naszego udziału w międzynarodowych zawodach dronów - Droniada 2024.",
      category: "Konkursy",
      readTime: "5 min",
      image: droniadaImage
    }
  ];

  const handleBlogClick = () => {
    navigate('/blog');
  };

  return (
    <div className="blog">
      <div className="blog-container">
        {/* Floating background elements */}
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-square square-1"></div>
          <div className="floating-square square-2"></div>
        </div>
        
        <div className="blog-header">
          <div className="header-content">
            <div className="header-text">
              <h2>Co nowego w kole naukowym?</h2>
              <p className="header-subtitle">Bądź na bieżąco z najnowszymi wydarzeniami i osiągnięciami naszego koła</p>
            </div>
          </div>
        </div>

        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="blog-post" style={{ animationDelay: `${index * 0.2}s` }}>
                             <div className="post-image">
                 <div className="image-container">
                   <img src={post.image} alt={post.title} className="post-image" />
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