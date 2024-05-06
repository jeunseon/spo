// 언어
$('.lang span a.now').click(function(){
    $('.lang').toggleClass('on');     
});

// 전체메뉴

$('.btn-allmenu').click(function(){
    $('.allmenu-wrap,.allmenu-cont').addClass('active');
    $('.allmenu-bg').fadeIn();
    $("body").css("overflow", "hidden");
});
$('.allmenu-top .close').click(function(){
    $('.allmenu-wrap,.allmenu-cont').removeClass('active');
    $('.allmenu-bg').fadeOut();
    $("body").css("overflow", "visible");
});

// 검색창
$('.btn-search.open').click(function(){
    $('.sch-wrap').show();
    $(this).hide();
    $('.btn-search.close').show();
});
$('.btn-search.close').click(function(){
    $('.sch-wrap').hide();
    $(this).hide();
    $('.btn-search.open').show();
});
$('.main-menu ul li').hover(function(){
    $('.sch-wrap').hide();
    $('.btn-search.close').hide();
    $('.btn-search.open').show();
});


// 배너 스와이퍼 슬라이드
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    navigation: {
      nextEl: ".b_btn .swiper-button-next",
      prevEl: ".b_btn .swiper-button-prev",
    },
});
$(".b_btn .stop").click(function(){
    $(this).addClass("on");
    $(this).next(".start").removeClass("on");
    swiper2.autoplay.stop()
    return false;
    
});
$(".b_btn .start").click(function(){
    $(this).addClass("on");
    $(this).prev(".stop").removeClass("on");
    swiper2.autoplay.start()
    return false;
    
});
// 주요메뉴 슬라이드
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 6,
    spaceBetween: 0,
    navigation: {
    nextEl: ".sub-m .swiper-button-next",
    prevEl: ".sub-m .swiper-button-prev",
    },
});
// 연관사이트 스와이퍼 슬라이드
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    loop:true,
});

$(".ctrl .stop").click(function(){
    $(this).addClass("on");
    $(this).next(".start").removeClass("on");
    swiper1.autoplay.stop()
    return false;
    
});
$(".ctrl .start").click(function(){
    $(this).addClass("on");
    $(this).prev(".stop").removeClass("on");
    swiper1.autoplay.start()
    return false;
});
// 마우스 hover 멈춤
$(".mySwiper1").each(function(elem, target){
    var swp = target.swiper;
    $(this).hover(function() {
        swp.autoplay.stop();
    }, function() {
        swp.autoplay.start();
    });
});
// 하단배너 팝업창
$('#relation .ctrl .more').click(function(){
    $("body").css("overflow", "hidden");
    $('.more-site').fadeIn();
});
$('.pop-head .close').click(function(){
    $("body").css("overflow", "visible");
    $('.more-site').fadeOut();
});


// 탭메뉴
// 서비스
$(".main-tab li").click(function() {
    var tabId = $(this).attr('data-tab');
    $(".main-tab li").removeClass("on");
    $(this).addClass("on");
    $(".maintab-cont > div").removeClass("on");
    $(`#${tabId}`).addClass("on");
});

// 공지사항
$(".nmain-tab li").click(function() {
    var ntabId = $(this).attr('data-notion');
    $(".nmain-tab li").removeClass("on");
    $(this).addClass("on");
    $(".tab-cont").removeClass("on");
    $(`#${ntabId}`).addClass("on");
});

// 전국검찰청보기
$('.site-list>a').click(function(){
    $('.pop-box').slideToggle();
    $(this).toggleClass('on');
});


