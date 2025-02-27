

const section = document.querySelectorAll("section") 

gsap.set(".center-div",{
    scale:5
})
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the timeline
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".Home",
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 2,
        pin: true,
    }
});

// Clip-path animation
tl.to(".videosection", {
  '--clip': "0%",
  ease: "power2.out",
  onUpdate: function() {
      const clipValue = getComputedStyle(document.querySelector('.videosection')).getPropertyValue('--clip').trim();
      const navLinks = document.querySelectorAll('header nav .leftcontent .nav-items a');
      
      if (clipValue === '0%') {
          gsap.to(navLinks, {
              color: 'black',
              duration: 0.3,
              ease: "power2.out"
          });
      } else {
          gsap.to(navLinks, {
              color: 'white',
              duration: 0.3,
              ease: "power2.out"
          });
      }
  }
}, "mujammil");

tl.to(".overlap", {
  '--clip': "0%",
  ease: "power2.out"
}, "mujammil");

// Change theme and scale animation
tl.to(".center-div", {
    scale: 1,
    ease: Power2,
    // onStart: () => {
    //     document.querySelector('section').setAttribute('theme', 'black');
    //     document.querySelector('nav').setAttribute('theme', 'black');
    // }
}, "mujammil");
// Move left row animation
tl.to(".rleft", {
    xPercent: -3,
    ease: Power2
}, "mujju");

// Move right row animation
tl.to(".rright", {
    xPercent: 3,
    ease: Power2
}, "mujju")
tl.to(".top-content h4",{
  xPercent:3,
  opacity:1,
  ease:Power2,
},"mujju");



const heroSection = document.querySelector("#hero");
ScrollTrigger.create({
  trigger: heroSection,
  start: "top top",
  end: "bottom top-=450px",
//   markers: true,
  onEnter: () => {
    const themeColor = heroSection.dataset.color;
    document.body.setAttribute("theme", themeColor);
    document.querySelector(".header").setAttribute("theme", themeColor);
    // const header = document.querySelectorAll(".header")
    // header.style.backgroundColor = "#fff"
  },
  onEnterBack: () => {
    const themeColor = heroSection.dataset.color;
    document.body.setAttribute("theme", themeColor);
    document.querySelector(".header").setAttribute("theme", themeColor);
  }
});


    const aboutSection = document.querySelector(".about-section");
    ScrollTrigger.create({
      trigger: aboutSection,
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        const themeColor = aboutSection.dataset.color;
        document.body.setAttribute("theme", themeColor);
        document.querySelector("header").setAttribute("theme", themeColor);
      },
      onEnterBack: () => {
        const themeColor = aboutSection.dataset.color;
        document.body.setAttribute("theme", themeColor);
        document.querySelector("header").setAttribute("theme", themeColor);
      }
    });

    const homeSection = document.querySelector(".Home");
    ScrollTrigger.create({
      trigger: homeSection,
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        const themeColor = homeSection.dataset.color;
        document.body.setAttribute("theme", themeColor);
        document.querySelector("header").setAttribute("theme", themeColor);
      },
      onEnterBack: () => {
        const themeColor = homeSection.dataset.color;
        document.body.setAttribute("theme", themeColor);
        document.querySelector("header").setAttribute("theme", themeColor);
      }
    });

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll("section").forEach(function(section) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 50%",
//         markers:true,
//         opacity:0,
//         end: "bottom 50%",
//         // scrub: true,
//         onEnter: function() {
//           const themeColor = section.dataset.color;
//           document.body.setAttribute("theme", themeColor);
//           document.querySelector(".header").setAttribute("theme", themeColor);
          
//         },
//         onEnterBack: function() {
//           const themeColor = section.dataset.color;
//           document.body.setAttribute("theme", themeColor);
//           document.querySelector(".header").setAttribute("theme", themeColor);
//         }
//       });
//     });
//   });


//above code is the main code for theme

  // const locoScroll = new LocomotiveScroll({
  //   el: document.querySelector(".containers"),
  //   smooth: true,
  //   direction: 'horizontal',
  //   multiplier: 1.5, // Adjust this value to increase/decrease the scrolling speed
  // });
  
  // // Update ScrollTrigger with Locomotive Scroll's instance
  // locoScroll.on("scroll", ScrollTrigger.update);
  
  // ScrollTrigger.scrollerProxy(".containers", {
  //   scrollTop(value) {
  //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  //   },
  //   getBoundingClientRect() {
  //     return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  //   },
  //   pinType: document.querySelector(".containers").style.transform ? "transform" : "fixed"
  // });
  
  // // Refresh ScrollTrigger after Locomotive Scroll updates
  // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // ScrollTrigger.refresh();
  
  //about section 
  // Check if the width is greater than 700px
// if (window.innerWidth > 700) {
//   // Register the ScrollTrigger plugin
//   gsap.registerPlugin(ScrollTrigger);

//   // Select the sections
//   const sections = document.querySelectorAll(".right .about");

//   // Apply the GSAP animation
//   gsap.to(sections, {
//     xPercent: -150 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".containers",
//       pin: ".containers",
//       scrub: 1,
//       end: () => "+=" + document.querySelector(".containers").offsetWidth,
//       onUpdate: self => {
//         const progress = self.progress;

//         sections.forEach((section, index) => {
//           if (progress > 0.9 && index < sections.length - 1) {
//             gsap.to(section, { opacity: 0, scale: 0.5, duration: 0.5 });
//           } else {
//             gsap.to(section, { opacity: 1, scale: 1, duration: 0.5 });
//           }
//         });
//       }
//     }
//   });
// }


// if (window.innerWidth < 700) {
//   gsap.registerPlugin(ScrollTrigger);

//   const sections = document.querySelectorAll(".right .about");

//   gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".right",
//       pin: ".right",
//       scrub: 1,
//       end: () => "+=" + document.querySelector(".right").offsetWidth,
//       onUpdate: self => {
//         const progress = self.progress;
//       }}
//   });
// }




  //testimonial section
  
  jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
  });

  
  
//for pricing js

$(document).ready(function() {
  $("#monthly").click(function(){
          $(this).addClass('active');
          $("#yearly").removeClass('active')

          $(".monthlyPriceList").removeClass('d-none');
          $(".monthlyPriceList").addClass('fadeIn');
          $(".yearlyPriceList").addClass('d-none');

          $(".indicator").css("left","2px");
  })

  $("#yearly").click(function(){
          $(this).addClass('active');
          $("#monthly").removeClass('active');

          $(".yearlyPriceList").removeClass('d-none');
          $(".yearlyPriceList").addClass('fadeIn');
          $(".monthlyPriceList").addClass('d-none');

          $(".indicator").css("left","163px");
  })
})


// document.querySelectorAll("section").forEach(function(e){
//     ScrollTrigger.create({
//         trigger:0,
//         start:"top 50%",
//         end:"bottom 50%",
//         markers:true,
//         onEnter:function(){
//             document.section.setAttribute("theme",e.dataset.color);
//         },
//         onEnterBack:function(){
//             document.section.setAttribute("theme",e.dataset.color);
//         }
//     })
// })


//trial of the theme 

// document.addEventListener("DOMContentLoaded", function() {
//   const sections = document.querySelectorAll("section");

//   sections.forEach((section, index) => {
//     let endPosition;

//     if (section.id === "hero" || section.classList.contains("hero")) {
//       // Set the end position for the hero section to be twice its height
//       endPosition = `bottom+=${section.offsetHeight}px`;
//     } else {
//       // For other sections, set the end to be at the midpoint of the section
//       endPosition = "bottom 50%";
//     }

//     ScrollTrigger.create({
//       trigger: section,
//       start: "top 50%",
//       end: endPosition,
//       markers: true, // Remove this line in production
//       onEnter: () => {
//         const themeColor = section.dataset.color;
//         document.body.setAttribute("theme", themeColor);
//         document.querySelector(".header").setAttribute("theme", themeColor);
//       },
//       onEnterBack: () => {
//         const themeColor = section.dataset.color;
//         document.body.setAttribute("theme", themeColor);
//         document.querySelector(".header").setAttribute("theme", themeColor);
//       }
//     });
//   });
// });


//about us gsap
// gsap.to(".right",{
//   scrollTrigger:{
//     trigger: ".right",
//       pin: ".right",
//     yPercent:-100,

//   }
// })


//moving gallery icons 
// document.addEventListener('DOMContentLoaded', () => {
//     const items = document.querySelectorAll('.portfolioo-filters li');
    
//     items.forEach(item => {
//         item.addEventListener('click', () => {
//             // Remove active class from all items
//             items.forEach(i => i.classList.remove('active'));
//             // Add active class to the clicked item
//             item.classList.add('active');
//         });
//     });
// });
















const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("nav-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
});
