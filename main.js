var request = require('request');
var cheerio = require('cheerio');

var url = 'http://substack.net/images/';
var page;

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
    // console.log($('#ip').text());

    // var write = fs.createWriteStream("content.csv");

    $('tr').each(function (){
      var row = $(this);
      var permissions = row.find('code').first().text();
      var url = "http://substack.net/" + row.find('a').text();
      var filetype = url.split('.').pop();
      if (/.+\/$/.test(filetype)) {
        filetype = "dir"
      }
      console.log(permissions, url, filetype);
      });
  }
})



