// const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");
// portfolioItems.forEach((portfolioItem) => {
//   portfolioItem.addEventListener("mouseover", () => {
//     console.log(portfolioItem);
//   });
// });

//Navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

////Register Ticket
document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
document.querySelector(".button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
