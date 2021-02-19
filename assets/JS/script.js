function openNav() {
    const open = document.getElementById("nav-dropdown");
    if (open.style.display === "block") {
        open.style.display = "none";
    } else {
        open.style.display = "block"
    }
}