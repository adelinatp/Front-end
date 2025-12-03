
fetch("https://dummyjson.com/products/")
    .then(response => response.json())
    .then(data => {

        data.products.forEach(products => {
            imagesContainer.insertAdjacentHTML("beforeend",
                `
                <div class="card">
                    <img src="${products.thumbnail}" alt="${products.title}"> </img>
                    <h4>${products.title}</h4>
                    <h6>${products.brand}</h6>
                    <h6>${products.price} $</h6>
                </div>
                `
            )
        })
    })
    .catch(error=>console.log(error))
    