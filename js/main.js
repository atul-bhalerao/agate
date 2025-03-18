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


function initAnimations() {
  if (jQuery(window).width() >= 992) {
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

    // Smooth Scrolling (Runs on all screen sizes)
    jQuery(".nav-link").click(function () {
      var target = jQuery(this).attr('href');
      jQuery('html, body').animate({
        scrollTop: (jQuery(target).offset().top - 150)
      });
    });
  }
}

// Initialize animations on page load
jQuery(document).ready(function () {
  initAnimations();
  runCounter();
  // On initial load, if width < 992px, set correct values
  if ($(window).width() < 992) {
    $(".data").each(function () {
      const counter = $(this);
      const finalValue = counter.attr("akhi"); // Preserve final value
      counter.text(finalValue);
    });
  }
});

// Re-check on window resize
jQuery(window).resize(function () {
  initAnimations();
});

// Preserve counted value after resizing to <992px
$(window).on("resize", function () {
  if ($(window).width() < 992) {
    $(".data").each(function () {
      const counter = $(this);
      const finalValue = counter.attr("akhi"); // Preserve final value
      counter.text(finalValue);
    });
  }
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
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 550,
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
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
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
        responsive: [{
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
jQuery(document).ready(function () {
  initSlick();
});

// Run on window resize
jQuery(window).resize(function () {
  initSlick();
});


document.querySelectorAll(".hamburger").forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("is-active");
  });
});

// blog filter for page-list
jQuery(document).ready(function () {
  jQuery(".filter-item").click(function (e) {
    e.preventDefault();

    let filter = jQuery(this).attr("data-filter");

    jQuery(".filter-item").removeClass("active");
    jQuery(this).addClass("active");

    if (filter === "all") {
      jQuery(".blog-item").fadeIn();
    } else {
      jQuery(".blog-item").hide();
      jQuery('.blog-item[data-category="' + filter + '"]').fadeIn();
    }
  });
});

// pagination for page-list
jQuery(document).ready(function () {
  let itemsPerPage = jQuery(window).width() < 992 ? 2 : 9; // Adjust items per page based on screen size
  let currentPage = 1;

  function showPage(page) {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    jQuery(".blog-item").hide().slice(start, end).fadeIn();
    jQuery(".pagination .page-number").removeClass("active");
    jQuery('.pagination .page-number[data-page="' + page + '"]').addClass("active");
  }

  function createPagination() {
    let totalItems = jQuery(".blog-item").length;
    let totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationHtml = "";

    if (jQuery(window).width() < 992) { // Only create pagination for md & sm
      for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<li class="page-item page-number" data-page="${i}"><a href="#">${i}</a></li>`;
      }
    }

    jQuery(".pagination").html(paginationHtml);
    showPage(1);
  }

  createPagination();

  jQuery(document).on("click", ".page-number", function (e) {
    e.preventDefault();
    let page = jQuery(this).attr("data-page");
    showPage(page);
  });

  // Handle resizing
  jQuery(window).resize(function () {
    let newItemsPerPage = jQuery(window).width() < 992 ? 2 : 9;
    if (newItemsPerPage !== itemsPerPage) {
      itemsPerPage = newItemsPerPage;
      createPagination();
    }

    // Show/hide pagination dynamically
    if (jQuery(window).width() >= 992) {
      jQuery(".pagination").hide();
    } else {
      jQuery(".pagination").show();
    }
  }).trigger("resize");
});