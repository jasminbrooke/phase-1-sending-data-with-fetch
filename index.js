// Add your code here
const submitData = (name, email) => {
    const formData = {
        name,
        email,
      };

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
    return fetch("http://localhost:3000/users", configurationObject)
        .then((response) => response.json())
        .then((object) => document.querySelector("body").innerHTML = object.id)
        .catch(message => document.querySelector("body").innerHTML = message)
}