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

	let products = document.getElementById('products')
	let shoes = ['airmax', 'jordans', 'tennis', 'run', 'crossfit']
shoes.forEach((s) =>{
	products.insertAdjacentHTML('beforeEnd', `
	<div class="product">
		<div class="product-image">
			<i class="far fa-star"></i>
		</div>
		<div class="product-extras">
			<div class="description">
				<h4>Nike</h4>
				<small>${s}</small>
			</div>
			<div class="price">
				<span>$189.99</span>
				<a href="#" class="button">shop now</a>
			</div>
		</div>
	</div>
	`)
})


	// let ul = document.getElementsByTagName('ul')[0]
	// ul.insertAdjacentHTML('beforeEnd', `
	// <li>
	// 	<a href="#">wallets</a>
	// </li>` )
	}
