/**
 * Created by Hubert on 2015-10-21.
 */
$(function(){

var Application = function(){
       function init() {
           console.log("init");
       }
       function scrollPage(){
           console.log("scrolling");


       }
       return {
           init: init ,
           scrollPage: scrollPage,
           kot: 2
       };
};


var app = new Application();
app.init();
});




$(function(){
    var menu = $(".navbar");
    var sections = $(".sec");
    var links = $(".navbar .menu a").not(document.getElementById("notblog"));
    var lastMenuPositionFromTop = 0;
    var menuHeight = menu.height();

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
});


$('a[href*=#navbar]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
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