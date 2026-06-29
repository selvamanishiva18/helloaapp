function login() {

    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Enter your username");
        return;
    }

    document.getElementById("name").innerText = username;

    document.getElementById("login").style.display = "none";
    document.getElementById("landing").style.display = "block";
}

function signup() {
    alert("contact system Administrator");
}

function getStarted() {
    document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}