(function ($) {

    "use strict";

    /* document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }); */


    /* $(document).ready(function() {
        if (window.location.hash)
            scroll(0, 0);
        setTimeout(function () {
            scroll(0, 0);
        }, 1);
        
        
        if (window.matchMedia("(min-width: 1191px)").matches) {
            $(function () {
                var hashLoc = window.location.hash;
                if (hashLoc) {
                    if (hashLoc == "#secAbout") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 130 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secChairman") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top + 350 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secCeo") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 70 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secFeatures") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 70 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secReport") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top + 20 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secDownload") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 50 + 'px'
                        }, 800, );
                    }
                }
            });
        }

        else if (window.matchMedia("(max-width: 576px)").matches) {
            $(function () {
                var hashLoc = window.location.hash;
                if (hashLoc) {
                    if (hashLoc == "#secAbout") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 50 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secChairman") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top + 120 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secCeo") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 50 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secFeatures") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 50 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secReport") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top + 20 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secDownload") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 60 + 'px'
                        }, 800, );
                    }
                }
            });
        }

        else {
            $(function () {
                var hashLoc = window.location.hash;
                if (hashLoc) {
                    if (hashLoc == "#secAbout") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 130 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secChairman") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top + 180 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secCeo") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 70 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secFeatures") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 70 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secReport") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top + 20 + 'px'
                        }, 800, );
                    } else if (hashLoc == "#secDownload") {
                        $('html,body').animate({
                            scrollTop: $(window.location.hash).offset().top - 50 + 'px'
                        }, 800, );
                    }
                }
            });
        }

        
        
    }); */


    $( document ).ready(function() {
        $('a.nav-link').click(function(){
            $('.navbar-collapse').collapse('hide');
        });
    });   

    function mediaSize() {
        if (window.matchMedia("screen and (min-width: 576px) and (max-width: 1191px)").matches) {

            $('a.nav-link.link-1').click(function () {
                console.log("max-width: 1191px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 110
                }, 800);
                return false;
            });
            $('a.nav-link.link-2').click(function () {
                console.log("max-width: 1191px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, 800);
                return false;
            });
            $('a.nav-link.link-3').click(function () {
                console.log("max-width: 1191px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 150
                }, 800);
                return false;
            });
            $('a.nav-link.link-4').click(function () {
                console.log("max-width: 1191px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, 800);
                return false;
            });
            $('a.nav-link.link-5').click(function () {
                console.log("max-width: 1191px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 60
                }, 800);
                return false;
            });
            $('a.nav-link.link-6').click(function () {
                console.log("max-width: 1191px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 50
                }, 800);
                return false;
            });

        } 
        else if (window.matchMedia("screen and (max-width: 575.98px)").matches) {

            $('.navbar-nav>li>a').on('click', function () {
                setTimeout(function () {
                    $('.navbar-collapse').collapse('hide');
                }, 100);
            });

            $('a.nav-link.link-1').click(function () {
                console.log("max-width: 576px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 60
                }, 800);
            });
            $('a.nav-link.link-2').click(function () {
                console.log("max-width: 576px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 50
                }, 800);
            });
            $('a.nav-link.link-3').click(function () {
                console.log("max-width: 576px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 120
                }, 800);
            });
            $('a.nav-link.link-4').click(function () {
                console.log("max-width: 576px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 50
                }, 800);
            });
            $('a.nav-link.link-5').click(function () {
                console.log("max-width: 576px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 70
                }, 800);
            });
            $('a.nav-link.link-6').click(function () {
                console.log("max-width: 576px");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 70
                }, 800);
            });
        } 
        else {

            $('.navbar-nav>li>a').on('click', function () {
                setTimeout(function () {
                    $('.navbar-collapse').collapse('hide');
                }, 100);
            });

            $('a.nav-link.link-1').click(function () {
                console.log("max-width: else");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 110
                }, 800);
            });
            $('a.nav-link.link-2').click(function () {
                console.log("max-width: else");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top 
                }, 800);
            });
            $('a.nav-link.link-3').click(function () {
                console.log("max-width: else");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 150
                }, 800);
            });
            $('a.nav-link.link-4').click(function () {
                console.log("max-width: else");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top 
                }, 800);
            });
            $('a.nav-link.link-5').click(function () {
                console.log("max-width: else");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top - 60
                }, 800);
            });
            $('a.nav-link.link-6').click(function () {
                console.log("max-width: else");
                $('html, body').stop(true, false).animate({
                    scrollTop: $($(this).attr('href')).offset().top  
                }, 800);
            });
        }
    }

    mediaSize();
    window.addEventListener("resize", mediaSize, false);






})(jQuery);
