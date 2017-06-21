// Banner Slick Carousel
$('.banner-slick').slick({
  centerMode: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay:true,
  arrows: true,
  responsive: [
      {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5
      }
    },
      {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

setTimeout(function(){
   $('.banner-carousel').carousel(1);
}, 1);

setTimeout(function(){
   $('.banner-carousel .carousel-inner >.item:first-child').remove();
}, 6000);
 


// Hover menu
$('.hover-submenu').mouseenter(function(){
    
    $('.hover-menu-right >div, .hover-submenu').removeClass('in');
    var targetMenu = $(this).attr('href');
    $(this).addClass('in');
    $(targetMenu).addClass('in');
});

// Faq's Collapse
$(document).on('click','.ques-lnk',function(e){
    e.preventDefault();

    $(".ans-section.collapse.in").collapse("hide");
    
    $('.faq-list >li').removeClass('active');
    $(this).parent().toggleClass('active');
    $(this).next().collapse('toggle');
    
});

// Show arrow when scroll
var targetTop = $('.navbar').offset().top;
$(window).scroll(function(){
   if($(this).scrollTop() > targetTop) {
       $('nav.navbar').addClass('fixed');
   }else{
       $('nav.navbar').removeClass('fixed');
   }
});

// Top search
$(document).on('click','.search-lnk',function(e){
    e.preventDefault();
    $('.top-search-wrapper').css('display','block');
    $('body').css('overflow','hidden');
});

$(document).on('click','.btn-search-close',function(e){
    e.preventDefault();
    $('.top-search-wrapper').css('display','none');
    $('body').css('overflow','auto');
});

// Hover Dropdown
$('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
});

//Slick Carousel
$('.slick-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick-nav'
});
$('.slick-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slick-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    autoplay: true,
    arrows:false,
    draggable:false
});

// Focus area accordian
$(document).on('click','.collapse-link',function(e){
    e.preventDefault();
    if($(this).parent().hasClass('active')){
        $(this).parent().removeClass('active');
        $(".collapse-content.collapse.in").collapse("hide");
    }
    else{
        $('.focus-area-list >li').removeClass('active');
        $(this).parent().addClass('active');
        $(".collapse-content.collapse.in").collapse("hide");
        $(this).next().collapse('show');
    }
});

// Radio active 
$('.amount-row >label').on('click',function(e){
    $('.amount-row >label').removeClass('active');  
    $(this).addClass('active');
});

if($("input[name='donation-type']:checked").val() == 'cause'){
    console.info('sd');
}

// Donation type
$('.donation-type >label').on('change',function(){
    var currVal = $("input[name='donation-type']:checked").val();
     
    if(currVal == 'cause'){
        $('.amount-row').fadeOut();
        setTimeout(function(){
            $('.donate-cause').slideDown();
        },300);
    }
    else{
        $('.donate-cause').slideUp();
        setTimeout(function(){
            $('.amount-row').fadeIn();  
        },300);
    }
});

//Tax receipt
$('input[name="tax"]').on('change',function(){
    var currVal = $("input[name='tax']:checked").val();
    if($(this).is(':checked')){
        $('.tax-receipt').slideDown();
    }else{
        $('.tax-receipt').slideUp();
    }
});

// Payment type
$('.payment-option >label').on('change',function(){
    var currVal = $("input[name='payment']:checked").val();
    
    $('.payment-field >div').fadeOut();
    setTimeout(function(){
            $('#'+currVal).slideDown();
        },300);
});


// eventInfo Modal
$(document).on('click','.event-popup', function(e){
    
    e.preventDefault();
    var targetURL = $(this).attr('href');
    $("#eventInfo-Modal .modal-body").load(targetURL);
    $("#eventInfo-Modal").modal("show");
});

// List & Gird View
$(document).on('click','.view-type', function(e){
    e.preventDefault();
    var currView = $(this).attr('href');
    $('.view-type, .ev-view').removeClass('active');
    
    $(this).addClass('active');
    $(currView).addClass('active');
});