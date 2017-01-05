$(document).ready( function () {

    var body = $("html, body"),
        aboutOffset = $('.about-me').offset().top,
        workOffset = $('.how-i-work').offset().top,
        caseOffset = $('.case-studies').offset().top


    $('.arrow-more').on('click', function() {

        body.animate({ scrollTop: aboutOffset }, 600);
    })

    $('.link-1').on('click', function() {

        body.animate({ scrollTop: aboutOffset }, 600);
    })

    $('.link-2').on('click', function() {

        body.animate({ scrollTop: workOffset }, 600);
    })

    $('.link-3').on('click', function() {

        body.animate({ scrollTop: caseOffset }, 600);
    })



    $('.btn').on('click', function(){

        $('.footer').toggleClass('open')
        $(this).addClass('grow')
    })

    $('.btn').on('transitionend webkitTransitionEnd oTransitionEnd', function () {

        $(this).removeClass('grow')

    });


    $('.years-cont li').on('click', function() {

        var yearId = $(this).attr('id')
        var showYear = $('.' + yearId)

        console.log(showYear);

        $('.years-cont li').removeClass('active')
        $('.timeline .main-info ul.show').removeClass('show')
        $(this).addClass('active')
        showYear.addClass('show')

    })
})
