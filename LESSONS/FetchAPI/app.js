const errorMessage = document.querySelector(".error");
//   .then((response) => response.json())
//   .then((data) => {
//     const users = data;
//     console.log(users);
//   })
//   .catch((err) => console.log(err));
const productContainer = document.querySelector(".products");
console.log(productContainer);
async function getProducts() {
  try {
    renderSpinner(productContainer);
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `The url (${response.url} is unavailable, please check again) (${response.status})`
        );
      }
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    let htmlOutput = "";
    data.map((product) => {
      htmlOutput += `
      <div class="product-card">
        <div class="card-image">
          <img
            src='${product.image}'
            alt=${product.title}
          />
        </div>
        <p class="title">${product.title}</p>
        <p>$ <span class="price">${product.price}</span></p>
      </div>
      `;
    });
    clearMarkup(productContainer);
    productContainer.insertAdjacentHTML("afterbegin", htmlOutput);
  } catch (error) {
    showError(productContainer, error);
    console.log(error);
  }
}
getProducts();
function renderSpinner(parentEl) {
  const markup =
    '<div class="spinner"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /> </svg></div>';
  clearMarkup(parentEl);
  parentEl.insertAdjacentHTML("afterbegin", markup);
}
function clearMarkup(parentEl) {
  parentEl.innerHTML = "";
}
function showError(parentEl, msg) {
  const markup = `<h1 class="error">${msg}</h1>`;
  clearMarkup(parentEl);
  parentEl.insertAdjacentHTML("afterbegin", markup);
}
