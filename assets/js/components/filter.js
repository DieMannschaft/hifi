
function filter() {
	fetch("/assets/data/app.json")
	.then(function(res) {
		return res.json();
	})
	.then(function(data) {
			var productContainer = document.querySelector(".products");
			var url = new URLSearchParams(window.location.search);

			if (url.has("category")) {
				let result = data.products.filter(function(product) {
					return product.category == url.get("category");
				});

				result.forEach(function(product) {
					var a = document.createElement("a");
					a.innerText = product.name;
					a.href = `product.html?name=${product.name}`
					productContainer.appendChild(a);
				});
			} else if (url.has("manufacturer")) {
				let result = data.products.filter(function(product) {
					return product.manufacturer == url.get("manufacturer");
				});

				result.forEach(function(product) {
					var h1 = document.createElement("h1");
					h1.innerText = product.name;
					productContainer.appendChild(h1);
				});
			} else {
				data.products.forEach(function(product) {
					var h1 = document.createElement("h1");
					h1.innerText = product.name;
					productContainer.appendChild(h1);
				});
			}

		});
}









export default filter;