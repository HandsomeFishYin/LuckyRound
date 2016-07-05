/**
 * Created by HelenYin on 2016/2/4.
 */

var dataV2 = ['5个','10个','0个','15个','20个','再来一次'];

var timer = null;

$(function(){

    var play = $("#play");
    var stop = $("#stop");
    var closeBtn = $(".close-btn");


    play.click(playFun);
    stop.click(stopFun);
    closeBtn.click(
        function(){
            $("#corver").removeClass("pop-up").addClass("pop-down");
            setTimeout(function(){
                $(".maskWrapper").fadeOut();
            },300)
        }
    );
});


function playFun (){
    var title = $("#title");
    clearInterval(timer);
    timer = setInterval(function(){
        var random = Math.floor(Math.random()*dataV2.length);
        title.html(dataV2[random]);

    },50)
}

function stopFun(){
    clearInterval(timer);
}
