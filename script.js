const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

let sidebar = document.querySelector(".sidebar");

document.querySelector('#hamburger').onclick = e => {
    if (navbar.classList.contains("yesHidden")) {
    navbar.classList.remove("yesHidden");
    navbar.classList.add("notHidden");
  } else {
    navbar.classList.remove("notHidden");
    navbar.classList.add("yesHidden");
  }
  e.stopPropagation()
};

document.querySelector('#close').onclick = e => {
  navbar.classList.remove("notHidden");
  navbar.classList.add("yesHidden");
  e.stopPropagation()
};

document.body.addEventListener("click", e => {
  if (!navbar.contains(e.target)) {
    navbar.classList.remove("notHidden");
    navbar.classList.add("yesHidden");
  }
});
