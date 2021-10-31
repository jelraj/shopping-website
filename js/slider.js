//GLIDE JS CAROUSEL
const slider1 = document.getElementById("glide_1");
const slider2 = document.getElementById("glide_2");
const slider3 = document.getElementById("glide_3");
const slider4 = document.getElementById("glide_4");
const slider5 = document.getElementById("glide_5");

if(slider1) {
    new Glide("#glide_1", {
    type: "carousel",
    startAt: 0,
    autoplay: 5000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      1200: {
        perView: 1,
      },
      768: {
        perView: 1
      },
      568: {
        perView: 1
      }
    }
    }).mount();
}


//LATEST PRODUCTS
if (slider2) {
  new Glide("#glide_2", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    rewin: false,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      568: {
        perView: 2,
      },
    },
  }).mount();
}

/*
=============
Related Products
=============
 */

if (slider3) {
    new Glide("#glide_3", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      rewin: false,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
    }).mount();
  }
  
  // Testimonial
  
  if (slider4) {
    new Glide("#glide_4", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      rewin: false,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
    }).mount();
  }

  
  if (slider5) {
    new Glide("#glide_5", {
      type: "carousel",
      autoplay: 3000,
      startAt: 0,
      perView: 1,
      rewin: false,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
      breakpoints: {
        1600: {
          perView: 3,
        },
        998: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }
  