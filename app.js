var express = require('express'),
		app = express(),
		util = require('./js/util');

app.post('/users', function(req, res){
	var users = [],
			recordsToReturn = req.query.r || 10;

	for(var i = 0; i < recordsToReturn; i++){
		var fn = util.getFirstName(),
				ln = util.getLastName(),
				e = util.getEmail(fn, ln);

		users.push({
			id: i,
			first_name: fn,
			last_name: ln,
			email: e,
			phone: '555.555.5555'
		});
	}

	res.setHeader('content-type', 'application/json');
	res.end(JSON.stringify(users));
});

app.listen(8080, function(){
	console.log(`listening on 8080`);
});
