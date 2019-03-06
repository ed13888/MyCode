﻿

function setGoTop() {
    var scrH = document.documentElement.scrollTop + document.body.scrollTop;
    if (scrH > 200) {
        $('#gotop').fadeIn(400);
    } else {
        $('#gotop').stop().fadeOut(400);
    }
}
function autoPlay() {
    var myAuto = document.getElementById('audio');
    myAuto.play();
}
function closePlay() {
    var myAuto = document.getElementById('audio');
    myAuto.pause();
    myAuto.load();
}
function showtime() {
    var now_time = new Date();  // 创建时间对象
    var year = now_time.getFullYear();
    var month = now_time.getMonth() + 1;
    var day = now_time.getDay();
    var hours = now_time.getHours(); //获得当前小时数
    var minutes = now_time.getMinutes(); //获得当前分钟数
    var seconds = now_time.getSeconds(); //获得当前秒数
    var timer = year + "-" + month + "-" + day + " " + ((hours > 12) ? hours - 12 : hours); //将小时数值赋予变量timer
    timer += ((minutes < 10) ? ":0" : ":") + minutes; //将分钟数值赋予变量timer
    timer += ((seconds < 10) ? ":0" : ":") + seconds; //将秒数值赋予变量timer
    timer += " " + ((hours > 12) ? "pm" : "am"); //将字符am或pm赋予变量timer
    $("#footer_time").html(timer); //在名为clock的表单中输出变量timer的值
    setTimeout("showtime()", 1000); //设置每隔一秒钟自动调用一次showtime()函数

}


function refreshFooterNav() {
    var url = "@requestUrl";
    if (url == "")
        return;

    var arr = $("#footer_nav li a").map(function (i, v) {
        return v.attributes["href"].nodeValue;
    });

    $.each(arr, function (i, v) {
        if (url.indexOf(v) != -1) {
            $("#footer_nav li a[href$='" + v + "']:eq(0)").attr("href", "javascript:void(0)").parent().addClass("active");
            return false;
        }
    });
}