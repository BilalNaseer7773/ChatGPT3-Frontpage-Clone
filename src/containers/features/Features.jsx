import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Instant Trust Building',
    text: 'AI can bridge the gap between confusion and clarity by delivering accurate information instantly. GPT-3 enhances trust by providing reliable responses that improve user experiences in real time.',
  },
  {
    title: 'Active Engagement',
    text: 'Stay engaged with dynamic, AI-driven tools that keep you informed and productive. GPT-3 ensures users remain active participants by turning complex data into actionable insights. ',
  },
  {
    title: 'Smarter Communication',
    text: 'Communication is at the heart of every interaction. With GPT-3, messages become clearer, more impactful, and tailored to your needs—ensuring nothing gets lost in translation',
  },
  {
    title: 'Limitless Applications',
    text: 'From education to industry, GPT-3 is reshaping how knowledge is shared and applied. Its versatility makes it a powerful tool across countless domains, helping people everywhere unlock new opportunities.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;