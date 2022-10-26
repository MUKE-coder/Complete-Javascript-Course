// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     const users = data;
//     console.log(users);
//   })
//   .catch((err) => console.log(err));

async function getPosts() {
  const response = await fetch("https://fakestoreapi.com/products");

  console.log(response);
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
  } else if (response.status === 404) {
    console.log(
      `The Resource your trying to access is not available, check url:${response.url}`
    );
  } else {
    console.log("Something Went wrong");
  }
}
getPosts();
