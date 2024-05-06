<?php
    $da = curl_init();
    curl_setOPt($da, CURLOPT_SSL_VERIFYPEER, false);
    curl_setOPt($da, CURLOPT_RETURNTRANSFER, true);
    curl_setOPt($da, CURLOPT_HEADER, 0);
    curl_setopt($da, CURLOPT_URL, "https://rss.donga.com/total.xml");
    $url_source = curl_exec($da);
    curl_close($da);

    echo $url_source
?>

