let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class = "item">
            <div class = "image">
                <img src = "${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class = "product-details">
                <div class = "title">${product.name}</div>
                <div class = "price">${product.price}</div>    
            </div>
        </div>
    `;
});

document.querySelector('.js-grid').innerHTML = productsHTML;