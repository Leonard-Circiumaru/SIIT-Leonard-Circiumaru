console.log(localStorage.logged);
if(!localStorage.logged) {
    window.location = "./login.html"
};

document.getElementById("logout").addEventListener("click", () => {
    localStorage.clear();
    window.location = "./login.html"
});