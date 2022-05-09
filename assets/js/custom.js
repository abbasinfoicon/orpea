/*==
custom-jquery index
01. Slides Slideplay
02. catMenu-slider
==*/


/*=====================================================================
==========================  Slides Slideplay  =========================
========================================================================*/
/*if ($(".slide-play").length) {
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    var playing = true;
    var pauseButton = document.getElementById('pause');

    function pauseSlideshow() {
        pauseButton.innerHTML = '<i class="fa fa-play"></i>';
        playing = false;
        clearInterval(slideInterval);
    }

    function playSlideshow() {
        pauseButton.innerHTML = '<i class="fa fa-pause"></i>';
        playing = true;
        slideInterval = setInterval(nextSlide, 2000);
    }

    pauseButton.onclick = function () {
        if (playing) {
            pauseSlideshow();
        } else {
            playSlideshow();
        }
    };
}*/


/*=====================================================================
==========================  catMenu-slider  =========================
========================================================================*/
$('#catMenu-slider').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<img src='assets/img/left-yellow.png' class='right-cirle-icon'>", "<img src='assets/img/right-yellow.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 4
        },
        1265: {
            items: 5
        }
    }
});


/*=====================================================================
==========================  home-slider  =========================
========================================================================*/

$('.controls .fa').click(function () {
    $(this).addClass("hide").siblings().removeClass('hide');
});


var owl = $('#home-slider');
owl.owlCarousel({
    autoplay: true,
    lazyLoad: true,
    items: 1,
    nav: false,
    loop: true,
    autoplayHoverPause: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
});

$('.fa-play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000]);
    console.log('play');
})
$('.fa-pause').on('click', function () {
    owl.trigger('stop.owl.autoplay');
    console.log('stop');
});


/*=====================================================================
==========================  online-carousel  =========================
========================================================================*/
$('#online-carousel').owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<img src='assets/img/left-circle.png' class='right-cirle-icon'>", "<img src='assets/img/right-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    items: 1
});


/*=====================================================================
========================== Menu-owl carousel =========================
========================================================================*/
$('#menu-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 6000,
    smartSpeed: 700,
    nav: true,
    navText: ["<img src='assets/img/mega-left-circle.png' class='right-cirle-icon'>", "<img src='assets/img/mega-right-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    items: 1
});


/*=====================================================================
========================== product-carousel Owl Carousel  =========================
========================================================================*/
$('#product-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    nav: true,
    navText: ["<img src='assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        525: {
            items: 2
        },
        951: {
            items: 3
        },
        1265: {
            items: 4
        }
    }
});


/*=====================================================================
========================== Testimonials-user  =========================
========================================================================*/
$('#testimonials').owlCarousel({
    loop: true,
    rewind: true,
    autoplay: true,
    margin: 19,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
});


/*=====================================================================
========================== product-carousel Owl Carousel  =========================
========================================================================*/
$('#product-three').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    nav: true,
    navText: ["<img src='assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 2
        },
        1265: {
            items: 3
        }
    }
});


/*=====================================================================
========================== product-carousel Owl Carousel  =========================
========================================================================*/
$('#product-four').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    nav: true,
    navText: ["<img src='assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 2
        },
        1265: {
            items: 3
        }
    }
});


/*=====================================================================
========================== product-carousel2 Owl Carousel  =========================
========================================================================*/
$('#product-carousel2').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    nav: true,
    navText: ["<img src='assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 3
        },
        1265: {
            items: 4
        }
    }
});


/*=====================================================================
========================== explorer-carousel Owl Carousel  =========================
========================================================================*/
$('#explorer-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 8000,
    smartSpeed: 900,
    nav: true,
    navText: ["<img src='assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        414: {
            items: 2
        },
        700: {
            items: 3
        },
        951: {
            items: 4
        },
        1265: {
            items: 6
        }
    }
});


/*=====================================================================
========================== foucs-addClass  =========================
========================================================================*/

$("#search").focus(function () {
    $('input[type="submit"]').css('background-color', 'rgb(252, 103, 2)');
    $('input[name="search"]').removeClass('colorChange');
    $('.rechercher').addClass('opS');
    $('#searchResult').addClass('show');

}).blur(function () {
    $('input[type="submit"]').css('background-color', 'transparent');
    $('input[name="search"]').addClass('colorChange');
    $('label[for="search"]').css('opcity', 'none');
    $('#searchResult').removeClass('show');
});

/*=====================================================================
========================== OTP 4 DIGIT NO  =========================
========================================================================*/

$('.otp4no').keypress(function (e) {
    var arr = [];
    var kk = e.which;

    for (i = 48; i < 58; i++)
        arr.push(i);

    if (!(arr.indexOf(kk) >= 0))
        e.preventDefault();
});

/*=====================================================================
========================== Toltips Custom  =========================
========================================================================*/

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/*$(".fa-question-circle").click(function () {
    $(this).next('.toptip-hover').toggleClass('show');
});

$(".close-toltip").click(function () {
    $(this).parents('.toptip-hover').removeClass('show');
});

$(document).on('click', (e) => {
    console.log('id...', e.target.id);
    if (e.target.id != 'toltip-show-id' && e.target.id != 'icon-que' && e.target.id != 'p-id') {
        $("#toltip-show-id").removeClass('show');

        console.log('id', e.target.id);
        //console.log('class',e.target.class);
    }

});*/

$('.toltip').mouseenter(function () {
    $(this).addClass('arrow-bottom');
    $(this).next('.tooltip-custom').css('display', 'block');
});

$('.toltip').mouseleave(function () {
    $(this).removeClass('arrow-bottom');
    $(this).next('.tooltip-custom').css('display', 'none');
});


/*=====================================================================
========================== right-social icon  =========================
========================================================================*/
$(".right-sideIcon .fa-angle-double-left").click(function () {
    $(".right-sideIcon").toggleClass("slide");
    $(this).toggleClass("fa-angle-double-right");
});


/*=====================================================================
========================== Mega MENU  =========================
========================================================================*/
$(document).ready(function () {
    $(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation()
    })
});

// dropdown-menu?

(function ($) {
    $(document).ready(function () {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });
})(jQuery);


/*=====================================================================
========================== Mega MENU  =========================
========================================================================*/

/*if ($(window).width() < 767) {
    $('.catMenu-slider .category-list').addClass('dropdown-menu');
} else {
    $('.catMenu-slider .category-list').removeClass('dropdown-menu');
}*/


/*=====================================================================
========================== equal-height  =========================
========================================================================*/
$(document).ready(function () {
    $('.owl-carousel').each(function () {
        var highestBox = 0;

        $(this).find('.card-body').each(function () {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });

        $(this).find('.card-body').height(highestBox);
    });
});

// sous-categorie->card-body equal height
$(document).ready(function () {
    $('.sous-categorie').each(function () {
        var highestBox = 0;

        $(this).find('.card-body').each(function () {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });

        $(this).find('.card-body').height(highestBox);
    });
});


/*=====================================================================
========================== Product-Slider-with-zoom  =========================
========================================================================*/
$(document).ready(function () {
    var bigimage = $(".big");
    var thumbs = $("#thumbs");
    var bigPopup = $("#big-popup");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<img src="assets/img/left-yellow-circle.png" class="right-cirle-icon">',
                '<img src="assets/img/right-yellow-circle.png" class="right-cirle-icon">'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 3,
            dots: true,
            nav: true,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 3,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
});


/*=====================================================================
==========================  Middle-Office-Factures-Toggle  =========================
========================================================================*/
$(function () {
    $(".detail-facture").on("click", function () {
        $(this).siblings().not().next().removeClass('open').prev().removeClass('open');
        $(this).toggleClass("open").next(".detail-facture-show").toggleClass("open");

        if ($(!this).hasClass('open')) {
            $(this).next(".detail-facture-show").removeClass("open");
        }
    });

    $(".close-tr").on("click", function () {
        $(".detail-facture").removeClass("open").next(".detail-facture-show").addClass('close-animation');

        /* $(".detail-facture-show").delay(500).removeClass("open").removeClass('close-animation');*/

        setTimeout(function () {
            $(".detail-facture-show").removeClass("open").removeClass('close-animation');
        }, 500);

    });
});


/*=====================================================================
==========================  File Upload Image  =========================
========================================================================*/

$(".img-close").click(function () {
    $(this).parent(".imgTitle-show").remove();
});


$(function () {
    $('.file-input').on('change', function (e) {
        var file = this.files[0];
        $('#file-list-' + $(this).data('id')).append('<span class="imgTitle-show"><img src="assets/img/close-red-small.jpg" class="img-close">' + file.name + '</span>')
    });


    $('.file-input-button').on('click', function (e) {
        $('#file-input-' + $(this).data('id')).trigger('click');
    });


    $(".onClick").click(function () {
        $(this).addClass('show');
    });

    $('input[id="variable"]').blur(function () {
        if (!$(this).val()) {
            $(".onClick").addClass('show');
        }
    });

    $('input[id="variable"]').focus(function () {
        $(".onClick").removeClass('show');
    });
});


/*=====================================================================
==========================  datefilter  =========================
========================================================================*/
$(function () {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        //showDropdowns: true,
        monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],

        locale: {
            cancelLabel: 'ANNULER',
            applyLabel: 'VALIDER'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

});


/*=====================================================================
==========================  end=-atefilter  =========================
========================================================================*/


/*=====================================================================
==========================  DatePicker  =========================
========================================================================*/
$(function () {
    $("#datepicker").datepicker({
        dateFormat: "dd / mm / yy"
        , duration: "fast"
    });


    // datefilter
    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

    // datefilter
});

// end-datepicker


var date = document.getElementById('datepicker');

function checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
    }
    ;
    return str;
};


date.addEventListener('input', function (e) {
    this.type = 'text';
    var input = this.value;
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
        return v.replace(/\D/g, '')
    });
    if (values[0]) values[0] = checkValue(values[0], 31);
    if (values[1]) values[1] = checkValue(values[1], 12);
    var output = values.map(function (v, i) {
        return v.length == 2 && i < 2 ? v + ' / ' : v;
    });
    this.value = output.join('').substr(0, 14);
});

date.addEventListener('blur', function (e) {
    this.type = 'text';
    var input = this.value;
    var values = input.split('/').map(function (v, i) {
        return v.replace(/\D/g, '')
    });
    var output = '';

    if (values.length == 3) {
        var year = values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
        var month = parseInt(values[0]) - 1;
        var day = parseInt(values[1]);
        var d = new Date(year, month, day);
        if (!isNaN(d)) {
            document.getElementById('result').innerText = d.toString();
            var dates = [d.getMonth() + 1, d.getDate(), d.getFullYear()];
            output = dates.map(function (v) {
                v = v.toString();
                return v.length == 1 ? '0' + v : v;
            }).join(' / ');
        }
        ;
    }
    ;
    this.value = output;
});

/*=====================================================================
==========================  End-DatePicker  =========================
========================================================================*/


