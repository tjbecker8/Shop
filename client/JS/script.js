console.log('hello')

window.onload = ()=>{
	// let sidebar = document.getElementById('sidebar')
	// sidebar.insertAdjacentHTML('beforeBegin', `<h1>'hey'</h1>`)
	// let ul = document.getElementsByTagName('ul')[0]
	// let categories = ['wallets', 'bags', 'shoes', 'Umbrellas']
	// categories.forEach((c) =>{
	// 	ul.insertAdjacentHTML('beforeEnd', `
	// 	<li>
	// 		<a href="#">${c}</a>
	// 	</li>` )
	// })


	axios.get('http://localhost:3000/api/categories').then((res)=> {
		let categories = res.data

		//	target categories

		let ul = document.getElementsByTagName('ul')[0]
		categories.forEach((c) =>{
			ul.insertAdjacentHTML('beforeEnd', `
			<li>
				<a href="#">${c.name}</a>
			</li>` )
		})
	}).catch((err) => {
		console.log('err', err);
	})

	
	//write this function first for async function
	// ('url').then(() => {console.log()}).catch(() => {console.log()})
	// :: products::

	axios.get('http://localhost:3000/api/products').then((res)=> {
		// console.log('res', res.data)
		let products = res.data

		//	target products

		let products_ui = document.getElementById('products')
		//display each product in the dom
		products.forEach((s) =>{
			products_ui.insertAdjacentHTML('beforeEnd', `
	<div class="product">
		<div class="product-image">
			<i class="far fa-star"></i>
		</div>
		<div class="product-extras">
			<div class="description">
				<h4>${s.name}</h4>
				<small>${s.features}</small>
			</div>
			<div class="price">
				<span>$${s.cost}</span>
				<a href="#" class="button">shop now</a>
			</div>
		</div>
	</div>
	`)
		})

	}).catch((err) => {
		console.log('err', err);
	})

	// let products_ui = document.getElementById('products')
	// //display each product in the dom
	// products.forEach((s) =>{
	// 	products_ui.insertAdjacentHTML('beforeEnd', `
	// <div class="product">
	// 	<div class="product-image">
	// 		<i class="far fa-star"></i>
	// 	</div>
	// 	<div class="product-extras">
	// 		<div class="description">
	// 			<h4>${s.name}</h4>
	// 			<small>${s.features}</small>
	// 		</div>
	// 		<div class="price">
	// 			<span>${s.cost}</span>
	// 			<a href="#" class="button">shop now</a>
	// 		</div>
	// 	</div>
	// </div>
	// `)
	// })


	// let ul = document.getElementsByTagName('ul')[0]
	// ul.insertAdjacentHTML('beforeEnd', `
	// <li>
	// 	<a href="#">wallets</a>
	// </li>` )	}
}

// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// const array = (a) => {
// 	setTimeout(() => {
// 		a.forEach((x) => {
// 			console.log(x);
// 		})
// 	}, 5000)
// }
//
// array(arr)
//
//
//
//
// const set_name = (n) =>{
// 	setTimeout(() => {
// 		let name = n
// 		console.log('name after 3 seconds', name)
// 		setTimeout(() =>{
// 			let las_name = 'Becker'
// 			console.log('last name after 2 seconds', las_name);
// 			console.log('full name', name, las_name);
// 		}, 2000)
// 	}, 3000)
// }
//
// set_name('Tom')
//
//


// const get_data = (a) => {
// 	return new Promise((resolve, reject) => {
// 		if (a > 10) {
// 			setTimeout(() => {
// 				resolve([6, 7, 8, 9, 0])
// 			}, 4000)
// 		} else {
// 			reject('nope')
// 		}
// 	})
// }
//
// get_data(6).then((nums) => {
// 	console.log('nums', nums);
// }).catch((err) => {
// 	console.log('err', err)
// })
