console.log('hello')

window.onload = ()=>{
	// let sidebar = document.getElementById('sidebar')
	// sidebar.insertAdjacentHTML('beforeBegin', `<h1>'hey'</h1>`)
	let ul = document.getElementsByTagName('ul')[0]
	ul.insertAdjacentHTML('beforeEnd', `
	<li>
		<a href="#">wallets</a>
	</li>` )
	}