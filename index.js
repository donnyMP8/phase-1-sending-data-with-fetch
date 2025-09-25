// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Append the new ID to the DOM
      const body = document.querySelector("body");
      body.innerHTML += `<p>${data.id}</p>`;
    })
    .catch((error) => {
      // Append error message to the DOM
      const body = document.querySelector("body");
      body.innerHTML += `<p>${error.message}</p>`;
    });
}
