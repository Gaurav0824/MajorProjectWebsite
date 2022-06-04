import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Actions from '../Redux/Actions/Actions.js';

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

// import axios from 'axios';
const axios = require('axios');
var lda = require('lda');

/*function api(body) {
  //console.log(req.body);
  // let text = req.body["comments"].map(sentiment.remove_punctuations);
  let text = body;
  console.log(text)
  let doc = text.join(' ');
  let sent = doc.match( /[^\.!\?]+[\.!\?]+/g );
  console.log(sent)
  var result = lda(sent, text.length<5?text.length:5, 5);
  console.log(result)
  result = axios.post('http://localhost:8000/topics',{v2:result});
  result.then(function (response){
     console.log(response);  
    //res.json(response.data);
  })
}*/

function Analysis() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headings = useSelector(({ headings }) => headings?.headings);
  const data = useSelector(({ data }) => data?.data);

  const spamapi = (body) => {
    //let preprocess = body.map(spam.text_process);
    //let no_stopword_text = preprocess.map(spam.remove_stopwords_spam);
    let result = axios.post('http://127.0.0.1:5000/spam', { comments: body });
    //let result = axios.post('https://protected-gorge-33386.herokuapp.com/spam',{v2:body});
    result.then(function (response) {
      //res.json(response.data);
      console.log(response.data);
      dispatch(Actions.setResults(response.data));
      navigate('/spam');
    });
  };
  const topicapi = (body) => {
    let text = body;
    let doc = text.join(' ');
    let sent = doc.match(/[^\.!\?]+[\.!\?]+/g);
    var result = lda(sent, text.length < 5 ? text.length : 5, 5);
    console.log(flatten(result));
    dispatch(Actions.setResults(flatten(result)));
    navigate('/topic');
  };

  const sentimentapi = (body) => {
    //console.log(req.body);
    let result = axios.post('http://127.0.0.1:5000/sentiment', {
      comments: body,
    });
    //let result = axios.post('https://protected-gorge-33386.herokuapp.com/spam',{v2:body});
    result.then(function (response) {
      //res.json(response.data);
      console.log(response.data);
      dispatch(Actions.setResults(response.data));
      navigate('/sentimental');
    });
  };

  const sendToAPI = (analysis) => {
    let commentlist = [];
    if (analysis === 'spam') {
      for (let i = 0; i < data.length; i++) {
        //  if (i%10==0){
        //  spamapi(commentlist);
        //  commentlist=[]
        //}
        commentlist.push(data[i]?.v2);
      }
      console.log('edhgdcjdrtsgfzfs', commentlist);

      spamapi(commentlist);
    } else if (analysis === 'sentiment') {
      for (let i = 0; i < data.length; i++) {
        //if (i%10==0){
        //  topicapi(commentlist);
        //  commentlist=[]
        //}
        commentlist.push(data[i]?.v2);
      }
      console.log(commentlist);
      //console.log("edhgdcjdrtsgfzfs",commentlist)

      sentimentapi(commentlist);
    }

    if (analysis === 'topic') {
      for (let i = 0; i < data.length; i++) {
        if (i % 10 === 0) {
          topicapi(commentlist);
        }
        commentlist.push(data[i]?.v2);
      }
      console.log(commentlist);
    }

    /*if (analysis === "spam"){
    
    if (commentlist.length>0){
      spamapi(commentlist); 
    };
  }
  else if (analysis === "sentimental"){
    if (commentlist.length>0){
      spamapi(commentlist); 
    };
  }

  else if (analysis === "topic"){
    if (commentlist.length>0){
      topicapi(commentlist); 
    };
  }*/
  };

  return (
    <div style={{ display: 'flex', flexDirection: ' column' }}>
      <div>
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <button
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              onClick={() => sendToAPI('spam')}
            >
              Spam Analysis
            </button>
            <button
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              onClick={() => sendToAPI('sentiment')}
            >
              Sentimental Analysis
            </button>
            <button
              className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              onClick={() => sendToAPI('topic')}
            >
              Topic Analysis
            </button>
          </div>
        </header>
      </div>
      <table
        className="hover:table-fixed"
        style={{ border: '1px solid black', borderCollapse: 'collapse' }}
      >
        <thead>
          <tr>
            {headings.map((h, index) => {
              return (
                <th style={{ border: '1px solid black' }} key={index}>
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => {
            return (
              <tr key={index}>
                {headings.map((h, index) => {
                  return (
                    <td style={{ border: '1px solid black' }} key={index}>
                      {d[h]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Analysis;
