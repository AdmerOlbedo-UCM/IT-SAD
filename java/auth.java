// Check login
function requireAuth() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
        window.location.href = "login.html";
    }
}

// Get logged-in user
function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

// Logout
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
