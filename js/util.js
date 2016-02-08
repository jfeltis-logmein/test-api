exports.getFirstName = function(){
	var names = ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald', 'George'];

	return names[Math.floor(Math.random() * names.length)];
};

exports.getLastName = function(){
	var names = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Anderson', 'Taylor', 'Wilson', 'Thomas', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White'];

	return names[Math.floor(Math.random() * names.length)];
};

exports.getEmail = function(fn, ln){
	return `${fn.substring(0, 1).toLowerCase()}${ln.toLowerCase()}@email.com`;
}
