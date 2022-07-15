!(function($) {
    "use strict";
    $(".main-banner").owlCarousel({
      autoplay: false,
      dots: false,
      loop: true,
      nav: false,
      margin: 0,
      //navText: ["<img src='assets/images/arrow-left.svg'>","<img src='assets/images/arrow-right.svg'>"],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        900: {
          items: 1
        }
      }
    });
    $(".product-carousel").owlCarousel({
        autoplay: false,
        dots: false,
        loop: true,
        nav: true,
        margin: 30,
        navContainer: '#customNav',
        navText: ["<img src='assets/images/arrow-left.svg'>","<img src='assets/images/arrow-right.svg'>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          990: {
            items: 2
          },
          1200: {
            item: 3
          }
        }
      });
      $('.icon-wishlist').on('click', function(){
        $(this).toggleClass('in-wishlist');
      });

      $(".brand-carousel").owlCarousel({
        autoplay: false,
        dots: false,
        loop: true,
        nav: false,
        margin: 30,
        //navText: ["<img src='assets/img/rounded-left.svg'>","<img src='assets/img/rounded-right.svg'>"],
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 4
          },
          900: {
            items: 7
          }
        }
      });
      $(".amazing-product-carousel").owlCarousel({
        autoplay: false,
        dots: false,
        loop: true,
        nav: true,
        margin: 30,
        navText: ["<img src='assets/images/arrow-left.svg'>","<img src='assets/images/arrow-right.svg'>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          900: {
            items: 1
          }
        }
      });

      $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        dots: false,
        loop: true,
        nav: true,
        margin: 30,
        navContainer: '#customNavPro',
        navText: ["<img src='assets/images/arrow-left.svg'>","<img src='assets/images/arrow-right.svg'>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          900: {
            items: 3
          }
        }
      });
      //$('<div class="owl-nav"></div>').appendTo('.owl-arrows');
      //Humberger Menu
    $(".humberger__open").on('click', function () {
      $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
      $(".humberger__menu__overlay").addClass("active");
      $("body").addClass("over_hid");
  });

  $(".humberger__menu__overlay").on('click', function () {
      $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
      $(".humberger__menu__overlay").removeClass("active");
      $("body").removeClass("over_hid");
  });
      /*------------------
        Navigation
      --------------------*/
        $(".mobile-menu").slicknav({
          prependTo: '#mobile-menu-wrap',
          allowParentLinks: true
      });

      $('.categories-all').on('click', function(){
        $('.categories-menu ul').slideToggle(400);
      });

    $('#show-more-content').hide();

    $('#show-more').click(function(){
      $('#show-more-content').show(300);
      $('#show-less').show();
      $('#show-more').hide();
    });

    $('#show-less').click(function(){
      $('#show-more-content').hide(150);
      $('#show-more').show();
      $(this).hide();
    });
    
    $("#cart").on("click", function(e) {      
      $(".shopping-cart-dropdown").slideToggle( "fast");
      e.stopPropagation();
    });
    $("#cart").on("click", function(e) {
      e.stopPropagation();
    });

    $(".profile-user-details").on("click", function(e) {      
      $(".sidebar-menu-list").slideToggle( "fast");
      e.stopPropagation();
    });
    $(".profile-user-details").on("click", function(e) {
      e.stopPropagation();
    });

    //country code 
    $('#country-codes li a').on('click', function() {
      $('#country-codes button span.value').text($(this).attr('value'));
    });

    // $(document).click(function(){
    //   $(".shopping-cart-dropdown").slideToggle( "fast");
    // });

    $(".product__details__pic__slider").owlCarousel({
      loop: true,
      margin: 20,
      items: 4,
      dots: true,
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: false,
      nav: true
  });
  $('.product__details__pic__slider img').on('click', function () {

    var imgurl = $(this).data('imgbigurl');
    var bigImg = $('.product__details__pic__item--large').attr('src');
    if (imgurl != bigImg) {
        $('.product__details__pic__item--large').attr({
            src: imgurl
        });
    }
});

var current_fs, next_fs, opacity; //fieldsets
var hidePrev, progNext, onlyFieldsets, allEle;
//Add Class Active

$(".next").click(function() {
  current_fs = $(this).parents('.fieldsets').children('.previous-details');
  next_fs = $(this).parents('.fieldsets').next().children('.previous-details');
  hidePrev = $(this).parents('.fieldsets').children('.previous-details');
  onlyFieldsets = $(this).parents('.fieldsets');
  

  progNext = $(this).parents('.checkout-page').siblings('main .fieldsets').next().children('.previous-details');
  //console.log(progNext);
  console.log($("#progressbar li").index());
 
  console.log($(".fieldsets").index(onlyFieldsets));
  $("#progressbar li").eq($(".fieldsets").index(onlyFieldsets)).addClass("active");
 

  $('.fieldsets.active').removeClass('active');

  $('.step-header').css({'pointer-events': 'auto'});

  $(this).parents('.fieldsets').next().addClass('active');
  //show the next fieldset
  next_fs.show();

  //hide the current fieldset with style
  hidePrev.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  hidePrev.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 600
  });
});

$('.step-header').click(function () {
  allEle = $('.fieldsets').children('.previous-details');
  current_fs = $(this).parents('.fieldsets').children('.previous-details').css({'opacity': '1'});
  allEle.hide();
  current_fs.show();

  $('.fieldsets.active').removeClass('active');

  $(this).parents('.fieldsets').addClass('active');
});
$('.step-header').css({'pointer-events': 'none'});

$("#pwd_old a").on('click', function(event) {
  event.preventDefault();
  if($('#pwd_old #password').attr("type") == "text"){
      $('#pwd_old #password').attr('type', 'password');
      $('#pwd_old a i').addClass( "fa-eye" );
      $('#pwd_old a i').removeClass( "fa-eye-slash" );
  }else if($('#pwd_old #password').attr("type") == "password"){
      $('#pwd_old #password').attr('type', 'text');
      $('#pwd_old a i').removeClass( "fa-eye" );
      $('#pwd_old a i').addClass( "fa-eye-slash" );
  }
});

$("#pwd_new a").on('click', function(event) {
  event.preventDefault();
  if($('#pwd_new #password').attr("type") == "text"){
      $('#pwd_new #password').attr('type', 'password');
      $('#pwd_new a i').addClass( "fa-eye" );
      $('#pwd_new a i').removeClass( "fa-eye-slash" );
  }else if($('#pwd_new #password').attr("type") == "password"){
      $('#pwd_new #password').attr('type', 'text');
      $('#pwd_new a i').removeClass( "fa-eye" );
      $('#pwd_new a i').addClass( "fa-eye-slash" );
  }
});

$("#pwd_re a").on('click', function(event) {
  event.preventDefault();
  if($('#pwd_re #password').attr("type") == "text"){
      $('#pwd_re #password').attr('type', 'password');
      $('#pwd_re a i').addClass( "fa-eye" );
      $('#pwd_re a i').removeClass( "fa-eye-slash" );
  }else if($('#pwd_re #password').attr("type") == "password"){
      $('#pwd_re #password').attr('type', 'text');
      $('#pwd_re a i').removeClass( "fa-eye" );
      $('#pwd_re a i').addClass( "fa-eye-slash" );
  }
});
    
})(jQuery);