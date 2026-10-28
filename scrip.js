const menuToggle = document.querySelector("#menuToggle");
    const navLinks = document.querySelector("#navLinks");

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.textContent = isOpen ? "Sluiten" : "Menu";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "Menu";
      });
    });