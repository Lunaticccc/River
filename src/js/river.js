searchVisible = 0;
transparent = true;

$(document).ready(function(){
    /*      Activate the switches with icons      */
    $('.switch')['bootstrapSwitch']();
      
    /*      Activate regular switches        */
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    
    $('[data-toggle="search"]').click(function(){
        if(searchVisible == 0){
            searchVisible = 1;
            $(this).parent().addClass('active');
            $('.navbar-search-form').fadeIn(function(){
                $('.navbar-search-form input').focus();
            });
        } else {
            searchVisible = 0;
            $(this).parent().removeClass('active');
            $(this).blur();
            $('.navbar-search-form').fadeOut(function(){
                $('.navbar-search-form input').blur();
            });
        } 
    });
    
    $('[data-toggle="gsdk-collapse"]').hover(
    function(){
            var thisdiv = $(this).attr("data-target");

            if(!$(this).hasClass('state-open')){
                $(this).addClass('state-hover');                
                $(thisdiv).css({
                    'height':'30px'
                });    
            }
            
        },
        function(){
            var thisdiv = $(this).attr("data-target");
            $(this).removeClass('state-hover');
            
            if(!$(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px'
                });     
            }          
        }
    );
    
    $('[data-toggle="gsdk-collapse"]').click(
    function(event){
            event.preventDefault();
                        
            var thisdiv = $(this).attr("data-target");
            var height = $(thisdiv).children('.panel-body').height();
            
            if($(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px',
                }); 
                $(this).removeClass('state-open');    
            } else {
                $(thisdiv).css({
                    'height':height,
                }); 
                $(this).addClass('state-open');
            }
        }
    );
});

$(function () {
    $('[data-toggle="gsdk-collapse"]').each(function () {
        var thisdiv = $(this).attr("data-target");
        $(thisdiv).addClass("gsdk-collapse");
    });
    
});

/* Scoll Spy to Blur 

var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});
*/

/* Test User Gendar 
$(document).ready(function(){
    if (getUserGendar() == "male") {
        $('.isMale').show();
        $('.isFemale').hide();
    }
    else if (getUserGendar() == "female") {
        $('.isMale').hide();
        $('.isFemale').show();
    }
    else return false;
});
*/

/* Main Page Story Collapser*/
$(document).ready(function(){
    $('.is-collapsed').click(function(){
        var getContent = this;
        $(this).removeClass('is-collapsed');
        $('.btn-dropdown').css({
            'display': 'none',
        });
        $('.btn-collapse').css({
            'display': 'inline',
        })
    });

    $('#editor').wysiwyg();
});

/*
function collapse(){
    $('.btn-collapse').click(function(){
        $(this).parent().addClass('is-collapsed');
        $('.btn-dropdown').css({
            'display': 'inline',
        });
        $('.btn-collapse').css({
            'display': 'none',
        });
    });
}
*/

