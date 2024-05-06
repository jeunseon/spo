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

// 전국검찰청보기
$('.site-list>a').click(function(){
    $('.pop-box').slideToggle();
    $(this).toggleClass('on');
});

// 내용
$('.year-wrap').hide();
$('.tab-area .tab .tab1').click(function(){
    $(this).addClass('on');
    $('.tab2').removeClass('on');
    $('.intro-wrap').show();
    $('.year-wrap').hide();
});
$('.tab-area .tab .tab2').click(function(){
    $(this).addClass('on');
    $('.tab1').removeClass('on');
    $('.year-wrap').show();
    $('.intro-wrap').hide();
});

// 날씨, 현재온도
$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835847&appid=ee961909971ca13e3491c8728831f16c&units=metric', function(data){//JSON파일을 가져옴.('경로', function(){}) 
    let temp = data.main.temp;
    let icon = data.weather[0].icon;

    $('.current-temp').append(Math.floor(temp)+'°C');
    $('.current-weather').append('<img src=" http://openweathermap.org/img/wn/'+icon+'@2x.png"/>');

}); 

// 사이드메뉴 토글
const subMenu = $('.inc .sub');
subMenu.click(function(e){
    e.preventDefault();
    $('.inc .dep2.sub').removeClass('on');
    $(this).addClass('on');
    
});