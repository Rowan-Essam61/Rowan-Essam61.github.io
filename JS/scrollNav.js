window.onscroll = () => {scrollNavbar()};


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .navbar-links ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active1");
    if (li.classList.contains(current)) {
      li.classList.add("active1");
    }
  });
};
