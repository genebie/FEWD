$('body').hide();
$(window).on('load', function(){
    $('body').fadeIn(2000);
});

$('h2').on('click', function(){
    $(this).animate({
        opacity: 0.25,
        paddingLeft: '20px',
    }, 400, function() {
        $('.speech').fadeTo(400, 0.50);
    });
});

$('#switcher-large').on('click', function(){
    $('p').css({
        'font-size': '2em',
    });
});

$('#switcher-small').on('click', function(){
    $('p').css({
        'font-size': '0.5em',
    });
});

$('#switcher-default').on('click', function(){
    $('p').css({
        'font-size': '1em',
    });
});