// src/components/NewsItem.js
import React from 'react';

const NewsItem = ({ title, description }) => {
  return (
    <div className="news-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsItem;
