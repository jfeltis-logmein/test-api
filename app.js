var express = require('express'),
		app = express(),
		util = require('./js/util');

app.set('port', process.env.PORT || 1337);

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

app.listen(app.get('port'), function(){
	console.log(`listning on ${app.get('port')}`);
});
