//require the package
const {Client} = require('pg')

//create a connection to the database
const db = new Client ({
	connectionString: 'postgres://Bepnm8:@localhost:5432/Shop'
})


db.connect((err) => {
	if (err) {
		console.log('error connecting to postgresSQL database')
	} else {
		console.log('Connected to postgresSQL Database')
	}
})

module.exports = db
