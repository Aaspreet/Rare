let about = document.getElementById("about");
let pricing = document.getElementById("pricing");
let contact = document.getElementById("contact");
let navBar = document.getElementById("navBar");
let whitebackground = document.getElementById("whiteBackground");

navBar.classList.add("navBarStart");
about.classList.add("aboutStart");
pricing.classList.add("pricingStart");
contact.classList.add("contactStart");

window.scrollTo({ top: 0, behavior: "instant" });

addEventListener("wheel", (e) => {
  if (e.deltaY !== 0) {
    if (e.deltaY > 0) {
      whitebackground.style.animationPlayState="paused"
      moveToNextSectionDown();
            whitebackground.style.animationPlayState = "running";

    }
    if (e.deltaY < 0) {
            whitebackground.style.animationPlayState = "paused";

      moveToNextSectionUp();
                  whitebackground.style.animationPlayState = "running";

    }


 if (window.scrollY > 0) {
   about.classList.remove("aboutStart");
   pricing.classList.remove("pricingStart");
   contact.classList.remove("contactStart");
   about.classList.add("aboutEnd");
   pricing.classList.add("pricingEnd");
   contact.classList.add("contactEnd");

   if (window.scrollY > 0) {
   }
 } else {
   about.classList.remove("aboutEnd");
   pricing.classList.remove("pricingEnd");
   contact.classList.remove("contactEnd");
   about.classList.add("aboutStart");
   pricing.classList.add("pricingStart");
   contact.classList.add("contactStart");
 }
  
  }
});

function moveToNextSectionDown() {
  if (window.scrollY < 800) {
    window.scrollTo({ top: 800, behavior: "smooth" });
  } else if (window.scrollY < 1600) {
    window.scrollTo({ top: 1600, behavior: "smooth" });
  } else if (window.scrollY < 2400) {
    window.scrollTo({ top: 2400, behavior: "smooth" });
  }
}

function moveToNextSectionUp() {
  if (window.scrollY > 2400) {
    window.scrollTo({ top: 2400, behavior: "smooth" });
  } else if (window.scrollY > 1600) {
    window.scrollTo({ top: 1600, behavior: "smooth" });
  } else if (window.scrollY > 800) {
    window.scrollTo({ top: 800, behavior: "smooth" });
  } else if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
