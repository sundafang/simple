/**
 * Created by Administrator on 2017/1/17 0017.
 */
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

    $(".footer_li").on("touchstart",function () {
        var c=$(this).index();
        //console.log(c)
        if (c==1){
            $(".boc").css("display","block");
            $(".bomb_box").css("width","60%");
        }
    })

//上传数据缓存
    $(".cue_img").on("touchstart",function () {
        var a= $("input[name='sex']:checked").val();
        $(".payment_input02").val(a);
        console.log(a)

        if ($("input[name='sex']:checked").val()){
            sessionStorage.setItem("data",$("input[name='sex']:checked").val());
        }else{
            alert("失败");
        }
    })

    $(".cue_img01").on("touchstart",function () {
        var b= $("input[name='sex']:checked").val();
        $(".payment_input02").val(b);
        console.log(b)

        if (b){
            sessionStorage.setItem("data",b);
            //console.log("信息已保存到data字段中成功")
        }else{
            alert("失败");
        }
    })


    $(".type_lright").on("touchstart",function () {
        $(".boc").css("display","block");
        $(".bomb_box").css("width","60%");
    })

    $(".top_right").on("touchstart",function () {
        $(".boc").css("display","block");
        $(".bomb_box").css("width","60%");
    })


})


