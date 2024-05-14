$(document).ready(function () {
    $("div#hamburger").on("click", function () {
        $("ul#menu-toggle").stop(false, true);
        $("div#hamburger > span:nth-child(2)").stop(false, true)
        $("div#hamburger > span").stop(false, true);

        if ($("ul#menu-toggle").css("display") == "none") {
            $("ul#menu-toggle").slideDown()
            $("div#hamburger > span").animate({ "background-color": "#2BD3C6" }, "fast");
            $("div#hamburger > span:nth-child(2)").animate({ "width": "1.87rem" }, "fast");
        } else {
            $("ul#menu-toggle").slideUp();

            $("#hamburger > span:nth-child(2)").animate({ "width": "1.37rem" });

            $("div#hamburger > span").animate({ "backgrond-color": "black" }, "fast");
        }

        $("ul#menu-toggle >li:nth-child(3)").on("click", function () {
            if ($(this).children("ul").css("display") == "none") {
                $(this).children("ul").css("display", "block").animate({
                    "left": "0"
                })
                $(this).children("span").text("-")
            } else {
                $(this).children("ul").animate({ "left": "-50vw" }).fadeOut("fast");
                $(this).children("span").text("+");
            }
        })

        $(window).on("resize", function () {
            $("#menu-toggle").removeAttr("style");
            $("#hamburger").removeAttr("style");
        });

        $("#menu-social > ul").fadeOut(function () {
            $("#menu-social > ul").children("li").fadeIn("slow")
        })
    });

    $("div#chat").fadeIn(700);
    $("nav#barra-social").fadeIn(700);

    $("#header-chat1").click(function(){
        $(this).slideUp();
        $("#header-chat2").slideDown();
        $("#window-chat").slideDown();
        
    });

    $("#header-chat2 > span").click(function(){
        $("#header-chat1").slideDown();
        $("#header-chat2").slideUp();
        $("#window-chat").slideUp();
    });

    $("article.producto").mouseenter(function(){
        $(this).find("a").css({
            "display" : "flex"
        })
    })

    $("article.producto").mouseleave(function(){
        $(this).find("a").css({
            "display": ""
        })
    });

    var subir = $("a#go-up");
    $(window).scroll(function(){
        if($(this).scrollTop() > 1){
            subir.stop(true).fadeTo(500, 1);
            $("header#home-header").css({
                "position":"fixed",
                "width":"100%",
                "opacity":"0.8",
                "z-index":"10000"
            })
        }else{
            subir.stop(true).fadeTo(500,0);
            $("header#home-header").css({
                "position":"",
                "width":"100%",
                "opacity":"1"
            })
        }
    });


    $("#nombre, email2, tlfno").blur(function(){
        var error = $(this).siblings(".error-chat");

        if($(this).val().trim().length === 0){
            error.css({"visibility" : "visible"});
        }else{
            error.css({"visibility" : "hidden"});
        }
    })

    $("textarea").on("input", function(){
        var contador = $(this).val().trim().length;
        var max = $(this).attr("maxlength");
        var resto = max - contador;
        $("span#info-caracteres").text("Disponde de " + resto  + " caracteres")
    })


})