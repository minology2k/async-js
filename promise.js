const BASE_URL = "https://jsonplaceholder.typicode.com";

const getPostById = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`);
};

const getUserById = (id) => {
  return fetch(`${BASE_URL}/users/${id}`);
};

getPostById(1)
  .then((value) => value.json())
  .then((value) => getUserById(value.userId))
  .then((value) => value.json())
  .then((value) => console.log("value", value));
