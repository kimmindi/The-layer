$(function () {
    $('.magazine .mright li').mouseenter(function () {
        $('.magazine .mright li').removeClass('on')
        $(this).addClass('on')
        let idx = $(this).index()
        $('.afterimg div').hide()
        $('.afterimg div').eq(idx).fadeIn()
    })
    $('.magazine .mright li').eq(0).trigger('mouseenter')
    //li에 마우스 엔터하면

    $('.menu .depth1').mouseenter(function () {
        $('.depth2').removeClass('on')
        $(this).find('.depth2').addClass('on')
    })
    $('.depth2').mouseleave(function () {
        $('.depth2').removeClass('on')
    })

    $('.fwrap .sss').click(function () {
        $(this).next('.none').toggleClass('slide')

        $('.sss img').toggleClass('on')
    })

    // 스크롤하면 북들이 순차적으로 나옴 animate로 1 2는 시간차 잇고
    //345는 비슷하거나 같게 한번만
    $(window).scroll(function () {
        let of = $('.section4').offset().top - 800
        if (of <= $(window).scrollTop()) {
            $('.book').addClass('on')
        }

    })

    $(window).scroll(function () {
        let scroll = $(window).scrollTop()
        let footer = $('footer').offset().top - 1000

        if ($('.magazine').offset().top <= $(this).scrollTop()) {
            if (footer <= $(this).scrollTop()) {
                $('.gotop').fadeOut()
            } else {
                $('.gotop').fadeIn()
            }
        } else {
            $('.gotop').fadeOut()

        }

    })
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html,body').animate({
            scrollTop : 0
        },700)

    })
})