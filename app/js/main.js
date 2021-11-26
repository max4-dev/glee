$(function () {

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from),
        $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from),
      $('.filter-price__to').text(data.to)
    }
  });

  $(".star").rateYo({
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    readOnly: true,
    starWidth: "11px",
    spacing: "7px"
  });

  $('.products__star').rateYo({
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    readOnly: true,
    starWidth: "20px",
    spacing: "13px"
  });
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  // $('.products__btn-favorite').on('click', function(){
  //   $(this).toggleClass('products__btn--active');
  // });
});