function renderProducts() {
    const productContainer = document.querySelector('.product-menu');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productHTML = `
            <div class="products-block">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-name">${product.name}</div>
                <div class="product-price">Rs. ${product.price.toLocaleString()}</div>
                <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
            </div>
        `;
        if (productHTML) {
            productContainer.innerHTML += productHTML;
            console.log(product);
            // console.log("name=",product.name,"price=",product.price,"image=",product.image);
        }
        // productContainer.innerHTML += productHTML;
        // console.log(product.name);
    });
}

function addToCart(name, price, image) {
    console.log("name=",name,"price=",price,"image=",image);
    const cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[name]) {
    } else {
        cart[name] = { price, image, quantity: 1 };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
    updateCartCount();
}



// function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || {};
//     const count = Object.values(cart).reduce((sum, { quantity }) => sum + quantity, 0);
//     document.getElementById('cart-count').textContent = count;
// }
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const count = Object.values(cart).reduce((sum, item) => {
        if (item && item.quantity) {
            return sum + item.quantity;
        }
        return sum;
    }, 0); 
    document.getElementById('cart-count').textContent = count;
}



document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});




function toggleNavbar() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); 
} 
// function addToCart(productName) {
//     const products = [
//         {
//             id: 1,
//             name: "Syltherine",
//             description: "Stylish cafe chair",
//             price: 2500000,
//             oldPrice: 3500000,
//             image: "image/syltherine.png",
//             discount: 30,
//             isNew: false
//         },
//         {
//             id: 2,
//             name: "Leviosa",
//             description: "Comfortable office chair",
//             price: 2500000,
//             oldPrice: 5000,
//             image: "image/leviosa.png",
//             discount: 0,
//             isNew: false
//         },
//         {
//             id: 3,
//             name: "Lolito",
//             description: "Luxury big sofa",
//             price: 7000000,
//             oldPrice: 14000000,
//             image: "image/lolito.png",
//             discount: 50,
//             isNew: false
//         },
//         {
//             id: 4,
//             name: "Respira",
//             description: "Outdoor bar table and stool",
//             price: 500000,
//             oldPrice: null,
//             image: "image/respira.png",
//             discount: 0,
//             isNew: true
//         },
//         {
//             id: 5,
//             name: "Grifo",
//             description: "Modern lounge chair",
//             price: 3500000,
//             oldPrice: 5000000,
//             image: "image/grifo.png",
//             discount: 30,
//             isNew: false
//         },
//         {
//             id: 6,
//             name: "Muggo",
//             description: "Minimalist mug holder",
//             price: 150000,
//             oldPrice: 2000,
//             image: "image/muggo.png",
//             discount: 0,
//             isNew: false
//         },
//         {
//             id: 7,
//             name: "Aurora",
//             description: "Elegant pendant light",
//             price: 3000000,
//             oldPrice: 4500000,
//             image: "image/pingky.png",
//             discount: 33,
//             isNew: false
//         },
//         {
//             id: 8,
//             name: "Asgaard Sofa",
//             description: "Modern family sofa",
//             price: 250000,
//             oldPrice: 2000,
//             image: "image/check-out-sofa.png",
//             discount: 0,
//             isNew: true
//         },
//         {
//             id: 9,
//             name: "Syltherine",
//             description: "Stylish cafe chair",
//             price: 2500000,
//             oldPrice: 3500000,
//             image: "image/syltherine.png",
//             discount: 30,
//             isNew: false
//         },
//         {
//             id: 10,
//             name: "Leviosa",
//             description: "Comfortable office chair",
//             price: 2500000,
//             oldPrice: 5000,
//             image: "image/leviosa.png",
//             discount: 0,
//             isNew: false
//         },
//         {
//             id: 11,
//             name: "Lolito",
//             description: "Luxury big sofa",
//             price: 7000000,
//             oldPrice: 14000000,
//             image: "image/lolito.png",
//             discount: 50,
//             isNew: false
//         },
//         {
//             id: 12,
//             name: "Respira",
//             description: "Outdoor bar table and stool",
//             price: 500000,
//             oldPrice: null,
//             image: "image/respira.png",
//             discount: 0,
//             isNew: true
//         },
//         {
//             id: 13,
//             name: "Grifo",
//             description: "Modern lounge chair",
//             price: 3500000,
//             oldPrice: 5000000,
//             image: "image/grifo.png",
//             discount: 30,
//             isNew: false
//         },
//         {
//             id: 14,
//             name: "Muggo",
//             description: "Minimalist mug holder",
//             price: 150000,
//             oldPrice: 2000,
//             image: "image/muggo.png",
//             discount: 0,
//             isNew: false
//         },
//         {
//             id: 15,
//             name: "Aurora",
//             description: "Elegant pendant light",
//             price: 3000000,
//             oldPrice: 4500000,
//             image: "image/pingky.png",
//             discount: 33,
//             isNew: false
//         },
//         {
//             id: 16,
//             name: "Asgaard Sofa",
//             description: "Modern family sofa",
//             price: 250000,
//             oldPrice: 2000,
//             image: "image/check-out-sofa.png",
//             discount: 0,
//             isNew: true
//         }
        
//     ];
    
//     // Get cart data from localStorage
//     let cart = JSON.parse(localStorage.getItem('cart')) || {};
    
//     console.log("productName=",productName);

//     // Add or update product in the cart
//     if (cart[productName]) {
//         // cqrt find id == id
//         cart[productName]++;
//         alert(`${productName} quantity increased to ${cart[productName]}.`);
//     } else {
//         cart[productName] = 1;
//         alert(`${productName} added to cart.`);
//         // products find
//     }
function addToCart(productName) {
    const products = [
        {
            id: 1,
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: 2500000,
            oldPrice: 3500000,
            image: "image/syltherine.png",
            discount: 30,
            isNew: false
        },
        {
            id: 2,
            name: "Leviosa",
            description: "Comfortable office chair",
            price: 2500000,
            oldPrice: 5000,
            image: "image/leviosa.png",
            discount: 0,
            isNew: false
        },
        {
            id: 3,
            name: "Lolito",
            description: "Luxury big sofa",
            price: 7000000,
            oldPrice: 14000000,
            image: "image/lolito.png",
            discount: 50,
            isNew: false
        },
        {
            id: 4,
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: 500000,
            oldPrice: null,
            image: "image/respira.png",
            discount: 0,
            isNew: true
        },
        {
            id: 5,
            name: "Grifo",
            description: "Modern lounge chair",
            price: 3500000,
            oldPrice: 5000000,
            image: "image/grifo.png",
            discount: 30,
            isNew: false
        },
        {
            id: 6,
            name: "Muggo",
            description: "Minimalist mug holder",
            price: 150000,
            oldPrice: 2000,
            image: "image/muggo.png",
            discount: 0,
            isNew: false
        },
        {
            id: 7,
            name: "Aurora",
            description: "Elegant pendant light",
            price: 3000000,
            oldPrice: 4500000,
            image: "image/pingky.png",
            discount: 33,
            isNew: false
        },
        {
            id: 8,
            name: "Asgaard Sofa",
            description: "Modern family sofa",
            price: 250000,
            oldPrice: 2000,
            image: "image/check-out-sofa.png",
            discount: 0,
            isNew: true
        },
        {
            id: 9,
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: 2500000,
            oldPrice: 3500000,
            image: "image/syltherine.png",
            discount: 30,
            isNew: false
        },
        {
            id: 10,
            name: "Leviosa",
            description: "Comfortable office chair",
            price: 2500000,
            oldPrice: 5000,
            image: "image/leviosa.png",
            discount: 0,
            isNew: false
        },
        {
            id: 11,
            name: "Lolito",
            description: "Luxury big sofa",
            price: 7000000,
            oldPrice: 14000000,
            image: "image/lolito.png",
            discount: 50,
            isNew: false
        },
        {
            id: 12,
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: 500000,
            oldPrice: null,
            image: "image/respira.png",
            discount: 0,
            isNew: true
        },
        {
            id: 13,
            name: "Grifo",
            description: "Modern lounge chair",
            price: 3500000,
            oldPrice: 5000000,
            image: "image/grifo.png",
            discount: 30,
            isNew: false
        },
        {
            id: 14,
            name: "Muggo",
            description: "Minimalist mug holder",
            price: 150000,
            oldPrice: 2000,
            image: "image/muggo.png",
            discount: 0,
            isNew: false
        },
        {
            id: 15,
            name: "Aurora",
            description: "Elegant pendant light",
            price: 3000000,
            oldPrice: 4500000,
            image: "image/pingky.png",
            discount: 33,
            isNew: false
        },
        {
            id: 16,
            name: "Asgaard Sofa",
            description: "Modern family sofa",
            price: 250000,
            oldPrice: 2000,
            image: "image/check-out-sofa.png",
            discount: 0,
            isNew: true
        }
        
    ];
    
    // Get cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    
    console.log("productName=",productName);

    // Add or update product in the cart
    if (cart[productName]) {
        const id =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,16];

        const found = products.find((x) => x.id == productName);
        console.log(found,productName);
        // cqrt find id == id
        cart[productName]++;
        alert(`${productName} quantity increased to ${cart[productName]}.`);
    } else {
        cart[productName] = 1;
        alert(`${productName} added to cart.`);
        // products find
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}








