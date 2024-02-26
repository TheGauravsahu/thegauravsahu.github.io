Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hvr", {videos: ["./v1.mp4", "./v2.mp4" , "./v3.mp4" , "./V4.mp4"]});
Shery.textAnimate(".txt" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.01,
  duration: 1,
  ease: "cubic-bezier(0.15, 1, 0.15, 1)",
  multiplier: 0.1,
});

Shery.imageMasker(".mask-target" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Gaurav Sahu",
  ease: "cubic-bezier(0.320, 1, 0.320, 1)",
  duration: 1.5,
});


gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1
  },
  y: "-300%",
  ease: Power1
})


// let sections = document.querySelectorAll(".fleftelm");
// Shery.imageEffect(".images", {
//   style: 4,
//   config: { onMouse: { value: 1 } },
//   slideStyle: (setScroll) => {
//     sections.forEach(function (section, index) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         scrub: 1,
//         onUpdate: function (prog) {
//           setScroll(prog.progress + index);
//         },
//       });
//     });
//   },
// });

const mobile_nav = document.querySelector(".right-i");
const nav_header = document.querySelector(".nav");
const body = document.querySelector("body");

mobile_nav.addEventListener("click", () => toggleNavbar());

// Add event listener to the document to close navbar when clicking outside
document.addEventListener("click", (event) => {
  const target = event.target;
  const isMenuIcon = target.classList.contains("ri-menu-line");
  const isCloseIcon = target.classList.contains("cls");

  if (!isMenuIcon && !isCloseIcon) {
    closeNavbar();
  }
});

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
  body.classList.toggle("navbar-open");
};

const closeNavbar = () => {
  nav_header.classList.remove("active");
  body.classList.remove("navbar-open");
};
