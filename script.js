function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Akira" && password === "Gore#15") {
        alert("Login successful! Redirecting to the Map...");
        window.location.href = "Map.html"; // Redirection vers la nouvelle page
        return false; // Empêche le rechargement du formulaire
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password.";
        document.getElementById("loginMessage").style.color = "red";
        return false; // Empêche le formulaire de se soumettre
    }
}
