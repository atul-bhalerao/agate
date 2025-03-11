

const items = document.querySelectorAll(".data");
gsap.from(items, {
  textContent: 0,
  duration: 2,
  ease: "power1.in",
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: ".data",
    scroller: 'body',
    markers: true,
    start: 'top 40%',
    stagger: {
      each: 0.30,
      onUpdate: function() {
        this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
      },
    }
  }
});


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
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
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// text animation
