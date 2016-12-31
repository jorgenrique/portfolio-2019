$(document).ready( function () {

    $('.btn').on('click', function(){

        $('.footer').toggleClass('open')
        $(this).addClass('grow')
    })

    $('.btn').on('transitionend webkitTransitionEnd oTransitionEnd', function () {

        $(this).removeClass('grow')

    });

})
