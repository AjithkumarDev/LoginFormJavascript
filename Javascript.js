const form = document.getElementById("loginForm");
const errorText = document.getElementById("error");
const successfulText = document.getElementById("sucees");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Ajithkumar" && password === "12345678") {
    errorText.style.display = "none";
    successfulText.style.display = "block";
    console.log("Username : " + username, "Password : " + password);
    alert("Login successful!");
  } else {
    errorText.style.display = "block";
    successfulText.style.display = "none";
    console.log("Username : " + username, "Password : " + password);
    alert("Invalid username or password");
  }
});
