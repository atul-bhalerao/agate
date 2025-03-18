jQuery(document).ready(function () {
  // Initialize animations on page load
  jQuery(".commitments").hover(function () {
    jQuery(".data").each(function () {
      const counter = jQuery(this);
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
  });

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
    responsive: [
      {
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
    responsive: [
      {
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
    responsive: [
      {
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

  document.querySelectorAll(".hamburger").forEach((element) => {
    element.addEventListener("click", (event) => {
      element.classList.toggle("is-active");
    });
  });

  AOS.init({
    offset: 300, // offset (in px) from the original trigger point
  });
});
