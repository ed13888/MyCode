﻿jQuery(document).ready(function ($) {

    $("#message").hover(function () {
        $("#message").fadeTo("100", 1)
    });

    $("#mumu").mouseover(function () {
        $("#mumu").fadeTo("300", 0.3);
        msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i])
    }).mouseout(function () {
        $("#mumu").fadeTo("300", 1)
    });
    var visitor = "老铁";
    if (isindex = true) {
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + " 你是夜猫子呀？还不睡觉，明天起的来么你？", 6000)
        } else {
            if (now > 6 && now <= 11) {
                showMessage(visitor + " 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！", 6000)
            } else {
                if (now > 11 && now <= 14) {
                    showMessage(visitor + " 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！", 6000)
                } else {
                    if (now > 14 && now <= 18) {
                        showMessage(visitor + " 下午的时光真难熬！还好有你在！", 6000)
                    } else {
                        showMessage(visitor + " 快来逗我玩吧！", 6000)
                    }
                }
            }
        }
    } else {
        //showMessage("欢迎" + visitor + "来到《" + title + "》", 6000)
    }

    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    }, {
            queue: false,
            duration: 1000
        });

    window.setInterval(function () {
        msgs = ["陪我聊天吧！", "右击有惊喜哦！", "好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~", "谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~", "从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”", "打赏下呗，主人都没钱给我买狗粮了。。汪。。汪。。汪"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000)
    }, 35000);

    window.setInterval(function () {
        msgs = ["乾坤大挪移！", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[i1]),
            top: document.body.offsetheight / 2 * (1 + s[i1])
        }, {
                duration: 2000,
                complete: showMessage(msgs[i])
            })
    }, 45000);


    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f + 300
        }, {
                queue: false,
                duration: 1000
            })
    });


    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length)
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length)
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: document.body.offsetheight / 2 * (1 + s[i1])
            }, {
                    duration: 500,
                    complete: showMessage(msgs[i])
                })
        } else {
            ismove = false
        }
    })



});

function showMessage(a, b) {
    if (b == null) {
        b = 10000
    }
    jQuery("#message").hide().stop().html(a).fadeIn().fadeTo("1", 1).fadeOut(b)
}


var _move = false;
var ismove = false;
var _x, _y;
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"))
    });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x;
            var y = e.pageY - _y;
            var wx = $(window).width() - $("#spig").width();
            var dy = $(document).height() - $("#spig").height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                });
                ismove = true
            }
        }
    }).mouseup(function () {
        _move = false
    })
});