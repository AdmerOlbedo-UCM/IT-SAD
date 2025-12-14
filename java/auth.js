function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function signup(username, email, password) {
    const users = getUsers();
    if (users.find(u => u.username === username || u.email === email)) {
        alert("User already exists");
        return;
    }
    users.push({ username, email, password });
    saveUsers(users);
    alert("Account created!");
    location.href = "signin.html";
}

function signin(username, password) {
    const user = getUsers().find(
        u => u.username === username && u.password === password
    );
    if (!user) {
        alert("Invalid credentials");
        return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    location.href = "dashboard.html";
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function requireAuth() {
    if (!getCurrentUser()) location.href = "index.html";
}

function logout() {
    localStorage.removeItem("currentUser");
    location.href = "index.html";
}
