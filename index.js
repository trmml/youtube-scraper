var express = require('express')
	, request = require('request')
	, cheerio = require('cheerio');

var app = express();
var port = process.env.PORT || 8080;

function buildURL(query) {
	return "https://www.youtube.com/results?search_query=" + encodeURI(query)
}

app.get('/', function(req, res) {
	res.send({hello: 'world'});
});

app.get('/search', function(req, res) {
	var query = req.query.q
		, url = buildURL(query);

	request.get(url, function(err, response, body) {
		if (err || !response.statusCode == 200) return res.send({error: err});

		var $ = cheerio.load(body);
		var videoURL = $('h3.yt-lockup-title a').attr('href');

		videoURL = "https://youtube.com" + videoURL;
		res.send({url: videoUR}L)
	});
});

app.listen(port, function() {
	console.log('running on localhost:' + port);
});
