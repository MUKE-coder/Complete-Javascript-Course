// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     const users = data;
//     console.log(users);
//   })
//   .catch((err) => console.log(err));
const productContainer = document.querySelector(".products");
console.log(productContainer);
async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");

  console.log(response);
  if (response.status === 200) {
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
    document.querySelector(".products").innerHTML = htmlOutput;
  }
}
getProducts();
