// 날씨, 현재온도
$.getJSON('https://api.openweathermap.org/data/2.5/weather?id=1835847&appid=ee961909971ca13e3491c8728831f16c&units=metric', function(data){//JSON파일을 가져옴.('경로', function(){}) 
    let temp = data.main.temp;
    let icon = data.weather[0].icon;

    $('.current-temp').append(Math.floor(temp)+'°C');
    $('.current-weather').append('<img src=" http://openweathermap.org/img/wn/'+icon+'@2x.png"/>');

}); 

// 뉴스 rss 가져오기
$.ajax({
    url:"news.php",
    dataType:"xml",
    success:function(data){
        let $items = $(data).find("item");
        if($items.length > 0){
            $items = $items.slice(0,6);
            let $ulTag = $("<ul />");

            $.each($items, function(i, o){
                let $title = $(o).find("title").text();
                let $link = $(o).find("link").text();

                let $aTag = $("<a />").attr({"href":$link, "target":"_blank"}).text($title);
                let $liTag = $("<li />").append($aTag);

                $ulTag.append($liTag);
            });
            $(".donga-news").append($ulTag);
        }
    }
});

// 카카오맵
var mapContainer = document.getElementById('kakaoMap'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.4938474, 127.0050471), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new daum.maps.LatLng(37.4938474, 127.0050471); 

// 마커를 생성합니다
var marker = new daum.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
function setMapType(maptype) { 
    var roadmapControl = document.getElementById('btnRoadmap');
    var skyviewControl = document.getElementById('btnSkyview'); 
    if (maptype === 'roadmap') {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);    
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
    }
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}
