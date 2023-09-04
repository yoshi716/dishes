$(document).ready(function(){

    var s1 = $('#sp1');
    var s2 = $('#sp2');

    var ul1 = $('#ul1');
    var ul2 = $('#ul2');

    $(s1).click(function(){
        if($(ul1).hasClass('open')){
            $(ul1).removeClass("open").slideDown();
        }else{
            $(ul1).addClass('open').slideUp();
        }
    });

    $(s2).click(function(){
        if($(ul2).hasClass('open')){
            $(ul2).removeClass("open").slideDown();
        }else{
            $(ul2).addClass('open').slideUp();
        }
    });
});
