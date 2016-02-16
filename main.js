var request = require('request');
var cheerio = require('cheerio');

var url = 'http://substack.net/images/';
var page;

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
    // console.log($('#ip').text());

    // var write = fs.createWriteStream("content.csv");
    $('a').each(function(i,elem) {
      console.log("i ",i);
      console.log("http://substack.net" + elem.attribs['href']);
    });
  }
})



