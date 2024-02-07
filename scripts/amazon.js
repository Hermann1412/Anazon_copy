const products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg', 
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs', 
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090
}, {
  image: 'images/products/intermediate-composite-basketball.jpg', 
  name: 'Intermediate Size Basketball', 
  rating: {
    stars: 4,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg', 
  name: 'Adults Plain Cotton T-Shirt - 2 Pack', 
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799
}, {
  image: 'images/products/camera.jpg', 
  name: ' Camera X-10', 
  rating: {
    stars: 4,
    count: 89
  },
  priceCents: 8990
}, {
  image: 'images/products/men-navigator-sunglasses-brown.jpg', 
  name: 'Navigator Sunglasses', 
  rating: {
    stars: 4,
    count: 45
  },
  priceCents: 1056
}, {
  image: 'images/products/women-chiffon-beachwear-coverup-black.jpg', 
  name: ' Women Chiffon Beachwear', 
  rating: {
    stars: 4,
    count: 140
  },
  priceCents: 6490
}];

let productsHTML = '';

/*we are looping through the array of products and for each product er gonna generate all the html we had before*/
products.forEach((product) => { 

  //accumulator patern , we accumulate the result and we add it to himself
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
       ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  `;

});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML = productsHTML;