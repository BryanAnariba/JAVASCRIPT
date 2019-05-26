$(document).ready(function(){
    console.log("Programar aqui");
    //MODIFICAR EL BANNER O ACCEDER A LA PROPIEDAD PARA EL ALTO DE LA IMAGEN va a ser al alto del navegador
    $('#banner').css({"height":$(window).height() + "px"});

    //CREANDO LA MAGIA DEL SCROLL
    var flag = false;
    var scroll;

    //FUNCTION SCROLL , cada ves que se haga scroll en la ventada del navegador se ejecute
    $(window).scroll(function(){
        //la variable almacena en px todo lo que se scrolee en mouse
        scroll = $(window).scrollTop();
        if(scroll > 200){//si al dar scroll se mueve mas de 200px se encoje el logo y sube arriba
            if(!flag){
                $("#logo").css({"margin-top":"-5px","width":"50px","height":"50px"});
                $("header").css({"background-color":"#3C3C3C"});
                flag = true;
            }
        }else{
            if(flag){
                $("#logo").css({"margin-top":"150px","width":"200px","height":"200px"});
                $("header").css({"background-color":"transparent"});
                flag = false;
            }
        }
    });
});