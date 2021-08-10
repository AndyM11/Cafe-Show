$(document).ready(()=>{
// Efecto menu.
    $(".menu a").each(function(index, elemento){
        $(this).css({
            "top": "-200px"
        });

        $(this).animate({
            top: "0"
        }, 2000 +  (index * 500));

    });

// Efecto header
    if($(window).width()> 800){
        $("header .textos").css({
            opacity: 0,
            marginTop: 0
        });

        $("header .textos").animate({
            opacity: 1,
            marginTop: "-52px"
        }, 1500);
    }

// Scroll Elementos menu
    let acercaDe = $("#acerca-de").offset().top,
        menu = $("#platillos").offset().top,
        galeria = $("#galeria").offset().top,
        ubicacion = $("#ubicacion").offset().top;

    //Acerca de
    $("#btn-acerca-de").on("click", (e)=>{
        e.preventDefault();
        $("html, body").animate({
            scrollTop: acercaDe -200
        }, 500);
    });
    //Menu
    $("#btn-menu").on("click", (e)=>{
        e.preventDefault();
        $("html, body").animate({
            scrollTop: menu
        }, 500);
    });
    //Galeria
    $("#btn-galeria").on("click", (e)=>{
        e.preventDefault();
        $("html, body").animate({
            scrollTop: galeria
        }, 500);
    });
    //Ubicacion
    $("#btn-ubicacion").on("click", (e)=>{
        e.preventDefault();
        $("html, body").animate({
            scrollTop: ubicacion
        }, 500);
    });

});