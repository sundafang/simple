/**
 * Created by Administrator on 2017/1/10 0010.
 */
//获取轮播元素
var $banner_carousel_li = $(".banner_carousel_li");
//获取轮播容器
var $banner_ul = $(".banner_ul");
 //获取屏幕宽度
var wd = $(window).width();
 //获取轮播个数
 //var lg = $(slider).length;
 //计算容器宽度
 var allWd = wd * lg;
//获取所有的点
var $banner_punctuation_li = $(".banner_punctuation_li");
//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $(".banner_carousel_li").length;


$(".navbar_nav_ion").on("touchstart",function (){
    var a= $(this).index()
    console.log(a)
   $(".navbar_nav_ion").removeClass("active");
    $(".navbar_nav_ion").eq(a).addClass("active");

    if (a!==0){
        $(".bocc").css("display","none");

    }else{
        $(".bocc").css("display","block");
    }
    if (a!==1){
        $(".bocc02").css("display","none");

    }else{
        $(".bocc02").css("display","block");
    }
    if (a!==2){
        $(".bocc03").css("display","none");

    }else{
        $(".bocc03").css("display","block");
    }
    if (a!==3){
        $(".bocc04").css("display","none");

    }else{
        $(".bocc04").css("display","block");
    }
    if (a!==4){
        $(".bocc05").css("display","none");

    }else{
        $(".bocc05").css("display","block");
    }
    if (a!==5){
        $(".bocc06").css("display","none");

    }else{
        $(".bocc06").css("display","block");
    }
})


//尾部点击事件
$(".end_en").on("touchstart",function () {
    var a= $(this).index();
   // console.log(a);
    if (a!==0){
        $(".img01").css("display","none");
        $(".img02").css("display","block");
    }else{
        $(".img01").css("display","block");
        $(".img02").css("display","none");
    }
    if (a!==1){
        $(".img03").css("display","none");
        $(".img04").css("display","block");
    }else{
        $(".img03").css("display","block");
        $(".img04").css("display","none");
    }
    if (a!==2){
        $(".img05").css("display","none");
        $(".img06").css("display","block");
    }else{
        $(".img05").css("display","block");
        $(".img06").css("display","none");
    }
    if (a!==3){
        $(".img07").css("display","none");
        $(".img08").css("display","block");
    }else{
        $(".img07").css("display","block");
        $(".img08").css("display","none");
    }
})





//定时轮播图
var n=0;
    var settime = setInterval(sum,3000);
        function sum() {
            $(".banner_ul").animate({
                "marginLeft": -wd + "px"
            },2000,function () {
                $(".banner_carousel_li").eq(0).appendTo($(".banner_ul"));
                $(".banner_ul").css("margin-left",0);

                n++;
                if(n>lg-1){
                    n=0;
                }
               //console.log(n)
                $(".banner_punctuation_li").removeClass("banner_active");
                $(".banner_punctuation_li").eq(n).addClass("banner_active");
            })
        }
//滑动事件

//触点屏幕时清除定时器
$(".banner_ul").on("touchstart",function () {
    clearInterval(settime);
});
//离开时启动定时器
$(".banner_ul").on("touchend",function () {
    settime =setInterval(sum,3000);
})
//向左滑动
$(".banner_ul").on("swipeLeft",function (evt) {
    evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等


    $('.banner_ul').animate({
        'margin-left':-wd+'px'
    }, 500, function(){
        $(this).find('.banner_carousel_li').eq(0).appendTo($('.banner_ul'));
        $('.banner_ul').css('margin-left',0);
    });
    n++;
    if(n>lg-1){
        n=0;
    }
    $(".banner_punctuation_li").removeClass("banner_active");
    $(".banner_punctuation_li").eq(n).addClass("banner_active");

    //console.log(n)

});

//向右滑动
$(".banner_ul").on("swipeRight",function (evt) {
    evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
    $('.banner_ul').css('margin-left', -wd+'px');
    $(this).find('.banner_carousel_li').first().before($(this).find('.banner_carousel_li').eq(4));
    $('.banner_ul').animate({
        'margin-left':0
    }, 500);
    n--;
    if(n<0){
        n=lg-1;
    }
    $(".banner_punctuation_li").removeClass("banner_active");
    $(".banner_punctuation_li").eq(n).addClass("banner_active");

});






$(".top_right").on("touchstart",function () {
    $(".bxc").css("display","block");
    $(".bomb_box").css("display","block")
});

//上传缓存到cookie
$(".cue_img").on("touchstart",function () {
    var a= $("input[name='sex']:checked").val();
    $(".payment_input02").val(a);
    console.log(a)

    if ($("input[name='sex']:checked").val()){
        sessionStorage.setItem("data",$("input[name='sex']:checked").val());
    }else{
        alert("失败");
    }
});

//点击获取触点坐标。

$(".error").on("touchstart",function () {
    $(".bxc").css("display","none")
});




