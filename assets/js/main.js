$(document).ready(function () {
  // accordeon
  $('.skills__wrapper').click(function (e) {
    if ($('.skills__container').hasClass('one')) {
      $('.skills__wrapper').not($(this)).removeClass('active');
      $('.skills-list').not($(this).next()).slideUp();
    }
    $(this).toggleClass('active').next().slideToggle();
  });

  // animate text
  $.fn.animateText = function () {
    let string = this.text();
    return this.each(function () {
      let $this = $(this);
      $this.html(string.replace(/./g, '<span class="new">$&</span>'));
      $this.find('span.new').each(function (i, el) {
        setTimeout(function () {
          $(el).addClass('div_opacity');
        }, 30 * i);
      });
    });
  };
  $('.about__animation-text').show();
  $('.about__animation-text').animateText();

  // slider
  $('.single-item').slick({
    infinite: true,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // arrow-up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.projects__up').fadeIn();
    } else {
      $('.projects__up').fadeOut();
    }
  });
  $('.projects__up').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  // scroll soft
  $('.portfolio__button').on('click', 'a', function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  // burger

  $('.header__burger').click(function () {
    $('.navbar').slideToggle();
  });
  $('.fa-xmark').click(function () {
    $('.navbar').slideToggle();
  });

  // $(document).click(function (e) {
  //   if (
  //     !$('.header__burger').is(e.target) &&
  //     !$('h3').is(e.target) &&
  //     !$('.skills-list').is(e.target) &&
  //     !$('h3').is(e.target) &&
  //     !$('button').is(e.target) &&
  //     $('.header__burger').has(e.target).length === 0 &&
  //     !$('.navbar').is(e.target) &&
  //     $('.navbar').has(e.target).length === 0
  //   ) {
  //     $('.navbar').fadeOut();
  //   }
  // });

  //show menu
  let isStop = true;

  let resetMenu = () => {
    $('.header__burger').removeClass('active');
    $('body').removeAttr('class');
    $('.navbar').removeAttr('style');
    isShow = false;
  };
  $(window).on('resize', () => {
    if ($(window).width() > 900 && isStop) {
      isStop = false;
      setTimeout(() => {
        resetMenu();
        isStop = true;
      }, 200);
    }
  });
});
