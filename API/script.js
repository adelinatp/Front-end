fetch("https://dummyjson.com/products/")
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector("tbody")
        data.products.forEach(products => {
            tbody.insertAdjacentHTML("beforebegin",
                `
                <tr>
                    <td>${products.id} </td>
                    <td>${products.title} </td>
                    <td>${products.category} </td>
                    <td>${products.price} </td>
                    <td>${products.dimensions.width} </td>
                    <td>${products.dimensions.height} </td>
                    <td>${products.warrantyInformation} </td>
                </tr>
                `
            )
        
            // const id =`<th>${products.id}</th>`
            // const title =`<th>${products.title}</th>`
            // const description =`<th>${products.description}</th>`
            // const category =`<th>${products.category}</th>`
            // const price =`<th>${products.price}</th>`
            // document.querySelector(`tr`).insertAdjacentHTML("beforeend", title)
            // document.querySelector(`tr`).insertAdjacentHTML("beforeend", description)
            // document.querySelector(`tr`).insertAdjacentHTML("beforeend", category)
            // document.querySelector(`tr`).insertAdjacentHTML("beforeend", price)
        })
    })

    .catch(error=>console.log(error))
    