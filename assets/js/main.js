(function () {
  var menuIcon = document.getElementById("menu-icon");
  var navbar = document.querySelector(".navbar");
  if (!menuIcon || !navbar) return;

  menuIcon.addEventListener("click", function () {
    var isOpen = navbar.classList.toggle("active");
    menuIcon.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      menuIcon.setAttribute("aria-expanded", "false");
    });
  });
})();
