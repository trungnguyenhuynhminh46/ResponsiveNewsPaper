$(document).ready(function(){
    // Responsive menu
    $('#nav-toggle').click(function(){
        $('#responsive-menu').slideToggle();
    })

    $(window).scroll(function(){
        $('#responsive-menu').slideUp();
    })

    $(window).resize(function(){
        $('#responsive-menu').slideUp();
    })
})