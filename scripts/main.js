    var a = $('nav').offset().top;

    $(document).scroll(function () {
        if ($(this).scrollTop() > a) {
            $('nav').addClass('scroll');
            $('#logo').hide();
            $('#btn-top').addClass('btn-show');
        } else {
            $('nav').removeClass('scroll')
            $('#logo').show();
            $('#btn-top').removeClass('btn-show');
        }
    });




    $(document).ready(function () {
        $('.menu-btn').click(function () {
            $('.responsive-menu').toggleClass('expand')
        })
    })

    $(document).ready(function () {
        $('a').click(function () {
            $('.responsive-menu').toggleClass('expand')
        })
    })

    $(document).ready(function () {
        $('#btn-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        })
    })

    $(document).on('ready', function () {
        $(".slider").slick({
            /*dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3*/
            /*centerMode: true,*/
            /*dots: true,*/
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
        });
    });

    function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(53.3473506, 14.8974567),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.roadmap
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
