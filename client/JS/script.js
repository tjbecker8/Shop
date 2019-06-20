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
	let shoes = [{
		brand: 'Nike',
		name: 'airmax',
		price: '299.89'
	},
	{
		brand: 'bauer',
		name: 'jordans',
		price: '109.99'
	},
	{
		brand: 'salomon',
		name: 'tennis',
		price: '69.99'
	},
	{
		brand: 'rebook',
		name: 'run',
		price: '$49.95'

	},
	{
		brand: 'addidas',
		name: 'crossfit',
		price: '$59.99'
	}]
shoes.forEach((s) =>{
	products.insertAdjacentHTML('beforeEnd', `
	<div class="product">
		<div class="product-image">
			<i class="far fa-star"></i>
		</div>
		<div class="product-extras">
			<div class="description">
				<h4>${s.brand}</h4>
				<small>${s.name}</small>
			</div>
			<div class="price">
				<span>${s.price}</span>
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
