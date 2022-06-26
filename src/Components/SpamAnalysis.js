import React from 'react';
import { useSelector } from 'react-redux';

function SpamAnalysis() {
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
            <span className="ml-3 text-xl"> NAi_LDA SPAM </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-white">
              Home
            </a>
            {/*<a href="#abstract" className="mr-5 hover:text-white">
              Abstract
  </a>*/}
            <a href="#csvupload" className="mr-5 hover:text-white">
              Table
            </a>
            
          </nav>
        </div>
      </header>
  <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">SPAM ANALYSIS
        <br className="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">The term "spam analysis" refers to a feature of the test email campaign process. When you select to run a spam analysis on your email campaign, the system will run your email through SpamAssassin to check against common spam filters.</p>
      <div class="flex justify-center">
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="spamanlyis" src="https://en.pimg.jp/020/576/583/1/20576583.jpg"/>
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
          <th style={{ border: '1px solid red' }}>SPAM ANALYSIS RESULT</th>
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

export default SpamAnalysis;
