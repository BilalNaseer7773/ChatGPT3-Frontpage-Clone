import React from 'react';
import './whatGPT3.css';
//import Feature from '../feature/Feature';


import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='GPT-3 is one of the most advanced language models ever created, capable of understanding and generating human-like text with remarkable accuracy. From answering questions and creating content to assisting with research and problem-solving, GPT-3 unlocks new ways to work smarter and faster' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination.</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Enhance customer interactions with intelligent chatbots that provide instant support, answer questions, and create a seamless user experience—all powered by GPT-3 natural language capabilities" />
        <Feature title="Knowledgebase" text="Build dynamic knowledgebases that are easy to search and understand. With GPT-3, complex information can be summarized, explained, and delivered in clear, human-like responses" />
        <Feature title="Education" text="Transform learning with AI-driven tools that personalize education, explain concepts in simple terms, and adapt to every learner’s pace—making knowledge more accessible than ever before.”" />
      </div>
    </div>
  )
}

export default WhatGPT3
