const express = require('express')
const path = require('path')
const app = express()

const db = require('./db1')

// app.use(express.static(path.join(__dirname, 'client')))

app.use(express.static(path.join(__dirname, 'client')))

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'client/products.html'))
// })

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	console.log('__dirname', __dirname)
})

app.get('/api/brands', (req, res) => {
	db.query('SELECT * FROM brands', (err, result) =>{
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
})


app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
