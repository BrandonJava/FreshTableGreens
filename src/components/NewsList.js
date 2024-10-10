import React from 'react';
import NewsItem from './NewsItem';
import '../styles/NewsList.css';

const NewsList = () => {
  const newsData = [
    {
      title: 'New Sustainability Report Released',
      description: 'We are excited to announce the release of our latest sustainability report, showcasing our efforts toward eco-friendly practices.',
      imageUrl: '../assets/sustainability-report.jpg',
    },
    {
      title: 'Partnership with Local Farmers',
      description: 'We are partnering with local farmers to promote more sustainable agriculture practices across our supply chain.',
      imageUrl: '../assets/local-farmers.jpg',
    },
  ];

  return (
    <div className="news-wrapper">
      <h2 className="news-list-heading">Latest News</h2>
      <div className="news-list-container">
        <div className="news-list">
          {newsData.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
