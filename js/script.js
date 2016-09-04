window.onload = function () {
    start();
    TweenMax.from(".logo", 0.7, {y:300, opacity:0});
    //TweenMax.staggerFrom(".testtext", 0.7, {y:300, opacity:0});
    //TweenMax.staggerFrom(".move", 0.7, {y:300, opacity:0, delay:0.2}, 0.2);
    //TweenMax.fromTo(".redball", 3, {y:20, x:400}, {y:400, x:0, repeat:-1, yoyo:true });
    //TweenMax.fromTo(".blueball", 3, {y:30, x:700}, {y:200, x:1000, repeat:-1, yoyo:true, delay:1 });
    //TweenMax.fromTo(".yellowball", 3, {y:-150, x:700}, {y:-400, x:1200, repeat:-1, yoyo:true, delay:0.5 });
    //TweenMax.fromTo(".purpleball", 3, {y:-140, x:360}, {y:-200, x:-100, repeat:-1, yoyo:true, delay:1.5 });
}

$(document).ready(function(){
    $("#demosMenu").change(function(){
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });
});

function twinmaxmoving(index) {
    TweenMax.from(".text0" + index, 0.7, {y:300, opacity:0});
}





var delay = 30;
var height = 0;
var Hoffset = 0;
var Woffset = 0;
//    var yon = 0;
//    var xon = 0;
var pause = true;
var interval;
var name = navigator.appName;
if(name == "Microsoft Internet Explorer") name = true;
else name = false;


//initialize xPos, yPos//

//    var xPos = 100;
var xPos = new Array(4);
var yPos = new Array(4);
var xon = new Array(4);
var yon = new Array(4);
var step = new Array(4);

for(var i = 0; i<xPos.length; i++){
    if(name) xPos[i] = document.body.clientHeight; //windows
    else xPos[i] = window.innerHeighdt; //not windows

//        xPos[i] = $( '#sec3' ).width();

    xPos[i] = getRandomInt(0, xPos[i]);

}

for(var i = 0; i<yPos.length; i++){
    if(name) yPos[i] = document.body.clientWidth; //windows
    else yPos[i] = window.innerWidth; //not windows

//        xPos[i] = $( '#sec3' ).height();

    yPos[i] = getRandomInt(0, yPos[i]);


}

for(var i = 0; i<4; i++){
    step[i] = getRandomInt(3, 8);
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function changePos() {
    if(name) {
//            width = document.body.clientWidth;
//            height = document.body.clientHeight;

        width = $( '.dots_wrapper' ).width();

        height = $( '.dots_wrapper' ).height();


        for(var i = 0; i<4; i++){
            Hoffset = document.getElementsByClassName('dot')[i].offsetHeight;
            Woffset = document.getElementsByClassName('dot')[i].offsetWidth;
        }

        red.style.left = xPos[0] + document.body.scrollLeft;
        red.style.top = yPos[0] + document.body.scrollTop;

        yellow.style.left = xPos[1] + document.body.scrollLeft;
        yellow.style.top = yPos[1] + document.body.scrollTop;

        cyan.style.left = xPos[2] + document.body.scrollLeft;
        cyan.style.top = yPos[3] + document.body.scrollTop;

        purple.style.left = xPos[3] + document.body.scrollLeft;
        purple.style.top = yPos[3] + document.body.scrollTop;


    }
    else {
        width = $( '.dots_wrapper' ).width();

        height = $( '.dots_wrapper' ).height();
        Hoffset =33;
        Woffset =30;
        for(var i = 0; i<4; i++){
            document.getElementsByClassName('dot')[i].style.top = yPos[i] + window.pageYOffset;
            document.getElementsByClassName('dot')[i].style.left = xPos[i] + window.pageXOffset;
            console.log("xPos : " + xPos[i]);
            console.log("yPos : " + yPos[i]);
        }

    }

    for(var i = 0; i<4; i++){
        if (yon[i]) {
            yPos[i] = yPos[i] + step[i];
        }
        else {
            yPos[i] = yPos[i] - step[i];
        }
        if (yPos[i] < 0) {
            yon[i] = 1;
            yPos[i] = 0;
        }
        if (yPos[i] >= (height - Hoffset)) {
            yon[i] = 0;
            yPos[i] = (height - Hoffset);
        }
        if (xon[i]) {
            xPos[i] = xPos[i] + step[i];
        }
        else {
            xPos[i] = xPos[i] - step[i];
        }
        if (xPos[i] < 0) {
            xon[i] = 1;
            xPos[i] = 0;
        }
        if (xPos[i] >= (width - Woffset)) {
            xon[i] = 0;
            xPos[i] = (width - Woffset);
        }
    }


}
function start() {
    //document.getElementById('black').style.visibility = "visible";
    for(var i = 0; i<4; i++) {
        document.getElementsByClassName('dot')[i].style.visibility = "visible";
    }
    interval = setInterval('changePos()',delay);

}
function pauseResume() {
    if(pause) {
        clearInterval(interval);
        pause = false;
    }
    else {
        interval = setInterval('changePos()',delay);
        pause = true;
    }
}