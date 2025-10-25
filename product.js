async function getProducts() {
    const url = "https://fakestoreapi.com/products"
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
        data.forEach(card_data => {
            // const trunc = card_data.description.subString(0 ,100)
            console.log(card_data.title, card_data.description, card_data.category, card_data.image, card_data.price)
            const divElement = document.createElement("div")
            divElement.innerHTML = `
            <div class = "products">
            <div>
            <div class = "for_image">
            <img class= "img" src= "${card_data.image}" alt="">
            </div>
            <div class="card_content">
            <h4 id = "title">${card_data.title}</h4>
            
            <p id = "price">$${card_data.price}</p>
            <div class = "rate">
            <p id= "rating"> <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>${card_data.rating.rate}</p>
            <p id= "count">${card_data.rating.count}</p>
            </div>
            <div class = "buttons">
            <div><button class = "btn1"><i class="bi bi-cart"></i> Add to cart</button><div> 
            <div><button class ="btn2"> View products</button></div>
            </div>
            </div>
            </div>
           `
             divElement.classList.add("box")
             container.appendChild(divElement)
        });
    } catch (error) {
        console.log(`error failed to get product`, error)
    }


}
const container = document.getElementById("xg")
getProducts();