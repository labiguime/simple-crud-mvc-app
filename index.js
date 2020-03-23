const app = require('express')();
const mysql = require('mysql');

app.get('/', (req, res) => {
	return res.send('You have reached the home page.');
});

app.listen(3000, () => {
	console.log('The server is up and running on port 3000');
})
