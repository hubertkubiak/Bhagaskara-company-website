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