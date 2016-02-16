var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.whatsmyip.org';
var page;

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
    console.log($('#ip').text());


  }
})



