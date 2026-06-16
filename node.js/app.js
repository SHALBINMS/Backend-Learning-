function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Shalbin");
    }, 2000);
  });
}

fetchUser().then((user) => {
  console.log(user);
});