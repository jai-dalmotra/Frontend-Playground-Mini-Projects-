// Mock product data (simulating backend response)
const product = {
  name: "Apple iPhone 15 (128 GB)",
  rating: 4.5,
  isDealOfTheDay: true,
  originalPrice: 79999,
  discountPercent: 20
};

// Calculate final price
function calculateFinalPrice(price, discount) {
  return Math.round(price - (price * discount) / 100);
}

// Render star rating
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  return "★".repeat(fullStars);
}

// Render product card
function renderProduct(product) {
  const finalPrice = calculateFinalPrice(
    product.originalPrice,
    product.discountPercent
  );

  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    ${product.isDealOfTheDay ? `<div class="deal">Deal of the Day</div>` : ""}
    <div class="product-name">${product.name}</div>
    <div class="rating">${renderStars(product.rating)} (${product.rating})</div>

    <div class="price">
      <span class="original">₹${product.originalPrice}</span>
      <span class="discount">-${product.discountPercent}%</span>
    </div>

    <div class="final-price">₹${finalPrice}</div>
  `;

  document.getElementById("product-container").appendChild(card);
}

// Init
renderProduct(product);
