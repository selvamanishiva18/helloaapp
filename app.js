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

function getStarted() {
    alert("Let's build something awesome, " + document.getElementById("name").innerText + " 🚀");
}