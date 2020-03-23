const app = require('express')();
const mysql = require('mysql');
const path = require("path");

// const connection = mysql.createConnection({
//   host: "34.68.51.2",
//   database: "asn4db",
//   user: "root",
//   password: "admin"
// });
//
// connection.connect(function(err) {
//   if (err) {
// 	  console.log('Error ' + err);
// 	  throw err;
//   }
//   console.log("Connected!");
// });
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/users/', require('./routes/users'));

app.get('/', (req, res) => {
	return res.render('home', {test: 'name'});//res.send('You have reached the home page.');
});

app.listen(3000, () => {
	console.log('The server is up and running on port 3000');
})
