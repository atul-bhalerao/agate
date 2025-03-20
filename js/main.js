// ===============================
// RUN COUNTER ON HOVER (for large screens)
// ===============================
function runCounter() {
  $(".commitments").hover(function () {
    if ($(window).width() >= 992) {
      $(".data").each(function () {
        const counter = $(this);
        const value = parseInt(counter.attr("akhi"));
        let current = parseInt(counter.text());

        if (current === value) return; // Prevent re-running if already counted

        const speed = 10;
        const increment = value / speed;

        const animate = function () {
          let currentVal = parseInt(counter.text());
          if (currentVal < value) {
            counter.text(Math.ceil(currentVal + increment));
            setTimeout(animate, 200);
          } else {
            counter.text(value); // Ensure exact value
          }
        };

        animate();
      });
    }
  });
}

// ===============================
// Document Ready
// ===============================

jQuery(document).ready(function () {
  runCounter();

  // Preserve counter value when screen width < 992px
  if ($(window).width() < 992) {
    $(".data").each(function () {
      const counter = $(this);
      counter.text(counter.attr("akhi")); // Set final value
    });
  }

// GSAP Scroll Animation
gsap.from(".missionImg", {
  width: "100%",
  top: "0",
  duration: 2,
  scrollTrigger: {
    trigger: ".missionImg",
    scroller: "body",
    start: "top 90%",
    end: "bottom 100%",
    scrub: true,
  },
});

// Smooth Scrolling (Runs on all screen sizes)
jQuery(".nav-link").click(function () {
  var target = jQuery(this).attr("href");
  jQuery("html, body").animate({
    scrollTop: jQuery(target).offset().top - 150,
  });
});

// sliders
jQuery(".clientel").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

jQuery(".tab-flexboxWrap .flexbox-slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

jQuery(".box-slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Hamburger Menu
document.querySelectorAll(".hamburger").forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("is-active");
  });
});

// Animation
AOS.init({
offset: 300, // offset (in px) from the original trigger point
});

});

// ===============================
// Blog Filter
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  let activeFilter = "all";

  document.querySelectorAll(".filter-item").forEach((filter) => {
    filter.addEventListener("click", function (e) {
      e.preventDefault();
      
      activeFilter = this.getAttribute("data-filter");

      // Update active filter button styles
      document.querySelectorAll(".filter-item").forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      // Show/Hide items based on filter
      document.querySelectorAll(".blog-item").forEach((item) => {
        if (activeFilter === "all" || item.getAttribute("data-category") === activeFilter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
