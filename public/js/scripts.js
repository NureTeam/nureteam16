
(function($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/

    var preloader = $('#preloader');
    $(window).on('load', function() {
        preloader.fadeOut('slow', function() { $(this).remove(); });
    });

    /*================================
    sidebar collapsing
    ==================================*/
    $('.nav-btn').on('click', function() {
        $('.page-container').toggleClass('sbar_collapsed');
    });

    /*================================
    Start Footer resizer
    ==================================*/
    var e = function() {
        var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 5;
        (e -= 67) < 1 && (e = 1), e > 67 && $(".main-content").css("min-height", e + "px")
    };
    $(window).ready(e), $(window).on("resize", e);

    /*================================
    sidebar menu
    ==================================*/
    $("#menu").metisMenu();

    /*================================
    slimscroll activation
    ==================================*/
    $('.menu-inner').slimScroll({
        height: 'auto'
    });
    $('.nofity-list').slimScroll({
        height: '435px'
    });
    $('.timeline-area').slimScroll({
        height: '500px'
    });
    $('.recent-activity').slimScroll({
        height: 'calc(100vh - 114px)'
    });
    $('.settings-list').slimScroll({
        height: 'calc(100vh - 158px)'
    });
    $('.card-body .nofity-list').slimScroll({
        height: '580px'
    });

    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();

        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky-menu");
        } else {
            $("#sticky-header").removeClass("sticky-menu");
        }
    });

    /*================================
    form bootstrap validation
    ==================================*/
    $('[data-toggle="popover"]').popover()

    /*------------- Start form Validation -------------*/
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /*================================
    datatable active
    ==================================*/
    if ($('#dataTable').length) {
        $('#dataTable').DataTable({
            responsive: true
        });
    }
    if ($('#dataTable2').length) {
        $('#dataTable2').DataTable({
            responsive: true
        });
    }
    if ($('#dataTable3').length) {
        $('#dataTable3').DataTable({
            responsive: true
        });
    }


    /*================================
    Slicknav mobile menu
    ==================================*/
    $('ul#nav_menu').slicknav({
        prependTo: "#mobile_menu"
    });

    /*================================
    login form
    ==================================*/
    $('.form-gp input').on('focus', function() {
        $(this).parent('.form-gp').addClass('focused');
    });


    $(window).load(function() {
        $('.form-gp input').each(function () {
            if ($(this).val().length > 0) {
                $(this).parent('.form-gp').addClass('focused');
            }
        });
    });

    $('.form-gp input').on('focusout', function() {
        if ($(this).val().length === 0) {
            $(this).parent('.form-gp').removeClass('focused');
        }
    });

    /*================================
    slider-area background setting
    ==================================*/
    $('.settings-btn, .offset-close').on('click', function() {
        $('.offset-area').toggleClass('show_hide');
        $('.settings-btn').toggleClass('active');
    });

    /*================================
    Owl Carousel
    ==================================*/
    function slider_area() {
        var owl = $('.testimonial-carousel').owlCarousel({
            margin: 50,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1360: {
                    items: 1
                },
                1600: {
                    items: 2
                }
            }
        });
    }
    slider_area();

    /*================================
    Fullscreen Page
    ==================================*/

    if ($('#full-view').length) {

        var requestFullscreen = function(ele) {
            if (ele.requestFullscreen) {
                ele.requestFullscreen();
            } else if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen();
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen();
            } else if (ele.msRequestFullscreen) {
                ele.msRequestFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var exitFullscreen = function() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var fsDocButton = document.getElementById('full-view');
        var fsExitDocButton = document.getElementById('full-view-exit');

        fsDocButton.addEventListener('click', function(e) {
            e.preventDefault();
            requestFullscreen(document.documentElement);
            $('body').addClass('expanded');
        });

        fsExitDocButton.addEventListener('click', function(e) {
            e.preventDefault();
            exitFullscreen();
            $('body').removeClass('expanded');
        });
    }



    //CUSTOM*******************************************************
//start phone select
    $("#phone").intlTelInput({
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/14.0.1/js/utils.js',
	    nationalMode: false,
        separateDialCode: true,
        autoPlaceholder:'aggressive',
        initialCountry: "auto",
        geoIpLookup: function(success, failure) {
            $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
        },
     });

    $("#phone").on('keyup change countrychange keypress paste cut', function (){
        if ($.trim($(this).val())) {
            if ($(this).intlTelInput("isValidNumber")) {
                $(this).addClass('is-valid');
                $(this).removeClass('is-invalid');
            } else {
                $(this).removeClass('is-valid');
            }
        }
        if($(this).val() != ''){
            $("#phoneHidden").val($(this).intlTelInput("getNumber"));
        }else{
            $("#phoneHidden").val('');
        }

    });

    $("#phone").on('blur focusout', function (){
        if ($.trim($(this).val())) {
            if ($(this).intlTelInput("isValidNumber")) {
                $(this).addClass('is-valid');
                $(this).removeClass('is-invalid');
            } else {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
            }
        }
    });
    //end phone select

//country select
  $("#country").countrySelect({
      initialCountry: "auto",
      geoIpLookup: function(success, failure) {
          $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              success(countryCode);
          });
      },
      excludeCountries: ['us', 'sg']
  });


    //initialise toolflip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    //copy button
    $('.copy').on('click', function(){
        $('.text-for-copy').select();
        document.execCommand("copy");
        $(this).attr('data-original-title', $(this).data('copied')).tooltip('show');
    });

    //start license modal
    $('#license').on('click', function(e) {
        e.preventDefault();
        $('#license_modal').modal('show');
        return false;
    });

    $('#accept_license').on('click', function(e) {
        e.preventDefault();
        $('#license').prop('checked', true);
        $('#license_modal').modal('hide');
    });

    $('#license_modal .modal-body').scroll(function()
    {
        if( this.scrollTop >= this.scrollHeight - this.clientHeight ) {
            $('#accept_license').prop("disabled", false);
            $('.r-to-con').addClass('invisible');
        }
    });
    //end license modal


    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });


})(jQuery);

//Custom countdowntimer

function startTimerSwal(duration, display)
{
    let timer = downtimer(duration, display);
    if(timer < 0){return false;}
    setTimeout(function (){ startTimerSwal(timer, display) }, 1000);
}

function downtimer(timer, display) {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(minutes);
    console.log(seconds);

    Swal.getContent().querySelector(display).textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        Swal.getContent().querySelector('#swal2-content').remove();
    }

    return timer;
}







