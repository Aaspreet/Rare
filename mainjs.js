let about = document.getElementById("about");
let pricing = document.getElementById("pricing");
let contact = document.getElementById("contact");
let navBar = document.getElementById("navBar");
let whitebackground = document.getElementById("whiteBackground");

navBar.classList.add("navBarStart");
about.classList.add("aboutStart");
pricing.classList.add("pricingStart");
contact.classList.add("contactStart");

var ignoreWheel = false;

window.scrollTo({ top: 0, behavior: "instant" });

addEventListener(
  "wheel",
  (e) => {
    if (!ignoreWheel) {
      if (e.deltaY !== 0) {
        if (e.deltaY > 0) {
          whitebackground.style.animationPlayState = "paused";
          moveToNextSectionDown();

          whitebackground.style.animationPlayState = "running";
        }
        if (e.deltaY < 0) {
          whitebackground.style.animationPlayState = "paused";
          moveToNextSectionUp();
          whitebackground.style.animationPlayState = "running";
        }
      }
      handleWheel();
      handleNavBar();
    }
  },
  { passive: true }
);

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown" || event.key === "ArrowDown") {
    moveToNextSectionDown();
  }
  if (event.code === "ArrowUp" || event.key === "ArrowUp") {
    moveToNextSectionUp();
  }
});

function moveToNextSectionDown() {
  if (window.scrollY < 950) {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  } else if (window.scrollY < 1850) {
    window.scrollTo({ top: 1900, behavior: "smooth" });
  } else if (window.scrollY < 2850) {
    window.scrollTo({ top: 2900, behavior: "smooth" });
  }
  console.log(window.scrollY);
}

function moveToNextSectionUp() {
  if (window.scrollY > 2950) {
    window.scrollTo({ top: 2900, behavior: "smooth" });
  } else if (window.scrollY > 1950) {
    window.scrollTo({ top: 1900, behavior: "smooth" });
  } else if (window.scrollY > 1050) {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  } else if (window.scrollY > 50) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  console.log(window.scrollY);
}

function handleWheel(event) {
  if (ignoreWheel) {
    return; // Ignore wheel events during the cooldown period
  }

  ignoreWheel = true; // Set the flag to ignore subsequent wheel events

  console.log("Wheel event detected!");

  setTimeout(function () {
    ignoreWheel = false; // Reset the flag after the cooldown period
  }, 1500); // Set the cooldown period to 1.5 seconds (1500 milliseconds)
}

function checkNavBarDownOrUp() {
  if (window.scrollY > 2) {
    about.classList.remove("aboutStart");
    pricing.classList.remove("pricingStart");
    contact.classList.remove("contactStart");
    about.classList.add("aboutEnd");
    pricing.classList.add("pricingEnd");
    contact.classList.add("contactEnd");
  } else {
    about.classList.remove("aboutEnd");
    pricing.classList.remove("pricingEnd");
    contact.classList.remove("contactEnd");
    about.classList.add("aboutStart");
    pricing.classList.add("pricingStart");
    contact.classList.add("contactStart");
  }
}

function handleNavBar() {
  setTimeout(function () {
    checkNavBarDownOrUp();
  }, 600);
}
