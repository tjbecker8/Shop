const db = require('../db.js')

module.exports = (req, res) => {
	db.query(`SELECT DISTINCT
	products.id,
	products.name,
	colors.color AS "color"
	FROM products
	INNER JOIN colors
	ON products.color = colors.id`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}
