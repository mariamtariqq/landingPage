// document.getElementById('hamburger').addEventListener("click", showBar);

// function showBar() {
//     var element = document.getElementById("navbar");
//     element.classList.toggle("hidden");
// }

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  // navbar.classList.toggle("hidden");
  if (navbar.classList.contains("yesHidden")) {
    navbar.classList.remove("yesHidden");
    navbar.classList.add("notHidden");
  } else {
    navbar.classList.remove("notHidden");
    navbar.classList.add("yesHidden");
  }
});
