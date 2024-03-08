$(document).ready(function(){
    $("#nombre, #email").blur(function(){
        var error = $(this).siblings(".error")

        if($(this).val().trim().length === 0){
            error.css({"visibility" : "visible"})
        }else{
            error.css({"visibility" : "hidden"})
        }
    });

    $(".error").css({"visibility" : "hidden"})

    $("#areaTexto").on("input", function(){
        var contador = $(this).val().length;
        var resto = 100 - contador;

        $("#contArea").text(
            "Le queda " + resto + " carácteres."
        )
    })

    $( function() {
        $( "#datepicker" ).datepicker();
        $( "#datepicker" ).css({"background-color" : "rgb(174, 174, 174)"})
      } );

});