document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = "arigatokhodzaifa";
    const correctPassword = "bayotsicadiz";

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        document.getElementById('error').textContent = "Invalid username or password!";
    }
});

// SHOW PASSWORD
document.getElementById("togglePassword").addEventListener("change", function () {
    const pass = document.getElementById("password");
    pass.type = this.checked ? "text" : "password";
});
