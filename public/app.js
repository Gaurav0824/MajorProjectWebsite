// jshint  esversion:6

const express = require('express')

const app = express();

const port = process.env.PORT || 8000;

const spam = require('./spam_preprocess')

const sentiment = require('./sentiment_preprocess')

const axios = require('axios');

var lda = require('lda');

app.use(express.static('./assets'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post('/spam',function (req,res) {
    console.log(req.body);
    let preprocess = req.body['comments'].map(spam.text_process);
    let no_stopword_text = preprocess.map(spam.remove_stopwords_spam);
    let result = axios.post('http://localhost:5000/spam',{comments:no_stopword_text});
    result.then(function (response){
        res.json(response.data);
    })
});

app.post('/sentiment',function (req,res) {
    console.log(req.body);
    let no_punc = req.body["comments"].map(sentiment.remove_punctuations);
    no_punc = no_punc.map(function(ele){
        console.log(ele)
        return ele.split(/\s+/g);
    });
    let result = axios.post('http://localhost:8000/sentiment',{comments:no_punc});
    result.then(function (response){
        res.json(response.data);
    })
});

//app.post('/topics',function (req,res) {

export function api(body) {
    console.log(req.body);
    // let text = req.body["comments"].map(sentiment.remove_punctuations);
    let text = body;
    console.log(text)
    let doc = text.join(' ');
    let sent = doc.match( /[^\.!\?]+[\.!\?]+/g );
    console.log(sent)
    var result = lda(sent, text.length<5?text.length:5, 5);
    console.log(result)
    result = axios.post('http://localhost:8000/topics',{comments:result});
    result.then(function (response){
        res.json(response.data);
    })
}

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log(`Server is running at : http://localhost:${port}`);
});