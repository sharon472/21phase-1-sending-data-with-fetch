
function submitData(name, email) {
      return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
         "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
        email: email
    })
  })
       .then(response => response.json())
    .then(object => {
         

      const body = document.querySelector("body");
      
      const p = document.createElement("p");
      p.textContent = `User created with ID: ${object.id}`;
      body.appendChild(p);
    })
    .catch(error => {
       


      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = error.message;
     
     
      body.appendChild(p);
    });
}
