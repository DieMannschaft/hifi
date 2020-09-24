function filterObj(product) {
    return product.manufacturer = "Exposure";
}

//fetcher json filen
fetch('./assets/data/app.json')
    //kører then function med repsonse som parameter
    .then(function(response) {
        //For at få Json data'en fra response, bruges json() funktionen
        return response.json();
    })
    .then(function(data) {
        let result = data.products.filter(filterObj);
        console.log(result);
        appendData(data);
    })
    .catch(function(err) {
        console.log(err);
    });

function appendData(data) {
    const dataContainer = document.querySelector("#myData");
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = 'Name: ' + data[i].img + data[i].name + data[i].manufacturer;
        dataContainer.appendChild(li);
    }
}
// ────────────────────────────────────────────────────────────────────────────────