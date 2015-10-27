/**
 * Created by Hubert on 2015-10-21.
 */
$(function(){

var Application = function(){
       function init() {
           console.log("init");
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
           var toTop = $(".totopbottom");
           toTop.on("click", function(event){
               $('html,body').animate({
                   scrollTop:$("#top").offset().top
               }, 1000);
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
           stickyMenu: stickyMenu
       };
};


var app = new Application();
    app.init();
    app.scrollPage();
    app.stickyMenu();
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