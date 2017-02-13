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

//视频监听
    var myVideo =  document.getElementById('video_01');//获取video元素
    var Video= myVideo.addEventListener("timeupdate",sum)
    //设置播放点

    function sum(){
        var  currentTime =  myVideo.currentTime;//获取当前播放时间

        console.log(currentTime);//在调试器中打印
        if (currentTime>5){
            myVideo.currenTime=1;
            document.getElementById("video_01").pause();
            //console.log(currentTime);//在调试器中打印
        }};

    //var settime=setInterval(fn,20000);
    //定时器

    $(".video_center").on("touchstart",function () {
        var settime=setInterval(fn,20000);
            $(this).css("display","none");
            $(".video_img").css("display","none");
            $(".video_01").show();
            document.getElementById("video_01").play();
            var c = $(".video_source").attr('src');
             //console.log(c)
             //ajax数据提交
            var n1= c.lastIndexOf("/")+1;
            var n2= c.lastIndexOf(".");
            var fName= c.substring(n1,n2);
            //console.log(videoname)
            $.ajax({
                type:"post",
                url:"http://192.168.199.179:8080/mnoooVideo/pay/check",//检查请求视频是否付费地址
                timeout:320,
                dataType:"json",//返回数据格式
                jsoncallback :"json",
                data: {
                   fName:fName
                },
                success:function (request) {//成功后返回的数据处理
                    //根据返回值进行状态显示
                    //console.log(request);
                    if (request=="true"){
                        $(".success").show();
                        clearInterval(settime);
                    // removeEvent删除事件
                        myVideo.removeEventListener("timeupdate",sum)
                    }else if(request=="wait"){
                        $(".fail").show();

                    }else{
                        $(".being_paid").show();
                    }
                    // $(".error").css("display","block");
                }

            })

    })

    function fn() {
        $(".video_center").css("display","block");
        $(".video_img").css("display","block");
        $(".video_01").hide();
        $(".bxc").css("display","block");
        $(".bomb_box").css("display","block");
        document.getElementById("video_01").pause();
    }

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

$(".cue_img").on("touchstart",function () {
    var c = $(".video_source").attr('src');
    //console.log(c)
    //ajax数据提交
    var n1= c.lastIndexOf("/")+1;
    var n2= c.lastIndexOf(".");
    var fName= c.substring(n1,n2);

//para_name 参数名称 para_value 参数值 url所要更改参数的网址
    window.location="http://192.168.199.179:8080/mnoooVideo/pay/video?fName="+fName;

    $.ajax({
        type:"POST",
        url:"http://192.168.199.179:8080/mnoooVideo/pay/video",//视频付费提交地址
        timeout:320,
        data: {
            fName:fName
        }
        /*,
        success:function (request) {//成功后返回的数据处理
            //根据返回值进行状态显示
           // console.log(request);
            if (request=="true"){
                console.log("支付成功！");
                clearInterval(settime);

            }else if(request=="wait"){
                console.log("正在付费")

            }else{
                console.log("支付失败！");
                  var settime=setInterval(fn,20000);
            }
            // $(".error").css("display","block");
        }*/

    });
    

   });
$(".success_x").on("touchstart",function () {
    $(".success").hide();
});
$(".fail_x").on("touchstart",function () {
    $(".fail").hide();
});
$(".being_x").on("touchstart",function () {
    $(".being_paid").hide();
});






