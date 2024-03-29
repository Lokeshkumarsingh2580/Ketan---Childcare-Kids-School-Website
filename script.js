const ham = document.querySelector(".ham");
ham.addEventListener("click", () => {
  let menu = document.querySelectorAll("ul");
  menu.forEach((e) => {
    e.classList.toggle("hidden");
  });
});
