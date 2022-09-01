// menu

const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent(".has-submenu").toggleClass("opened");

  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });
}


function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

// swipper

let swiper = new Swiper('.swiper1', {
  autoplayDisableOnInteraction: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    },

  }
});


let mySwiper = new Swiper('.swiper2', {
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  flipEffect: {
    slideShadows: false,
  },

  breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 50
    },

  }
}
);

// timer

// Set the date we're counting down to
let countDownDate = new Date("Sep 27, 2022 21:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "  days  " + hours + "  h  "
    + minutes + "  m  " + seconds + "  s";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Offer is END";
  }
}, 1000);

// gallery

(function ($) {
  $(document).ready(function () {
    // Isotope
    let sizer = $('</div>').css('width', '25%');

    let $grid = $('.gallery__list').isotope({
      itemSelector: '.gallery__item',
      percentPosition: true,
      masonry: {
        columnWidth: sizer[1]

      }
    });

    $('.filter-link').on('click', function () {
      let filterValue = $(this).attr('data-filter'),
        filter = filterValue === '' ? '' : `[data-name="${filterValue}"]`;

      $('.filter-link').removeClass('filter-link_active');
      $(this).addClass('filter-link_active');


      $grid.isotope({ filter: filter });
    });

  });
})(jQuery);


// form

function validate(e) {

  let valid = true;

  // удаляем все уже существующие ошибки валидации, чтобы проверять по новой
  const errors = document.getElementsByClassName('validation-error');
  while (errors.length > 0) {
    errors[0].parentNode.removeChild(errors[0]);
  }

  // проверяем введение имени
  const authorField = document.getElementById("name");

  if (!authorField.value) { // если не заполнено
    document.querySelector('label[for="name"]').innerHTML += ' <span class="validation-error">Enter your name</span>';
    valid = false;
  }

  // проверяем поле емейла
  const emailField = document.getElementById("email");

  if (!emailField.value) { // если не заполнено
    document.querySelector('label[for="email"]').innerHTML += ' <span class="validation-error">Enter email</span>';
    valid = false;
  } else { // если заполнено, то проверяем на корректность email-адреса регулярным выражением
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!re.test(String(emailField.value).toLowerCase())) {
      document.querySelector('label[for="email"]').innerHTML += ' <span class="validation-error">Valid email</span>';
      valid = false;
    }
  }

  // проверяем поле комментария
  const commentField = document.getElementById("message");

  if (!commentField.value) { // если не заполнено
    document.querySelector('label[for="message"]').innerHTML += ' <span class="validation-error">Please, leave us a message.</span>';
    valid = false;
  }


  if (false == valid) {
    e.preventDefault(); // предотвращаем отправку формы, если есть ошибки валидации
  }
  return valid;

}

const form = document.getElementById('myform');

form.addEventListener('submit', validate);

// button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 3000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

