
$(document).ready(function() {
    const progressFill = document.querySelector(".progress-fill");
    var swiper = new Swiper(".parallax-slider", {
        speed: 1000,
        parallax: true,
        loop: true,
        autoplay: {
            delay: 10000, // Adjust autoplay delay as needed
            disableOnInteraction: false
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -1000]
            },
            next: {
                translate: ["100%", 0, 0]
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            slideChange: function () {
                // Reset progress bar when slide changes
                progressFill.style.width = '0%';
            },
            autoplayTimeLeft(s, time, progress) {
                // Update progress bar width based on autoplay time left
                progressFill.style.width = (1 - progress) * 100 + '%';
            }
        }
    });
});





const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu_btn");
const menuItems = document.querySelector(".menu_items");
const expandBtn = document.querySelectorAll(".expand_btn");

function toggle() {
  // disable overflow body
  body.classList.toggle("overflow");
  // dark background
  overlay.classList.toggle("overlay--active");
  // add open class
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggle();
});

window.onkeydown = function (event) {
  const key = event.key; // const {key} = event; in ES6+
  const active = menuItems.classList.contains("open");
  if (key === "Escape" && active) {
    toggle();
  }
};

document.addEventListener("click", (e) => {
  let target = e.target,
    its_menu = target === menuItems || menuItems.contains(target),
    its_hamburger = target === menuBtn,
    menu_is_active = menuItems.classList.contains("open");
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggle();
  }
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});