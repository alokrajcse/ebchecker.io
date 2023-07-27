const productList = document.getElementById("productList");
const addProductForm = document.getElementById("addProductForm");
const products = []; // Array to store product data

function createProductCard(product) {
  const { name, category, description, availability, thumbnail, link } = product;

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML = `
    <img src="${thumbnail}" alt="${name} Thumbnail">
    <h3>${name}</h3>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Availability:</strong> ${availability}</p>
    <button onclick="removeProduct('${name}')">Remove</button>
  `;

  return productCard;
}

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
  });
}

function addProduct(event) {
  event.preventDefault();
  const productName = document.getElementById("productName").value;
  const productCategory = document.getElementById("productCategory").value;
  const productDescription = document.getElementById("productDescription").value;
  const productAvailability = document.getElementById("productAvailability").value;
  const productThumbnail = document.getElementById("productThumbnail").value;
  const productLink = document.getElementById("productLink").value;

  const newProduct = {
    name: productName,
    category: productCategory,
    description: productDescription,
    availability: productAvailability,
    thumbnail: productThumbnail,
    link: productLink
  };

  products.push(newProduct);
  renderProducts();
  addProductForm.reset();
}

function removeProduct(productName) {
  const productIndex = products.findIndex((product) => product.name === productName);
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    renderProducts();
  }
}

addProductForm.addEventListener("submit", addProduct);

renderProducts();
