$(document).ready(function(){
  // slider
    $('.header-slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
      });

      // navbar

      $(".dropdown").hover(
        function() { $('.dropdown-menu').slideToggle("3000");
         
    });

    // scroll
    $(window).scroll(function(){
      if($(window).scrollTop() >= 20){
        $('nav').addClass('bgScroll');
      }
      else{
        $('nav').removeClass('bgScroll');

      }
    })
    //slick slider shop
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      speed:500,
      nav:true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 500,
      arrows: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })

 //input search
 $('#open-search').click(function(){
   $('.input-search').slideToggle();
 })

 $('.close').click(function(){
  $('.input-search').slideUp();
 })

//  buttonUp
$(window).scroll(function(){
  // console.log($(window).scrollTop())
  if($(window).scrollTop() >= 530){
  
    $('.buttonUp').fadeIn(400);
  }
  else{
    $('.buttonUp').fadeOut(400);

  }
})

$('.buttonUp').click(function(){
  $("html , body").animate({scrollTop:"0"},2000)
})

// loading
$('.loading').fadeOut(3500,function(){
  $('body').css('overflow','auto')
})

// links
$('.navbar .nav-link').click(function(){
  let ahref=$(this).attr('href');
  $('html,body').animate({scrollTop:$(ahref).offset().top},2000)
})

    });  


    // countdown
    const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
//end countdown

  //input search
