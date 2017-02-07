
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
    });
    //点击获取用户昵称和账单

    $(".account_submit").on("touchstart",function () {
        var name=$(".account_name").val();
        var password=$(".account_password").val();
        //console.log(name,password)
        document.cookie="userName="+name;
        document.cookie="userPassword="+password;
        //console.log(document.cookie)
        //设置cookie保存时间
        function setCookie(userName,userPassword) {
            var Days = 30; //cookie 将被保存两个月
            var exp = new Date(); //获得当前时间
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //换成毫秒
            document.cookie = userName + "=" + escape(userPassword) + ";expires=" + exp.toGMTString();
        }
        //设置时间

    })

    /*$("#account_submit").on('touchstart',function () {
        var name=$(".account_name").val();



       function addCookie(name,password,days,path){   /!**添加设置cookie**!/
            var expires = new Date();
            var Days=30;

            expires.setTime(expires.getTime() + days * 3600000 * 24);

            //path=/，表示cookie能在整个网站下使用，path=/temp，表示cookie只能在temp目录下使用
            path = path == "" path=/"" : ";path=" + path;

            //GMT(Greenwich Mean Time)是格林尼治平时，现在的标准时间，协调世界时是UTC
            //参数days只能是数字型

            var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();
            document.cookie = name + "=" + value + _expires + path;
        }
    })*/

})
