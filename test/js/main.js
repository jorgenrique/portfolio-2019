$(document).ready( function () {

    var body = $("html, body"),
        aboutOffset = $('.about-me').offset().top,
        workOffset = $('.how-i-work').offset().top,
        // caseOffset = $('.case-studies').offset().top,
        contactMe = $('.contact-me').offset().top,
        slideWidth = $('.how-i-work .slides-container').width(),
        slideElements = $('.how-i-work .slide'),
        slideGallery = $('.how-i-work .slide-gallery'),
        slideNumber = 1

    slideElements.css( 'width', slideWidth )
    slideGallery.css('width', ( ( slideWidth + 8 ) * slideElements.size() ) )

    $('.arrow-right').on('click', function() {

        if (slideNumber == 1) { $('.arrow-left').addClass('show') }

        slideNumber ++

        if ( slideNumber < slideElements.size() ) {

            slideGallery.css('marginLeft', ( - slideWidth * ( slideNumber - 1 ) ) )

        } else if ( slideNumber = slideElements.size() ) {

            $(this).removeClass('show')
            slideGallery.css('marginLeft', ( - slideWidth * ( slideNumber - 1 ) ) )
        }

        console.log(slideNumber)

    })


    $('.arrow-left').on('click', function() {

        if (slideNumber == slideElements.size() ) { $('.arrow-right').addClass('show') }

        slideNumber --

        if ( slideNumber > 1 ) {

            slideGallery.css('marginLeft', ( - slideWidth * ( slideNumber - 1 ) ) )

        } else if ( slideNumber = 1  ) {

            $(this).removeClass('show')
            slideGallery.css('marginLeft', ( - slideWidth * ( slideNumber - 1 ) ) )
        }

        console.log(slideNumber)
    })

    $('.arrow-more').on('click', function() {

        console.log(aboutOffset);

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

    $('.link-4').on('click', function() {

        body.animate({ scrollTop: contactMe }, 600);
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
