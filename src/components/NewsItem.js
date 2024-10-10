import React from 'react';
import '../styles/NewsItem.css';

const NewsItem = ({ title, description, imageUrl }) => {
  return (
    <div className="news-item">
      <img className="news-item-image" src={imageUrl} alt={title} />
      <div className="news-item-content">
        <h3 className="news-item-title">{title}</h3>
        <p className="news-item-description">{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
