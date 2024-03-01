$(document).ready(function(){
    $('button').click(function(){
        if($('input').val() == "leviosa"){
            $('button').animate({bottom: '200px'});
            $('button').animate({top: '0px'});
        }
        if($('input').val() == "robocatitio"){
            $(".car").slideToggle(500);
        }
        if($('input').val() == "amogus"){
            $(".amogus").slideToggle(500);
        }
        if($('input').val() == "transformio"){
            $(".car").attr("src","1f8.png");
        }
        if($('input').val() == "avada kedavra"){
            $("*").remove();
        }
        
    });
});