console.log('hello')

window.onload = ()=>{
	// let sidebar = document.getElementById('sidebar')
	// sidebar.insertAdjacentHTML('beforeBegin', `<h1>'hey'</h1>`)
	let ul = document.getElementsByTagName('ul')[0]
	let categories = ['wallets', 'bags', 'shoes', 'Umbrellas']
	categories.forEach((c) =>{
		ul.insertAdjacentHTML('beforeEnd', `
		<li>
			<a href="#">${c}</a>
		</li>` )
	})

	//write this function first for async function
	// ('url').then(() => {console.log()}).catch(() => {console.log()})
	// :: products::

	axios.get('http://localhost:3000/api/products').then((res)=> {
		console.log('res', res.data)
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
