/**
 * Created by Administrator on 2017/1/17 0017.
 */
$(function () {
    var msg=document.getElementById("payment_input02")
    function fn() {
        var msg = sessionStorage.getItem("data");
        console.log(msg)
        if(msg){
            $(".payment_input02").val(msg)
        }
    }(fn())

//ajax数据提交
    $(".payment_button").on("touchstart",function () {
        var fName = $(".payment_input").val();
        var uName = $(".payment_input02").val();
        console.log(fName,uName)
        $.ajax({
            type:"post",
            url:"http://192.168.199.178:8080/mnoooVideo/pay/video",//支付请求地址
            timeout:320,
            dataType:"json",//返回数据格式
            jsonpCallback:"json",
            data: {
                fName: fName,
                uName:uName
            },
            success:function (request) {//支付成功后返回的数据处理
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

    $(".success_p01").on("touchstart",function () {
        $(".success").css("display","none");
    })

    $(".error_p01").on("touchstart",function () {
        $(".error").css("display","none");
    })

})


