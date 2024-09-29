const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".navUl");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.querySelectorAll(".navLinks").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navUl.classList.remove("active");
  })
);

document.querySelector(".logo").addEventListener("click", () => {
  hamburger.classList.remove("active");
  navUl.classList.remove("active");
});
