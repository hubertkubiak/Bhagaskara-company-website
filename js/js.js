/**
 * Created by Hubert on 2015-10-21.
 */
$(function () {

    var Application = function () {
        function bxslider() {
            $('.bxslider').bxSlider({
                adaptiveHeight: true
            });
        }

        function hamburger() {
            var ham = $(".hamburger");
            var menuhamburger = $(".menuhamburger");
            ham.on("click", function (event) {
                menuhamburger.toggleClass("unwind", 500);
            });
            var hamlinks = $(".ham a");
            hamlinks.on("click", function (event) {
                menuhamburger.addClass("unwind", 500);
            })
        }

        function scrollPage() {
            var navigationOpt = $(".navigation a");
            navigationOpt.on("click", function (event) {
                var hrefs = $(this).attr("href");
                $('html,body').animate({
                    scrollTop: $(hrefs).offset().top - 30
                }, 1000);
            });
            var menuOpt = $(".menu1 a");
            menuOpt.on("click", function (event) {
                var hrefs = $(this).attr("href");
                $('html,body').animate({
                    scrollTop: $(hrefs).offset().top - 10
                }, 600);
            });
            var scroll = $(".scroll");
            scroll.on("click", function (event) {
                $('html,body').animate({
                    scrollTop: $(".navbar").offset().top - 16
                }, 600);
            });
            var toTop = $(".totop");
            toTop.on("click", function (event) {
                $('html,body').animate({
                    scrollTop: $("#top").offset().top
                }, 500);
            });
        }

        function portfolioChoose() {
            var select = $(".select");
            var all = $(".all");
            var web = $(".web");
            var apps = $(".apps");
            var icon = $(".icon");
            var portfolioexample = $(".portfolioexample");
            var appim = $(".appim");
            var iconim = $(".iconim");
            var webim = $(".webim");
            var example4 = $(".example4");

            all.on("click", function (event) {
                portfolioexample.show(1000);
                all.addClass("selectactive");
                web.removeClass("selectactive");
                icon.removeClass("selectactive");
                apps.removeClass("selectactive");
            });
            web.on("click", function (event) {
                web.addClass("selectactive");
                all.removeClass("selectactive");
                icon.removeClass("selectactive");
                apps.removeClass("selectactive");
                webim.show(1000);
                appim.hide(1000);
                iconim.hide(1000);
                example4.hide(1000);

            });
            apps.on("click", function (event) {
                apps.addClass("selectactive");
                web.removeClass("selectactive");
                icon.removeClass("selectactive");
                all.removeClass("selectactive");
                appim.show(1000);
                webim.hide(1000);
                iconim.hide(1000);
                example4.hide(1000);
            });

            icon.on("click", function (event) {
                icon.addClass("selectactive");
                web.removeClass("selectactive");
                all.removeClass("selectactive");
                apps.removeClass("selectactive");
                iconim.show(1000);
                appim.hide(1000);
                webim.hide(1000);
                example4.hide(1000);
            });

        }

        function stickyMenu() {
            var menu = $(".navbar");
            var sections = $(".sec");
            var links = $(".navbar .menu a").not(document.getElementsByClassName("notblog"));
            var lastMenuPositionFromTop = 0;

            $(window).scroll(function (event) {
                if (menu.hasClass("sticky") === false &&
                    $(this).scrollTop() > menu.offset().top) {
                    lastMenuPositionFromTop = menu.offset().top;
                    menu.addClass("sticky");
                }
                if (menu.hasClass("sticky") &&
                    $(this).scrollTop() < lastMenuPositionFromTop) {
                    menu.removeClass("sticky");
                }
                sections.each(function (index) {
                    if (index + 1 >= sections.length) {
                        if (sections.eq(index).offset().top - 30 < $(window).scrollTop()) {
                            links.eq(index).addClass("active");
                        } else {
                            links.eq(index).removeClass("active");
                        }
                    } else {
                        if (sections.eq(index).offset().top - 30 < $(window).scrollTop() &&
                            sections.eq(index + 1).offset().top - 30 > $(window).scrollTop()) {
                            links.eq(index).addClass("active");
                        } else {
                            links.eq(index).removeClass("active");
                        }
                    }
                });

            });
        }

        function owlCar() {
            if ($(window).width() > 540) {
                $("#owl-demo").owlCarousel({
                    navigation: true,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    items: 3,
                    itemsDesktop: false,
                    itemsDesktopSmall: false,
                    itemsTablet: false,
                    itemsMobile: false
                })
            } else {
                $("#owl-demo").owlCarousel({
                    navigation: true,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    items: 1,
                    itemsDesktop: false,
                    itemsDesktopSmall: false,
                    itemsTablet: false,
                    itemsMobile: false
                })
            }
        }

        function displaySkills() {
            $(".skillSet1").show();
            $(".skillSet2").hide();
            $(".skillSet3").hide();
            $(".skillSet4").hide();
            $(".skillSet5").hide();

            $(".clickable1").on("click", function (event) {
                $(".skillSet1").show(2000);
                $(".skillSet2").hide(2000);
                $(".skillSet3").hide(2000);
                $(".skillSet4").hide(2000);
                $(".skillSet5").hide(2000);
            });
            $(".clickable2").on("click", function (event) {
                $(".skillSet1").hide(2000);
                $(".skillSet2").show(2000);
                $(".skillSet3").hide(2000);
                $(".skillSet4").hide(2000);
                $(".skillSet5").hide(2000);
            });
            $(".clickable3").on("click", function (event) {
                $(".skillSet1").hide(2000);
                $(".skillSet2").hide(2000);
                $(".skillSet3").show(2000);
                $(".skillSet4").hide(2000);
                $(".skillSet5").hide(2000);
            });
            $(".clickable4").on("click", function (event) {
                $(".skillSet1").hide(2000);
                $(".skillSet2").hide(2000);
                $(".skillSet3").hide(2000);
                $(".skillSet4").show(2000);
                $(".skillSet5").hide(2000);
            });
            $(".clickable5").on("click", function (event) {
                $(".skillSet1").hide(2000);
                $(".skillSet2").hide(2000);
                $(".skillSet3").hide(2000);
                $(".skillSet4").hide(2000);
                $(".skillSet5").show(2000);
            });
        }

        function fancy() {
            $(".fancybox-button").fancybox({
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: false,
                helpers: {
                    title: {
                        type: 'inside'
                    },
                    buttons: {}
                }
            });
        }
        return {
            scrollPage: scrollPage,
            stickyMenu: stickyMenu,
            portfolioChoose: portfolioChoose,
            bxslider: bxslider,
            owlCar: owlCar,
            displaySkills: displaySkills,
            hamburger: hamburger,
            fancy: fancy
        };
    };


    var app = new Application();
    app.scrollPage();
    app.stickyMenu();
    app.portfolioChoose();
    app.bxslider();
    app.owlCar();
    app.displaySkills();
    app.hamburger();
    app.fancy();
});