// Fake API data
const fakeApiData = [
    {
      id: 1,
      category: "Women's Clothing",
      image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png",
      name: "Stylish Dress",
      description: "A stylish dress perfect for casual wear.",
      price: "$25",
      actualPrice: "$40",
      stock: 15,
    },
    {
      id: 2,
      category: "Men's Clothing",
      image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
      name: "Casual Shirt",
      description: "A comfortable shirt for everyday use.",
      price: "$20",
      actualPrice: "$30",
      stock: 20,
    },
    {
      id: 3,
      category: "Accessories",
      image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product3.png",
      name: "Leather Belt",
      description: "Durable leather belt for formal wear.",
      price: "$15",
      actualPrice: "$25",
      stock: 10,
    },
    {
      id: 4,
      category: "Women's Clothing",
      image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product4.png",
      name: "Evening Gown",
      description: "A glamorous evening gown for special occasions.",
      price: "$50",
      actualPrice: "$80",
      stock: 5,
    },
    {
      id: 5,
      category: "Men's Clothing",
      image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product5.png",
      name: "Formal Suit",
      description: "A classic suit for business and formal events.",
      price: "$100",
      actualPrice: "$150",
      stock: 8,
    },
    {
      id: 6,
      category: "Women's Clothing",
      image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product6.png",
      name: "Casual Top",
      description: "A chic top for everyday comfort.",
      price: "$15",
      actualPrice: "$25",
      stock: 25,
    },
  ];
  
  
  
  // Function to populate products
  function renderProducts(data) {
    const productContainer = document.getElementById("product-container");
  
    data.forEach((product) => {
      const productCard = `
        <div class="col-md-4">
          <div class="card">
            <img
              src="${product.image}"
              alt="${product.name}"
              class="card-img-top product-image"
            />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="text-muted">${product.category}</p>
              <div class="product-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="card-text">${product.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="product-price">${product.price}</span>
                <span class="product-actual-price">${product.actualPrice}</span>
              </div>
              <p class="stock-info">In stock: ${product.stock}</p>
              <button class="add-to-cart-button">
                <i class="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
  
      productContainer.innerHTML += productCard;
    });
  }
  
  // Simulate API call
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts(fakeApiData);
  });