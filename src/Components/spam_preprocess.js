//jshint esversion:6
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
var non_ascii = /[^\x00-\x7F]/g;

const sw = require('stopword');

module.exports.text_process = function (sentence){
    let no_punc = sentence.replace(regex, '');
    let text = no_punc.replace('[^a-zA-Z]', ' ');
    text = text.toLowerCase();
    text = text.replace(non_ascii, "");

    return text;
}


module.exports.remove_stopwords_spam = function (text){
    let No_stopword_text = sw.removeStopwords(text.split(' '));
    return No_stopword_text.join(' ');
}