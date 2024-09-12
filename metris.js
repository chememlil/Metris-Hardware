// You can add any additional interactive behavior here (like expanding the sidebar categories or animations)
document.querySelector('.search-bar button').addEventListener('click', function() {
    alert('Search functionality coming soon!');
});

// Fetch products from the db.json API
fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(data => {
        data.forEach(category => {
            displayCategory(category);
        });
    })
    .catch(error => console.error('Error fetching the data:', error));

// Function to display products by category
function displayCategory(category) {
    const container = document.getElementById('product-container');
    
    const categorySection = document.createElement('div');
    categorySection.classList.add('category-section');

    const categoryTitle = document.createElement('h2');
    categoryTitle.innerText = category.name;

    categorySection.appendChild(categoryTitle);

    category.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.innerText = product.name;

        const productPrice = document.createElement('p');
        productPrice.innerText = `Price: ${product.currency} ${product.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        categorySection.appendChild(productCard);
    });

    container.appendChild(categorySection);
}

// Cart object to store product details
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
  // Assuming product information can be fetched based on productId
  const product = {
    id: productId,
    name: document.querySelector(`.product-name`).textContent,
    price: document.querySelector(`.product-price`).textContent
  };

  // Add product to the cart array
  cart.push(product);

  // Show a confirmation or perform any action
  alert(`${product.name} has been added to your cart!`);

  // (Optional) Update cart count or display products in cart
  updateCartUI();
}

// Function to update cart count/UI (optional)
function updateCartUI() {
  // You can implement this function to display the cart count, for example
  document.getElementById('cart-count').innerText = cart.length;
}
