searchVisible = 0;
transparent = true;
var getContent = undefined;

$(document).ready(function(){
    /* Initialize Corner Button */
    $('#corner').hide();

    /* Corner Button on Click */
    $('#corner').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

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

/* Main Page Story Collapser*/
$(document).ready(function(){
    $('.is-collapsed').click(function(){
        getContent = this;
        $(getContent).removeClass('is-collapsed');
        $(getContent).find('.btn-dropdown').css({
            'display': 'none',
        });
    });

    $('.btn-collapse').click(function(){
        $(this).parent().find('.btn-dropdown').css({
            'display': 'block',
        });
        $(this).parent().css({
            'maxHeight': '300px',
            'overflow': 'hidden',
        });
    });


    $('#editor').wysiwyg();

    $('a[data-scroll="true"]').click(function(e){         
        var scroll_target = $(this).data('id');
        var scroll_trigger = $(this).data('scroll');
        
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $(scroll_target).offset().top - 50
        }, 700);
    });
});

/* Scroll Spy for Sidebar & Corner Button */
$(document).scroll(function(){
    if ( $(this).scrollTop() > 720 ) {
        $('#sidebar').addClass('is-fixed');
    }
    else {
        $('#sidebar').removeClass('is-fixed');
    }

    if ($(this).scrollTop() > 675) {
        $('#corner').fadeIn(300);
    }
    else {
        $('#corner').fadeOut(300);
    }
});
