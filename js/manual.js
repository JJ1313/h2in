const toggleButton = document.getElementById("menu-toggle");
const nav = document.getElementById("sidebar");

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggleButton.classList.toggle("active");
});

document.querySelectorAll("#sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggleButton.classList.toggle("active", false);
    });
});
