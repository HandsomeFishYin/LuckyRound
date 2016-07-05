/**
 * Created by HelenYin on 2016/2/4.
 */

var data = ['50元','30元','20元','10元','8元','0元'];

var timer = null;

$(function(){

    var play = $("#play");
    var stop = $("#stop");


    play.click(playFun);
    stop.click(stopFun);
});


function playFun (){
    var title = $("#title");
    clearInterval(timer);
    timer = setInterval(function(){
        var random = Math.floor(Math.random()*data.length);
        //=======以下纯属test部分=========
        var randomFloat = Math.random();
        var randomRoundNum =  Math.floor(randomFloat*360+1800);
        console.log(randomRoundNum);
        //================================
        title.html(data[random]);

    },50)
}

function stopFun(){
    clearInterval(timer);
}
