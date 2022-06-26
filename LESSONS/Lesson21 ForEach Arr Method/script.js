const productsContainer = document.querySelector(".products");
console.log(data);
// data.forEach((product) => {
//   productsContainer.insertAdjacentHTML(
//     "beforeend",
//     `
//       <div class="product">
//         <img src="${product.image}" alt="" class="product-image" />
//         <p class="product__name">${product.name}</p>
//         <p class="price">Ugx ${product.price}</p>
//         <del class="original-price">${product.originalPrice}</del>
//       </div>
// `
//   );
// });

const postsContainer = document.querySelector(".posts");
posts.forEach((post) => {
  postsContainer.insertAdjacentHTML(
    "beforeend",
    `
      <div class="post" onclick='deletePost(${post.id})'>
        <p class="title">${post.title}</p>
        <p>
        ${post.body}
        </p>
        <p>${post.userId}</p>
      </div>
  `
  );
});
