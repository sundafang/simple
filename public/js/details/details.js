$(function () {
    $(".end_en").on("touchstart",function () {
        var a= $(this).index();
        // console.log(a);
        if (a!==0){
            $(".img01").css("display","block");
            $(".img02").css("display","none");
        }else{
            $(".img01").css("display","none");
            $(".img02").css("display","block");
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

    $(".video_center").on("touchstart",function () {
            $(this).css("display","none");
            document.getElementById("video_01").play();
            var c = $(".video_source").attr('src');
             console.log(c)
             //ajax数据提交
            var n1= c.lastIndexOf("/")+1;
            var n2= c.lastIndexOf(".");
            var videoname= c.substring(n1,n2)
            console.log(videoname)
            $.ajax({
                type:"post",
                url:"http://192.168.199.179:8080/mnoooVideo/pay/video",//支付请求地址
                timeout:320,
                dataType:"jsonp",//返回数据格式
                jsonpCallback:"jsonp",
                async:true,
                data: {
                   Videoname:videoname
                },
                success:function (request) {//成功后返回的数据处理
                    //根据返回值进行状态显示
                    if (request=="True"){
                        alert("支付成功！");
                        //  $(".success").css("display","block");
                    }else{
                        alert("支付失败！")
                    }
                    // $(".error").css("display","block");
                }

            })


    })

//视频监听
    var video_01=document.getElementById("video_01");
    video_01.addEventListener("loadedmetadata",function () {
        tol=0;
        tol= video_01.duration;
        //console.log(tol)
        video_01.addEventListener("timeupdate",function () {
            var currentTime= video_01.currentTime;
            // console.log(currentTime)
            if (currentTime<=20){
                //document.getElementById("video_01").play();
                $(".video_center").css("display","none");
            }else {
                document.getElementById("video_01").pause();
                $(".bxc").css("display","block");
                $(".bomb_box").css("display","block");
            }
        })
    });



//清除监听


    $(".cue_img").on("touchstart",function () {
        var a= $("input[name='sex']:checked").val();

        if ($("input[name='sex']:checked").val()){
            sessionStorage.setItem("data",$("input[name='sex']:checked").val());
        }else{
            alert("失败");
        }
    })

    $(".top_right").on("touchstart",function () {
        $(".bxc").css("display","block");
        $(".bomb_box").css("display","block");

    })

})










/*
var  myVideo = document.getElementById('video_01')//获取video元素
    ,tol = 0  //总时长
    ;
myVideo.addEventListener("loadedmetadata", function(){
    tol =  myVideo.duration;//获取总时长
});//</p> <p>播放
function play(){
    myVideo.play();
}//</p> <p>暂停
function pause(){
    myVideo.pause();
}//</p>  <p>播放时间点更新时
myVideo.addEventListener("timeupdate", function(){
    var  currentTime =  myVideo.currentTime;//获取当前播放时间

    if (currentTime<=20){
            document.getElementById("video_01").play();
        }else {
            document.getElementById("video_01").pause();
            $(".video_center").css("display","block");
            $(".bxc").css("display","block");
            $(".bomb_box").css("display","block");
        }

   // console.log(currentTime);//在调试器中打印
});//</p>  <p>设置播放点
function playBySeconds(num){
    myVideo.currentTime =  num;
}//</p> <p>音量改变时
myVideo.addEventListener("volumechange",  function(){
    var volume =  myVideo.volume;//获取当前音量
    console.log(volume);//在调试器中打印
});//</p>  <p>设置音量
function setVol(num){
    myVideo.volume =  num;
}
*/





