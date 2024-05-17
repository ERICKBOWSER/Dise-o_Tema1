$(document).ready(function(){

    $("#hamburger").on({
        click:function(){
            $(this).stop(false, true);
            $("#menu-toggle").stop(false, true);
            $("#hamburger > span:nth-child(2)").stop(false, true);
            $("#hamburger span").stop(false, true);

            if($("#menu-toggle").css("display") == "none"){
                $("#menu-toggle").slideDown();
                $("#hamburger > span:nth-child(2)").animate({
                    "width":"1.8rem",
                    "background-color":"red"
                }, 500)
            }else{
                $("#menu-toggle").slideUp();
                $("#hamburger > span:nth-child(2)").animate({
                    "width":"1.4rem",
                    "background-color":"black"
                })
            }

            $("#menu-toggle>li:nth-child(3)").click(function(){
                if($(this).children("ul").css("display") == "none"){
                    $(this).children("ul").css("display","block").animate({
                        "left":"0"
                    })

                    $(this).find("span").html("-")

                }else{
                    $(this).children("ul").fadeOut("fast");
                    $(this).find("span").html("+");
                }
            })

            $(window).on({
                "resize":function(){
                    $("#menu-toggle").removeAttr("style");
                    $("#hamburger").removeAttr("style");
                }
            })
           
        }
    });

    $("#barra-social").fadeIn("slow");
    $("#chat").fadeIn("slow");

    $("#header-chat1").on({
        click:function(){
            $("#header-chat2").stop(false, true);
            $("#window-chat").stop(false, true);

            $(this).slideUp();
            $("#header-chat2").slideDown();
            $("#window-chat").slideDown();
            
        }
    });

    $("#header-chat2 > span").click(function(){
        $("#header-chat2").slideUp();
        $("#window-chat").slideUp();
        $("#header-chat1").slideDown();
    });

    $(".producto").mouseenter(function(){
        $(this).find("a").css("display","flex");
    })

    $(".producto").mouseleave(function(){
        $(this).find("a").css("display","");
    })

    $(window).scroll(function(){
        $("#go-up").stop(false, true);
        $("#home-header").stop(false, true);

        if($(this).scrollTop() > 1){
            $("#go-up").fadeTo(500, 1);

            $("#home-header").css({
                "position":"fixed",
                "top":"0px",
                "width":"100%",
                "z-index":"1000",
                "opacity":".7"
            })
        }else{
            //$("#go-up").fadeTo(500, 1);
            $("#go-up").click(function(){
                $("html").animate({
                    scrollTop:0
                }, 500)
            })

            $("#home-header").animate({
                "position":"",
                "opacity":"1"
            })
        }
    })

    $("#nombre, email2, tlfno").mouseleave(function(){
        var error = $(this).siblings(".error-chat");

        if($(this).prop("required") && $(this).val().trim().length == 0){
            error.css("visibility","visible")
        }else{
            error.css("visibility","hidden")
        }

    })

    $("textarea").keyup(function(){
        var contador = $(this).val().length;
        if(contador < 100){
            var resto = 100- contador;
            $("#info-caracteres").html("Dispone de " + resto);
        }

    })

   



    /*
    $("#hamburger").on({
        "click":function(){
            $("#menu-toggle").stop(false, true);
            $("#hamburger > span:nth-child(2)").stop(false, true);
            $("#hamburger > span").stop(false, true);


            if($("#menu-toggle").css("display") == "none"){
                $("#menu-toggle").slideDown("slow");
                $("#hamburger > span").animate({"background-color":"#2bd3c6"}, "fast");
                $("#hamburger > span:nth-child(2)").animate({"width":"1.87rem"}, "fast");
            }else{
                $("#menu-toggle").slideUp();
                $("#hamburger > span:nth-child(2)").animate({"width":"1.37rem"});
                $("#hamburger > span").animate({"background-color":"black"}, "fast");
            }

            $("#menu-toggle > li:nth-child(3)").on("click", function(){
                if($(this).children("ul").css("display") == "none"){
                    $(this).children("ul").css("display", "block").animate({
                        "left":"0"
                    })

                    $(this).children("span").text("-");
                }else{
                    $(this).children("ul").animate({"left":"-50vw"}).fadeOut("fast");
                    $(this).children("span").text("+");
                }

                // Hacemos que al redimensionar la ventana se quiten los efectos
                $(window).on("resize", function(){
                    $("#menu-toggle").removeAttr("style");
                    $("#hamburger").removeAttr("style");
                });

                $("#menu-social").fadeOut(function(){
                    $("#menu-social > ul").children("li").fadeIn("slow")
                });
            })
        }
    });

    // Mostrar chat de ayuda
    $("#chat").fadeIn(700);
    $("#barra-social").fadeIn(700);

    // Mostrar chat
    $("#header-chat1").on({
        "click":function(){
            $(this).slideUp();
            $("#header-chat2").slideDown();
            $("#window-chat").slideDown();
        }
    })

    // Ocultar chat
    $("#header-chat2 > span").click(function(){
        $("#header-chat2").slideUp();
        $("#window-chat").slideUp();
        $("#header-chat1").slideUp();
    })

    // Comprar
    $(".producto").on({
        "mouseenter":function(){
            $(this).find("a").css("display", "flex");
        }
    })

    $(".producto").mouseleave(function(){
        $(this).find("a").css("display", "")
    })

    $(window).scroll(function(){
        $("#go-up").stop(false, true);
        if($(this).scrollTop() > 1){
            $("#go-up").fadeTo(500, 1);

            $("#home-header").css({
                "position":"fixed",
                "top":"0px",
                "width":"100%",
                "opacity":"0.8",
                "z-index":"2000"
            })
        }else{
            
            $("#go-up").click(function(){
                $("html").animate({
                    scrollTop:0
                }, "1000")
            })

            $("#home-header").css({
                "position":"",
                "opacity":"1"
            })
        }
    });

    $("#nombre, email2, tlfno").mouseleave(function(){
        var error=$(this).siblings(".error-chat");

        if($(this).prop("required") && $(this).val().trim().length == 0) {
                error.css("visibility","visible")
           
        }else{
            error.css("visibility", "hidden");
        }
    });

    

    $("textarea#mensaje").keyup(function(){
        var contador = $("textarea").val().length;
        if(contador < 100){
        var restantes = 100 - contador;
        $("#info-caracteres").html("Dispone de " + restantes + " carácteres.");
       }

    })
    */

})