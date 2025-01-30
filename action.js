// updatecart
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItemsContainer = document.getElementById('cart-items');
    const subPriceElement = document.querySelector('.sub-price');
    const totalElement = document.getElementById('total');

    cartItemsContainer.innerHTML = ''; // Clear existing items
    let total = 0;

    if (Object.keys(cart).length === 0) {
        cartItemsContainer.innerHTML = '<p>No items in cart</p>';
        subPriceElement.textContent = 'Rs 0';
        totalElement.textContent = 'Rs 0';
        return;
    }
    for (const product in cart) {
        const item = cart[product];
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <div class="item-info">
                <div class="sofa-check-out">
                    <img src="${item.image}" alt="${product}">
                </div>
            </div>
            <div class="detail-product-check-out">
                <div class="check-out-text name">${product}</div>
                <div class="check-out-text price">Rs. ${item.price.toLocaleString()}</div>
                <div class="quantity">
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-product="${product}">
                </div>
                <div class="detail-price">Rs. ${subtotal.toLocaleString()}</div>
            </div>
            <div class="trash">
                <img src="image/trash.png" alt="trash" onclick="removeFromCart('${product}')">
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    }

    subPriceElement.textContent = `Rs ${total.toLocaleString()}`;
    totalElement.textContent = `Rs ${total.toLocaleString()}`;

    initializeQuantityListeners();
}

function initializeQuantityListeners() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const product = e.target.dataset.product;
            const newQuantity = parseInt(e.target.value);
            if (newQuantity > 0) {
                updateQuantity(product, newQuantity);
            }
        });
    });
}

// uodate quantity
function updateQuantity(product, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[product]) {
        cart[product].quantity = quantity; // Update quantity
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
        updateCart(); // Re-render cart
    }
}


//  add product to the cart
function addToCart(productName, productInform, productPrice, productImage) {
    const cleanedPrice = parseFloat(productPrice.replace(/[^0-9.-]+/g, ''));

    if (isNaN(cleanedPrice)) {
        console.error("Invalid price for product:", productName);
        return;
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productName]) {
        cart[productName].quantity += 1;
    } else {
 
        cart[productName] = {
            inform: productInform,
            price: cleanedPrice,
            image: productImage,
            quantity: 1
        };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
    console.log("Cart updated:", cart);
}


// removeFromCart 
function removeFromCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[product]) {
        delete cart[product];
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product} has been removed from your cart.`);
        updateCart();
    } else {
        console.warn('Attempted to remove non-existent product:', product);
    }
}




// Function to get cart items from Local Storage
function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function saveCartItems(items) {
    localStorage.setItem('cartItems', JSON.stringify(items));
}

function addToCart(name, description, price, imageUrl, quantity = 1) {
    const cartItems = getCartItems();

    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity; 
    } else {
        cartItems.push({ name, description, price, imageUrl, quantity }); // Add new item
    }

    saveCartItems(cartItems);
    alert('Item added to cart!');
}

// Function to handle quantity change on single-product
// function handleQuantityChange(delta) {
//     const quantityInput = document.querySelector('.quantity-input');
//     let currentQuantity = parseInt(quantityInput.value, 10) || 1;
//     currentQuantity += delta;

//     if (currentQuantity < 1) {
//         currentQuantity = 1;
//     }

//     quantityInput.value = currentQuantity;
// }

// Function to update the cart count icon with the number of unique product types
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartCountElement = document.getElementById('cart-count');

    if (!cartCountElement) {
        console.warn("Cart count element not found!");
        return;
    }

    const uniqueProductCount = Object.keys(cart).length; // Count unique product types

    if (uniqueProductCount > 0) {
        cartCountElement.textContent = uniqueProductCount;
        cartCountElement.style.display = "flex"; // Show count
    } else {
        cartCountElement.style.display = "none"; // Hide if empty
    }
}

// Function to add a product to the cart
function addToCart(productName, productInform, productPrice, productImage) {
    const cleanedPrice = parseFloat(productPrice.replace(/[^0-9.-]+/g, ''));

    if (isNaN(cleanedPrice)) {
        console.error("Invalid price for product:", productName);
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productName]) {
        cart[productName].quantity += 1;
    } else {
        cart[productName] = {
            inform: productInform,
            price: cleanedPrice,
            image: productImage,
            quantity: 1
        };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // ✅ Update cart count icon
    alert(`${productName} has been added to your cart!`);
}

// Function to remove a product from the cart
function removeFromCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[product]) {
        delete cart[product];
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product} has been removed from your cart.`);
        updateCartCount(); // ✅ Update cart count icon
    } else {
        console.warn('Attempted to remove non-existent product:', product);
    }
}

// ✅ Ensure cart count updates on page load
document.addEventListener("DOMContentLoaded", updateCartCount);








