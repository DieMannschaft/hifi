function getSingleProduct() {
	var url = new URLSearchParams(window.location.search);
	var productContainer = document.querySelector(".product");

	if (url.has("name")) {
		fetch("/assets/data/app.json")
			.then(function(res) {
				return res.json();
			})
			.then(function(data) {
				let result = data.products.find(function(product) {
					return product.name == url.get("name");
				});

				console.log(result);

				var h1 = document.createElement("h1");
				h1.innerText = result.name;
				productContainer.appendChild(h1);
				var a = document.createElement("a");
				a.innerText = `See other ${result.manufacturer} products`;
				a.href = `products.html?manufacturer=${result.manufacturer}`;
				productContainer.appendChild(a);
			})
	}
}





export default getSingleProduct;