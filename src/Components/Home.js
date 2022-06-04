import React from 'react';
import CSVUpload from './CSVUpload.js';

function Home({ setError, file, setFile }) {
  return (
    <div>
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
            <span className="ml-3 text-xl">NAi_LDA</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-white">
              Home
            </a>
            <a href="#abstract" className="mr-5 hover:text-white">
              Abstract
            </a>
            <a href="#csvupload" className="mr-5 hover:text-white">
              CSV Upload
            </a>
            <a href="#contactUs" className="mr-5 hover:text-white">
              Contact Us
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Comments Spam Filtering and Analysis
            </h1>
            <p className="mb-8 leading-relaxed">
              Aditya Jha, Gaurav Kumar Gupta, Samriddhi Bhasin, Neha Bedi.{' '}
              <br /> Under supervision of Dr. Charu Gupta (Asst. Professor
              (CSE)) Department of Computer Science, Bhagwan Parshuram Institute
              Of Technology, Delhi,India
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="ml-img.jpeg"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font mb-8">
        <div className="flex align-center justify-center flex-wrap">
          <img
            className="m-2 rounded-lg"
            height={'300px'}
            width={'300px'}
            src="Aditya.jpeg"
            alt="Aditya"
          />
          <img
            height={'300px'}
            className="m-2 rounded-lg"
            width={'300px'}
            src="Gaurav.jpeg"
            alt="Gaurav"
          />
          <img
            height={'300px'}
            className="m-2 rounded-lg"
            width={'300px'}
            src="Samriddhi.jpeg"
            alt="Samriddhi"
          />
          <img
            height={'300px'}
            className="m-2 rounded-lg"
            width={'300px'}
            src="Neha.jpeg"
            alt="Neha"
          />
        </div>
      </section>
      <section
        id="abstract"
        className="text-gray-400 bg-gray-900 body-font mt-8"
      >
        <div className="d-flex flex-col align-center justify-center">
          <h1 className="title-font font-medium text-white text-center text-3xl">
            Abstract
          </h1>
          <p className="text-center">
            The majority of people nowadays access the internet for social
            networking and e-commerce. They share their views and opinions on
            different topics that they know about and also their experiences of
            the products they have used for others to read and make an informed
            decision. The recent trend has shown an increase in fake reviews
            leading to spreading of fake information. Therefore it becomes
            important to filter such spam comments and present authentic reviews
            to users. Even after filtering, the data generated is enormous,
            hence difficult to analyse. Therefore this paper proposes a hybrid
            model which uses the classification for spam filtering, natural
            language processing for sentimental analysis and topic modelling.
            The proposed technique uses Naive Bayes classifier for spam
            filtering, VADER library for sentimental analysis and LDA algorithm
            for topic modelling.
          </p>
          <br />
          <br />
        </div>
      </section>
      <section
        id="csvupload"
        className="text-gray-400 bg-gray-900 body-font mt-20"
      >
        <CSVUpload setError={setError} file={file} setFile={setFile} />
      </section>
      <section id="contactUs" className="mt-8 text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Write to us for feedback and issues.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="*" className="text-indigo-500">
                  example@email.com
                </a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
