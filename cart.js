document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector('.product-details');
    const subtotalElement = document.querySelector('.sub-price');
    const totalElement = document.querySelector('.total span:last-child');

    // Load cart from localStorage and render it
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        console.log("Loaded cart data:", cart);
    
        cartContainer.innerHTML = `
            <div class="cart-header">
                <div class="detail-product product">Product</div>
                <div class="detail-product price">Price</div>
                <div class="detail-product quantity">Quantity</div>
                <div class="detail-product subtotal">Subtotal</div>
            </div>
        `;

        let total = 0;

     console.log("mycart: ",cart);
     Object.keys(cart).forEach(function(key, index) {
     console.log("name: ",key, ":",cart[key]);
        
     })
    
        // Object.entries(cart).forEach(([name, { price, image, quantity }]) => {
        // console.log("name: ",name);

        //     if (typeof price !== 'number' || typeof quantity !== 'number' || quantity <= 0) {
        //         console.warn(`Invalid product data:`, { name, price, quantity });
        //         return;
        //     }
    
        //     const subtotal = price * quantity;
        //     total += subtotal;
    
        //     cartContainer.innerHTML += `
        //         <div class="cart-item">
        //             <div class="item-info">
        //                 <img src="${image}" alt="${name}">
        //                 <div>${name}</div>
        //             </div>
        //             <div class="price">Rs. ${price.toLocaleString()}</div>
        //             <div class="quantity">
        //                 <input type="number" min="1" value="${quantity}" data-name="${name}">
        //             </div>
        //             <div class="subtotal">Rs. ${subtotal.toLocaleString()}</div>
        //             <div class="trash">
        //                 <button data-name="${name}">Remove</button>
        //             </div>
        //         </div>
        //     `;
        // });
    
        subtotalElement.textContent = `Rs. ${total.toLocaleString()}`;
        totalElement.textContent = `Rs. ${total.toLocaleString()}`;
        attachEventListeners();
    }

    function attachEventListeners() {
        // Update quantity
        document.querySelectorAll('.quantity input').forEach(input => {
            input.addEventListener('change', (e) => {
                const name = e.target.dataset.name;
                const newQuantity = parseInt(e.target.value);

                let cart = JSON.parse(localStorage.getItem('cart')) || {};
                if (newQuantity > 0) {
                    cart[name].quantity = newQuantity;
                } else {
                    delete cart[name];
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                loadCart();
            });
        });

        // Remove items
        document.querySelectorAll('.trash button').forEach(button => {
            button.addEventListener('click', (e) => {
                const name = e.target.dataset.name;

                let cart = JSON.parse(localStorage.getItem('cart')) || {};
                delete cart[name];

                localStorage.setItem('cart', JSON.stringify(cart));
                loadCart();
            });
        });
    }

    // Ensure items are added to the cart properly
    function addToCart(name, price, image) {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};

        
        if (cart[name]) {
            cart[name].quantity += 1;
            console.log(name);
        } else {
            
            cart[name] = { price, image, quantity: 1 };
            console.log(name);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} added to cart!`);
        loadCart(); 
    }

    loadCart(); 



    function toggleNavbar() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active'); 
    } 
    document.addEventListener("DOMContentLoaded", () => {
                  
        const cartContainer = document.querySelector(".cart-container");
        const quantityInputs = cartContainer.querySelectorAll(".quantity input");
        const priceElements = cartContainer.querySelectorAll(".check-out-text.price");
        const subtotalElements = cartContainer.querySelectorAll(".detail-product-check-out > div:nth-child(4)");
        const subPriceElement = cartContainer.querySelector(".sub-price");
        const totalElement = cartContainer.querySelector(".total span:last-child");
        const trashIcons = cartContainer.querySelectorAll(".trash img");
    
        // Function to calculate and update prices
        const updatePrices = () => {
            let total = 0;
            const cartItems = cartContainer.querySelectorAll(".cart-item");
    
            if (cartItems.length === 0) {
                
                subPriceElement.textContent = `Rs. 0`;
                totalElement.textContent = `Rs. 0`;
                return;
            }
    
            cartItems.forEach((item, index) => {
                const quantity = parseInt(quantityInputs[index].value);
                const price = parseInt(
                    priceElements[index].textContent.replace(/[^\d]/g, "")
                );
                const subtotal = quantity * price;
    
                
                subtotalElements[index].textContent = `Rs. ${subtotal.toLocaleString()}`;
    
               
                total += subtotal;
                
            });
    
            
            subPriceElement.textContent = `Rs. ${total.toLocaleString()}`;
            totalElement.textContent = `Rs. ${total.toLocaleString()}`;
        };
    
        
       
        quantityInputs.forEach((input, index) => {
            input.addEventListener("input", () => {
                if (input.value < 1) {
                    input.value = 1;
                }
                updatePrices();
            });
        });
    
       
        trashIcons.forEach((icon, index) => {
            icon.addEventListener("click", () => {
                const cartItem = icon.closest(".cart-item"); 
                cartItem.remove(); 
                updatePrices(); 
            });
        });
    
        updatePrices(); 
    });
});
