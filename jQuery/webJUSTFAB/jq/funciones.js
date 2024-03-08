
$(document).ready(function () {
    $("#volverarriba").on("click", function () {
        $("html").animate({ scrollTop: 0 }, "slow");
    });

    $("ul#menu").css("display", "none");
    $("header#top > div > nav#menu-principal > span").on({
        click: function () {
            $("ul#menu").stop(true, true).toggle(500);
        }
    });

    $("ul#menu > li").on({
        click: function () {
            $("ul#menu > li").find("span").css({
                transform: "rotate(0deg)",
                transition: "transform 0.3s ease"
            })

            $(this).siblings().children("ul").slideUp(500);

            if ($(this).children("#ul").is(":hidden")) {
                $(this).children("ul").slideDown(500);
                $(this).find("span").css({
                    transform: "rotate(180deg)",
                    transition: "transform 0.3s ease"
                });
            } else {
                $(this).children("ul").slideUp(500);
                $(this).find("span").css("transform", "rotate(0deg)");
            }
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 4) {
            $("#volverarriba").delay("slow").show(500)

            $("header#top").css({
                position: "fixed",
                opacity: "90%",
                width: "100%",
                backgroundColor: "white"
            })
        } else {
            $("#volverarriba").delay("slow").hide()

            $("header#top").css({
                position: "",
                opacity: "",
                width: ""
            })
        }
    });

    $("article.item img").on({
        mouseenter: function () {
            $(this).stop(true, true).delay(1000).queue(function () {
                $(this).attr("src", $(this).attr("src").replace(".jpg", "-1.jpg"));
            });
        }, mouseleave: function () {
            $(this).stop(true, true).attr("src", $(this).attr("src").replace("-1.jpg", ".jpg"));
        }
    });

    $("#menu-principal > span").on("click", function () {

        $("ul#menu").stop(true, false).animate({ "left": "0rem" }, "slow");
        $("#desplazarContenido").stop(true, false).animate({ "left": "18rem" }, "slow");
        $("div#oscurecer").stop(true, false).fadeIn(400);
    });

    $("div#oscurecer").on("click", function () {
        $("ul#menu").stop(true, false).animate({ "left": "-18rem" }, "slow");
        $("#desplazarContenido").stop(true, false).animate({ "left": "0rem" }, "slow");
        $("#oscurecer").stop(true, false).fadeOut(400);
    });

    $("article.item").hover(
        function () {
            $(this).find("span.comprar").fadeIn(300);
        },
        function () {
            $(this).find("span.comprar").fadeOut(300);
        }
    );

    // Slider

    var SliderModule = (function () {
        var pb = {};
        pb.elslider = $("#slider");

        pb.items = {
            panels: pb.elslider.find(".slider-wrapper > li"),
        }

        var SliderInterval, currentSlider = 0, nextSlider = 1, lengthSlider = pb.items.panels.length, imgPause = false;

        pb.init = function (settings) {
            var loscontroles = '';
            this.settings = settings || { duration: 1000 }

            SliderInit();

            for (let i = 0; i < lengthSlider; i++) {
                if (i == 0) {
                    loscontroles += '<li class="active"></li>';
                } else {
                    loscontroles += '<li></li>';
                }
            }

            $('#control-buttons').html(loscontroles);

            $('#control-buttons > li').click(function () {
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
                }
            })
        }

        var SliderInit = function () {
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        pb.startSlider = function () {
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controles.removeClass('active');
            controles.eq(nextSlider).addClass('active');

            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

            currentSlider = nextSlider;
            nextSlider += 1;
        }

        var cambiarPanel = function (indice) {
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            controles.removeClass('active');
            controles.eq(indice).addClass('active');

            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(indice).fadeIn('slow');

            currentSlider = indice;
            nextSlider = indice + 1;

            SliderInit();
        }

        pb.elslider.on("mouseover", function () {
            imgPause = true;
            clearInterval(SliderInterval);
        });

        pb.elslider.on("mouseout", function () {
            imgPause = false;
            SliderInit();
        });

        $("#imgAnterior").click(function () {
            cambiarPanel(currentSlider - 1);
        });

        $("#imgSiguiente").click(function () {
            cambiarPanel(currentSlider + 1);
        });

        $("#control-buttons li").mouseenter(function () {
            $("#imgFondo").css("display", "flex");
            var colocarImg = $("ul.slider-wrapper > li > img.imgPaginasPromo").eq($(this).index()).attr("src");
            $("#imgFondo").html("<img src='" + colocarImg + "' alt='Fotos de fondo' width='100px'>");
        });

        $("#control-buttons li").mouseleave(function () {
            $("#imgFondo").css("display", "none");

        });

        return pb;
    }());

    // Llamada al constructor
    SliderModule.init();


})

