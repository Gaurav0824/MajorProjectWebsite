import React from 'react';
import { useLocation } from 'react-router-dom';
import SentimentAnalysis from './SentimentAnalysis';
import SpamAnalysis from './SpamAnalysis';
import TopicAnalysis from './TopicAnalysis';

function AnalysisReport() {
  const location = useLocation();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {location.pathname === '/spam' ? (
        <SpamAnalysis />
      ) : location.pathname === '/sentimental' ? (
        <SentimentAnalysis />
      ) : location.pathname === '/topic' ? (
        <TopicAnalysis />
      ) : (
        ''
      )}
    </div>
  );
}

export default AnalysisReport;
