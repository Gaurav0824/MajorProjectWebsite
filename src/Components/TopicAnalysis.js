import React from 'react';
import { useSelector } from 'react-redux';

function TopicAnalysis() {
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
      <span className="ml-3 text-xl">NAi_LDA  <br/><div><div>Topic Analysis</div> </div>                                               </span>
    </a>
    

  </div>
</header>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Topic ANALYSIS
        <br className="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">Topic analysis (also called topic detection, topic modeling, or topic extraction) is a machine learning technique that organizes and understands large collections of text data, by assigning “tags” or categories according to each individual text's topic or theme.</p>
      <div class="flex justify-center">
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="spamanlyis" src="https://miro.medium.com/max/1400/1*HhtZx-4gy7mqrFADVFPYMA.png"/>
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
          <th style={{ border: '1px solid red' }}>TOPICS</th>
          <th style={{ border: '1px solid red' }}>PROBABILITY</th>
        </tr>
      </thead>
      <tbody>
        {result &&
          result.map((r, index) => {
            return (
              <tr key={index}>
                <td align="center" style={{ border: '1px solid red' }}>
                  {r.term}
                </td>
                <td align="center" style={{ border: '1px solid red' }}>
                  {r.probability}
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

export default TopicAnalysis;
