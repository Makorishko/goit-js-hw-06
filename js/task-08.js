const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => { 
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
  if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields!");
      return;
  }

    const data = {
        [email.name]: email.value,
        [password.name]: password.value,
    }
    console.log(data);
    form.reset();
})




