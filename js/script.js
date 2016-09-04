window.onload = function () {
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

function addImgClass(index){
    switch (index){
        case 0 : console.log('0');
            $('.all').removeClass('active');
            $('.fixed_glass').removeClass('active');
            $('#lines_wrapper').removeClass('active');
            break;
        case 1 : console.log('1');
            $('.all').removeClass('active');
            $('.fixed_glass').removeClass('active');
            $('#lines_wrapper').removeClass('active');
            break;
        case 2 : console.log('2');
            $('.all').removeClass('active');
            $('.fixed_glass').addClass('active');
            $('#lines_wrapper').removeClass('active');
            break;
        case 3 : console.log('3');
            $('.all').addClass('active');
            $('.fixed_glass').addClass('active');
            $('#lines_wrapper').removeClass('active');
            break;
        case 4 : console.log('4');
            $('.all').addClass('active');
            $('.fixed_glass').addClass('active');
            $('#lines_wrapper').removeClass('active');
            break;
        case 5 : console.log('5');
            $('.all').removeClass('active');
            $('.fixed_glass').removeClass('active');
            $('#lines_wrapper').removeClass('active');
            break;
        case 6 : console.log('6');
            $('.all').removeClass('active');
            $('.fixed_glass').removeClass('active');
            break;
        case 40 : console.log('4-0'); //all
            $('.all').addClass('active');

            $('.experimental').removeClass('active');
            $('.fun').removeClass('active');
            $('.insightful').removeClass('active');
            $('.practical').removeClass('active');

            $('#lines_wrapper').removeClass('active');
            break;
        case 41 : console.log('4-1'); //fun
            $('.fun').addClass('active');

            $('.all').removeClass('active');
            $('.experimental').removeClass('active');
            $('.insightful').removeClass('active');
            $('.practical').removeClass('active');

            $('#lines_wrapper').addClass('active');

            $('.on_top').addClass('active');

            $('.on_bottom').removeClass('active');
            $('.on_left').removeClass('active');
            $('.on_right').removeClass('active');

            $('.text_fun').addClass('color_white');

            $('.text_ins').removeClass('color_white');
            $('.text_prac').removeClass('color_white');
            $('.text_exp').removeClass('color_white');
            break;
        case 42 : console.log('4-2'); //insightful
            $('.insightful').addClass('active');

            $('.all').removeClass('active');
            $('.experimental').removeClass('active');
            $('.fun').removeClass('active');
            $('#practical').removeClass('active');

            $('#lines_wrapper').addClass('active');

            $('.on_bottom').addClass('active');

            $('.on_top').removeClass('active');
            $('.on_left').removeClass('active');
            $('.on_right').removeClass('active');

            $('.text_ins').addClass('color_white');

            $('.text_fun').removeClass('color_white');
            $('.text_prac').removeClass('color_white');
            $('.text_exp').removeClass('color_white');
            break;
        case 43 : console.log('4-3'); //experimental
            $('.experimental').addClass('active');

            $('.all').removeClass('active');
            $('.fun').removeClass('active');
            $('.insightful').removeClass('active');
            $('#practical').removeClass('active');

            $('#lines_wrapper').addClass('active');

            $('.on_left').addClass('active');

            $('.on_bottom').removeClass('active');
            $('.on_top').removeClass('active');
            $('.on_right').removeClass('active');

            $('.text_exp').addClass('color_white');

            $('.text_fun').removeClass('color_white');
            $('.text_ins').removeClass('color_white');
            $('.text_prac').removeClass('color_white');
            break;
        case 44 : console.log('4-4'); //practical
            $('.practical').addClass('active');

            $('.all').removeClass('active');
            $('.experimental').removeClass('active');
            $('.fun').removeClass('active');
            $('.insightful').removeClass('active');

            $('#lines_wrapper').addClass('active');

            $('.on_right').addClass('active');
            $('.on_bottom').removeClass('active');
            $('.on_left').removeClass('active');
            $('.on_top').removeClass('active');

            $('.text_prac').addClass('color_white');

            $('.text_fun').removeClass('color_white');
            $('.text_ins').removeClass('color_white');
            $('.text_exp').removeClass('color_white');
            break;
        default : console.log('default');
            break;
    }

}