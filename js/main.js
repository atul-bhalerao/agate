jQuery('.commitments').hover(function(){

  const counters = document.querySelectorAll(".data");
  const speed = 10;
  
  counters.forEach(function (counter) {
    const animate = function () {
      const value = +counter.getAttribute("akhi");
      const data = +counter.innerText;
      
      const time = value / speed;
      
      if (data < value) {
        var type = (counter.innerText = Math.ceil(data + time));
        
        setTimeout(animate, 200);
        
        console.log(Math.ceil(data + time).toLocaleString());
        
        // document.querySelectorAll(".data.emp").innerHTML = type.toLocaleString();
      } else {
        counter.innerText = value;
      }
    };
    
    animate();
  });
});
// counter ends
jQuery(".nav-link").click(function() {
  var target = jQuery(this).attr('href');
  jQuery('html, body').animate({
    scrollTop: (jQuery(target).offset().top - 150)
  });
});
// smooth scroll ends
gsap.from(".missionImg",{
  width: "100%",
  top: '0',
  duration: 2,
  scrollTrigger: {
    trigger: ".missionImg",
    scroller: 'body',
    // markers: true,
    start: 'top 90%',
    end: 'bottom 100%',
    scrub: true,
  }
})

// sliders

jQuery('.clientel').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// our strenth animation depend on window resize
$(document).ready(function(){
  function initSlick() {
      if ($(window).width() <= 767.9) { 
          if (!$('.box-slider').hasClass('slick-initialized')) {
              $('.box-slider').slick({
                  infinite: false,
                  speed: 300,
                  slidesToShow: 2,  // Show 1 item per slide
                  slidesToScroll: 2,
                  dots: true,
                  arrows: false, // Hide arrows for mobile
                  autoplay: false,
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
          }
      } else {
          if ($('.box-slider').hasClass('slick-initialized')) {
              $('.box-slider').slick('unslick'); // Remove Slick for larger screens
          }
      }
  }

  initSlick(); // Run on page load
  $(window).resize(function() {
      initSlick(); // Re-run when resizing
  });
});
// text animation