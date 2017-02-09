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
        var settime=setInterval(fn,20000);
            $(this).css("display","none");
            $(".video_img").css("display","none");
            $(".video_01").css("display","block");
            document.getElementById("video_01").play();
            var c = $(".video_source").attr('src');
             //console.log(c)
             //ajax数据提交
            var n1= c.lastIndexOf("/")+1;
            var n2= c.lastIndexOf(".");
            var videoname= c.substring(n1,n2)
            //console.log(videoname)
            $.ajax({
                type:"post",
                url:"http://192.168.199.179:8080/mnoooVideo/pay/video",//支付请求地址
                timeout:320,
                dataType:"jsonp",//返回数据格式
                jsonp:"jsoncallback",
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
            }else{
                document.getElementById("video_01").pause();
            }


        })


    });
    var settime=setInterval(fn,20000);
    function fn() {
        $(".video_center").css("display","block");
        $(".video_img").css("display","block");
        $(".video_01").css("display","none");
        $(".bxc").css("display","block");
        $(".bomb_box").css("display","block");
    }



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

$(".error").on("touchstart",function () {

    $(".bxc").css("display","none");
    $(".video_center").css("display","block");
    $(".video_img").css("display","block");
    $(".video_01").css("display","none");
});






