import React from 'react';
import { useSelector } from 'react-redux';

function SentimentAnalysis() {
  const data = useSelector(({ data }) => data?.data);
  const result = useSelector(({ result }) => result?.result);
  return (
    <div className="flex flex-col"> 
    <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a
        href="/"
        className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <img
          height={'64px'}
          width={'64px'}
          src="machine-learning.png"
          alt="logo"
        />
        <span className="ml-3 text-xl">NAi_LDA  Sentimental</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" className="mr-5 hover:text-white">
          Home
        </a>
        <a href="#abstract" className="mr-5 hover:text-white">
          Table
        </a>
      </nav>
    </div>
  </header>
  <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Sentimental Analysis
    <br className="hidden lg:inline-block"/>
  </h1>
  <p class="mb-8 leading-relaxed">Sentiment analysis is a machine learning tool that analyzes texts for polarity, from positive to negative. By training machine learning tools with examples of emotions in text, machines automatically learn how to detect sentiment without human input.</p>
  <div class="flex justify-center">
  </div>
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <img className="object-cover object-center rounded" alt="hero" src="https://www.cio.com/wp-content/uploads/2021/12/artificial_intelligence_automation_digital_brain_thinkstock_875595818-100749926-orig-100893865-orig-2.jpg?quality=50&strip=all&w=1024"/>
  </div>
  </div>
  </section>
  

  <section className="text-gray-400 bg-gray-900 body-font flex align-center justify-center">
  <div>
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Table
  <br className="hidden lg:inline-block"/>
      </h1>
  </div> 
  </section>
  <section className="text-gray-400 bg-gray-900 body-font flex align-center justify-center"> 
    <table
      style={{
        color: 'white',
        border: '1px solid red',
        borderCollapse: 'collapse',
      }}
    >
      <thead>
        <tr>
          <th style={{ border: '1px solid red' }}>COMMENTS</th>
          <th style={{ border: '1px solid red' }}>SENTIMENT ANALYSIS RESULT</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((d, index) => {
            return (
              <tr key={index}>
                <td align="center" style={{ border: '1px solid red' }}>
                  {d.v2}
                </td>
                <td align="center" style={{ border: '1px solid red' }}>
                  {result[index]}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
    </section>
    </div>
  );
}

export default SentimentAnalysis;
