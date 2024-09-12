const products = [
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

const listProducts = document.getElementById('list-products')
const productView = products.map(product => `<div class="col-lg-4 col-12">
                <div class="card" style="width: 18rem;">
                    <img src="${product.img_url}" class="card-img-top" alt="product-1">
                    <div class="card-body">
                        <h5 class="card-title">${product.product_name}</h5>
                        <p class="card-text">Harga: <span>Rp. ${product.price}</span></p>
                        <p class="card-text">Qty: <span>${product.qty}</span></p>
                        <p class="card-text">Deskripsi: ${product.description}</p>
                        <a href="#" class="btn btn-primary">
                            <i class="fa-solid fa-cart-shopping text-light"></i>
                            add to cart
                        </a>
                    </div>
                </div>
            </div>`).join(",").replaceAll(",", " ")

listProducts.innerHTML = productView