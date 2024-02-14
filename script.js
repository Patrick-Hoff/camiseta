// Carrinho
const activeProductCart = document.getElementById("activeProductCart")
const cart = document.getElementById("cart")
const closeId = document.getElementById("closeId")

activeProductCart.addEventListener("click", () => {
    cart.classList.toggle("active")
    activeProductCart.style.display = "none"
})

closeId.addEventListener("click", () => {
    cart.classList.remove("active") 
    activeProductCart.style.display = "block"
})
// -------------------------------------------------


// Produtos
fetch('./json/camiseta.json')
.then(res => res.json())
.then(data => {
    const products = data.map(item => item)

    // Produtos filtrados
    document.getElementById("search").addEventListener("input", (e) => {
        const event = e.target.value.toLowerCase()
        const eventFilter = products.filter(item => 
            item.name.toLowerCase().includes(event)
        );
        itemsVariable(eventFilter)
    });


    // Visualizar produtos sem filtro
    const itemsVariable = (items) => {
        document.getElementById("addToProducts").innerHTML = items.map((item) => {
            let {name,price,img} = item
            return `
            <div class="product">
                <img src=${img} alt="">
                <span>${name}</span>
                <span>R$${price}</span>
                <button>Adicionar ao carrinho</button>
            </div>
            `
        }).join("")
    };itemsVariable(products)
})