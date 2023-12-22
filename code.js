document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");

    window.addEventListener("scroll", function () {
        // Vérifie la position de défilement
        const scrollPosition = window.scrollY;

        // Ajoute ici la logique pour suivre le logo lors du défilement
        // Par exemple, tu peux ajuster le style en fonction de scrollPosition
        if (scrollPosition > 100) {
            logo.style.fontSize = "18px";
        } else {
            logo.style.fontSize = "24px";
        }
    });
});
