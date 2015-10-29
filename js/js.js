/**
 * Created by Hubert on 2015-10-21.
 */
$(function(){

    var Application = function(){
        function init() {
            console.log("init");
        }
        function bxslider(){
            $('.bxslider').bxSlider({
                adaptiveHeight: true
            });
        }
        function scrollPage(){
            var navigationOpt = $(".navigation a");
            navigationOpt.on("click", function(event){
                var hrefs = $(this).attr("href");
                $('html,body').animate({
                    scrollTop:$(hrefs).offset().top-40
                }, 1000);
            });
            var menuOpt = $(".menu1 a");
            menuOpt.on("click", function(event){
                var hrefs = $(this).attr("href");
                $('html,body').animate({
                    scrollTop:$(hrefs).offset().top-2
                }, 600);
            });
            var scroll = $(".scroll");
            scroll.on("click", function(event){
                $('html,body').animate({
                    scrollTop:$(".navbar").offset().top-16
                }, 600);
            });
            var toTop = $(".totop");
            toTop.on("click", function(event){
                $('html,body').animate({
                    scrollTop:$("#top").offset().top
                }, 500);
            });
        }
        function portfolioChoose(){
            var select = $(".select");
            var all = $(".all");
            var web = $(".web");
            var apps = $(".apps");
            var icon = $(".icon");
            var portfolioexample = $(".portfolioexample");
            var appim = $(".appim");
            var iconim =$(".iconim");
            var webim = $(".webim");
            var example4 = $(".example4");

            all.on("click", function(event){
                portfolioexample.show(1000);
                all.addClass("selectactive");
                web.removeClass("selectactive");
                icon.removeClass("selectactive");
                apps.removeClass("selectactive");
            });
            web.on("click", function(event){
                web.addClass("selectactive");
                all.removeClass("selectactive");
                icon.removeClass("selectactive");
                apps.removeClass("selectactive");
                webim.show(1000);
                appim.hide(1000);
                iconim.hide(1000);
                example4.hide(1000);

            });
            apps.on("click", function(event){
                apps.addClass("selectactive");
                web.removeClass("selectactive");
                icon.removeClass("selectactive");
                all.removeClass("selectactive");
                appim.show(1000);
                webim.hide(1000);
                iconim.hide(1000);
                example4.hide(1000);
            });

            icon.on("click", function(event){
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
        function stickyMenu (){
            var menu = $(".navbar");
            var sections = $(".sec");
            var links = $(".navbar .menu a").not(document.getElementById("notblog"));
            var lastMenuPositionFromTop = 0;

            $(window).scroll(function(event){
                if( menu.hasClass("sticky") === false &&
                    $(this).scrollTop() > menu.offset().top){
                    lastMenuPositionFromTop = menu.offset().top;
                    menu.addClass("sticky");
                }
                if( menu.hasClass("sticky") &&
                    $(this).scrollTop() < lastMenuPositionFromTop) {
                    menu.removeClass("sticky");
                }
                sections.each(function(index){
                    if(index + 1 >= sections.length){
                        if( sections.eq(index).offset().top < $(window).scrollTop()){
                            links.eq(index).addClass("active");
                        }
                        else{
                            links.eq(index).removeClass("active");
                        }
                    }
                    else{
                        if( sections.eq(index).offset().top < $(window).scrollTop() &&
                            sections.eq(index + 1).offset().top > $(window).scrollTop()){
                            links.eq(index).addClass("active");
                        }
                        else{
                            links.eq(index).removeClass("active");
                        }
                    }
                });

            });
        }
        function owlCar () {
            $("#owl-demo").owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                items: 3,
                itemsDesktop:false,
                itemsDesktopSmall: false,
                itemsTablet:false,
                itemsMobile: false

            });
        }
        function displaySkills () {
            $(".skillSet1").show();
            $(".skillSet2").hide();
            $(".skillSet3").hide();
            $(".skillSet4").hide();
            $(".skillSet5").hide();

            $(".person1").on("click", function(event){
                $(".skillSet1").show(2000);
                $(".skillSet2").hide(2000);
                $(".skillSet3").hide(2000);
                $(".skillSet4").hide(2000);
                $(".skillSet5").hide(2000);
            });
            $(".person2").on("click", function(event){
                $(".skillSet1").hide(2000);
                $(".skillSet2").show(2000);
                $(".skillSet3").hide(2000);
                $(".skillSet4").hide(2000);
                $(".skillSet5").hide(2000);
            });
            $(".person3").on("click", function(event){
                $(".skillSet1").hide(2000);
                $(".skillSet2").hide(2000);
                $(".skillSet3").show(2000);
                $(".skillSet4").hide(2000);
                $(".skillSet5").hide(2000);
            });
            $(".person4").on("click", function(event){
                $(".skillSet1").hide(2000);
                $(".skillSet2").hide(2000);
                $(".skillSet3").hide(2000);
                $(".skillSet4").show(2000);
                $(".skillSet5").hide(2000);
            });
            $(".person5").on("click", function(event){
                $(".skillSet1").hide(2000);
                $(".skillSet2").hide(2000);
                $(".skillSet3").hide(2000);
                $(".skillSet4").hide(2000);
                $(".skillSet5").show(2000);
            });
        }
        //function carousel() {
        //    var leftArrow = $(".imgarr1"");
        //    var rightArrow = $(".imgarr2");
        //
        //    var person1 = $(".Hubert");
        //    var person2 = $(".Maria");
        //    var person3 = $(".Andrzej");
        //    var person4 = $(".Piotr");
        //    var person5 = $(".Kasia");
        //
        //    var skillset1 = $(".Skills");
        //    var skillset2 = $(".personTwoSkills");
        //    var skillset3 = $(".personThreeSkills");
        //
        //    var allPersons = $(".allItems");
        //
        //    rightArrow.on("click", function(event){
        //
        //        event.preventDefault();
        //        var people = $(".person");
        //
        //        people.eq(2).clone(true).prependTo(allPersons);
        //        people.eq(2).remove();
        //
        //        if(people.eq(0).hasClass("person1")) {
        //            skillset2.hide(500);
        //            skillset3.hide(500);
        //            skillset1.show(500);
        //        } else if (people.eq(0).hasClass("person2")) {
        //            skillset1.hide(500);
        //            skillset3.hide(500);
        //            skillset2.show(500);
        //        } else if (people.eq(0).hasClass("person3")) {
        //            skillset1.hide(500);
        //            skillset2.hide(500);
        //            skillset3.show(500);
        //        }
        //
        //    });
        //
        //    leftArrow.on("click", function(event){
        //
        //        event.preventDefault();
        //        var people = $(".person");
        //
        //        people.eq(0).clone(true).appendTo(allPersons);
        //        people.eq(0).remove();
        //
        //        if(people.eq(2).hasClass("person1")) {
        //            skillset2.hide(500);
        //            skillset3.hide(500);
        //            skillset1.show(500);
        //        } else if (people.eq(2).hasClass("person2")) {
        //            skillset1.hide(500);
        //            skillset3.hide(500);
        //            skillset2.show(500);
        //        } else if (people.eq(2).hasClass("person3")) {
        //            skillset1.hide(500);
        //            skillset2.hide(500);
        //            skillset3.show(500);
        //        }
        //
        //    });
        //
        //}
        //function popUp() {
        //
        //    var photo1 = $(".example1 .tour-caption");
        //    var photo2 = $(".example2 .tour-caption");
        //    var photo3 = $(".example3 .tour-caption");
        //    var photo4 = $(".example4 .tour-caption");
        //    var photo5 = $(".example5 .tour-caption");
        //    var photo6 = $(".example6 .tour-caption");
        //
        //    //var close = $(".toHome");
        //    photo1.on("click", function () {
        //        $(".portfolioimages").css("position", "relative");
        //    });
        //    buttonClose.on("click", function (event) {
        //        event.preventDefault();
        //        $(".overlay1").css("display", "none");
        //    });
        //    photo2.on("click", function () {
        //        $(".overlay2").css("display", "block");
        //    });
        //    buttonClose.on("click", function (event) {
        //        event.preventDefault();
        //        $(".overlay2").css("display", "none");
        //    });
        //    photo3.on("click", function () {
        //        $(".overlay3").css("display", "block");
        //    });
        //    buttonClose.on("click", function (event) {
        //        event.preventDefault();
        //        $(".overlay3").css("display", "none");
        //    });
        //    photo4.on("click", function () {
        //        $(".overlay4").css("display", "block");
        //    });
        //    buttonClose.on("click", function (event) {
        //        event.preventDefault();
        //        $(".overlay4").css("display", "none");
        //    });
        //    photo5.on("click", function () {
        //        $(".overlay5").css("display", "block");
        //    });
        //    buttonClose.on("click", function (event) {
        //        event.preventDefault();
        //        $(".overlay5").css("display", "none");
        //    });
        //    photo6.on("click", function () {
        //        $(".overlay6").css("display", "block");
        //    });
        //    buttonClose.on("click", function (event) {
        //        event.preventDefault();
        //        $(".overlay6").css("display", "none");
        //    });
        //}
        return {
            init: init ,
            scrollPage: scrollPage,
            stickyMenu: stickyMenu,
            portfolioChoose: portfolioChoose,
            bxslider: bxslider,
            owlCar: owlCar,
            displaySkills: displaySkills
            //popUp: popUp
        };
    };


    var app = new Application();
    app.init();
    app.scrollPage();
    app.stickyMenu();
    app.portfolioChoose();
    app.bxslider();
    app.owlCar();
    app.displaySkills();
    //app.popUp();
});






/*

 $(function(){
 $('#left').mouseover(
 function(){ $(this).hide()}
 );
 $('#left').mouseleave(
 function(){ $(this).show() }
 );
 $('#right').mouseover(
 function(){ $(this).hide() }
 );
 $('#right').mouseleave(
 function(){ $(this).show() }
 )
 });

 */