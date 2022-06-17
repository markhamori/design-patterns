// Create a facade between a complex code
// and the actual business logic code that
// you're writing

// Example: fetch API built into the browser

/////////////////////////// ORIGINAL

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    header: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: "GET",
    header: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

/////////////////////////// WITH FACADE

function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", {
    userId: userId,
  });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

// Really easy to change the implementation
// If in the future we want to use axios
// we only need to change the fetch function
// to axios in the getFetch function under

function getFetch(url, params = {}) {
  const queryString = Object.entries(params)
    .map((param) => {
      return `${param[0]}=${param[1]}`;
    })
    .join("&");

  return fetch(`${url}?${queryString}`, {
    method: "GET",
    header: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}
