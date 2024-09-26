let listCarts = []
let products = [
    {
        id: 1,
        product_name: 'SEPATU ADIDAS WADIDAW',
        price: 5000000,
        description: 'Sepatu mahal yeuh',
        img_url: '/products/product-1.jpeg',
        qty: 10
    },
    {
        id: 2,
        product_name: 'SEPATU ADIDAS HIDEUNG',
        price: 3000000,
        description: 'sepatu mahal yeuh tapi hideung',
        img_url: '/products/product-2.jpg',
        qty: 10
    },
    {
        id: 3,
        product_name: 'SEPATU ADIDAS WAKWAW',
        price: 1000000,
        description: 'Sepatu mahal yeuh tapi bodas',
        img_url: '/products/product-3.jpeg',
        qty: 10
    },
]
let cartInit = 0
const listProducts = document.getElementById('list-products')
const cartTotal = document.getElementById('cart-total')
const cartList = document.getElementById('list-cart-products')
const showListCart = () => {
    listProducts.classList.add("d-none")
    cartList.classList.remove("d-none")
}
const backToProduct = () => {
    listProducts.classList.remove("d-none")
    cartList.classList.add("d-none")
}

cartTotal.innerHTML = cartInit

const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}

const productView = (p) => {
    return p.map(product => `<div class="col-lg-4 col-12">
        <div class="card" style="width: 18rem;">
            <img src="${product.img_url}" class="card-img-top" alt="product-1">
            <div class="card-body">
                <h5 class="card-title">${product.product_name}</h5>
                <p class="card-text">Harga: <span>Rp. ${rupiah(product.price)}</span></p>
                <p class="card-text">Qty: <span>${product.qty}</span></p>
                <p class="card-text">Deskripsi: ${product.description}</p>
                <button type="button" class="btn btn-primary" onclick="addToCart(${product.id})">
                    <i class="fa-solid fa-cart-shopping text-light"></i>
                    add to cart
                </button>
            </div>
        </div>
    </div>`).join(",").replaceAll(",", " ")
}

listProducts.innerHTML = productView(products)


function addToCart(id) {

    let newStock = products
    let selectedProduct = newStock.find(produk => produk.id === id)

    if (selectedProduct.qty === 0) {
        alert("BARANGNYA HABIS BOSSS..!!!")
        return
    }

    let pushToCart = newStock.filter(produk => produk.id === id).map(newProduk => ({
        ...newProduk,
        qty: 1
    }))

    if (listCarts.length === 0) {
        listCarts = pushToCart
        console.log(`JIKA CARTNYA O: ${JSON.stringify(listCarts)}`)
    } else if (listCarts.length > 0) {
        // CEK LIST CHART NYA
        let ada = listCarts.some(ada => ada.id === id)

        if (ada) {
            listCarts?.map(l => l.id === id ? ({
                ...l,
                qty: l.qty++
            }) : ({ ...l }))
            // console.log(`LIST CHART BARU: ${JSON.stringify(listCarts)}`)
        }

        if (!ada) {
            listCarts.push({ ...selectedProduct, qty: 1 })
            // console.log(`LIST CHART & ID BARU: ${JSON.stringify(listCarts)}`)
        }
    }

    let newQty = newStock.map(p => {
        if (p.id === id) {
            return {
                ...p,
                qty: p.qty - 1
            }
        }
        return p
    })


    products = newQty
    cartInit++
    cartTotal.innerHTML = cartInit
    listProducts.innerHTML = productView(products)
}