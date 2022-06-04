var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

//const sw = require('stopword');

module.exports.remove_punctuations = function (text){
    let no_punc = text.replace(regex, '').toLowerCase();
    return no_punc;
}