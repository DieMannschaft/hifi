function filterObj(product) {
    return product.img + product.name;
}

//fetcher json filen
fetch('assets/data/app.json')
    //kører then function med repsonse som parameter
    .then(function(response) {
        //For at få Json data'en fra response, bruges json() funktionen
        return response.json();
    })
    .then(function(data) {
        let result = data.products.filter(filterObj);
        appendData(data);
        appendData(result);
    })
    .catch(function(err) {
        console.log(err);
    });

function appendData(data) {
    const dataContainer = document.querySelector("myData");
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = data[i].img + data[i].name + data[i].manufacturer;
        dataContainer.appendChild(li);
    }
}