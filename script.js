function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Akira" && password === "Gore#15") {
        alert("Login successful! Welcome, Akira.");
        return true; // Remplace par une redirection ou une action réelle si nécessaire
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password.";
        document.getElementById("loginMessage").style.color = "red";
        return false; // Empêche le formulaire de se soumettre
    }
}
