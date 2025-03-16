function initAnimations() {
  if (jQuery(window).width() >= 992) {
    
    // Hover animation for .commitments
    jQuery('.commitments').hover(function() {
      const counters = document.querySelectorAll(".data");
      const speed = 10;

      counters.forEach(function(counter) {
        const animate = function() {
          const value = +counter.getAttribute("akhi");
          const data = +counter.innerText;
          const time = value / speed;

          if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 200);
          } else {
            counter.innerText = value;
          }
        };
        animate();
      });
    });

    // GSAP Scroll Animation
    gsap.from(".missionImg", {
      width: "100%",
      top: '0',
      duration: 2,
      scrollTrigger: {
        trigger: ".missionImg",
        scroller: 'body',
        start: 'top 90%',
        end: 'bottom 100%',
        scrub: true,
      }
    });

  }
}

// Smooth Scrolling (Runs on all screen sizes)
jQuery(".nav-link").click(function() {
  var target = jQuery(this).attr('href');
  jQuery('html, body').animate({
    scrollTop: (jQuery(target).offset().top - 150)
  });
});

// Initialize animations on page load
jQuery(document).ready(function() {
  initAnimations();
});

// Re-check on window resize
jQuery(window).resize(function() {
  initAnimations();
});


// sliders

jQuery('.clientel').slick({
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
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
    }
  ]
});

jQuery('.tab-flexboxWrap .flexbox-slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
    }
  ]
});

function initSlick() {
  if (jQuery(window).width() < 992) {  
    if (!jQuery('.box-slider').hasClass('slick-initialized')) {
      jQuery('.box-slider').slick({
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
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    }
  } else {  
    if (jQuery('.box-slider').hasClass('slick-initialized')) {
      jQuery('.box-slider').slick('unslick');
    }
  }
}

// Run on page load
jQuery(document).ready(function() {
  initSlick();
});

// Run on window resize
jQuery(window).resize(function() {
  initSlick();
});


document.querySelectorAll(".hamburger").forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("is-active");
  });
});




// text animation