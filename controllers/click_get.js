console.log('hello');

const db = require('../db.js')

module.exports = (req, res) => {
	return new Promise((resolve, reject) => {
		if (req.params.id && req.params.id.typeOf == 'number') {
			db.query(`SELECT
			products.id,
			products.name,
			products.cost,
			products.features,
			categories.name AS "cat"
		FROM products
		LEFT JOIN categories
		ON products.category = categories.id
		WHERE category = ${req.params.id}
		`, (err, result) => {
				if (err) {
					console.log('err', err)
				} else {
					res.send(result.rows)
				}
			})
		} else {
			res.send('error')
		}
	})
}


// module.exports = (req, res) => {
// 	db.query(`SELECT
// 	products.id,
// 	products.name,
// 	products.cost,
// 	products.features,
// 	categories.name AS "cat"
// FROM products
// LEFT JOIN categories
// ON products.category = categories.id
// WHERE category = ${req.params.id}
// `, (err, result) => {
// 		if (err) {
// 			console.log('err', err)
// 		} else {
// 			res.send(result.rows)
// 		}
// 	})
// }
