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
        return {
            init: init ,
            scrollPage: scrollPage,
            stickyMenu: stickyMenu,
            portfolioChoose: portfolioChoose,
            bxslider: bxslider
        };
    };


    var app = new Application();
    app.init();
    app.scrollPage();
    app.stickyMenu();
    app.portfolioChoose();
    app.bxslider();
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