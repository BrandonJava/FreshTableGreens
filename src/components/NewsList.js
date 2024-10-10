// src/components/NewsList.js
import React from 'react';
import NewsItem from './NewsItem';
import '../styles/NewsList.css';

const NewsList = () => {
  const newsArticles = [
    { title: "New Sustainability Report Released", description: "AgroAmerica is pleased to announce our latest sustainability report..." },
    { title: "Partnership with Local Farmers", description: "We are excited to partner with local farmers for more sustainable agriculture." },
    // More articles can go here
  ];

  return (
    <section className="news-list">
      <h2>Latest News</h2>
      {newsArticles.map((article, index) => (
        <NewsItem key={index} title={article.title} description={article.description} />
      ))}
    </section>
  );
};

export default NewsList;
