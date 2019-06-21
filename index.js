// Config

const express = require('express')
const path = require('path')
const app = express()

//database
const db = require('./db')
// const query = require('./query')

// Static Files

// serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	console.log('__dirname', __dirname)
})

app.get('/api/products', require('./controllers/products_get'))

app.get('/api/colors', require('./controllers/color_get'))

app.get('/api/categories', require('./controllers/categories_get'))

app.get('/api/click', require('./controllers/click_get'))

// app.get('/api/products', (req, res) => {
// 	db.query(`SELECT * FROM products`, (err, result) => {
// 		if (err) {
// 			console.log('err', err)
// 		} else {
// 			res.send(result.rows)
// 		}
// 	})
// })

app.get('/categories', (req, res) => {
	db.query(`SELECT * FROM categories`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
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

// Run Server

app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
